var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({

    question: {
        type: String,
        required: [true, "Question can't be blank"],
        minlength: [8, "Question min characters is 8"]
    },
    option1: {
        type: String,
        required: [true, "Option is required"],
        minlength: [3, "Option min characters is 3"],
        votes: {type: Number}
    },
    option2: {
        type: String,
        required: [true, "Option is required"],
        minlength: [3, "Option min characters is 3"],
        votes: { type: Number}
    },
    option3: {
        type: String,
        required: [true, "Option is required"],
        minlength: [3, "Option min characters is 3"],
        votes: { type: Number}
    },
    option4: {
        type: String,
        required: [true, "Option is required"],
        minlength: [3, "Option min characters is 3"],
        votes: { type: Number}
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

var Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;