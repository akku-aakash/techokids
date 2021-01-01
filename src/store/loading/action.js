import * as actions from "./types";

export function beginAjaxCall() {
  return {
    type: actions.BEGIN_AJAX_CALL,
  };
}

export function endAjaxCall() {
  return {
    type: actions.END_AJAX_CALL,
  };
}
