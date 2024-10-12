import { useState } from "react";
import css from "./Tabs.module.css";
import DetailsFeature from "../DetailsPageComponents/DetailsFeatures/DetailsFeatures";
import DetailsReviews from "../DetailsPageComponents/DetailsReviews/DetailsReviews";

const Tabs = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className={css.tabsContainer}>
      <div className={css.tabHeaders}>
        <button
          className={activeTab === "features" ? "active" : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.tabContent}>
        {activeTab === "features" && <DetailsFeature camper={camper} />}
        {activeTab === "reviews" && <DetailsReviews reviews={camper.reviews} />}
      </div>
    </div>
  );
};

export default Tabs;
