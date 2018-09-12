//DEPENDENCIES ===============================================

var db = require("../models");

//ROUTES ===============================================

module.exports = function(app){

    app.get("/", function(req,res){
        db.Burger.findAll({}).then(function(data){
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    //check create function params
    app.post("/api/burgers", function(req,res){
    
        db.Burger.create({
            name: req.body.name,
            inCart: req.body.inCart
        }).then(function(result){
            res.json({ id:result.insertId });
        });
    });
    

    app.put("/api/burgers/:id", function(req,res){
    
        db.Burger.update({inCart: req.body.inCart},
            {
              where: {
                id:req.params.id
              }
            }).then(function(result){
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    
    app.delete("/api/burgers/:id", function(req,res){
    
        db.Burger.destroy({
            where: {
              id:req.params.id
            }
        }).then(function(result){
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });


}