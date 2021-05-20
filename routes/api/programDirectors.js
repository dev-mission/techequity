'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const programDirectors = await models.ProgramDirector.findAll({
    order: [['position', 'ASC'], ['name', 'ASC']]
  });
  res.json(programDirectors);
});

router.post('/',  async function(req, res) {
  const programDirectors = models.ProgramDirector.build(req.body);
  try {
    await programDirectors.save();
    res.status(HttpStatus.CREATED).json(programDirectors);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const programDirectors = await models.ProgramDirector.findByPk(req.params.id);
  if (programDirectors) {
   //await section.destroy();
    res.json(programDirectors);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const programDirectors = await models.ProgramDirector.findByPk(req.params.id);
  if (programDirectors) {
    try {
      await programDirectors.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const programDirectors = await models.ProgramDirector.findByPk(req.params.id);
  if (programDirectors) {
    await programDirectors.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
