import { useState } from "react";
import Header from "./components/layout/Header";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="app-body-content">

            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
