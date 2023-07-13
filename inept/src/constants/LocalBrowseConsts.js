import themeX from '../theme/schema.json';

const def_theme = themeX.data.light;

const NewNoteContent = "<p>Note text goes here</p>";

const ls_values  = {
  "all-themes": themeX,
  "theme":def_theme,

  "note-List": ["Note"],
  "note-Contents": ["<p>Note text goes here</p>"],

  "Project-List": [
    {
      name:"Default Project",
      deadline: new Date("November 18 3020 11:17"),
      parts:[
        {
          name:"Task 1",
          deadline: false,
          completed: true,
          sub: [],
        },
        {
          name:"Task 2",
          deadline: false,
          completed: false,
          sub: [],
        },
        {
          name:"Task 3",
          deadline: false,
          completed: false,
          sub: [
            {
              name:"Task 3.1",
              deadline: false,
              completed: true,
              sub: [],
            },
            {
              name:"Task 3.2",
              deadline: false,
              completed: false,
              sub: [
                {
                  name:"Task 3.2.1",
                  deadline: false,
                  completed: true,
                  sub: [],
                }
              ],
            }
          ],
        },
      ]
    },
  ],

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

  "Project-List": true,
  "Project-Contents": true,

  "active-Tab": false,
  "first-Tab":false,

  "Priority1":false,
  "Priority2":false,
  "Priority3":false
};

export { ls_values, ls_stringify, NewNoteContent };