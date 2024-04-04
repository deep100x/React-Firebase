import React from "react"
import { getDatabase, ref, set } from "firebase/database"
import app from "../Firebase.js"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

const AddStudent = () => {
	const initialValues = {
		name: "",
		admNo: "",
		password: "",
	}
	const navigate = useNavigate()

	const validationSchema = Yup.object().shape({
		admNo: Yup.string().required("Admission No. is required"),
		name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters long"),
		password: Yup.string().required("Password is required").min(6, "Password must be contain 6 characters"),
	})

	const handleSubmit = (values, { resetForm, setSubmitting }) => {
		resetForm()
		setSubmitting(false)

		const db = getDatabase()
		set(ref(db, "student/" + values.admNo), {
			userName: values.name,
			password: values.password,
		})
			.then((res) => {
				navigate("/studentList")
			})
			.catch((err) => {
				console.log("err")
			})
		console.log(values)
	}

	return (
		<div className="pt-10">
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Form className="max-w-md mx-auto">
						<div className="mb-4">
							<Field
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="number"
								name="admNo"
								placeholder="Student Admission No."
							/>
							<ErrorMessage name="admNo" component="div" className="text-red-500 text-xs italic" />
						</div>
						<div className="mb-4">
							<Field
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								name="name"
								placeholder="Student name"
							/>
							<ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
						</div>
						<div className="mb-4">
							<Field
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="password"
								name="password"
								placeholder="Password"
							/>
							<ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
						</div>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isSubmitting}>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default AddStudent
