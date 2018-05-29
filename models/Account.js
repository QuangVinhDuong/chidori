const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AccountSchema = new mongoose.Schema({
    userID: String,
    username: String,
    password: String,
    fullname: String,
    email: String,
    phone: String,
    address: String,
    type: {
        typeID: String,
        typeName: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { collection: 'account' });

AccountSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

AccountSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Account', AccountSchema);