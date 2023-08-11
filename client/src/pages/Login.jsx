import { useState } from "react";
import axios from "axios";
import styles from './login.module.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [uid, setUid] = useState("");
  const handleNewAccount = () => {
    // Implement your logic for creating a new account here
    setLogin(!login);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5001/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setUid(uid);
      window.location.pathname = "/home";
      // setIsAuthenticated(true);
      // setLoading(false);
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
      // setIsAuthenticated(false);
      // setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5001/api/signUp`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setUid(uid);
      window.location.pathname = "/home";
      // setIsAuthenticated(true);
      // setLoading(false);
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
      // setIsAuthenticated(false);
      // setLoading(false);
    }
  };
  return (
    <div className={styles.login}>
      {login ? (
        <div>
          <form onSubmit={handleLogin}>
            <div className={styles.username}>
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className={styles.password}>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Submit -&gt;
            </button>
            {/* <h4 style={{ marginTop: "1rem" }}>Or</h4/> */}
          </form>
          <p>
            New to this platform?{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={handleNewAccount}
            >
              Create New Account
            </span>
          </p>
        </div>
      ) : (
        <div className={styles.signup}>
          <form>
            <div className={styles.signIn}>
              <label htmlFor="Email" className={styles.username}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className={styles.password}>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary" onClick={handleSignUp}>
              Next -&gt;
            </button>
            {/* <h4 style={{ marginTop: "1rem" }}>Or</h4> */}
          </form>
          <p>
            Already a User?{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={handleNewAccount}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
