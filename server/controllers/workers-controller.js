const Worker = require("../models/workers-model");

const getAll = async (req , res) => {
    await Worker.find()
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

const getById = async (req , res) => {
    await Worker.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

const addWorker = async (req , res) => {
   await Worker.create(req.body)
   .then(data => res.send(data))
   .catch(err =>  res.status(400).send({message:err}))
}

const updateWorker = async (req , res) => {
    await Worker.findByIdAndUpdate(req.params.id , req.body)
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

const deleteWorker = async (req , res) => {
    await Worker.findByIdAndRemove(req.params.id)
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

module.exports = {
    getAll ,
    getById ,
    addWorker ,
    updateWorker ,
    deleteWorker
}