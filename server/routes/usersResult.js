const router = require("express").Router();
const userResult = require("../models/userResult");

router.post("/", async (req, res) => {
    try{
            const {email, Q_arr, Timer, R_ans, SpW_ans, W_ans} = req.body;
            console.log(email, Q_arr, Timer, R_ans, SpW_ans, W_ans);
            await new userResult({ ...req.body }).save();
            res.status(200).send({ message: "User Result sent successfully" });
    }
    catch(e)
    {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
module.exports = router;