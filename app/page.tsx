"use client";
import React, { use, useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setloding] = useState(false);

  let fetchNewQuote = () => {
    setloding(true)
    fetch("https://api.quotable.io/random?tags=technology", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
        setloding(false) 
      });
       
  };

  return (
    <>
      <h1 className=" text-center mt-40 mb-10 font-bold text-2xl text-white">
        {" "}
        Welcome to Random Quote Generater
      </h1>
      <div className="flex justify-center align-center flex-col">
        {loading ? (
          <GridLoader 
            color={"#36d7b7"}
            loading={loading}
            size={30} 
            aria-label="Loading Spinner"
            data-testid="loader"
            className="md:ml-[36rem]  ml-40"
          />
        ) : (
          <div className="bg-white md:max-w-[400px] w-80  rounded-2xl p-14 flex justify-center align-center flex-col md:mx-[30rem] mx-5">
            <h2 className="font-curs font-bold text-2xl ">{quote}</h2>
            <small className="font-dancing font-bold text-2xl mt-5">
              -{author}-
            </small>
          </div>
        )}

        <br />
        <button
          onClick={fetchNewQuote}
          className={
            "block border-2 border-[#008CBA] p-3.5 text-[#008CBA] text-[20px] rounded-2xl cursor-pointer outline-0 ease-in duration-300  w-60 bg-white md:mx-[32rem] mx-20"
          }
        >
          Generate New Quote
        </button>
      </div>
    </>
  );
}
