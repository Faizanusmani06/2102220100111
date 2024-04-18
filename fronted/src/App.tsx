import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import Layout from "./layout/Layout";




function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route
            path="/"
            element={
              <Layout>
                <h1>Home</h1>
              </Layout>
            }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
