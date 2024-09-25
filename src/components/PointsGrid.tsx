import React from "react";
import Image from "next/image";

export default function PointsGrid() {
  return (
    <Image src={"/points_grid.svg"} alt={""} layout="fill" objectFit="cover"></Image>
  );
}
