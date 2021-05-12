'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const donors = await models.Donor.findAll({
    order: [['donorType', 'ASC']] // Can change the first part to be anything within the models
  });
  res.json(donors);
});

router.post('/',  async function(req, res) {
  const donors = models.Donor.build(req.body);
  try {
    await donors.save();
    res.status(HttpStatus.CREATED).json(donors);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const donors = await models.Donor.findByPk(req.params.id);
  if (donors) {
   //await section.destroy();
    res.json(donors);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const donors = await models.Donor.findByPk(req.params.id);
  if (donors) {
    try {
      await donors.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const donors = await models.Donor.findByPk(req.params.id);
  if (donors) {
    await donors.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
