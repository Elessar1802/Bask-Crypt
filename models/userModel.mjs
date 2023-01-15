import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name! 😑'],
    },
})

const User = mongoose.model('User', userSchema)

export default User