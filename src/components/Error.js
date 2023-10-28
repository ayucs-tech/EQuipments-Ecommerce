import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="text-center mt-5">
        <h1>Something went wrong</h1>
        <h2>{err.status + ": " + err.statusText}</h2>
      </div>
    </>
  );
}