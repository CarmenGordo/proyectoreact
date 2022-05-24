import { useState } from "react";

export const useTheme = () =>{
    const [theme, setTheme] = useState('light')
    // por defecto light

    // comprueba como esta y actualiza
    const handleTheme = () =>{
        const updateTheme = (theme === 'light') ? 'dark' : 'light';

        setTheme(updateTheme)
    }

    // 
    return{
        theme,
        handleTheme
    }
}