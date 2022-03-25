const renderMW = require("../middleware/common/render");

const getCrewMembersMW = require("../middleware/crew/getCrewMembers");
const addCrewMemberMW = require("../middleware/crew/addCrewMember");
const saveCrewMemberMW = require("../middleware/crew/saveCrewMember");
const deleteCrewMemberMW = require("../middleware/crew/deleteCrewMember");

const getTanksMW = require("../middleware/tank/getTanks");
const saveTankMW = require("../middleware/tank/saveTank");
const deleteTankMw = require("../middleware/tank/deleteTank");

module.exports = function (app) {
  const objectRepository = {};

  app.get(
    "/",
    getTanksMW(objectRepository),
    renderMW(objectRepository, "index.html")
  );

  app.use(
    "/tank/new",
    saveTankMW(objectRepository),
    renderMW(objectRepository, "tank_edit.html")
  );

  app.use(
    "/tank/edit/:tankid",
    getTanksMW(objectRepository),
    saveTankMW(objectRepository),
    renderMW(objectRepository, "tank_edit.html")
  );

  app.get(
    "/tank/delete/:tankid",
    getTanksMW(objectRepository),
    deleteTankMw(objectRepository)
  );

  app.get(
    "/crew/:tankid",
    getTanksMW(objectRepository),
    getCrewMembersMW(objectRepository),
    renderMW(objectRepository, "crew.html")
  );

  app.use(
    "/crew/:tankid/:crewmemberid",
    getTanksMW(objectRepository),
    getCrewMembersMW(objectRepository),
    saveCrewMemberMW(objectRepository),
    renderMW(objectRepository, "crew_edit.html")
  );

  app.get(
    "/crew/:tankid/delete/:crewmemberid",
    getCrewMembersMW(objectRepository),
    deleteCrewMemberMW(objectRepository)
  );

  app.use(
    "/crew/:tankid/new",
    addCrewMemberMW(objectRepository),
    renderMW(objectRepository, "crew_edit.html")
  );
};
