import classes from "./Profile.module.css";

const Profile =  () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="user"
            width="100"
          />

          <h4>R</h4>
        </div>
        <div className={classes.right}>
          <div className={classes.info}>
            <h3>Information</h3>
            <div className={classes.info_data}>
              <div className={classes.data}>
                <h4>Email</h4>
                <p>r</p>
              </div>
              <div className={classes.data}>
                <h4>Birth date</h4>
                <p>R</p>
              </div>
            </div>
          </div>

          <div className={classes.projects}>
            <h3>Adress</h3>
            <div className={classes.projects_data}>
              <div className={classes.data}>
                <h4>Recent</h4>
                <p>R</p>
              </div>
              <div className={classes.data}>
                <h4>Course Done</h4>

                <p>1</p>

                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
