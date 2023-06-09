import themeX from '../theme/schema.json';

const def_theme = themeX.data.light;

const ls_values  = {
  "all-themes": themeX,
  "theme":def_theme,
  "Priority1":"Highest Priority",
  "Priority2":"Mid Priority",
  "Priority3":"Eh Priority"
};

const ls_stringify  = {
  "all-themes": true,
  "theme": true,
  "Priority1":false,
  "Priority2":false,
  "Priority3":false
};

  export {ls_values,ls_stringify};