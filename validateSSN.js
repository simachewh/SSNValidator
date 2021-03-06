/**
 * Created by Simachew on 28-Jul-16.
 *
 * A router to handle validation of SSN is defined in this file.
 * This router should be registered by the respective app.
 */

var express = require("express");

var router = express.Router();

router.route("/")
    .get(function (req, res) {
        if (req.query.ssn) {
            var ssn = req.query.ssn;
            res.header("Content-Type", "text/plain");

            if (isSSNValid(ssn)) {
                res.status(200).end("true");
            }
            else {
                res.status(200).end("false");
            }
        } else {
            res.status(400).end();
        }


    })
    .post(function (req, res) {
        res.header("Content-Type", "text/plain");
        res.status(405).end("POST not allowed");
    });

/**
 * Function to validate SSN.
 * The SSN is valid only if there is a dash(-) in the string,
 * if there are only numbers in the first half of the string,
 * and if the length of the strings before and after the dash are 6 and 4 respectively.
 * @param ssn the SSN to validate.
 * @returns {boolean} true if the SSN is valid, false other wise.
 * todo: implement to validate the first half of the string to ddmmyy date format.
 */
function isSSNValid(ssn) {
    
    if (ssn.length == 11
        && ssn.indexOf("-") == 6
        && !nonDigit.test(ssn.substring(0,6))) {
        return true;
    } else {
        return false;
    }
};

module.exports = router;
