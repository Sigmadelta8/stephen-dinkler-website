export default function Timeline() {
    return (
      <div className="flex justify-center items-center">
        <ol className="self-center relative border-s text-left ml-5 border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {/* Full Stack Web Developer */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2021 - Present
            </time>
            <h3 className="text-2xl font-semibold text-blue-500">
              Full Stack Web Developer
            </h3>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-300">
              Jeske Hardware Distributors - Reno, NV
            </p>
            <p className="text-sm text-gray-600 w-3/4 mr-auto text-left dark:text-gray-400">
            Manage the web-related side of the business, planning and building multiple projects. Work extensively with Oracle SQL, API/REST web services, hosting, networking, and NetSuite CRM. Proficient in JavaScript, Java, React.js, Next.js, PHP, Laravel, 
            Power Automate, HTML/CSS, SASS, Tailwind, Git, and Handlebars.js. Collaborate using Microsoft Teams, Outlook, and Excel.
            </p>
          </li>
  
          {/* Roofing Service Technician */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2018 - August 2021
            </time>
            <h3 className="text-2xl font-semibold text-blue-500">
              Roofing Service Technician
            </h3>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-300">
            Security Luebke Roofing - Appleton, WI
            </p>
            <p className="text-sm text-gray-600 w-3/4 mr-auto text-left dark:text-gray-400">
            Facilitated communication between customers and management while performing residential and commercial roofing repairs. Developed strong time management, people skills, and physical endurance through hands-on labor experience.
            </p>
          </li>
  
          {/* Barista */}
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-colors duration-300"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2015 - May 2018
            </time>
            <h3 className="text-2xl font-semibold text-blue-500">
              Barista
            </h3>
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-300">
            Connections Cafe + Radisson Hotels - Appleton, WI
            </p>
            <p className="text-sm text-gray-600 w-3/4 mr-auto text-left dark:text-gray-400">
            Handled monetary transactions, prepared food and beverages, provided customer service, and demonstrated effective multi-tasking in a fast-paced environment.
            </p>
          </li>
        </ol>
      </div>
    );
  }