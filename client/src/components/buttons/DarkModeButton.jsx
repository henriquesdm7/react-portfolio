import AnimatedDarkModeIcon from "../icons/AnimatedDarkModeIcon";
const DarkModeButton = ({ darkMode, toggleDarkMode }) => {


    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-3 right-0 p-3 bg-slate-700 rounded-tl-full rounded-bl-full"
            // className="fixed top-[50%] left-[50%] bg-slate-700 rounded-full"
        >
            <AnimatedDarkModeIcon isDarkMode={darkMode} />
        </button>
    )
}

export default DarkModeButton;