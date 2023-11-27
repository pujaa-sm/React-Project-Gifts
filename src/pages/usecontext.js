import { createContext } from "react";
import Home from "./Home";


export const MyContext = createContext();
function Usecontextdemo() {
  return (
    <MyContext.Provider value={"hello"}>
      <Home/>
    </MyContext.Provider>
  );
}
export default Usecontextdemo;