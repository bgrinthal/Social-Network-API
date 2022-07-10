const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

// Creates virtual property that gets reaction count amount
thoughtSchema.virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

// Initialize Thought model
const Thought = model('Thought', thoughtSchema)

// Exports Thought model
module.exports = Thought;