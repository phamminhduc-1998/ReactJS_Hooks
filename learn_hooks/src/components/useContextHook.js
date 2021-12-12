import React, { useState, createContext, useContext } from 'react'
import '../App.css'


const ComponentsA = () => {
    return (
        <div>
            <ComponentsB/>
        </div>
    )
}

const ComponentsB = () => {

    const theme = useContext(ThemeContext)
    return (
        <div>
            <p className={theme}>useContextHook</p>
        </div>
    )
}

/**
 * 1. Create context // 
 * 2. Provider // Truyen du lieu 
 * 3. Consumer // Nhan du lieu
 * 
 */


export const ThemeContext = createContext();

const UseContextHook = () => {
    const [theme, setTheme] = useState('dark')


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
        <div>
            <button onClick={toggleTheme}>Toggle theme</button>
            <ComponentsA />
        </div>
        </ThemeContext.Provider>
    )
}

export default UseContextHook;

