const addDays = require('date-fns/addDays')
const crypto = require('crypto')

/**
 * Takes an ISO-formatted date string (1990-10-08), and returns an array with [year, month, day] as integers
 * @param {string} dateString an ISO-formatted date string (1990-10-08)
 */
const startDate = (dateString) =>
  dateString.split('-').map((dateSegment) => parseInt(dateSegment, 10))

/**
 * Takes an ISO-formatted date string (1990-10-08), and returns an array with the [year, month, day] of the NEXT day as integers
 * @param {*} dateString an ISO-formatted date string (1990-10-08)
 */
const endDate = (dateString) =>
  addDays(new Date(dateString), 1)
    .toISOString()
    .substring(0, 10)
    .split('-')
    .map((dateSegment) => parseInt(dateSegment, 10))

/**
 * Returns the current datetime as a unix timestamp
 * @returns {number} a unix timestamp
 */
const getCurrentTimestamp = () => {
  return new Date(Date.now()).getTime()
}

/**
 * Returns a title string from a holiday obj to use for .ics files
 * If a national holiday, it returns the title string unmodified
 * If not a national holiday, it returns the title string with the ids of the
 * observing holidays (including "Federal") in brackets
 *
 * ie, "Boxing Day (ON, Federal)"
 *
 * @param {obj} holiday a holiday object containing 'provinces' and 'nameEn' keys
 */
const getTitle = (holiday) => {
  if (
    // all provinces AND federal holidays
    holiday.provinces &&
    holiday.provinces.length === 13 &&
    holiday.federal
  ) {
    return holiday.nameEn
  }

  let provinceIds = []
  holiday.provinces && holiday.provinces.map((p) => provinceIds.push(p.id))
  holiday.federal && provinceIds.push('Federal')

  return `${holiday.nameEn} (${provinceIds.join(', ')})`
}

/**
 * Returns a description string to use for .ics files
 * If a national holiday, returns "National holiday" else a warning that the holiday isn't observed everywhere
 * @param {obj} holiday a holiday object containing a 'provinces' key
 */
const getNationalDescription = (holiday) =>
  holiday.provinces && holiday.provinces.length === 13
    ? 'National holiday'
    : 'This is not a national holiday; it may not be observed in your region'

/**
 * Returns a description string to use for .ics files
 * If a national holiday, returns "National holiday" else a warning that the holiday isn't observed everywhere
 * @param {obj} holiday a holiday object containing a 'provinces' key
 */
const getProvinceDescription = (holiday) => {
  if (!holiday.provinces || holiday.provinces.length === 13) {
    return 'National holiday'
  }

  let provinceIds = []
  holiday.provinces.length === 1
    ? holiday.provinces.map((p) => provinceIds.push(p.nameEn))
    : holiday.provinces.map((p) => provinceIds.push(p.id))

  holiday.federal && provinceIds.push('federal industries')
  if (provinceIds.length > 1) {
    provinceIds[provinceIds.length - 1] = `and ${provinceIds[provinceIds.length - 1]}`
  }

  return `Observed by ${provinceIds.length === 2 ? provinceIds.join(' ') : provinceIds.join(', ')}.`
}

/**
 * Return a unique identifier per holiday.
 * A unique identifier can be found by hashing the date + the title
 * This means events with the same title across multiple years can be added
 * Also events on the same date with different titles
 *
 * @param {Object} holiday a hols holiday object
 */
const getUid = (holiday) => {
  return crypto
    .createHash('sha1')
    .update(new Date(holiday.observedDate).getTime() + getTitle(holiday))
    .digest('base64')
}

module.exports = {
  startDate,
  endDate,
  getCurrentTimestamp,
  getNationalDescription,
  getProvinceDescription,
  getTitle,
  getUid,
}
