module.exports = (sequelize, DataTypes) => {
  let play = sequelize.define('play', {
    minute: { type: DataTypes.INTEGER }
  });
  return play;
};
