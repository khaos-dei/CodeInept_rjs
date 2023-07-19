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
      deadline: new Date("August 19, 1975 23:15:30").toString(),
      tasks:[
        {
          name:"Task 1",
          deadline: false,
          completed: true,
          tasks: [],
        },
        {
          name:"Task 2",
          deadline: false,
          completed: false,
          tasks: [],
        },
        {
          name:"Task 3",
          deadline: new Date("June 8, 2031 23:15:30").toString(),
          completed: false,
          tasks: [
            {
              name:"Task 3.1",
              deadline: false,
              completed: true,
              tasks: [],
            },
            {
              name:"Task 3.2",
              deadline: false,
              completed: false,
              tasks: [
                {
                  name:"Task 3.2.1",
                  deadline: new Date("July 18, 2023 23:15:30").toString(),
                  completed: true,
                  tasks: [
                    {
                      name: "Task 3.2.1.1",
                      deadline: new Date("November 28, 2000 23:15:30").toString(),
                      completed: true,
                      tasks: [],
                    }],
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