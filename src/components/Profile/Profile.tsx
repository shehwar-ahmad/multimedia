import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store/Store";
import Paper from "@mui/material/Paper";
import styles from "./Profile.module.css";

function Profile() {
  const user = useSelector((state: RootState) => state.login.user);
  console.log(user.email);

  return (
    <div className={styles.profileCardContainer}>
      <Paper className={styles.profileCard} elevation={3}>
        {user.email == null && <p>There are currently no user Logged In</p>}
        {user.email != null && <p>Currently Logged In User: {user.email}</p>}
      </Paper>
    </div>
  );
}

export default Profile;
