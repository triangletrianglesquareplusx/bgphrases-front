export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>This is a test so stay calm</p>
      {console.log(params)}
    </>
  );
}
