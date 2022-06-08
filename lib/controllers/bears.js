const { Router } = require('express');
const Bear = require('../models/bear');

module.exports = Router()
  .get('/:id', async(req, res) => {
    const id = req.params.id;
    const matchingBear = await Bear.getById(id);
    res.json(matchingBear); 
  })  
  .get('/', async (req, res) => {
    const dataBears = await Bear.getAll();
    const finalData = dataBears.map(({ id, name }) => {
      return{
        id,
        name
      };
    });
    res.json(finalData);
  });
