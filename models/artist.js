module.exports = (sequelize, DataTypes) => {
  let artist = sequelize.define('artist', {
    name: {
      type: DataTypes.STRING(100)
    },
    phoneNumber: {
      type: DataTypes.STRING(10)
    }
  });

  artist.associate = models => {
    artist.belongsTo(models.address);
    artist.hasMany(models.song);
    artist.hasMany(models.album);
    artist.belongsToMany(models.instrument, { through: models.play });
  };

  return artist;
};
