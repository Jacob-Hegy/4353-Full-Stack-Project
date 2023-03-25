import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Quote from "./pages/Quote";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import { UseContextProvider } from "./context/UserContext";
import axios from "axios";
import OrderHistory from "./pages/OrderHistory";

axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* Need to implement Login detection */}
      <Route path="account" element={<Account />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="quotes" element={<OrderHistory />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="quote" element={<Quote />} />
    </Route>
  )
);

function App() {
  return (
    <UseContextProvider>
      <RouterProvider router={router} />
    </UseContextProvider>
  );
}

export default App;
