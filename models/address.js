module.exports = (sequelize, DataTypes) => {
  let address = sequelize.define('address', {
    addr: { type: DataTypes.STRING }
  });

  address.associate = models => {
    address.hasMany(models.artist);
  };

  return address;
};
