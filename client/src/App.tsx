import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/mainPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Other routes */}
      <Routes>
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/" Component={MainPage} />
      </Routes>
    </>
  );
}

export default App;
