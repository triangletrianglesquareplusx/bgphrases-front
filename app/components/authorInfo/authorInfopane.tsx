import { authorInfo } from "../../../public/shared_types";
import styles from "./authorinfopane.module.css";

async function getAuthorData(id) {
  const res = await fetch(`https://bgphrases.onrender.com/authors/${id}`);
  if (!res.ok) {
    //implement error
    console.log(res.body);
  }
  return res.json();
}

interface authorInfoProps {
  authorId: number;
}

export default async function AuthorInfoPane({ authorId }: authorInfoProps) {
  const authorData: authorInfo = await getAuthorData(authorId);
  return (
    <div>
      <p>
        {authorData.displayName} from {authorData.location}
      </p>
    </div>
  );
}
