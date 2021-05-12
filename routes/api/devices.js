'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const devices = await models.Device.findAll({
    order: [['deviceType', 'ASC']]
  });
  res.json(devices);
});

router.post('/',  async function(req, res) {
  const devices = models.Device.build(req.body);
  try {
    await devices.save();
    res.status(HttpStatus.CREATED).json(devices);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const devices = await models.Device.findByPk(req.params.id);
  if (devices) {
   //await section.destroy();
    res.json(devices);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const devices = await models.Device.findByPk(req.params.id);
  if (devices) {
    try {
      await devices.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const devices = await models.Device.findByPk(req.params.id);
  if (devices) {
    await devices.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
