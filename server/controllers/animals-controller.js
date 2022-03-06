const Animal = require("../models/animals-model");

const getAll = async (req , res) => {
   await Animal.find()
   .then(data => res.send(data))
   .catch(err => console.log(err))
};

const getById = async (req , res) => {
    await Animal.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
};

const AddAnimal = async (req , res) => {
    await Animal.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
};

const updateAnimal = async (req , res) => {
    await Animal.findByIdAndUpdate(req.params.id , req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
};

const deleteAnimal = async (req , res) => {
    await Animal.findByIdAndRemove(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
};

module.exports = {
    getAll ,
    getById ,
    AddAnimal ,
    updateAnimal ,
    deleteAnimal
}