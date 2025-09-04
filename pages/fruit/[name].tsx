import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";



export const getStaticProps: GetStaticProps = async(context) => {
    const fs = require('fs')
    const favnum = 3
    const rannum = Math.floor(Math.random() * 10)
    const datnum = rannum === favnum
                 ? rannum + ' finally heheheheh'
                 : rannum + ' mehh'

    return {
        props: {
            myFavNum: datnum
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
      fallback: true
    };
}

export default function Dynamic(props) {
  const [count, setCount] = useState(0);
  const [found, setFound] = useState(0);
  const router = useRouter();

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);

    // Check if the random favorite number was found at this attempt
    if (props.myFavNum.toString().includes("finally")) {
      setFound(newCount);
    }
  }

//   if (router.isFallback) {
//     return <h1>69!! 69!! 69!!! 69!!!! 69!!!!...</h1>;
//   }

  return (
    <>
      <h1>Your favorite NAMBAAA is - {props.myFavNum}</h1>

      <h2>
        <div className="luckyyy">
          <button className="luckButton" onClick={handleClick}>
            <Link href="/fruit/fav=${props.myFavNum}">
                 Get lucky!!!
            </Link>
          </button>
          <p>You attempted {count} times now</p>

          {/* Only show if found > 0 */}
          {found > 0 && (
            <p>
              🎉 You got it right in {found} attempt{found > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </h2>

      <div>
        <h1>
          This is my first branchTest commit and pushed
        </h1>
      </div>

      <Link href="/">Go back to Login</Link>
    </>
  );
}