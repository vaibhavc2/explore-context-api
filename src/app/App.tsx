import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

import { darkModePreference } from "../scripts";
import UserContextProvider from "../context/UserContextProvider";

function App() {
  darkModePreference();

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
