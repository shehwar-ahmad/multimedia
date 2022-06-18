import { useDispatch } from "react-redux";
import { CURRENT_USER } from "../Constants/AppConstants";

type User = {
  email: string;
  loginTime: Date;
};

export const setCurrentUser = ({ email, loginTime }: User) => {
  return (dispatch: any) => {
    dispatch({ type: CURRENT_USER, payload: { email, loginTime } });
  };
};
