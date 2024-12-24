const Navigation = () => {
    return (
        <nav className=" flex justify-between items-center px-4 py-2 bg-white text-black">
            {/* Logo */}
            <div className="logo">
                <img
                    src="/public/images/logo.jpg"
                    alt="logo"
                    className="w-16 h-16" // Adjust size as per your logo
                />
            </div>

            {/* Navigation Links (Visible on medium screens and larger) */}
            <ul className="hidden md:flex space-x-8">
                <li className="cursor-pointer text-blue-500">Home</li>
                <li className="cursor-pointer hover:text-blue-500">Course</li>
                <li className="cursor-pointer hover:text-blue-500">Contact us</li>
                <li className="cursor-pointer hover:text-blue-500">About us</li>
            </ul>

            {/* Login Button */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Login
            </button>
        </nav>
    );
};

export default Navigation;

