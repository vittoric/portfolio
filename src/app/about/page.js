import Image from "next/image";
import Link from "next/link";



export default function About() {
  return (
    <>
      <div class="bg-gray-900">
        
     
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between py-8">
        <div class="logo">
          <a href="/about"><img class="w-32" src="/logo.svg" alt="" /></a>
        </div>
        <ul class="hidden md:flex flex-row gap-10">
          <li class="text-sm font-rubik font-normal text-white uppercase">
            <a href="#about">About me </a>
          </li>
          <li class="text-sm font-rubik font-normal text-white uppercase">
          <a href="#expertise">My Expertise </a>
          </li>
        </ul>
        <div class="md:hidden block">
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            width="1.8em"
            class="text-white"
            id="btn"
          >
            <path
              fill="currentColor"
              d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h33q.65 0 1.075.425Q42 33.85 42 34.5q0 .65-.425 1.075Q41.15 36 40.5 36Zm0-10.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5h33q.65 0 1.075.425Q42 23.35 42 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.5q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Z"
            />
          </svg>
          <div class="md:hidden">
            <ul
              id="menu"
              class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-zinc-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <li class="text-sm font-rubik font-normal text-white uppercase">
                Home
              </li>
              <li class="text-sm font-rubik font-normal text-white uppercase">
                About me
              </li>
              <li class="text-sm font-rubik font-normal text-white uppercase">
                My works
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section
        id="home"
        class="my-28"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="flex flex-col items-center justify-center px-4">
          <section class="img-bg md:right-1/4 md:top-[10%]"></section>
          <h1 class="font-syne font-bold text-4xl text-white text-center">
          Software Engineer, Front end & Web3 Dev
          </h1>
         
        </div>
      </section>
      <section
        id="about"
        class="flex md:flex-row flex-col-reverse justify-between gap-10"
        
      >
        <section class="hidden md:block img-bg left-4 mt-14"></section>
        <div class="md:w-2/3 m-auto" data-aos="fade-left"
        data-aos-duration="1000">
          <h2 class="text-3xl font-syne font-bold text-white" id="about">
            Let’s get know about me closer
          </h2>
          <p class="text-zinc-500 font-rubik font-thin text-sm w-full mt-6">
          I’m a freelance creative developer from Madrid.
          Graduated in Economics. I started programming in early 2022 and 
          discovered a passion for code beyond the professional realm. 
          Currently, I am a student at 42Madrid. Proactive, with initiative, 
          and eager to learn, I strive to improve daily and consistently 
          surpass set objectives. Enthusiastic, committed, and persistent in 
          everything I undertake. Possessing strong teamwork skills and 
          adaptability to new situations.
          </p>
          <button
          class="border-primary border-2 hover:bg-primary w-48 h-10 rounded-full flex flex-row items-center justify-center mt-8"
        >
          <a href="https://www.linkedin.com/in/vcodrean/" target="_blank" > <span class="font-bold font-rubik text-xs text-gray-100">
          Discover more about me
          </span></a>
        </button>
    
        </div>
        <div data-aos="fade-left"
        data-aos-duration="1000">
          <img
            class="w-full h-full object-contain"
            src="/vica.png"
            alt="profile"
          />
        </div>
      </section>
      <section
        id="work"
        class="my-20 flex items-center justify-center flex-col"
      >
        <h2 class="text-2xl font-syne font-bold text-white text-center" id="expertise">
        My Expertise
        </h2>
        
        <div class="bg-gray-900 text-white p-8">
  
  <div class="mb-8">
    <i class="fas fa-desktop text-4xl mb-4"></i>
    <h2 class="text-xl font-semibold">Software Development</h2>
    <p class="text-lg">Experienced in both functional and OOP languages: 
    JavaScript, TypeScript, C, Solidity</p>
  </div>

 
  <div class="mb-8">
    <i class="fab fa-react text-4xl mb-4"></i>
    <h2 class="text-xl font-semibold">Frontend Dev React, NextJS</h2>
    <p class="text-lg">Passionate about UI/UX. Development experience in HTML, CSS, Tailwind, JS, React, and NextJS frameworks.</p>
  </div>

  
  <div>
    <i class="fab fa-flutter text-4xl mb-4"></i>
    <h2 class="text-xl font-semibold">Figma Development</h2>
    <p class="text-lg">Skilled at developing solutions en Figma</p>
  </div>
</div>

      </section>
     
    </div>
    <footer class="py-8 px-12 bg-zinc-900">
      <div class="my-4 text-center">
        <h4 class="text-md font-syne font-bold text-primary">
          Get in Touch With Me
        </h4>
        <h2
          class="text-3xl font-syne font-bold text-white lowercase underline mt-2"
        >
          vicoder.tech@gmail.com
        </h2>
      </div>
     <div class="flex flex-row items-center justify-between"> 
        <div class="my-auto">
          <img class="w-36 h-6" src="/logo.svg" alt="" />
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h4 class="text-md font-syne font-bold text-white text-center">
        &copy; 2024.  All rights reserved.
      </h4>
      <p class="text-sky-600 underline font-syne text-center text-sm font-extralight mt-2">
        Created with ❤️ by
        <a href="https://github.com/vittoric" target="_blank"
          > vicoder
        </a>
      </p>
    </footer>
    <script src="./main.js" type="module" charset="utf-8"></script>


      </div>
    </>
  );
}
