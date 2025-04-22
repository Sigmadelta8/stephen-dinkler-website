export default function Timeline() {
    return (
      <div className="flex justify-center items-center">
        <ol className="self-center relative border-s text-left border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {/* Full Stack Web Developer */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2021 - Present
            </time>
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-500">
              Full Stack Web Developer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jeske Hardware Distributors - Reno, NV
            </p>
            <ul className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Wearing several different hats</li>
              <li>Building and scaffolding several different web projects</li>
              <li>
                Experience with SQL, API and REST web services, hosting services,
                networking, and NetSuite CRM
              </li>
              <li>
                JavaScript, Java, React.js, Next.js, some
                PHP, Laravel, Power Automate, HTML, CSS, SASS, Tailwind UI and
                TailwindCSS, Git
              </li>
              <li>
                Microsoft Teams, Outlook, and Excel
              </li>
            </ul>
          </li>
  
          {/* Roofing Service Technician */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2018 - August 2021
            </time>
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-500">
              Roofing Service Technician
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Security Luebke Roofing - Appleton, WI
            </p>
            <ul className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Learning on the job</li>
              <li>Roofing repair, both residential and commercial</li>
              <li>Time management and people skills</li>
              <li>Hard labor</li>
            </ul>
          </li>
  
          {/* Barista */}
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2015 - May 2018
            </time>
            <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-500">
              Barista
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connections Cafe + Radisson Hotels - Appleton, WI
            </p>
            <ul className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Money handling</li>
              <li>Food and drink preparation</li>
              <li>Customer service</li>
              <li>Multi-tasking</li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }