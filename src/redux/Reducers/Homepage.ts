import { NUMBER_INCREMENT } from "../Constants/AppConstants";

const INIT_STATE = {
  number: 0,
};

const homepageReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case NUMBER_INCREMENT:
      return {
        ...state,
        number: action.payload,
      };

    default:
      return state;
  }
};

export default homepageReducer;
