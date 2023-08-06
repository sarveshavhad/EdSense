const mongoose = require('mongoose')

const userResultSchema = new mongoose.Schema({
	email: { type: String, required: true },
    Q_arr: { type: Array, required: true },
    Timer: {type: Array, required: true },
    R_ans: { type: Array, required: true },
    SpW_ans: { type: Array, required: true },
    W_ans: { type: Array, required: true },
    // Result: {type: String, required: true}

});
const userResult = mongoose.model("userResult", userResultSchema);

module.exports = userResult;