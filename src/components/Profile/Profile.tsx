import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (user.username === "" && user.password === "")
    return <div>Please Login first!</div>;
  else return <div>Welcome, {user.username}!</div>;
};

export default Profile;
