import React, { useContext } from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { BiSun } from "react-icons/bi"
import { IoMoon } from "react-icons/io5"
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="dark:border-2 dark:border-blue-color shadow transition duration-500 ease-in-out rounded-full">
            {theme === 'dark' ? (
                <BiSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
            ) : (
                    <IoMoon
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                )}
        </div>
    );
};

export default Toggle;