import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom"
import { Login } from './pages/Auth/Login.tsx';
import { SignUp } from './pages/Auth/SignUp.tsx';
import { PrivateRoute } from './routes/PrivateRoute.tsx';
import { Dashboard } from './pages/Admin/Dashboard.tsx';
import { ManageTasks } from './pages/Admin/ManageTasks.tsx';
import { CreateTask } from './pages/Admin/CreateTask.tsx';
import { ManageUsers } from './pages/Admin/ManageUsers.tsx';
import { UserDashboard } from './pages/User/UserDashboard.tsx';
import { MyTasks } from './pages/User/MyTasks.tsx';
import { ViewTaskDetail } from './pages/User/ViewTaskDetail.tsx';


const App = () => {


  return(
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login /> }/>
          <Route path="/signUp" element={<SignUp /> }/>

          //admin

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/admin/dashboard' element={<Dashboard />}/>
            <Route path='/admin/tasks' element={<ManageTasks />}/>
            <Route path='/admin/create-task' element={<CreateTask />}/>
            <Route path='/admin/users' element={<ManageUsers />}/>
          </Route>
          

          //user
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path='/user/dashboard' element={<UserDashboard />}/>
            <Route path='/user/my-tasks' element={<MyTasks />}/>
            <Route path='/user/task-detail/:id' element={<ViewTaskDetail />}/>
          </Route>
        </Routes>

      </Router>

    </div>
  )
}

export default App
