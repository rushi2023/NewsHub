import Heder from "../../LEYOUT/Heder";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import classes from "./login.module.css";

import {  useState } from "react/cjs/react.development";
import { useUserAuth } from "../../contex/Authcontex";
import { useNavigate } from "react-router";

const Login = ()=>{

const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [password, setPassword] = useState("");
const { logIn } = useUserAuth();
let navigate = useNavigate();
const LoginHandler = async (e) => {
  e.preventDefault();
  setError("");
  try {
    await logIn(email, password);
  
    navigate("/home");
  } catch (err) {
    setError(err.message);
  }
};

    return (
      <>
        <Heder />
        <div className={classes.body}>
          <div class={classes.grid}>
            <form
              onSubmit={LoginHandler}
              className={`${classes.form} ${classes.login}`}
            >
              {error && <p>{error}</p>}
              <div className={classes.form__field}>
                <label htmlFor={classes.login__username}>
                  <BiUserCircle size={30} />
                  <span className={classes.hidden}>Username</span>
                </label>
                <input
                  autoComplete="username"
                  id="login__username"
                  type="text"
                  name="username"
                  onChange={(val) => setEmail(val.target.value)}
                  className={classes.form__input}
                  placeholder="Username"
                  required
                />
              </div>

              <div className={classes.form__field}>
                <label htmlFor="login__password">
                  <RiLockPasswordLine size={30} />
                  <span className={classes.hidden}>Password</span>
                </label>
                <input
                  id="login__password"
                  type="password"
                  name="password"
                  onChange={(val) => setPassword(val.target.value)}
                  className={classes.form__input}
                  placeholder="Password"
                  required
                />
              </div>

              <div className={classes.form__field}>
                <input type="submit" value="Sign In" />
              </div>
            </form>

            <p className={classes.text__center}>
              Not a member?{" "}
              <a href="#/registration" className={classes.a}>
                Sign up now
              </a>{" "}
              <svg className={classes.icon}></svg>
            </p>
          </div>
        </div>
      </>
    );
}

export default Login;