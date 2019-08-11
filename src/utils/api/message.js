import axios from "./axios";
import URL from "../baseURL";
export default {
  getAll: (username, dialogID) =>
    axios.get(`${URL}api/users/${username}/dialogs/${dialogID}/messages`),

  getOne: (username, dialogID, messageId) =>
    axios.get(
      `${URL}api/users/${username}/dialogs/${dialogID}/messages/${messageId}`
    ),
  sendMessage: (username, dialogID, data) => {
    axios.put(`${URL}api/users/${username}/dialogs/${dialogID}`, {
      last_mess: data.text,
    });
    return axios.post(
      `${URL}api/users/${username}/dialogs/${dialogID}/messages`,
      data,
      { withCredentials: true }
    );
  },
};
