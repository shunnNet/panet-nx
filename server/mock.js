// https://github.com/nuxt/nuxt.js/issues/4580
// can't use alias in nuxt

const { random } = require('../assets/scripts/helpers/array.js')
const {
  SKILLS,
  GENDERS,
  CITIES,
  WORK_PAY_FORM,
  ACTIVITY_TYPES,
} = require('../assets/scripts/business/constant.js')
const {
  OCCUPATIONS,
  HOBBITS,
  EXPERIENCE,
  FOCUS_ISSUE,
  WANT_TRY,
  PHOTOS
} = require('./mockData.js')

const Random = require('mockjs').Random

const randomPickAtLeast = (list, count = 1) => {
  return count > 1 ? random(list, count) : random(list, 1)
}

Random.extend({
  gender() {
    return this.pick(GENDERS)
  },
  skill(count = 1) {
    return randomPickAtLeast(SKILLS, count)
  },
  city(count = 1) {
    return randomPickAtLeast(CITIES, count)
  },
  activity(count = 1) {
    return randomPickAtLeast(ACTIVITY_TYPES, count)
  },
  payform(count = 1) {
    return randomPickAtLeast(WORK_PAY_FORM, count)
  },
  occupation() {
    return this.pick(OCCUPATIONS)
  },
  focus_issue(count = 1) {
    return randomPickAtLeast(FOCUS_ISSUE, count)
  },
  want_try(count = 1) {
    return randomPickAtLeast(WANT_TRY, count)
  },
  hobbit(count = 1) {
    return randomPickAtLeast(HOBBITS, count)
  },
  experience(count = 1) {
    return randomPickAtLeast(EXPERIENCE, count)
  },
  photo(count =1 ){
    return this.pick(PHOTOS)
  }
})
