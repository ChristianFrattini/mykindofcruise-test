import React from "react";
import { getAdventuresdata } from "../api/api";
import AdventureCard from "./AdventureCard";

export default async function Adventures() {
  const adventuresData = await getAdventuresdata();

  return (
    <div className={"md:mx-2 mx-4"}>
      <h2 className={"font-bold leading-8 text-2xl"}>Adventures</h2>
      <div
        className={
          "grid gap-x-40 gap-y-5 w-full container grid-cols-1 sm:grid-cols-2 md:grid-cols-2 my-5 "
        }
      >
        {adventuresData && adventuresData.length > 0 ? (
          adventuresData
            .slice(0, 6)
            .map((item, index) => <AdventureCard key={index} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
