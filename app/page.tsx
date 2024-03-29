import React from "react";
import AllPhrases from "./components/allphrases/allphrases";
import Hero from "./components/hero/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHRASEJARGON.com - a bgjargon.com clone",
  description: "A clone of bgjargon.com created by Preslav Getov",
}

export default function Page() {
  return (
    <>
      <Hero>
        <AllPhrases/>
      </Hero>
    </>
  );
}
