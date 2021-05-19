import { useAuthContext } from "../AuthContext";

function NonProfit() {
  const { user } = useAuthContext();

  return (
    <h1>Welcome, {user && user.firstName}! Non-Profit</h1>
  );
}
export default NonProfit;
