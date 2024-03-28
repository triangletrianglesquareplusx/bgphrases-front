import SinglePhrase from "../singlephrase/singlephrase";
type singlePhrase = {
  id: number;
  word: string;
  definition: string;
  example_usage: string;
  likes: number;
  dislikes: number;
};
async function getPhrasesData() {
  const res = await fetch("https://bgphrases.onrender.com/phrases/all");
  if (!res.ok) {
    //implement error
    console.log(res.body);
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
