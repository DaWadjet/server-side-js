/**
 * törli az adatbázisból a res.locals.crewMember entitást, amennyiben az létezik,
 * majd redirect a '/legenyseg/:tankid' route-ra
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
