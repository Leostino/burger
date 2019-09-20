const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");



router.post("/", function(req,res) {

    let userBurger = req.body.burger;

    console.log(userBurger);
    
    burger.insertOne("burger_name", userBurger, function(result) {

        //res.json({ id: result.insertId });

    })

});

router.get("/", function(req, res) {

    burger.selectAll(function(data) {

        let burgerObj = {

            burgers: data

        }

        console.log(burgerObj);

        res.render("index", burgerObj);

    })

});


router.put("/", function(req, res) {

    let condition = "burger_name = "+ req.body.burger;

    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {

        if (result.changedRows == 0) {

            // If no rows were changed, then the ID must not exist, so 404

            return res.status(404).end();

        } else {

            res.status(200).end();

        }

    })

})







module.exports = router;