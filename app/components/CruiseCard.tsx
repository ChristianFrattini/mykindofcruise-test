"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

interface CruiseCardProps {
  item: {
    name: string;
    nights: number;
    sailDate: string; //TO CHANGE TO DATE
    portNames: string[];
    startPort: string;
    endPort: string;
    price: string;
    shipImage: string;
    shipName: string;
    cruiseLineName: string;
    iconOverlay: string;
    iconBackgroundColor: string;
  };
}

export default function CruiseCard({ item }: CruiseCardProps) {
  const date = new Date(item.sailDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(date);
  const price: number = parseFloat(item.price);
  const instalmentPrice = price / 6;

  const notify = () => toast.success("Trip added to your wish list");

  return (
    <div className="flex flex-col max-w-md rounded-xl overflow-hidden shadow-lg bg-blue-50 p-2 w-full h-full hover:scale-105 transition-all border-blue-100 border">
      <div className="flex flex-col items-center">
        <Image
          className="object-cover rounded-lg max-h-36 min-h-36"
          src={item.shipImage}
          alt={item.cruiseLineName}
          width={250}
          height={70}
        />
      </div>

      <div className="mx-2 mt-2 flex flex-col justify-start flex-grow">
        <p className="font-bold text-sm">
          {item.nights} Nights, {item.name}
        </p>
        <p className="text-gray-700 text-xs font-bold mt-0.5">
          {item.cruiseLineName}
        </p>
      </div>

      <div className="mx-2 mt-2 flex flex-col justify-start flex-grow">
        <h3 className="text-gray-700 text-xs mt-0.5">
          Departing from:{" "}
          <span className="font-semibold">{item.startPort}</span>
        </h3>
        <h3 className="text-gray-700 text-xs mt-0.5">
          Departing on: <span className="font-semibold">{formattedDate}</span>
        </h3>
      </div>

      <div className="mx-2 mt-2 flex justify-between flex-grow">
        <h3 className="text-gray-700 text-xs mt-0.5">
          <span className="font-semibold">
            from £{item.price}pp or £{instalmentPrice.toFixed(2)} over 6 months
          </span>
        </h3>
        <p>
          <Image
            src={item.iconOverlay}
            className={`${item.iconBackgroundColor}`}
            sizes={"icon"}
            width={10}
            height={10}
            alt={item.cruiseLineName}
          />
        </p>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          className="p-2 bg-blue-800/80 rounded-xl text-gray-200 group"
          onClick={notify}
        >
          <Link href={``} className={"flex"}>
            Add Trip
            <ChevronRight
              className={"group-hover:translate-x-1 transition-all"}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
