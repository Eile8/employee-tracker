const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Employee.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
    },
    password: {
        type:DataTypes.STRING,
        validate: {
            len:[8]
        }
    }
}
);

module.exports=Employee