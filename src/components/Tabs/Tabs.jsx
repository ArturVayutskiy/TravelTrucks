import { useState } from "react";
import css from "./Tabs.module.css";

const Tabs = ({ setActiveTab }) => {
  const [activeTab, setTab] = useState("features");

  const handleTabClick = (tab) => {
    setTab(tab);
    setActiveTab(tab);
  };

  return (
    <div className={css.tabsContainer}>
      <button
        className={`${css.tabButton} ${
          activeTab === "features" ? css.active : ""
        }`}
        onClick={() => handleTabClick("features")}
      >
        Features
      </button>
      <button
        className={`${css.tabButton} ${
          activeTab === "reviews" ? css.active : ""
        }`}
        onClick={() => handleTabClick("reviews")}
      >
        Reviews
      </button>
    </div>
  );
};

export default Tabs;
