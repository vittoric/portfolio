import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
    <div href="/" suppressHydrationWarning className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded">Change color
      <Image src="/moon.svg" width={20} height={20} className="moon "/>
      <Image src="/sun.svg" width={20} height={20} className="sun "/>
    </div>
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

    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> hola</svg>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
    </>
  );
}
