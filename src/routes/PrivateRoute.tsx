import { Navigate, Outlet } from 'react-router-dom'

interface Props {
    allowedRoles: string[]
}


export const PrivateRoute : React.FC<Props> = ({allowedRoles}) => {
  
    

//   const isAuthenticated = true; // Replace with actual authentication check
  const userRole = 'admin'; // Replace with actual user role

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />; // Redirect to login if not authenticated
//   }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/Login" replace />; // Redirect if not authorized for the role
  }

  return <Outlet />; // Render the child routes if authorized};

}
