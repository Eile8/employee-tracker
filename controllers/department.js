const express = require("express");
const router = express.Router();
//const {Pet,Owner,Toy} = require("../models")

//Get api to view all departments
router.get("/", (req, res) => {
  Department.findAll()
    .then((allDepts) => {
      res.json(allDepts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

// To add a department
router.post("/", (req, res) => {
  console.log(req.body);
  Department.create({
    id: req.body.id,
    department_name:req.body.department_name,
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});