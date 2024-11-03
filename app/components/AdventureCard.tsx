import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface Adventure {
  item: {
    name?: string;
    image: string;
  };
}

export default function AdventureCard({ item }: Adventure) {
  return (
    <>
      <Card className={"hover:scale-105 transition-all cursor-pointer"}>
        <CardTitle className={"text-center my-1 "}>
          {item.name ? item.name : <p>Name unavailable</p>}
        </CardTitle>
        <CardContent className={"flex items-center justify-center"}>
          <Image
            className={"object-cover rounded-lg min-h-36 max-h-36 h-full"}
            src={item.image}
            width={470}
            height={200}
            alt={"adventure_image"}
          />
        </CardContent>
      </Card>
    </>
  );
}
