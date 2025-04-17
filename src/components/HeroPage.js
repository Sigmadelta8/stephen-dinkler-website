'use client'
import heroImage from '../assets/heroImage.jpg'
import TechStack from './TechStack'
import Education from './Education'
export default function HeroPage() {

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl">
      <div className="relative isolate pt-4">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
            </div>
            <h1 className="mt-5 dark:text-orange-400 text-pretty text-5xl font-semibold tracking-tight text-blue-500 sm:text-5xl">
              Stephen Dinkler
            </h1>
            <p className="mt-4 text-pretty text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl/8">
              Hi! Welcome to the website! I'm Stephen- a dad, PC enthusiast, martial arts lover, hobbyist mechanic, and of course, web developer! 
                I have experience in a variety of programming languages and systems, but I am most familiar with Next.js and other React frameworks. While Javascript is my preferred language, I pick things up quickly and am always eager to learn new technologies and improve my skills. Thanks for stopping by!
            </p>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-md lg:grow">
            <img alt="" src={heroImage} />
          </div>
        </div>
      </div>     
    </div>
  )
}

