import Blog from "../models/blog.js";

export const addBlog = async (req, res) => {
    const { name, message } = req.body;
    try {
        const email = req.user.email;
        if (!name || !message) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const newBlog = new Blog({
            name,
            email,
            message
        });

        await newBlog.save();
        res.status(201).json({
            _id: newBlog._id,
            name: newBlog.name,
            email: newBlog.email,
            message: newBlog.message
        });
    } catch (error) {
        console.log("Error at addBlog controller", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.log("Error at getBlogs controller", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};