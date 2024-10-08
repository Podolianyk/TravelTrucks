import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Bars } from "react-loader-spinner";
import css from "./App.module.css";

import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CataloguePage = lazy(() =>
  import("../../pages/CataloguePage/CataloguePage")
);
const DetailPage = lazy(() => import("../../pages/DetailPage/DetailPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const Features = lazy(() => import("../Features/Features.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));

const App = ({}) => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className={css.loader}>
            <Bars
              height="80"
              width="80"
              color="#7277e3"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CataloguePage />} />
          <Route path="/catalog/:id" element={<DetailPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
