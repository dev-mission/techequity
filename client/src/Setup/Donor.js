import { useAuthContext } from "../AuthContext";

function Donor() {
  const { user } = useAuthContext();

  return (
    <main className="container">
    <h1>Welcome, {user && user.firstName}! (Donor)</h1>

    </main>
  );
}
export default Donor;
//For Andres