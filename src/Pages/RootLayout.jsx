import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
