module.exports = (sequelize, DataTypes) => {
  let album = sequelize.define('album', {
    name: {
      type: DataTypes.STRING(100)
    },
    releaseDate: {
      type: DataTypes.DATE
    }
  });

  album.associate = models => {
    album.hasMany(models.song);
    album.belongsTo(models.artist);
  };

  return album;
};
