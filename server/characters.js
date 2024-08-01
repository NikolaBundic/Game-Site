var express = require('express')
var router = express.Router();

const characters = [
  {
    name: 'Ryu',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/d/d3/RyuPortrait.jpg',
    description: 'A student of master Sheng Long.',
    height: 178,
    weight: 68,
    typeCharacter: '0'
  },
  {
    name: 'E. Honda',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/6/6d/HondaPortrait.jpg',
    description: 'Training to become greatest wrestler.',
    height: 188,
    weight: 137,
    typeCharacter: 'A'
  },
  {
    name: 'Ken',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/b/b7/KenPortrait.jpg',
    description: 'Only other disciple of master Sheng Long.',
    height: 178,
    weight: 76,
    typeCharacter: 'B'
  },
  {
    name: 'Blanka',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/a/a2/BlankaPortrait.jpg',
    description: 'Fighter from jungles of Brazil.',
    height: 196,
    weight: 99,
    typeCharacter: 'B'
  },
  {
    name: 'Guile',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/0/05/GuilePortrait.jpg?width=325',
    description: 'Ex-member of elite special force.',
    height: 185,
    weight: 87,
    typeCharacter: '0'
  },
  {
    name: 'Chun Li',
    imgUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/2/26/ChunLiPortrait.jpg',
    description: 'Tracking smuggling operation Shadoloo.',
    height: 173,
    weight: NaN,
    typeCharacter: 'A'
  }
];

router.get('/', (req, res) => {
  return res.status(200).json(characters);
});

router.post('/', (req, res) => {
  let character = req.body;
  console.log(character);;
  characters.push(character);
  console.log(characters);
  return res.status(200).json(character);
});

module.exports = router;