//all handlers for routes are kept here
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ERROR: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost); //201 is successfully created
    } catch (error) {
        res.status(409).json({ERROR: error.message});
    }
}