import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']
        },
        description: {
            type: String,
            required: true,
            trim: true
        }
    },
    {timestamps: true}
);

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
