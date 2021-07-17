/****third party module ***********/
var _ = require("lodash")

const array = _.compact([0, 1, false, 2, '', 3,"test"]);
console.log(array)