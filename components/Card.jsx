import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ value }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value + 1}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [value]);

  return (
    <Link href={`/pokemon?id=${value + 1}`}>
      <div className="card bg-white p-4 rounded-md relative">
        <h2 className="absolute text-xl font-bold text-gray-800 top-6 left-6">
          #000{value + 1}
        </h2>
        <Image
          className="bg-gray-200 rounded-md"
          height={200}
          width={300}
          alt={data.name}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
            value + 1 < 10 ? `00${value + 1}` : `0${value + 1}`
          }.png`}
        />
        <h1 className="capitalize text-lg font-medium text-gray-800">
          {data.name}
        </h1>
        <div className="flex gap-2 mt-2">
          {data.types?.map((type, index) => (
            <button
              key={index}
              className={`${
                (type.type.name === "grass" && "bg-[#9BCC50]") ||
                (type.type.name === "poison" && "bg-[#B97FC9]") ||
                (type.type.name === "fire" && "bg-[#FC7C23]") ||
                (type.type.name === "water" && "bg-[#4592C4]") ||
                (type.type.name === "bug" && "bg-[#729F3F]") ||
                (type.type.name === "flying" && "bg-[#BDBDBD]")
              } px-4 py-1 rounded-sm text-white text-sm font-base capitalize`}
            >
              {type.type.name}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
