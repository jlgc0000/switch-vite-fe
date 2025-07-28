import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-900 py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-evenly px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Jack Fiber</h2>
          <p className="text-sm text-gray-400">
            Providing quality services since 2024.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-400">Follow us:</p>
          <div className="mt-2 flex space-x-3">
            <a
              href="https://www.facebook.com/jack.fiber.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </a>
           {/*  <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>*/}
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Jack Fiber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
