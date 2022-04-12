import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Multiplier from "./semi-private-flow/multiplier/multiplier";
import HomeLanguage from "./semi-private-flow/home-page/home-page";
import UserData from "./semi-private-flow/user-data/userdata";
import UserForm from "./semi-private-flow/user-form/userform";
import PrivateRoute from "./semi-private-flow/privatesRoutes/privateroute";
import PrivateLogin from "./semi-private-flow/privatesRoutes/privatelogin/privatelogin";
import Login from "./semi-private-flow/login/login";
import Results from "./semi-private-flow/results/results";
import { UserProvider } from "./semi-private-flow/user-context/usercontext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* <Route path="/multiplier" element={<Multiplier></Multiplier>}></Route> */}
          <Route path="/" element={<HomeLanguage></HomeLanguage>}></Route>
          <Route
            path="/multiplier"
            element={
              <PrivateLogin>
                <Multiplier></Multiplier>
              </PrivateLogin>
            }
          ></Route>
          <Route path="/userdata" element={<UserData></UserData>}></Route>
          <Route
            path="/userform"
            element={
              <PrivateRoute>
                <UserForm></UserForm>
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/results" element={<Results></Results>}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
