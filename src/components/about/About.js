import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className=" animateGradient  bg-gradient-radial from-lime-500 to-pink-500 p-8 m-8 rounded-xl flex-col  w-1/2 flex md:flex-row gap-4 item-center justify-center mx-auto animate-fade-up animate-once animate-duration-1000 animate-delay-500">
     <div>
      <h1>About</h1>
      <br/>
      <p className="font-thin">
        {" "}
        As a student at 42 Madrid, I have a strong passion for coding and
        developing new projects, and this repository is a showcase of my latest
        work. Here you will find a diverse range of projects, from simple scripts
        to complex applications, covering various programming languages and
        tools. Some of the projects include detailed documentation and
        instructions for getting started, making them accessible to developers.
        Whether you are a seasoned developer or just starting out, I invite you
        to explore my code, fork the projects, and contribute as you see fit.
        With your help, we can create something truly amazing together. Thank
        you for stopping by, and happy coding!{" "}
      </p>
      </div>
      
    <Image src="/frog.png" className=" bg-red-200 object-cover rounded-2xl" alt="42" width={200} height={200} />
    </div>
  );
}
