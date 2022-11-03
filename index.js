const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const departmentRoutes = require("./controllers/department");
app.use("/api/department",departmentRoutes)

/*const ownersRoutes = require("./controllers/ownersController");
app.use("/api/owners",ownersRoutes)

const toysRoutes = require("./controllers/toysController");
app.use("/api/toys",toysRoutes)
*/
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});