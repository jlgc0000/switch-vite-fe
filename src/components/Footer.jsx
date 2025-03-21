import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">Jack Fiber</h2>
                    <p className="text-sm text-gray-400">Providing quality services since 2024.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm text-gray-400">Follow us:</p>
                    <div className="flex space-x-3 mt-2">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Jack Fiber. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;