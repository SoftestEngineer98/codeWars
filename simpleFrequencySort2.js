// Answer 2
const _ = require('lodash');
function solve(xs) {
  return _.orderBy(xs, [_.propertyOf(_.countBy(xs)), _.identity], ['desc', 'asc']);
}