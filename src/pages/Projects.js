export default function Projects() {
  return (
    <div className="p-10 mt-8 rounded-lg">
      {/* First Project */}
      <div className="bg-white grid grid-cols-2 items-center max-w-screen-2xl dark:bg-gray-900 rounded-2xl py-5">
        <div className="px-5">
          <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            Hardware Tracker
          </h1>
          <p className="mt-4 text-sm text-left text-gray-600 dark:text-gray-400">
            Hardware Tracker is a fairly standard Order Details and Tracking web application. 
            It allows users to view order details, see the latest tracking information, and view their specific package details. 
            It works by querying Netsuite for the order, checking for shipping, querying ShipHawk API for tracking details, and then nicely configures all the infromation on the page. 
            It is hosted on Vercel.
          </p>
          <h2 className="mt-4 font-semibold text-left text-gray-800 dark:text-gray-200">
            Tech Stack:
          </h2>
          <ul className="list-disc list-inside text-sm text-left text-gray-600 dark:text-gray-400">
            <li>Next.js</li>
            <li>SuiteQL (a version of Oracle SQL)</li>
            <li>API Querying</li>
            <li>Tailwind UI</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-lg shadow-lg"
            controls
            loop
            width="500"
          >
            <source src="/HardwareTracker.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Second Project */}
      <div className="bg-white grid grid-cols-2 items-center max-w-screen-2xl dark:bg-gray-900 rounded-2xl mt-5 py-5">
        <div className="flex justify-center">
          <video
            className="rounded-lg shadow-lg"
            controls
            loop
            width="500"
          >
            <source src="/DCData.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-5">
          <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            Distribution Center Data (DCData)
          </h1>
          <p className="mt-4 text-sm text-left text-gray-600 dark:text-gray-400">
            DC Data was my first foray into a serious data visualization project. It queries Netsuite for Sales Orders and gets the status. It then takes that
            and a whole bunch of other information, and displays it in a nice, easy to read format. It also has a TV View that can be displayed on TV's in the warehouses for 
            the warehouse workers to see what they need to pick in a style that minimizes power consumption. 
          </p>
          <h2 className="mt-4 font-semibold text-left text-gray-800 dark:text-gray-200">
            Tech Stack:
          </h2>
          <ul className="list-disc list-inside text-sm text-left text-gray-600 dark:text-gray-400">
            <li>Next.js</li>
            <li>Vercel</li>
            <li>Node.js</li>
            <li>SuiteQL</li>
            <li>API Endpoints</li>
            <li>Tailwind UI</li>
            <li>Tailwind CSS</li>
            <li>Redis Caching</li>
          </ul>
        </div>
      </div>
      {/* Second Project */}
      <div className="bg-white grid grid-cols-2 items-center max-w-screen-2xl dark:bg-gray-900 rounded-2xl mt-5 py-5">
        <div className="px-5">
          <h1 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            Grand Central Time Tracker
          </h1>
          <p className="mt-4 text-sm text-left text-gray-600 dark:text-gray-400">
            Grand Central Time Tracker is a time tracking Widget built for use with Monday.com. It takes all the boards connected to it and tallies 
            up the time spent on each project by each person each week. It displays who has the most 'billable' hours worked, and shows what projects each employee has 
            worked on that week. It also allows for a specific week to be selected, or a custom time frame.  
          </p>
          <h2 className="mt-4 font-semibold text-left text-gray-800 dark:text-gray-200">
            Tech Stack:
          </h2>
          <ul className="list-disc list-inside text-sm text-left text-gray-600 dark:text-gray-400">
            <li>React.js</li>
            <li>Monday.com</li>
            <li>GraphQL</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-lg shadow-lg"
            controls
            loop
            width="500"
          >
            <source src="/GrandCentral.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}