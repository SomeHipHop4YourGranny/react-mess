import axios from "./axios";
import URL from "../baseURL";
export default {
  getAll: username => axios.get(`${URL}api/users/${username}/dialogs`),
  getOne: (username, dialogId) =>
    axios.get(`${URL}api/users/${username}/dialogs/${dialogId}`),
  createDialog: (userId, partners) =>
    axios.post(`${URL}api/users/${userId}/dialogs`, partners),
};
