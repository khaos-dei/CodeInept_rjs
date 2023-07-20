const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
const dates = [
      '1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th',
      '11th','12th','13th','14th','15th','16th','17th','18th','19th','20th',
      '21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th',
      '31st',
    ];

const days = [
        31,28,31,30,31,30,31,31,30,31,30,31,29
        //12 months and the leap February
      ];

const now = new Date();
const long_ago = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);
now.setHours(0, 0, 0, 0);
long_ago.setHours(0, 0, 0, 0);

  export {dates, weekdays, months, days, now, long_ago};