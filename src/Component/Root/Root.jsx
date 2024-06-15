import { Outlet } from "react-router-dom";
import Header from "../Heaader/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
