/**
 * Módosítja a res.locals.crewMember-t
 * a postban érkező crewMember alapján (ha van ilyen)
 *
 * sikeres művelet esetén redirect a /crew/:tankid roure-ra
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
