/**
 * Ha érkezett adat a post requestben, akkor létrehozunk abból egy entitást
 * és redirect('/crewMembers/:tankid')
 * ha nem érkezett adat postban, nem csinálunk semmit
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
