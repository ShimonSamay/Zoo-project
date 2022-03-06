const AnimalRouter = require("express").Router();
const {
  getAll,
  getById,
  AddAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animals-controller");

AnimalRouter.get("/", getAll);

AnimalRouter.get("/:id", getById);

AnimalRouter.post("/", AddAnimal);

AnimalRouter.put("/:id", updateAnimal);

AnimalRouter.delete("/:id", deleteAnimal);

module.exports = AnimalRouter;
