var session = require('express-session'),
    Poll = require('../models/poll'),
    User = require('../models/user');

module.exports = {

    create: (req,res) => {
        let newPoll = new Poll(req.body);
        newPoll.save((err) => {
            if(err) {
                return res.json(err);
            }
            return res.json(newPoll);
        })
    },
    show: (req, res) => {
        Poll.findOne({_id: req.params.id})
        .populate('votes')
        .exec( function(err, poll) {
            if(err) {
                return res.json(err.errors);
            }
            return res.json(poll)
        })
    },
    index: (req, res) => {
        Poll.find({})
        .populate('_user')
        .exec( function(err, polls) {
            if(err) {
                return res.json(err.errors);
            }
            return res.json(polls)
        })
      },
    add: (opt,req, res) => {
    Poll.update({_id: req.params.id}, {$inc: {opt:{votes: 1} }}, (err) => {
        if(err) {
        return res.json(err);
        }
    })
    return res.json(newAnswer);
    },
    delete: (req, res) => {
    Poll.findByIdAndRemove({_id: req.params.id}, function(err, poll) {
        if(err) {
            return res.json(err.errors);
        }
        return res.json(poll)
    })
    }
}