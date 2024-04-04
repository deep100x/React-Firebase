import React, { useEffect, useState } from "react"
import { getDatabase, onValue, ref, remove } from "firebase/database"
import app from "../Firebase"
import { useNavigate } from "react-router-dom"

const StudentList = () => {
	const [studentData, setStudentData] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		const db = getDatabase(app)
		const studentRef = ref(db, "student")
		onValue(studentRef, (snapshot) => {
			const data = snapshot.val()
			setStudentData(data)
		})
	}, [])

	const deleteData = (key) => {
		const db = getDatabase(app)
		const studentRef = ref(db, "student/" + key)
		remove(studentRef)
	}

	const updateData = (key) => {
		const db = getDatabase(app)
		const studentRef = ref(db, "student/" + key)
		remove(studentRef)
	}

	return (
		<div>
			<h1>StudentList</h1>
			{studentData && (
				<div>
					<table className="table-fixed overflow-auto">
						<thead>
							<tr>
								<th className="w-[200px]">Name</th>
								<th className="w-[200px]">Password</th>
								<th className="w-[200px]">Date</th>
								<th className="w-[200px]">Actions</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(studentData).map(([key, value]) => (
								<tr key={key}>
									<td className="border-2">{value.userName}</td>
									<td className="border-2">{value.password}</td>
									<td className="border-2">{value.createdAt ? new Date(value.createdAt).toLocaleString() : "N/A"}</td>
									<td className="border-2 flex justify-center items-center">
										<button
											onClick={() => {
												navigate("/updateStudent", { state: [key, value] })
											}}
											className="text-indigo-500"
										>
											Update
										</button>
										<button
											onClick={() => {
												deleteData(key)
											}}
											className="text-red-500"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default StudentList
