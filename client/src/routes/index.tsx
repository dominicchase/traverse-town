import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export const RouterConfig = () => {
  const { user, logout } = useAuth();

  if (!user) {
    <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route
          index
          element={
            <>
              <button onClick={logout}>Log out</button>
            </>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

function LayoutWithNavbar() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
