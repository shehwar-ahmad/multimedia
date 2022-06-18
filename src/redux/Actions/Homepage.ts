import { useDispatch } from "react-redux";
import { NUMBER_INCREMENT } from "../Constants/AppConstants";

export const incrementNumber = () => {
  const dispatch = useDispatch();

  dispatch({ type: NUMBER_INCREMENT, payload: 10 });
};
