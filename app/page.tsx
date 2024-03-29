import React from "react";
import Navbar from "./components/navbar/navbar";
import AllPhrases from "./components/allphrases/allphrases";
import Hero from "./components/hero/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHRASEJARGON.com - a bgjargon.com clone"
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero>
        <AllPhrases/>
      </Hero>
    </>
  );
}
