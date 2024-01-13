import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>❗Not found</h2>
      <p>this page is not exist here</p>
      <Link href="/">Back to home page</Link>
    </div>
  );
}

export default NotFound;
