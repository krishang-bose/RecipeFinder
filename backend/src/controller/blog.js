import Blog from "../models/blog.js";

export const addBlog = async (req, res) => {
    const { title, description } = req.body;
    try {
        const email = req.user.email;
        if (!title || !description) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const newBlog = new Blog({
            title,
            email,
            description
        });

        await newBlog.save();
        res.status(201).json({
            _id: newBlog._id,
            title: newBlog.title,
            email: newBlog.email,
            description: newBlog.description
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