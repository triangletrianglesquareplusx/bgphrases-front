export type singlePhrase = {
  id: number;
  word: string;
  definition: string;
  example_usage: string;
  likes: number;
  dislikes: number;
  authorId: number;
  createdAt: string;
};

export type authorInfo = {
  displayName: string;
  location: string;
};
