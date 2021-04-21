function sleep(milesecond) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milesecond);
  });
}
function sleepInRange(min, max) {
  const time = Math.floor(Math.random() * (max-min) + min)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

module.exports = {
  sleep,
  sleepInRange
};