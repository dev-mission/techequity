'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const organizations = await models.Organization.findAll({
    order: [['name', 'ASC']]
  });
  res.json(organizations);
});

router.post('/',  async function(req, res) {
  const organizations = models.Organization.build(req.body);
  try {
    await organizations.save();
    res.status(HttpStatus.CREATED).json(organizations);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const organizations = await models.Organization.findByPk(req.params.id);
  if (organizations) {
   //await section.destroy();
    res.json(organizations);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const organizations = await models.Organization.findByPk(req.params.id);
  if (organizations) {
    try {
      await organizations.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const organizations = await models.Organization.findByPk(req.params.id);
  if (organizations) {
    await organizations.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
