import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./details/detail";
import HomePAge from "./homePage/homepage";
import NotFoundPage from "./notFoundPage/notFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePAge></HomePAge>}></Route>
        <Route path="/details/:id" element={<Details></Details>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
