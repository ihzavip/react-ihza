import Login from "./pages/login";
import MainPage from "./pages/mainPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Other routes */}
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={MainPage} />
      </Routes>
    </>
  );
}

export default App;
