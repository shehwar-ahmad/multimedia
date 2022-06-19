import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Login.module.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/Actions/Login";
import { AppDispatch } from "../../redux/Store/Store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormControl from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 280,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function Login({bgcolor='black'}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [formField, setFormField] = useState({ email: "", password: "" });

  const submitHandler = () => {
    const current = new Date();
    dispatch(setCurrentUser({ email: formField.email, loginTime: current }));
    navigate("/profile");
  };

  const formChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setFormField((cur) => {
      return {
        ...cur,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <Button
        style={{
          color: "black",
          fontFamily: "100",
          fontSize: "12px",
        }}
        className={styles.loginBtn}
        onClick={handleOpen}
      >
        Log in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            LOGIN
          </Typography>
          <form onSubmit={submitHandler}>
            <div className={styles.formFields}>
              <TextField
                type="email"
                required
                id="email"
                label="EMAIL"
                size="small"
                variant="standard"
                name="email"
                className={styles.emailField}
                value={formField.email}
                onChange={formChangeHandler}
                inputProps={{
                  style: {
                    fontSize: 13,
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 12,
                  },
                }}
              />
              <TextField
                type="password"
                required
                id="password"
                label="PASSWORD"
                size="small"
                variant="standard"
                name="password"
                className={styles.passwordField}
                value={formField.password}
                onChange={formChangeHandler}
                inputProps={{
                  style: {
                    fontSize: 13,
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 12,
                  },
                }}
              />
            </div>

            <p className={styles.forgotPassword}>Forgot your password?</p>
            <Button
              style={{
                backgroundColor: bgcolor,
                color: "white",
              }}
              className={styles.submitBtn}
              // onClick={submitHandler}
              type="submit"
            >
              LOG IN
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
