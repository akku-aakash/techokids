import axios from "../utils/interceptors";

export async function registerUser(payload) {
  return await axios.post("/Email/SendEmail", payload);
}
