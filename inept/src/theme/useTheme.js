import { useEffect, useState } from 'react';
import * as themeX from './schema.json';
import {setToLS, getFromLS} from '../components/ls_component';



export const useTheme = () => {
    const themes = getFromLS('all-themes');
    if (themes == null) setToLS('all-themes', themeX);
    const [theme, setTheme] = useState(getFromLS('theme'));
    const [themeLoaded, setThemeLoaded] = useState(false);

    //const setMode = mode => {
    //    setTheme(mode);
    //};

    //console.log(themes.data.light);
    useEffect(() => {
        const localTheme = getFromLS('theme');
        /* localTheme ? setTheme(localTheme) : setTheme(themes.data.light);//rerender overflow */
        if (themes == null) setToLS('theme', themes.data.light);
        setThemeLoaded(true);
    }, [themes.data.light]);
    
    return { theme, themeLoaded };
};