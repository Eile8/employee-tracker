//Get api to view all roles
router.get("/", (req, res) => {
    roleName.findAll()
      .then((allRoleName) => {
        res.json(allRoleName);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
  
  // To add a role
  router.post("/", (req, res) => {
    console.log(req.body);
    roleName.create({
      id: req.body.id,
      department_id:req.body.department_id,
      title: req.body.title,
      salary: req.body.salary,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });