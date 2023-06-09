import {ls_values, ls_stringify} from '../constants/LocalBrowseConsts';

const setToLS = (key, value) => {
    if(ls_stringify[key]){localStorage.setItem(key, JSON.stringify(value));}
    else{localStorage.setItem(key, value);}
    
}

const getFromLS = key => {
    const value = ls_stringify[key] ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key) ;

    if (value) {
        return value;
    }else{
        setDefaultToLS(key);
        return ls_values[key];
    }
}

const setDefaultToLS = (key) => {
    if(ls_stringify[key]){localStorage.setItem(key, JSON.stringify(ls_values[key]));}
    else{localStorage.setItem(key, ls_values[key]);}
}

export {setToLS, getFromLS};