import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Offers from "./components/Offers/Offers";
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [navigation, setNavigation] = useState('home');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const chooseNavigation = (nav : string) => {
        setNavigation(nav);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div
            className="App min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition duration-300">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} chooseNavigation={chooseNavigation}/>
            <div className="pl-10 pr-10 md:pl-20 md:pr-20">
                {navigation === 'home' && <HeroBanner />}
                {navigation === 'offers' && <Offers />}
            </div>

        </div>
    );
}

export default App;
