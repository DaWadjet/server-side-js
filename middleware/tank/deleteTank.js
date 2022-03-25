/**
 * törli az adatbázisból a res.locals.tank entitást, amennyiben az létezik,
 * majd redirect a / route-ra
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
