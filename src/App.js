import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Router basename="/food_project">
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:name" element={<Category />} ></Route>
            <Route path="category/:name/meal/:id" element={<Recipe />} ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
