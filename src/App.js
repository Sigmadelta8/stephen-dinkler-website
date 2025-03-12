import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen p-6">
      <header className="bg-gray-800 text-white p-6 rounded-lg mb-6 shadow-lg">
        <h1 className="text-4xl font-bold">Stephen Dinkler</h1>
        <p className="text-xl mt-2">Full Stack Developer</p>
      </header>

      <section className="bg-white p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">
          Experienced Full Stack Developer with a strong background in building scalable web applications using modern technologies. Passionate about coding, learning new skills, and solving complex problems.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Company Name</h3>
          <p className="text-gray-600 mb-2">Job Title | January 2020 - Present</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Developed and maintained web applications using React.js and Node.js.</li>
            <li>Collaborated with cross-functional teams to define and implement new features.</li>
            <li>Optimized application performance and improved user experience.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Company Name</h3>
          <p className="text-gray-600 mb-2">Job Title | June 2017 - December 2019</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Designed and implemented RESTful APIs using Express.js.</li>
            <li>Worked with databases such as MongoDB and MySQL.</li>
            <li>Participated in code reviews and provided constructive feedback.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg mb-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="text-2xl font-semibold">University Name</h3>
          <p className="text-gray-600">Bachelor of Science in Computer Science | Graduated May 2017</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>JavaScript, React.js, Node.js</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>MongoDB, MySQL</li>
          <li>Git, GitHub</li>
        </ul>
      </section>
    </div>
  );
}

export default App;