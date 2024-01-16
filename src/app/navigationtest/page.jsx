"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


//CLIENT SIDE NAVIGATION
function NavigationTestPage() {
  const router = useRouter();
  const pathname = usePathname();
  // usePathname -  this hook will show the path name like = /navigationtest
  const searchParams = useSearchParams();
  // searchParams - this is for get search params

  const q = searchParams.get("q"); //get search params

//   console.log(q);

  function handleClick() {
    // console.log("clicked");
    router.replace("/"); // like navigate in react-router-dom
    // router.push('/')
    // router.refresh() //will refresh this component
    // router.back() //open the previous page
    // router.forward() //open the next page
  }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
}

export default NavigationTestPage;
