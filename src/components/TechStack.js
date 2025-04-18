export default function TechStack() {
    return(
    <section className="mt-5 pb-10 px-6">
        <h3 className="text-3xl font-semibold pt-3 text-blue-500 dark:text-blue-500 mb-6">
          Tech Stack
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
          </div>
          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
              alt="Postman"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Postman</span>
          </div>
          {/* React */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">React</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Next.js</span>
          </div>
          {/* MySQL */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">MySQL</span>
          </div>
          {/* Windows */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
              alt="Windows"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Windows</span>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Tailwind CSS</span>
          </div>
          {/* Node.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Node.js</span>
          </div>
          {/* Github */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="Github"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Github</span>
          </div>
          {/* Docker */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">Docker</span>
          </div>
          {/* HTML */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">HTML</span>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="h-10 w-10"
            />
            <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">CSS</span>
          </div>
        </div>
    </section>
    )
}