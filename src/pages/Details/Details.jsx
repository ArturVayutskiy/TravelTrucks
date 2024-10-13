import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/slice/camperSlice";
import Loader from "../../components/Loader/Loader";
import css from "./Details.module.css";
import CamperDetails from "../../components/DetailsPageComponents/CamperDetails/CamperDetails";
import BookForm from "../../components/DetailsPageComponents/BookForm/BookForm";
import Tabs from "../../components/Tabs/Tabs";
import DetailsFeature from "../../components/DetailsPageComponents/DetailsFeatures/DetailsFeatures";
import DetailsReviews from "../../components/DetailsPageComponents/DetailsReviews/DetailsReviews";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("features");

  const {
    selectedCamper: camper,
    status,
    error,
  } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const renderContent = () => {
    if (status === "loading") return <Loader />;
    if (status === "failed") return <div>Error: {error}</div>;
    if (!camper) return <p>Camper not found!</p>;

    return (
      <div className={css.detailsContainer}>
        <CamperDetails camper={camper} />
        <Tabs setActiveTab={setActiveTab} />
        <div className={css.tabContent}>
          {activeTab === "features" && <DetailsFeature camper={camper} />}
          {activeTab === "reviews" && (
            <DetailsReviews reviews={camper.reviews} />
          )}
          <BookForm />
        </div>
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default Details;
