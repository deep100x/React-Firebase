import React, { useEffect, useState } from "react"
import { getDatabase, onValue, ref, remove } from "firebase/database"
import app from "../Firebase"

const StudentList = () => {
	const [studentData, setStudentData] = useState(null)
	useEffect(() => {
		const db = getDatabase(app)
		const studentRef = ref(db, "student")
		onValue(studentRef, (snapshot) => {
			const data = snapshot.val()
			console.log(data)
			setStudentData(data)
		})
	}, [])

	const deleteData = (key) => {
		const db = getDatabase(app)
		const studentRef = ref(db, "student/" + key)
		remove(studentRef)
	}

	return (
		<div>
			<h1>StudentList</h1>
			{studentData && (
				<div>
					{Object.entries(studentData).map(([key, value]) => {
						return (
							<div key={key} className="flex gap-5">
								<p>Name : {value.userName}</p>
								<p>Password : {value.password}</p>
								<button
									onClick={() => {
										deleteData(key)
									}}
									className="text-red-500"
								>
									delete
								</button>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default StudentList
