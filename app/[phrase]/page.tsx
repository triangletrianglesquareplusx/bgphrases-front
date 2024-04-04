import Hero from "../components/hero/hero";
import SinglePhrase from "../components/singlephrase/singlephrase";
import { singlePhrase } from "../../public/shared_types";

async function getExpandedPhraseData(title) {
  console.log(`The id is ${title}`);
  const res = await fetch(
    `https://bgphrases.onrender.com/phrases/multiple/${title}`
  );
  if (!res.ok) {
    //implement error
    console.log(res.body);
  }
  return res.json();
}

export default async function Page({
  params: { phrase },
}: {
  params: { phrase: string };
}) {
  const expandedPhraseData = await getExpandedPhraseData(phrase);

  return (
    <>
      <Hero>
        {expandedPhraseData.map((singleExpandedPhrase: singlePhrase) => (
          <SinglePhrase key={singleExpandedPhrase.id} isExpanded={true} 
          title={singleExpandedPhrase.word}
          explanation={singleExpandedPhrase.definition}
          examplePhrase={singleExpandedPhrase.example_usage}
          likes={singleExpandedPhrase.likes}
          dislikes={singleExpandedPhrase.dislikes}
          author={singleExpandedPhrase.author}/>
        ))}
      </Hero>
    </>
  );
}
