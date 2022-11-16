const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
 exports.create = (req, res) => {

     const newTutorial = {
         title : req.body.title,
         description : req.body.description,
         published : req.body.published
     }

     Tutorial.create(newTutorial)
         .then(data => {
             res.send(data);
         });
 };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Tutorial.findAll()
        .then(data => {
            res.send(data);
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};
