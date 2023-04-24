import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE__API_URL;
  axios.defaults.withCredentials = true;

  console.log({env: import.meta.env.VITE__API_URL})

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
