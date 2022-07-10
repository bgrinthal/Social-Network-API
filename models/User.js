const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // valid email address match
        // match: [/.+@.+\..+/]
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
    {
        toJSON: {
            // include virtuals with our response
            virtuals: true
        },
        id: false
    });

// Create virtual property that gets friend count amount
userSchema.virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// Initialize User model
const User = model('User', userSchema);

// Export user model
module.exports = User;