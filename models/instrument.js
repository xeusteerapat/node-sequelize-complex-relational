module.exports = (sequelize, DataTypes) => {
  let instrument = sequelize.define('instrument', {
    name: {
      type: DataTypes.STRING(100)
    }
  });

  instrument.associate = models => {
    instrument.belongsToMany(models.artist, { through: models.play });
    instrument.belongsToMany(models.song, { through: 'InstrumentSong' });
  };

  return instrument;
};
