const mongoose = require("mongoose");
const {Schema} = mongoose;

const NotificationSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    passwred:{
        type:String,
        required:true
    },
    confirPassword:{
        type:String,
        required:true
    },
    
})

const AdminSchema = mongoose.model("Admin",NotificationSchema);

module.exports = AdminSchema;
