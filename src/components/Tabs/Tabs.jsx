import { useState } from "react";
import css from "./Tabs.module.css";

const Tabs = ({ setActiveTab }) => {
  const [currentTab, setCurrentTab] = useState("features");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setActiveTab(tab);
  };

  return (
    <div className={css.tabsContainer}>
      <button
        className={`${css.tabButton} ${
          currentTab === "features" ? css.active : ""
        }`}
        onClick={() => handleTabClick("features")}
      >
        Features
      </button>
      <button
        className={`${css.tabButton} ${
          currentTab === "reviews" ? css.active : ""
        }`}
        onClick={() => handleTabClick("reviews")}
      >
        Reviews
      </button>
    </div>
  );
};

export default Tabs;
