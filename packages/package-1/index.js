const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';

/**
 * Get current age
 * @param {string} dob date of birth in format DD/MM/YYYY
 * @returns {number} currentAge
 */
const getCurrentAge = dob => {
  const today = dayjs();
  const dobObj = dayjs(dob, DEFAULT_DATE_FORMAT);

  return today.diff(dobObj, 'year');
};

module.exports = {
  getCurrentAge,
};
