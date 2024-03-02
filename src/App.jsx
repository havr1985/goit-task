import { lazy } from "react"
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";


const Home = lazy(() => import('./pages/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage'));
const Favorite = lazy(() => import('./pages/FavoritePage'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
