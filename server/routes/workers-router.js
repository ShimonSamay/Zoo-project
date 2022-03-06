const WorkerRouter = require("express").Router();
const {
  getAll,
  getById,
  addWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/workers-controller")

WorkerRouter.get("/", getAll);

WorkerRouter.get("/:id", getById);

WorkerRouter.post("/", addWorker);

WorkerRouter.put("/:id", updateWorker);

WorkerRouter.delete("/:id", deleteWorker);

module.exports = WorkerRouter;