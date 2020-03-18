const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add-artist', async (req, res) => {
  const newAddress = await db.address.create({ addr: req.body.addr });
  const newArtist = await db.artist.create({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    addressId: newAddress.id // ได้มาจากการ create new address
  });

  const newAlbum = await db.album.create({
    name: req.body.album.name,
    releaseDate: req.body.album.releaseDate,
    artistId: newArtist.id // ได้มาจากการ create new artist
  });

  const newSong = await db.song.create({
    name: req.body.song.name,
    artistId: newArtist.id, // ได้มาจากการ create new artist
    albumId: newAlbum.id // ได้มาจากการ create new album
  });

  res.status(201).send({ newAddress, newArtist, newAlbum, newSong });
});

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server listening on port 4000...');
  });
});
