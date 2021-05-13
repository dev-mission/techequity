'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const nonprofitpartners = await models.nonprofitpartner.findAll({
    order: [['directorType', 'ASC']] // Can change the first part to be anything within the models
  });
  res.json(nonprofitpartners);
});

router.post('/',  async function(req, res) {
  const nonprofitpartners = models.nonprofitpartner.build(req.body);
  try {
    await nonprofitpartners.save();
    res.status(HttpStatus.CREATED).json(nonprofitpartners);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const nonprofitpartners = await models.Nonprofitpartner.findByPk(req.params.id);
  if (nonprofitpartners) {
   //await section.destroy();
    res.json(nonprofitpartners);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const nonprofitpartners = await models.Nonprofitpartner.findByPk(req.params.id);
  if (nonprofitpartners) {
    try {
      await nonprofitpartners.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const nonprofitpartners = await models.Nonprofitpartner.findByPk(req.params.id);
  if (nonprofitpartners) {
    await nonprofitpartners.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;