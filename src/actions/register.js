import { browserHistory } from "index";
import { requestHandler } from "utils/requestHandler";
import { toast } from "react-toastify";

export function register(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/register",
      data
    };

    const cb = (response) => {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userId", response.data.id)
      browserHistory.push("/");
      toast.success(response.data.message);
    }
    requestHandler({options, cb})
  };
}
