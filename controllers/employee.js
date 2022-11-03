//Get api to view all emplyee
router.get("/", (req, res) => {
    employee.findAll()
      .then((allEmployee) => {
        res.json(allEmployee);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
  
  // To add a employee
  router.post("/", (req, res) => {
    console.log(req.body);
    employee.create({
      id: req.body.id,
      manager_id: req.body.manager_id,
      roleName_id: req.body.roleName_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });

  //To update employee
  router.put("/:id", (req, res) => {
    Employee.update(
      {
        id: req.body.id,
        manager_id: req.body.manager_id,
        roleName_id: req.body.roleName_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      })
      },
  ).then((updatedEmployee) => {
      if (updatedEmployee[0] === 0) {
          return res.status(404).json({ msg: "No employee found!" });
      }
      res.json(updatedEmployee);
  })
      .catch((err) => {
          console.log(err);
          res.status(500).json({ err: err });
      });
