export const OCCUPATIONS = [
  '鮭魚',
  'Administrator',
  '導演',
  '演員',
  '工程師',
  '教師',
  '畫家',
].map((name, i) => ({ name: name, _id: i }))
export const FOCUS_ISSUE = ['環保', '核能發電', '人權', '兩岸', '國際關係'].map((name, i) => ({ name: name, _id: i }))
export const WANT_TRY = ['演員', '行動藝術', '街頭表演', '兒童劇', '舞蹈'].map((name, i) => ({ name: name, _id: i }))

export const HOBBITS = [
  '玩樂',
  '傷心小棧',
  '新接龍',
  'LOL',
  '原神',
  'FGO',
].map((name, i) => ({ name, _id: i }))

export const EXPERIENCE = [
  '保全',
  '餐飲服務生',
  '家教',
  '前台服務員',
  '公務員',
  '營運經理',
].map((name, i) => ({ name, _id: i }))

export const PHOTOS = [
  "/sample_1.jpg",
  "/sample_2.png",
  "/sample_3.jpg",
  "/sample_4.png",
  "/sample_5.jpg",
];

export default {
  OCCUPATIONS,
  HOBBITS,
  EXPERIENCE,
  FOCUS_ISSUE,
  WANT_TRY,
  PHOTOS
}
