/**
 * Betölti az összes harckocsit az adatbázisból,
 * ha a req.params.tankId undefined,
 * különben a megadott id-jú harckocsit
 *
 * az eredményt a res.locals.tank vagy tanks által érhetjük el a továbbiakban /
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
