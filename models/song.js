module.exports = (sequelize, DataTypes) => {
  let song = sequelize.define('song', {
    name: {
      type: DataTypes.STRING(100)
    }
  });

  song.associate = models => {
    song.belongsTo(models.artist);
    song.belongsTo(models.album);
    song.belongsToMany(models.instrument, { through: 'InstrumentSong' });
  };

  return song;
};
