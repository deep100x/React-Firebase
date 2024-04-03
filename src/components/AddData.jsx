import React from "react"
import { getDatabase, ref, set } from "firebase/database"
import app from "../Firebase.js"

const AddData = () => {
	const addDemoData = (userId, name, phone) => {
		const db = getDatabase(app)
		set(ref(db, "faculty/" + userId), {
			studentName: name,
			phone: phone,
		})
	}

	return (
		<>
			<h1>Add Demo Data</h1>
			<button
				onClick={() => {
					addDemoData(423, "dipak", 123456678)
				}}
			>
				Add Data
			</button>
		</>
	)
}

export default AddData
