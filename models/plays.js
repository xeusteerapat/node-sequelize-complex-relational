module.exports = (sequelize, DataTypes) => {
  let play = sequelize.define('play', {
    minutes: { type: DataTypes.INTEGER }
  });
  return play;
};
