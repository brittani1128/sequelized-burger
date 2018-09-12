
module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        name: DataTypes.STRING,
        inCart: { type: DataTypes.BOOLEAN,
                  defaultValue:false }
        
    });
    return Burger;
};
