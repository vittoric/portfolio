import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Landing() {
  return (
   <Link href="/about">
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/LMzEJWw7BUv9tfqj/scene.splinecode" />
      </div>
    </Link>
  );
}
