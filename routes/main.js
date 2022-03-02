const mongoose = require("mongoose");

//Models
var Hero = require("../models/Hero");

module.exports = function(app, obj){

    app.get("/", function(req, res){
        res.render("master", {domain:obj.domain});
    });

    app.get("/heroes", function(req, res){
        Hero.find(function(err, data){
            if(!err){
                res.json({result:1, heroes:data});
            }else{
                res.json({result:0, msg:err});
            }
        });
    });

    /*
    var hero = new Hero({
        Image: "3_captain.jpeg",
        Name: "Captain",
        Power: 70
    });

    hero.save(function(err){
        if(!err){console.log("hero saved.");}
    });
    */
}