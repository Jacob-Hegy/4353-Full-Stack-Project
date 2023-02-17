import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contactus" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
