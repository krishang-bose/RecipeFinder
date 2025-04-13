import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        time: {
            type: Date,
            default: Date.now
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        message: {
            type: String,
            required: true,
            trim: true
        }   
    }
);

module.exports = mongoose.model('Blog', BlogSchema);
