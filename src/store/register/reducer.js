import { countries } from "../../utils/countries";
import * as actions from "./types";

const initialState = {
  details: {
    parentName: "",
    parentEmail: "",
    parentNumber: "",
    parentCountryCode:countries[0],
    studentName: "",
    studentGrade: "",
    hasLaptop: true,
  },
};

export default function (state = initialState, action) {
  const child = action.child;
  switch (action.type) {
    case actions.REGISTER_USER_SUCCESS:
      return action.user;
    case actions.UPDATE_REGISTER_FORM:
      return {
        ...state,
        details: {
          ...state.details,
          [action.id]: action.value,
        },
      };
    case actions.CLEAR_REGISTER_FORM:
      return initialState;
    default:
      return state;
  }
}
