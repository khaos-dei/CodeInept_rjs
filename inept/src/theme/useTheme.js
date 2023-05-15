import { useEffect, useState } from 'react';
import * as themeX from './schema.json';

const setToLS = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const getFromLS = key => {
    const value = window.localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }else{
        return null;
    }
}


export const useTheme = () => {
    const themes = getFromLS('all-themes');
    if (themes == null) setToLS('all-themes', themeX);
    const [theme, setTheme] = useState(themes.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    //const setMode = mode => {
    //    setTheme(mode);
    //};

    //console.log(themes.data.light);
    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
        if (themes == null) setToLS('theme', themes.data.light);
        setThemeLoaded(true);
    }, [themes.data.light]);
    
    return { theme, themeLoaded };
};