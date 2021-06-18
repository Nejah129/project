import { useDispatch, useSelector } from "react-redux";
import { useState, React } from "react";
import { login } from "../redux/actions/actions";
import { Redirect } from "react-router";
const Login = () => {
  const { loading, token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const log = () => dispatch(login({ email, password }));

  const handelSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <div>
      {loading ? 
        <h1>loading...</h1>
        :token ? <Redirect to ='/profil'/> 
      :
      (
        <div>
          <h2>Login</h2>
          <br />
          <form onSubmit={handelSubmit}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input
              type="text"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" onClick={log}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Login;
