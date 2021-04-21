const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  // open it if have non-simple header: PUT, DELETE, PATCH
  // simple : HEAD, GET, POST
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
  // );

  // open it if have custom header
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-Width, Content-Type, Accept, Authorization, x-mock-response-code"
  // );

  next()
};

module.exports = cors;
