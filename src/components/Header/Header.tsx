import TextField from "@mui/material/TextField";
import styles from './Header.module.css'
import Login from "../Login/Login";


function Header() {



  return (
    <div className={styles.header} style={{ position: "fixed", top: 10, right: 50,color:'white' }}>
      <TextField
        id="search"
        label="SEARCH"
        size="small"
        variant="standard"
        className={styles.search}
        inputProps={{style: {fontSize: 12,fontWeight:"bolder",padding:0,margin:0}}}
        InputLabelProps={{style: {fontSize: 12, fontWeight:"bolder",padding:0,margin:0}}} 
      />
      <Login  />

    </div>
  );
}

export default Header;
