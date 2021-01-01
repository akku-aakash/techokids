import * as actions from "./types";
// import { CommunicationSettingType, EditPayload } from "../../components/screens/AboutUs/type";

export function registerUsers(payload) {
  return {
    type: actions.REGISTER_USERS,
    payload,
  };
}


export function registerUserRequest(){
  return {
    type: actions.REGISTER_USER_REQUEST,
  };
}

export function clearForm(){
  return {
    type: actions.CLEAR_REGISTER_FORM,
  };
}

export function registerUsersSuccess(user){
  return {
    type: actions.REGISTER_USER_SUCCESS,
    user
  };
}

export function updateForm(id,value){
  return {
    type: actions.UPDATE_REGISTER_FORM,
    id,
    value
  };
}


