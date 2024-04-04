import React from "react"
import { FaBars } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
	return (
		<>
			<div className="flex flex-row">
				<div className="w-3/12 bg-indigo-300 h-dvh">
					<div className="flex flex-col">
						<Link to="/addStudent">Add student</Link>
						<Link to="/studentList">Student List</Link>
					</div>
				</div>
				<div className="w-9/12">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Dashboard
