import { animated } from "react-spring";
import AnimatedDarkModeIcon from "../icons/AnimatedDarkModeIcon";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    const properties = {
        sun: {
            r: 9,
            transform: "rotate(40deg)",
            cx: 12,
            cy: 4,
            opacity: 0
        },
        moon: {
            r: 5,
            // transform: "rotate(90deg)",
            transform: "rotate(360deg)",
            cx: 30,
            cy: 0,
            opacity: 1
        },
        springConfig: { mass: 4, tension: 250, friction: 35 }
    };
    const { r, transform, cx, cy, opacity } = properties[isDarkMode ? "sun" : "moon"];

    const svgContainerProps = useSpring({ transform, config: properties.springConfig });
    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({ cx, cy, config: properties.springConfig });
    const linesProps = useSpring({ opacity, config: properties.springConfig });
    
    return (
        <button
            className="rounded-full h-8 w-14 px-1 bg-slate-500"
            onClick={toggleDarkMode}
        >
            <animated.span >
                <AnimatedDarkModeIcon isDarkMode={darkMode} />
            </animated.span>
            {/* <animated.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="currentColor"
                />
            </animated.svg> */}
        </button>
    )
}

export default DarkModeToggle;