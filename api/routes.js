const aboutController = require("../controllers/aboutController");
const projectController = require("../controllers/projectController");

module.exports = function (app) {
  // About routes
  app.route("/about").get(aboutController.about);

  // Project routes
  app.route("/api/project").post(projectController.create);
  app.route("/api/project/:id").get(projectController.findProjectById);
};
