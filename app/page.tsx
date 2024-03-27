import React from "react";
import Navbar from "./components/navbar/navbar";
import AllPhrases from "./components/allphrases/allphrases";
import Hero from "./components/hero/hero";

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
