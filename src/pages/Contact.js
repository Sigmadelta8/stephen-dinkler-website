export default function Contact() {
  return (
    <div className="p-10 mt-8 rounded-lg">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 rounded-2xl p-6">
        <h1 className="text-center text-2xl font-semibold text-blue-500 dark:text-blue-500 mb-2">
          Let's get in touch!
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          You can reach me at:
        </p>
        <div className="mt-2 text-center">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Email: <a href="mailto:stephendink@gmail.com" className="text-blue-500 dark:text-blue-500 hover:underline">stephendink@gmail.com</a>
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mt-2">
            Phone: <a href="tel:9208100835" className="text-blue-500 dark:text-blue-500 hover:underline">920-810-0835</a>
          </p>
        </div>
      </div>
    </div>
  );
}