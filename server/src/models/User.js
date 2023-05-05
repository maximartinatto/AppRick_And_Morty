const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      // id: {
      //    type: DataTypes.UUID,
      //    defaultValue: DataTypes.UUIDV4,
      //    primaryKey: true,
      //    allowNull: false
      // },
      id:{
         type:DataTypes.INTEGER,
         primaryKey:true,
         allowNull: false
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      password:{
         type: DataTypes.STRING(64),
         allowNull: false
      }
   }, { timestamps: false });
};
