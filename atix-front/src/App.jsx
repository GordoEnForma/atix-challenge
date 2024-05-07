import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./providers/AuthProvider";
import { TodosProvider } from "./providers/TodoProvider";
import { ProtectedRoute } from "../src/pages/protectedRoutes";
import { TodosPage } from "./pages/TodosPage";

function App() {
  return (
    <AuthProvider>
      <TodosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />} >
              <Route path="/todos" element={<TodosPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* */}

      </TodosProvider>
    </AuthProvider>
  );
}

export default App;
