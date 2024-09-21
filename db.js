const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const AdminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const CourseSchema = new Schema({
    title: String,
    description: String, 
    price: Number,
    imageURL: String,
    creatorId: {
        type: ObjectId,
        ref: 'admins'
    }
})

const PurchaseSchema = new Schema({
    courseId: {
        type: ObjectId,
        ref: 'courses'
    },
    userId: {
        type: ObjectId,
        ref: 'users'
    }
})

const UserModel = mongoose.model('users', UserSchema)
const AdminModel = mongoose.model('admins', AdminSchema)
const CourseModel = mongoose.model('courses', CourseSchema)
const PurchaseModel = mongoose.model('purchases', PurchaseSchema)

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}