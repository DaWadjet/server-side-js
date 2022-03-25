/**
 * Betölti a res.params.tankId entitáshoz tartozó legénységet
 * ha a req.params.crewMemberId undefined,
 * különben csak megadott id-jú crewMembert
 *
 * az eredményt a res.locals.crewMember vagy crewMembers által érhetjük el a továbbiakban
 *  */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
