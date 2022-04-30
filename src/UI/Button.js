import React, { Fragment } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contex/Authcontex';
import classes from './Button.module.css'
const Button = ()=>{
  const {user} = useUserAuth();
  const { logOut } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
      <Fragment>
        {user ? (
          <button onClick={handleLogout} className={classes.button}>
            Logout
          </button>
        ) : (
          <button className={classes.button}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login / Register
            </Link>
          </button>
        )}
      </Fragment>
    );
}

export default Button;