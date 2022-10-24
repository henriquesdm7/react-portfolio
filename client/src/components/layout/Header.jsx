import DarkModeButton from "../buttons/DarkModeButton";
import { animated, useSpring } from "react-spring";
import DarkModeToggle from "../toggles/DarkModeToggle";

const Header = ({ darkMode, toggleDarkMode }) => {
    const properties = {
        light: {
            transform: "rotate(0deg)",
        },
        dark: {
            transform: "rotate(0deg)",
        },
        // springConfig: { mass: 4, tension: 250, friction: 35 }
        springConfig: {}
    };
    const { transform } = properties[darkMode ? "dark" : "light"];
    const headerProps = useSpring({ transform, config: properties.springConfig });

    return (
        <>
            <animated.header className="dark:text-gray-400 text-gray-600 dark:bg-gray-900 body-font" style={headerProps}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center dark:text-white text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l dark:md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 dark:hover:text-white hover:text-gray-900">First Link</a>
                        <a className="mr-5 dark:hover:text-white hover:text-gray-900">Second Link</a>
                        <a className="mr-5 dark:hover:text-white hover:text-gray-900">Third Link</a>
                        <a className="mr-5 dark:hover:text-white hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center dark:bg-gray-800 bg-gray-100 border-0 py-1 px-3 focus:outline-none dark:hover:bg-gray-700 hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </animated.header>
            <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    )
}

export default Header;