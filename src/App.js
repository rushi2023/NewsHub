import React from "react";
import News from "./components/News";
import "./app.css";
import { Route, Routes} from "react-router-dom";
import Login from "./pages/login/login";
import Registration from "./pages/Registration/Registration";
import { UserAuthContextProvider } from "./contex/Authcontex";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/landingpage/HomePage";
import Profile from "./pages/profile 10.35.46 PM/Profile";








function App() {


  
  return (
    <main>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <News category="general" country="In" />
              </ProtectedRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route
            path="/breakingnews"
            element={
              <ProtectedRoute>
                <News category="business" country="In" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sports"
            element={
              <ProtectedRoute>
                <News category="sports" country="In" />
              </ProtectedRoute>
            }
          />

          <Route
            path="/technology"
            element={
              <ProtectedRoute>
                <News category="technology" country="In" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </main>
  );
}

export default App;
