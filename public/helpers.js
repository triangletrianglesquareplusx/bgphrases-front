export function convertRawDateStringIntoHumanReadableDate(dateAsString) {
  const date = new Date(dateAsString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString('en-GB',options);
  const formattedTime = date.toLocaleTimeString();
  return [formattedDate, formattedTime];
}
