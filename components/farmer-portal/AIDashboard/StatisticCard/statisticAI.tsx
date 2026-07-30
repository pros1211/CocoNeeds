import React from "react";
import StatCard from "./statCard";

import { dataCards } from "./statData";
const StatisticAI = () => {
  return (
    <section
      className="
        grid
        grid-cols-1

        sm:grid-cols-2

        xl:grid-cols-4

        gap-5
      "
    >
      {dataCards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </section>
  );
};

export default StatisticAI;
