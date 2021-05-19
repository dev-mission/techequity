import { useAuthContext } from "../AuthContext";

function Donor() {
  const { user } = useAuthContext();

  return (
    <h1>Welcome, {user && user.firstName}! (Donor)</h1>
  );
}
export default Donor;
