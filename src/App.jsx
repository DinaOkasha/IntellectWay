import "./App.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import About from "./components/About/About";
// import About from "./components/About/About";
// import Hero from "./components/Hero/Hero";
// import Swip from "./Swip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
