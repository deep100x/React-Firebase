import React, { useEffect, useState } from "react"
import { getDatabase, onValue, ref } from "firebase/database"
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
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default StudentList
