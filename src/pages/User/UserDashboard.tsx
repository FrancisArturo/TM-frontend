import { useUserAuth } from "../../hooks/useUserAuth"

export const UserDashboard : React.FC = () => {
  useUserAuth();
  return (
    <div>UserDashboard</div>
  )
};
