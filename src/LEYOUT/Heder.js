import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contex/Authcontex";
import Button from "../UI/Button";
import classes from "./Heder.module.css";
import { BiNews } from "react-icons/bi";
const Heder = () => {

  const { user,fetch} = useUserAuth();
const dataFetch = async ()=>{
const res =  await fetch();
console.log(res);
}
  return (
    <>
      <header className={classes.header}>
        <div className={classes.head}>
          <div className={classes.newsName}>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <h1>
                <BiNews />
                News Hub
              </h1>
            </Link>
          </div>
          {user ? (
            <>
              <div className={classes.list}>
                <ul>
                  <li>
                    <Link
                      to="/breakingnews"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Breaking News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sports"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Sports News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/technology"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Letest Technology
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.welcom}>
                <Link
                  to="/profile"
                  onClick={dataFetch}
                  style={{ textDecoration: "none", color: "white"}}
                >
                  Profile
                </Link>
              </div>
            </>
          ) : null}
        </div>

        <div className={classes.button}>
          <Button />
        </div>
      </header>
      <div className={classes["main-image"]}></div>
    </>
  );
};

export default Heder;
