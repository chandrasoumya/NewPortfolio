import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import projects from "./projects";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-serif text-xl">
      <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-5">
        <nav className="container mx-auto flex justify-between items-center">
          <img
            href="#home"
            className="w-12 cursor-pointer"
            src="./logo.png"
            alt="logo"
          />
          <ul className="flex space-x-4">
            <li>
              <a href="#projects" className="hover:text-gray-300 font-semibold">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-800 py-20" id="home">
        <div className="container mx-auto text-center ">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            I'm
          </h1>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 flex flex-wrap items-center justify-center">
            <div>
              <span className="text-blue-500 ">S</span>oumyadeep
            </div>
            <div>
              <span className="text-blue-500">C</span>handra
            </div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto p-1">
            A budding web developer embarking on a coding journey, eagerly
            mastering HTML, CSS, and JavaScript. Learning React to excel in
            frontend development and Node.js for backend development. Also
            gaining expertise in databases like MySQL and MongoDB. Mastering
            Data Structures and Algorithms in Java. Exploring the world of
            blockchain technology using Solidity on Ethereum.
          </p>
        </div>
      </section>

      <section
        className="bg-gray-100 dark:bg-gray-700 py-20 border-t-[1px] dark:border-black"
        id="projects"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Projects
          </h2>
          <div className="grid ml-2 mr-2 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-[1px] border-gray-300 dark:border-black"
              >
                <img
                  src={project.image || "./project.png"}
                  alt={project.title}
                  className="w-full h-48 object-cover p-1 rounded-lg "
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                    >
                      {project.host ? <FaExternalLinkAlt size={24} /> : null}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white dark:bg-gray-800 py-20 border-t-[1px]  dark:border-black"
      >
        <div className="about flex flex-col items-center p-10 text-center max-w-xl mx-auto">
          <div className="aboutme mb-6">
            <h1 className="text-red-500 text-4xl font-semibold">About Me</h1>
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-100">
              Welcome to my creative space! I'm Soumyadeep Chandra, a passionate
              Web developer, exploring the intersection of full stack
              development using MERN stack.
            </p>
          </div>

          <div className="whyworkwithme">
            <h1 className="text-green-500 text-4xl font-semibold">
              Why Work With Me?
            </h1>
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-100">
              1. I believe in the power of collaboration. Your vision combined
              with my skills can lead to remarkable outcomes.
            </p>
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-100">
              2. I approach each project with commitment and a dedication to
              excellence.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-gray-100 dark:bg-gray-700 py-20 border-t-[1px] dark:border-black "
        id="contact"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Feel free to reach out to me through the following platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/chandrasoumya"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/soumyadeep-chandra-9a8a4a27b/"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/chandrasoumya"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/soumyadeep-chandra-9a8a4a27b/"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
