const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");



router.get("/", function(req, res) {

    burger.selectAll(function(data) {

        let burgerObj = {

            burgers: data

        }

        console.log(burgerObj);

        res.render("index", burgerObj);

    })

});


router.post("/", function(req, res) {

    console.log(req.body.burger_name);
    
	if(req.body.burger_name !== "") {


		burger.insertOne(req.body.burger_name.trim(), function(res) {

            //res.redirect("/");
             
		});
	}
});


router.put("/:id", function(req, res) {

    let updateBurger = req.params;
        
    console.log(updateBurger.id);    
        
    burger.updateOne(updateBurger.id, function(res) {
            
        //res.redirect("/");
        
    });
    
})





module.exports = router;