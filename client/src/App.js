import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Quote from "./pages/Quote";
import Profile from "./pages/Account";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contactus" element={<ContactUs />} />
      {/* Need to implement Login detection */}
      <Route path="account" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="quote" element={<Quote />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
