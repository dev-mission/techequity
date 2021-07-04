const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/uploads', require('./uploads'));
router.use('/users', require('./users'));
router.use('/events', require('./events'));
router.use('/nonprofitpartners', require('./nonprofitpartners'));
router.use('/students', require('./students'));
router.use('/donors', require('./donors'));
router.use('/organizations', require('./organizations'));
router.use('/programDirectors', require('./programDirectors'));

module.exports = router;
