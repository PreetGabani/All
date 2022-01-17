import { React } from "react";
// import { createContext } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/component/login";
// import Register from "../src/component/register";
// import Home from "../src/component/home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "../src/component/navbar";
// import Record from "../src/component/record";
// import UseEffect from "./sample/UseEffect"
// import UseReff from "../src/sample/UseRef"
// import CO from "../src/sample/co1"

// import ReducerHome1 from "./ReactRedux/ReducerHome";
// import ProjectHomeDisplay from "./Project/ProjectHome";
// import Add from "../src/Project/add"
// import FormikValidation from "../src/Formik/Formik"

// import { ToastContainer } from "react-bootstrap";

import DisplayHome from "../src/Project2/Home"
import AddData from "../src/Project2/AddData"
import EditData from "./Project2/EditData";
import ClassComponent from "./classComponent";


// const Name1 = createContext();
// const Name2 = createContext();

const App = () => {
  return (
    <>
    {/* <ClassComponent/> */}
      {/* <FormikValidation/> */}

      {/* <ReducerHome1 /> */}

      {/* 
    <Name1.Provider value={"Preet"}>
      <Name2.Provider value={"Gabani"}>
      <CO />
      </Name2.Provider>
    </Name1.Provider> */}


      {/* <UseReff /> */}

      {/* <UseEffect /> */}

      <BrowserRouter>
      {/* <Login/> */}

        {/* <Navbar />
      <ToastContainer /> */}
        <Switch>
        <Route exact path="/" component={DisplayHome} />
          <Route exact path="/AddData" component={AddData} />
          <Route exact path="/EditData/:id" component={EditData} />
          {/* <Route exact path="/" component={ProjectHomeDisplay} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login/:par1/:par2" component={Login} />
        <Route exact path="/record" component={Record} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
// export {Name1,Name2};