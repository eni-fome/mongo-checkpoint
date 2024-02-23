const mongoose  = require("mongoose");

const contactSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: [true, 'Please add a firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please add a lastname']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    age: {
        type: Number,
        required: [true, 'Please add an age']
    }
}, {
        timestamps:true
})

module.exports = mongoose.model('Contact', contactSchema);