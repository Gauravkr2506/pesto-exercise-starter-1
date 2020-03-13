const parseMs = ms => {
  let parse_data = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0
  };
  let ms_in_sec = 1000;
  let ms_in_minutes = ms_in_sec * 60;
  let ms_in_hours = ms_in_minutes * 60;
  let ms_in_day = ms_in_hours * 24;

  if (ms >= ms_in_day) {
    parse_data.days = parseInt(ms / ms_in_day);
    ms = ms % ms_in_day
  }

  if (ms >= ms_in_hours) {
    parse_data.hours = parseInt(ms / ms_in_hours);
    ms = ms % ms_in_hours
  }

  if (ms >= ms_in_minutes) {
    parse_data.minutes = parseInt(ms / ms_in_minutes);
    ms = ms % ms_in_minutes
  }

  if (ms >= ms_in_sec) {
    parse_data.seconds = parseInt(ms / ms_in_sec);
    ms = ms % ms_in_sec
  }
  parse_data.milliseconds = ms;

  return parse_data;


};

module.exports = {
  parseMs
};