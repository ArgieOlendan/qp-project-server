"use strict";
const project_service = require("../services/project");

var controllers = {
  findProjectById: async (req, res, next) => {
    try {
      const projectId = req.params.id;
      const project = await project_service.findById(projectId);

      project ? res.status(200) : res.status(404);

      res.json(project);

      next();
    } catch (err) {
      console.error("Message: ", err);
    }
  },
  create: async (req, res, next) => {
    try {
      const project = req.body;

      const result = await project_service.create(project);

      result.errors ? res.status(500) : res.status(201);

      res.json(result);
    } catch (err) {
      console.error("Message: ", err);
    }
  },
};

module.exports = controllers;
