'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const events = await models.Event.findAll({
    order: [['position', 'ASC'], ['name', 'ASC']]
  });
  res.json(events);
});

router.post('/',  async function(req, res) {
  const events = models.Event.build(req.body);
  try {
    await events.save();
    res.status(HttpStatus.CREATED).json(events);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const events = await models.Event.findByPk(req.params.id);
  if (events) {
   //await section.destroy();
    res.json(events);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const events = await models.Event.findByPk(req.params.id);
  if (events) {
    try {
      await events.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const events = await models.Event.findByPk(req.params.id);
  if (events) {
    await events.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
