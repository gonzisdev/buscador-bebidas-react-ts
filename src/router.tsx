import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { IndexPage } from "./views/IndexPage";
import { FavoritesPage } from "./views/FavoritesPage";


export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route index element={<IndexPage/>} />
                <Route path="/favoritos" element={<FavoritesPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};
