import themeX from '../theme/schema.json';

const def_theme = themeX.data.light;

const ls_values  = {
  "all-themes": themeX,
  "theme":def_theme,

  "note-List": ["Note"],
  "note-Contents": [
    { "type": "doc", "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Note text goes here!" }] }] }],

  "active-Tab": 0,
  "first-Tab": 0,

  "Priority1":"Highest Priority",
  "Priority2":"Mid Priority",
  "Priority3":"Eh Priority"
};

const ls_stringify  = {
  "all-themes": true,
  "theme": true,

  "note-List": true,
  "note-Contents": true,

  "active-Tab": false,
  "first-Tab":false,

  "Priority1":false,
  "Priority2":false,
  "Priority3":false
};

  export {ls_values,ls_stringify};