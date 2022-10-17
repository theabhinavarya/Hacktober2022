const tutorialControllers= require("../Controllers/tutorial.controller");

module.exports = app=>{
    app.get("/api/tutorials",tutorialControllers.findAll);
    app.post("/api/tutorials/",tutorialControllers.create);
    app.put("/api/tutorials/:id",tutorialControllers.update);
    app.delete("/api/tutorials/:id",tutorialControllers.delete);
    app.delete("/api/tutorials",tutorialControllers.deleteAll);
}