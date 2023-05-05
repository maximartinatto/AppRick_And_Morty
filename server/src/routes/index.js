const { login } = require('../controllers/login');
const { getCharById, getAllChar } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})
router.get("/all",getAllChar);

router.get('/login', (req, res) => {
    login(req, res);
})

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
})

module.exports = router;