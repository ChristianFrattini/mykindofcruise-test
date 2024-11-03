import React from "react";
import { getCruisesdata } from "../api/api";
import CruiseCard from "./CruiseCard";

export default async function Cruises() {
  const cruiseData = await getCruisesdata();

  return (
    <div className={"mx-2"}>
      <h2 className={"font-bold leading-8 text-2xl"}>Popular Cruises</h2>
      <div
        className={
          "grid gap-x-8 gap-y-5 w-full container grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 my-5 "
        }
      >
        {cruiseData && cruiseData.length > 0 ? (
          cruiseData
            .slice(0, 5)
            .map((item, index) => <CruiseCard key={index} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
