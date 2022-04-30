import Heder from "../../LEYOUT/Heder";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai';
import classes from "./Registration.module.css";

import { useState } from 'react'
import {useUserAuth} from '../../contex/Authcontex'
import { useNavigate } from "react-router";

const Registration = () => {


  const [error, setError] = useState("");

const { signUp, creatUserDB,fetch,udata} = useUserAuth();
const [userData, setUserData] = useState({
  Email: "",
 name:"",
  address: "",
  password: "",
  username:""
});

let name,value;


const postuserdata =(event)=>{
name=event.target.name;
value = event.target.value;

setUserData({...userData,[name]:value})
}



let navigate = useNavigate();
const signupHandler = async (e) => {
  e.preventDefault();

  setError("");
  try {
    
    await signUp(userData.Email, userData.password);
    await creatUserDB(
      userData.Email,
      userData.password,
      userData.address,
      userData.name,
      userData.username
    );
    await fetch();
    console.log(udata);
    navigate("/home");

  } catch (err) {
    setError(err.message);
  }
};





// const submitdata = async (event) =>{
//   event.preventDefault();
// const { Email,
//  name,
//   address,
//   password} = userData;
//   const res = await fetch("https://react-82195-default-rtdb.firebaseio.com/newsHub.json  ", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       Email,
//       name,
//       address,
//       password,
//     }),
//   });

//   if(res){
//     alert("Data Stored");
//   }else{
//     alert("Please Enter Data ")
//   }
// }

  return (
    <>
      <Heder />
      <div className={classes.body}>
        <div class={classes.grid}>
          <form
            onSubmit={signupHandler}
            class={`${classes.form} ${classes.login}`}
          >
            {error && <p>{error}</p>}
            <div class={classes.form__field}>
              <label for="registration_Email">
                <AiOutlineMail size={30} />
                <span class={classes.hidden}>EMAIl</span>
              </label>
              <input
                id="registration_Email"
                type="email"
                name="Email"
                class={classes.form__input}
                placeholder="Enter Your Email"
                value={userData.Email}
                onChange={postuserdata}
                required
              />
            </div>
            <div class={classes.form__field}>
              <label for={classes.login__username}>
                <BiUserCircle size={30} />
                <span class={classes.hidden}>Username</span>
              </label>
              <input
                autocomplete="username"
                id="login__username"
                type="text"
                name="username"
                class={classes.form__input}
                onChange={postuserdata}
                placeholder="Username"
                required
              />
            </div>
            <div class={classes.form__field}>
              <label for="registration_Name">
                <BiUserCircle size={30} />
                <span class={classes.hidden}>Name</span>
              </label>
              <input
                id="registration_Name"
                type="text"
                name="name"
                class={classes.form__input}
                placeholder="Enter Your name"
                value={userData.name}
                onChange={postuserdata}
                required
              />
            </div>
            <div class={classes.form__field}>
              <label for="registration_Address">
                <FaAddressCard size={30} />
                <span class={classes.hidden}>ADDRESS</span>
              </label>
              <input
                id="registration_Address"
                type="text"
                name="address"
                class={classes.form__input}
                placeholder="Enter Your Address"
                value={userData.address}
                onChange={postuserdata}
                required
              />
            </div>
            <div class={classes.form__field}>
              <label for="login__password">
                <RiLockPasswordLine size={30} />
                <span class={classes.hidden}>Password</span>
              </label>
              <input
                id="login__password"
                type="password"
                name="password"
                class={classes.form__input}
                placeholder="Password"
                value={userData.password}
                onChange={postuserdata}
                required
              />
            </div>

            <div class={classes.form__field}>
              <input type="submit" value="Sign up" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
