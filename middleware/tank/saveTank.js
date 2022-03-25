/**
 * Módosítja vagy létrehozza a postban érkező tankot (ha van ilyen)
 * ha a res.locals.tank jelen van, akkor update, különben create
 *
 * sikeres művelet esetén redirect a / route-ra,
 * különben kirendereli a küldött adatokat a formra
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
