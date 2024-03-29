import {ls_values, ls_stringify} from '../constants/LocalBrowseConsts';

const setToLS = (key, value) => {
    if(ls_stringify[key]){localStorage.setItem(key, JSON.stringify(value));}
    else{localStorage.setItem(key, value);}
    
}

function Fix_Dates(list) {
    if ((!list)&&(list.length == 0)){
        return;
    }
    for (const element of list) {
        if (element.deadline){
            element.deadline = new Date(element.deadline);
        }
        Fix_Dates(element.tasks);
    }
}

const getFromLS = key => {
    const value = ls_stringify[key] ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key) ;

    if (value) {
        if (key =="Project-List"){
            Fix_Dates(value);
        }
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

const restoreDefaults = () => {
    for (var key in ls_values) {
       setDefaultToLS(key);
    }
    window.location.reload(false)
}

export { setToLS, getFromLS, restoreDefaults };