const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add-artist', async (req, res) => {
  const newArtist = await db.address.create();
  res.status(201).send(newArtist);
});

app.get('/artists', async (req, res) => {
  const artists = await db.artist.findAll({ include: [db.song] });
  res.status(200).send(artists);
});

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server listening on port 4000...');
  });
});
