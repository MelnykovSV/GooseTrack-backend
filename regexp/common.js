const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;
const monthRegexp = /^\d{4}-(0[1-9]|1[0-2])$/;
const timeRegexp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
module.exports = {
  emailRegexp,
  dateRegexp,
  timeRegexp,
  monthRegexp,
};
