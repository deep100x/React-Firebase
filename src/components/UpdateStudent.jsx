import React, { useState } from "react"
import { getDatabase, ref, set, serverTimestamp } from "firebase/database" // Import serverTimestamp
import app from "../Firebase.js"
import { useNavigate, useLocation } from "react-router-dom"

const AddStudent = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const [userName, setName] = useState(location.state[1].userName)
	const [password, setPassword] = useState(location.state[1].password)
	const [admNo, setAdmNo] = useState(location.state[0])

	const handleSubmit = (event) => {
		event.preventDefault()
		const db = getDatabase(app)
		set(ref(db, "student/" + admNo), {
			userName: userName,
			password: password,
			createdAt: serverTimestamp(),
		})
			.then((res) => {
				navigate("/studentList")
			})
			.catch((err) => {
				console.log("Error:", err)
			})
	}

	return (
		<div className="pt-10">
			<form onSubmit={handleSubmit}>
				<input disabled value={admNo} type="number" onChange={(e) => setAdmNo(e.target.value)} placeholder="Admission no." />
				<input value={userName} type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
				<input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default AddStudent
