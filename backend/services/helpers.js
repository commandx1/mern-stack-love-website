const newDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  const year = date.getFullYear();
  const hour = date.getHours();
  let min = date.getMinutes();
  min = min < 10 ? '0' + min : min;
  return day + '.' + month + '.' + year + '  ' + hour + ':' + min;
};

module.exports = {
  newDate,
};
