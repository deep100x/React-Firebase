import React from "react"
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<>
			<div className="h-16 bg-indigo-300 w-full">
				<div className="flex justify-center items-center gap-6 h-full">
					<Link to="/addStudent">Add student</Link>
					<Link to="/studentList">Student List</Link>
				</div>
			</div>
			<div className="container mx-auto flex justify-center">
				<Outlet />
			</div>
		</>
	)
}

export default Dashboard
