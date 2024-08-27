import TopBar from "./components/TopBar";
import { Outlet } from "react-router";
export default function App() {
  return (
    <>
      <TopBar></TopBar>
      <Outlet></Outlet>
    </>
  );
}
