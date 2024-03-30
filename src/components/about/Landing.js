import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";


export default function Landing() {
  return (
   <Link href="/about">
      <div className="h-screen sm:flex-col sm:items-center">
        <SplineComponent />
      </div>
    </Link>
  );
}

function SplineComponent() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  

  return (
    <Fragment>
      {!isSplineLoaded && (
        <div className=" static flex items-center justify-center h-screen">
        <Image
          className="animate-pulse animate-infinite"
          src="/vica.png"
          alt="vica"
          width={200}
          height={200}
        />
        </div>
      )}
      <Spline 
      className={isSplineLoaded || "hidden"}
      onLoad={() => setTimeout (() => setIsSplineLoaded(true), 3000)}
      scene="https://prod.spline.design/LMzEJWw7BUv9tfqj/scene.splinecode" />
    </Fragment>
  );
}
