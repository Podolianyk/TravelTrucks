import { Route, Routes } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../../pages/HomePage/HomePage";
import CataloguePage from "../../pages/CataloguePage/CataloguePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
// import css from "./App.module.css";

// import Loyaut from "../Loyaut/Loyaut.jsx";

const App = ({}) => {
  return (
    <div>
      {/* <div className={css.loader}>
        <Bars
          height="80"
          width="80"
          color="#7277e3"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div> */}
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CataloguePage />} />
        <Route path="/catalog/:id" element={<DetailPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

// <Loyaut>

// {isLoading && <p>Loading information, please wait...</p>}
// {isError && <p>Oops! There was an error! Try reloading!</p>}
// {trucks.length > 0 && (
//   <CataloguePage locations={uniqueLocation} trucks={trucks} />
// )}
{
  /* {trucks.length > 0 && <DetailPage trucks={trucks} />} */
}

{
  /* <ReservationForm onReservation={handleNewOrder} /> */
}
{
  /* <FilterSidebar locations={uniqueLocation} /> */
}
{
  /* <TrucksList trucks={trucks} /> */
}
{
  /* </Loyaut> */
}
