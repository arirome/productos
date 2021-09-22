const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true
    }
},{
    versionKey: false
});


module.exports = model('User', UserSchema);