import { useEffect, useState } from 'react';
import * as themeX from './schema.json';
import {setToLS, getFromLS} from '../components/localstorage_component';



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
        setThemeLoaded(true);
    }, []);
    
    return { theme, themeLoaded };
};