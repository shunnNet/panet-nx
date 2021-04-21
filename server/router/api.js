const express = require('express')
const router = express.Router()

const Mock = require('mockjs')
const mockData = require('../../assets/scripts/business/constant.js')
const { sleepInRange } = require('../utils/utils.js')

const admin = {
  user: {
    _id: 3345678,
    photo: '/sample_admin.jpg',
    name: 'Net Chen',
    age: 31,
    occupation: { name: 'Admin', _id: 334555 },
    email: 'wendell20904102@gmail.com',
    gender: { name: '男', _id: 0 },
    skills: [
      { name: 'Javascript', _id: 32323 },
      { name: 'Typescript', _id: 32324 },
      { name: 'Vue', _id: 32325 },
    ],
    areas: [{ name: '台北市', _id: 23323 }],
    hobbits: [],
    focus_issue: [],
    want_try: [],
    description: '',
    medias: [],
    experiences: [],
  },
}

router.get('/', (req, res, next) => {
  res.json({
    msg: 'from server',
  })
})

const sampleDict = {
  3345678: admin,
}

router.get('/user/:id', async (req, res, next) => {
  await sleepInRange(2000, 3000)
  let response = {}
  if (!sampleDict[req.params.id]) {
    response = Mock.mock({
      user: {
        _id: req.params.id,
        photo: '@PHOTO(1)',
        name: '@name',
        occupation: '@OCCUPATION',
        'age|18-80': 20,
        email: '@email',
        gender: '@GENDER',
        skills: '@SKILL(5)',
        areas: '@CITY(2)',
        hobbits: '@HOBBIT(3)',
        experiences: '@EXPERIENCE(3)',
        focus_issue: '@FOCUS_ISSUE(3)',
        want_try: '@WANT_TRY(2)',
        description: '@paragraph',
      },
    })
  } else {
    response = sampleDict[req.params.id]
  }

  res.json(response)
})

router.get('/query', (req, res, next) => {
  console.log(req.query, 'req.query')
  let response = {}
  switch (req.query.type) {
    case 'user':
      response = {
        skills: mockData.SKILLS,
        areas: mockData.CITIES,
      }
      break
    default:
      break
  }
  res.json(response)
})

router.post('/query', async (req, res, next) => {
  await sleepInRange(1000, 1600)
  const requestPage = req.body.page ? req.body.page : 1;
  const maxPage = 3
  const haveNextPage = requestPage < maxPage
  const haveData = requestPage <= maxPage
  // TODO: requestPage <= 0

  let response = {
    list: [],
    haveNextPage,
    page: requestPage,
  }
  if (haveData) {
    switch (req.body.field) {
      case 'user':
        response.list = Array(15)
          .fill(1)
          .map(() =>
            Mock.mock({
              '_id|1-100000000': 1,
              photo: '@PHOTO(1)',
              name: '@name',
              occupation: '@OCCUPATION',
              skills: '@SKILL(3)',
              areas: '@CITY',
              'medias|1-10': ['media'],
              'experiences|1-10': ['experience'],
            })
          )
        break
      default:
        break
    }
  }
  if (requestPage === 1) {
    response.list.splice(1, 1, admin.user)
  }

  res.json(response)
})

module.exports = router
