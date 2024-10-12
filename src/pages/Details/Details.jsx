import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/slice/camperSlice";
import Loader from "../../components/Loader/Loader";
import css from "./Details.module.css";
import CamperDetails from "../../components/DetailsPageComponents/CamperDetails/CamperDetails";
import Tabs from "../../components/Tabs/Tabs";
import BookForm from "../../components/DetailsPageComponents/BookForm/BookForm";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedCamper: camper,
    status,
    error,
  } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!camper) {
    return <p>Camper is not found!</p>;
  }

  return (
    <div className={css.detailsContainer}>
      <CamperDetails camper={camper} />
      <div className={css.reviewsContainer}>
        <Tabs camper={camper} />
        <BookForm />
      </div>
    </div>
  );
};

export default Details;
