import io from "socket.io-client";
import URL from "./baseURL";
const socket = io(URL);

export default socket;
