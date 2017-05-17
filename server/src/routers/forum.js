const express = require('express');
const bodyParser = require('body-parser');
const forumModel = require('../model/forum.js');

const router = express.Router();
router.use(bodyParser.json());


// Create Post
router.post('/forum/post', function(req, res) {
    const {barkerId, title, body} = req.body;
    if (!barkerId || !title || !body) {
        const err = new Error('barkerId, title and body are required');
        err.status = 400;
        throw err;
    }

    forumModel.createPost(barkerId, title, body).then(post => {
        res.json(post);
    });
});

// Create Response
router.post('/forum/response', function(req, res) {
    const {barkerId, postId, text} = req.body;
    if (!barkerId || !postId || !text) {
        const err = new Error('barkerId, postId and text are required');
        err.status = 400;
        throw err;
    }

    forumModel.createResponse(barkerId, postId, text).then(responses => {
        console.log('responses');
        console.log(responses);
        res.json(responses);
    });
});

// getForum
router.get('/forum', function(req, res) {
    forumModel.getForum(req.query.forumId).then(forum => {
        console.log('forum');
        console.log(forum);
        res.json(forum);
    });
});

// getPost
router.get('/forum/post', function(req, res) {
    forumModel.getPost(req.query.postId).then(post => {
        console.log('post');
        console.log(post);
        res.json(post);
    });
});

// // List
// router.get('/posts', function(req, res) {
//     postModel.list(req.query.searchText).then(posts => {
//         res.json(posts);
//     });
// });
//
// // Create
// router.post('/posts', function(req, res) {
//     const {mood, text} = req.body;
//     if (!mood || !text) {
//         const err = new Error('Mood and text are required');
//         err.status = 400;
//         throw err;
//     }
//     postModel.create(mood, text).then(post => {
//         res.json(post);
//     });
// });
//
// // Vote
// router.post('/posts/:id/:mood(clear|clouds|drizzle|rain|thunder|snow|windy)Votes', function(req, res) {
//     const {id, mood} = req.params;
//     if (!id || !mood) {
//         const err = new Error('Post ID and mood are required');
//         err.status = 400;
//         throw err;
//     }
//     voteModel.create(id, mood).then(post => {
//         res.json(post);
//     });
// });
//
// // Todo
//
// //list
// router.get('/todos', function(req, res) {
//     todoModel.list(req.query.accomplishedOnly, req.query.searchText).then(todos => {
//         res.json(todos);
//     });
//
// });
//
// //create
// router.post('/todos', function(req, res) {
//     const {mood, text} = req.body;
//     if (!mood || !text) {
//         const err = new Error('Mood and text are required');
//         err.status = 400;
//         throw err;
//     }
//
//     todoModel.create(mood, text).then(post => {
//         res.json(post);
//     });
// });
//
// //accomplish
// router.put('/todos/:id', function(req, res) {
//     const id = req.params;
//
//     if(!id) {
//         const err = new Error('Todo ID is required');
//         err.status = 400;
//         throw err;
//     }
//
//     todoModel.accomplish(id.id).then(todo => {
//         res.json(todo);
//     });
// })

module.exports = router;
