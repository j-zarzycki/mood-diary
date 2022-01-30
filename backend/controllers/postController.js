const mongoose = require('mongoose');
const Post = require('../models/postModel');
const AppError = require('../utils/appError');


exports.getAllPosts = async(req, res, next) => {
    const posts = await Post.find();

    if(!posts) {
        return next(AppError("No posts found", 404));
    }

    res.status(200).json({
        status: 'success',
        posts
    })
}


exports.getPost = async(req, res, next) => {
    const post = await Post.findById(req.params.id);

    if(!post) {
        return next(AppError("No post found", 404));
    }

    res.status(200).json({
        status: 'success',
        post
    })
}

exports.createPost = async(req, res, next) => {
    const newPost = await Post.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            newPost
        }
    })
}

exports.updatePost = async(req, res, next) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);

    if(!post) {
        return next(AppError("No tour found with this id", 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
          post
        }
      });
}

exports.deletePost = async(req, res, next) => {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return next(new AppError('No post found with that ID', 404));
    }
  
    res.status(204).json({
      status: 'success',
      data: null
    });
}

