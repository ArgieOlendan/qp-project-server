const Project = require("../models/Project");

var project = {
  findById: async (projectId) => {
    try {
      const project = await Project.findById(projectId);

      return project;
    } catch (err) {
      console.error(err);
      return err;
    }
  },
  create: async ({ company_name, date, products }) => {
    try {
      const project = new Project({ company_name, date, products });

      let result;

      await project
        .save()
        .then((project) => {
          result = project;
        })
        .catch((err) => {
          console.error(err);
          result = err;
        });

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  },
};

module.exports = project;
