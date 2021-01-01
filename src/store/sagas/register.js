import { put, call, takeEvery, all, fork, select } from "redux-saga/effects";

import { registerUser } from "../../services/register";

import * as actions from "../register/types";
import * as actionCreators from "../register/action";
import notify from "devextreme/ui/notify";

function* registerUserSaga({ payload }) {
  try {
    const { data } = yield call(registerUser, payload);

    const { status, data: user } = data;
    if (status === 1) {
      yield put(actionCreators.registerUsersSuccess(user));
    } else {
      notify({ type: "error", message: "Error while updating settings." });
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchOnRegisterUSer() {
  yield takeEvery(actions.REGISTER_USERS, registerUserSaga);
}

export default function* registerSaga() {
  yield all([fork(watchOnRegisterUSer)]);
}
