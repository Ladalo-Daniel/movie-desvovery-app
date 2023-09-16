import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MovieDetailPage from "./pages/moviedetail/MovieDetailPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
       <Route path="/" exact element={ <Home />} />
       <Route path="/movies/:id" element={<MovieDetailPage />} />
       <Route element={<ErrorPage />} />
    </Route>
  ))
    return (
      <RouterProvider router={router} />
    );
}

export default App;
