'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const students = await models.Student.findAll({
    order: [['position', 'ASC'], ['name', 'ASC']]
  });
  res.json(students);
});

router.post('/',  async function(req, res) {
  const students = models.Student.build(req.body);
  try {
    await students.save();
    res.status(HttpStatus.CREATED).json(students);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const students = await models.Student.findByPk(req.params.id);
  if (students) {
   //await section.destroy();
    res.json(students);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', async function(req, res) {
  const students = await models.Student.findByPk(req.params.id);
  if (students) {
    try {
      await students.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id',  async function(req, res) {
  const students = await models.Student.findByPk(req.params.id);
  if (students) {
    await students.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
