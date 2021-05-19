import { useAuthContext } from "../AuthContext";

function ProgramDirector() {
  const { user } = useAuthContext();

  return (
    <h1>Welcome, {user && user.firstName}! Program Director</h1>
  );
}
export default ProgramDirector;
