module.exports = {
      formate_time: (date) => {
        return date.toLocaleTimeString();
      },
      formate_date: (date) => {
        return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
      }
}

