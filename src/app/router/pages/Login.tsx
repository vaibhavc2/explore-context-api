import { useState, useContext, MouseEvent } from "react";
import UserContext from "../../../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useContext(UserContext);

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div>
        <h2 className="m-10 text-center">Login Page</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-600"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-600"
          required
        />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
