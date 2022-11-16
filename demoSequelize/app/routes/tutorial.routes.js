module.exports = app => {
    const tutorials = require("../controller/tutorial.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all Tutorials
    router.get("/",tutorials.findAll);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    app.use('/app/tutorials', router);
}