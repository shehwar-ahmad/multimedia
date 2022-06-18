import { CURRENT_USER } from "../Constants/AppConstants";

const INIT_STATE = {
  user: {
    email: null,
    loginTime: null,
  },
};

const loginReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        user: {
          email: action.payload.email,
          loginTime: action.payload.loginTime,
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
