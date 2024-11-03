import React from "react";

export default function Footer() {
  return (
    <div className={"w-full flex justify-center items-center mb-10"}>
      <p className="text-xs leading-5 text-gray-700">
        &copy; {new Date().getFullYear()} My Kind of Cruise. All Rights
        Reserved.
      </p>
    </div>
  );
}
