export default function Education(){
    return (
        <section className="mt-5 pb-10 px-6">
  <h3 className="text-3xl pt-3 font-semibold text-blue-500 dark:text-orange-500 mb-6">
    Education
  </h3>
  <div className="space-y-6">
    {/* First Education Item */}
    <div className="w-3/4 mx-auto border-t border-gray-300 dark:border-gray-600 mb-4">
      <h4 className="text-xl font-semibold pt-5 text-gray-800 dark:text-gray-200">
        Post Secondary Education in Computer Science
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        University of Wisconsin-Madison - Madison, WI
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        August 2020 to March 2021
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        One semester on campus in Madison. When Covid-19 we were all sent home to continue our studies remotely.
      </p>
    </div>

    {/* Second Education Item */}
    <div className="w-3/4 mx-auto border-t border-gray-300 dark:border-gray-600 mb-4 pt-5">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Associate's Degree
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        University of Wisconsin-Oshkosh - Appleton, WI
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        August 2018 to August 2019
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Associates Degree of Arts and Science from UW Oshkosh - Fox Valley campus.
      </p>
    </div>

    {/* Second Education Item */}
    <div className="w-3/4 mx-auto border-t border-gray-300 dark:border-gray-600 mb-4 pt-5">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        General Educational Development (GED)
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Appleton North High School - Appleton, WI
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Graduated in 2018
      </p>
      <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li className="font-semibold underline">4-Year Two-Sport Varsity Athlete</li>
            <ul className="list-disc list-inside ml-4">
              <li>Cross Country</li>
              <li>Track and Field</li>
            </ul>
            <li className="font-semibold underline">AP and CAPP Student</li>
            <ul className="list-disc list-inside ml-4">
                <li>3 Years of CAPP Spanish</li>
              <li>AP Statistics</li>
              <li>AP World History, US History</li>
              <li>AP Chemistry, Biology</li>
              <li>AP Literature, Language</li>
            </ul>
          </ul>
    </div>
  </div>
</section>
    )
}