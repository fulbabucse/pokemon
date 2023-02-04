import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";

const pokemon = ({ data }) => {
  const {
    name,
    height,
    weight,
    abilities,
    image,
    order,
    types,
    stats,
    forms,
    base_experience,
    id,
  } = data;

  return (
    <div className="lg:max-w-screen-lg mx-auto my-10">
      <div className="flex justify-center mb-4">
        <Image src={logo} height={150} width={150} alt="logo" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 mt-10 place-items-center place-content-center">
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-[#257BC4] capitalize">
            {name} <span>#000{id}</span>
          </h1>
          <div className="border-2 border-red-400 grid grid-cols-2 place-items-center place-content-center gap-4 p-4 rounded-lg">
            <div className="text-center">
              <h2 className="text-lg font-medium">Height</h2>
              <span className="text-sm">{height}</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium">Weight</h2>
              <span className="text-sm">{weight}</span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium">Abilities</h2>
              {abilities?.map((abi, i) => (
                <span className="flex flex-col capitalize text-sm" key={i}>
                  {abi.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image src={image} alt={name} width={300} height={300}></Image>
        </div>
        <div className="w-full px-4 lg:px-0">
          <div>
            <h1 className="text-lg font-medium mb-2">Type</h1>
            {types?.map((type, index) => (
              <button
                key={index}
                className={`${
                  (type.type.name === "grass" && "bg-[#9BCC50]") ||
                  (type.type.name === "poison" && "bg-[#B97FC9]") ||
                  (type.type.name === "fire" && "bg-[#FC7C23]") ||
                  (type.type.name === "water" && "bg-[#4592C4]") ||
                  (type.type.name === "bug" && "bg-[#729F3F]") ||
                  (type.type.name === "flying" && "bg-[#BDBDBD]")
                } px-4 py-1 rounded-sm text-white text-sm font-base capitalize mr-3`}
              >
                {type.type.name}
              </button>
            ))}
            <div>
              <h1 className="text-lg font-medium my-4">Stats</h1>

              {stats?.map((stat, index) => (
                <div key={index}>
                  <p
                    className={`${
                      stat.stat.name === "hp"
                        ? "text-sm uppercase"
                        : "text-sm capitalize"
                    }`}
                  >
                    {stat.stat.name.split("-").join(" ")}
                  </p>
                  <div className="h-1 relative w-full rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      className="h-full bg-[#30A7D7] absolute"
                      style={{ width: stat.base_stat }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/`}
        className="grid place-items-center place-content-center mt-10"
      >
        <button className="bg-[#FFCB05] px-4 py-1 rounded-sm text-gray-800 text-sm font-base capitalize ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default pokemon;

export const getServerSideProps = async ({ query }) => {
  const id = query.id;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const index = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;
    data.image = image;
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
};
