import SinglePhrase from "../singlephrase/singlephrase";
import { singlePhrase } from "../../../public/shared_types";

async function getPhrasesData() {
  const res = await fetch("https://bgphrases.onrender.com/phrases/all");
  if (!res.ok) {
    //implement error
    //console.log(res.body);
  }
  return res.json();
}

export default async function AllPhrases() {
  const phrasesData = await getPhrasesData();
  return (
    <>
      {phrasesData.map((singlePhrase: singlePhrase) => (
        <SinglePhrase
          key={singlePhrase.id}
          isExpanded={false}
          title={singlePhrase.word}
          explanation={singlePhrase.definition}
          examplePhrase={singlePhrase.example_usage}
          likes={singlePhrase.likes}
          dislikes={singlePhrase.dislikes}
        />
      ))}
    </>
  );
}
