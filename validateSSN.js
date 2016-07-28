/**
 * Created by Simachew on 28-Jul-16.
 */

var express = require("express");

var router = express.Router();

router.route("/")
    .get(function (req, res) {
        if(req.query.ssn){
            var ssn = req.query.ssn;

            if(ssn.length == 11 && ssn.indexOf("-") !== -1){
                res.header("Content-Type", "text/plain");
                res.status(200).end(ssn + " true");
            }
            else
            {
                res.header("Content-Type", "text/plain");
                res.status(400).end(ssn + " false");
            }
        }


    });

module.exports = router;
