import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import StudentList from "./components/StudentList"
import AddStudent from "./components/AddStudent"

const myRouter = createBrowserRouter([
	{
		path: "",
		Component: Dashboard,
		children: [
			{ path: "", Component: StudentList },
			{ path: "addStudent", Component: AddStudent },
			{ path: "studentList", Component: StudentList },
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={myRouter} />
		</>
	)
}

export default App
