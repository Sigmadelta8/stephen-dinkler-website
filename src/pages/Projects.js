export default function Projects() {
  // Array of project data
  const projects = [
    {
      title: "Hardware Tracker",
      description:
        "Hardware Tracker is a fairly standard Order Details and Tracking web application. It allows users to view order details, see the latest tracking information, and view their specific package details. It works by querying Netsuite for the order, checking for shipping, querying ShipHawk API for tracking details, and then nicely configures all the information on the page. It is hosted on Vercel.",
      techStack: [
        "Next.js",
        "SuiteQL (a version of Oracle SQL)",
        "API Querying",
        "Tailwind UI",
        "Tailwind CSS",
        "Node.js",
      ],
      videoSrc: "/HardwareTracker.mp4",
    },
    {
      title: "Distribution Center Data (DC Data)",
      description:
        "DC Data was my first foray into a serious data visualization project. It queries Netsuite for Sales Orders and gets the status. It then takes that and a whole bunch of other information, and displays it in a nice, easy-to-read format. It also has a TV View that can be displayed on TVs in the warehouses for the warehouse workers to see what they need to pick in a style that minimizes power consumption.",
      techStack: [
        "Next.js",
        "Vercel",
        "Node.js",
        "SuiteQL",
        "API Endpoints",
        "Tailwind UI",
        "Tailwind CSS",
        "Redis Caching",
      ],
      videoSrc: "/DCData.mp4",
    },
    {
      title: "Grand Central Time Tracker",
      description:
        "Grand Central Time Tracker is a time tracking Widget built for use with Monday.com. It takes all the boards connected to it and tallies up the time spent on each project by each person each week. It displays who has the most 'billable' hours worked, and shows what projects each employee has worked on that week. It also allows for a specific week to be selected, or a custom time frame.",
      techStack: ["React.js", "Monday.com", "GraphQL", "Tailwind"],
      videoSrc: "/GrandCentral.mp4",
    },
  ];

  return (
    <div className="p-10 mt-8 rounded-lg grid justify-center gap-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-white max-w-screen-2xl transition-colors duration-300 dark:bg-gray-900 rounded-2xl py-5 flex items-center ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          {/* Video Section */}
          <div className="flex justify-center w-1/2">
            <video
              className="rounded-lg shadow-lg"
              controls
              loop
              width="500"
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Project Details Section */}
          <div 
            className="px-5 w-1/2"
          >
            <h1 className="text-center text-xl font-semibold text-blue-500 transition-colors duration-300">
              {project.title}
            </h1>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {project.description}
            </p>
            <h2 className="mt-4 text-center font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Tech Stack
            </h2>
            <ul className={`list-disc list-inside text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 ${
            index % 2 === 0 ? "text-left" : "text-right"
            }`}>
              {project.techStack.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}