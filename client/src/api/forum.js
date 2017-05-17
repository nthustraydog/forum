import axios from 'axios';

// Develop server URL
const forumBaseUrl = 'http://localhost:8080/api';

//AWS group11
// const forumBaseUrl = 'http://weathermood-11.us-west-2.elasticbeanstalk.com/api';

// export function createPost(barkerId, title, body) {
//     return new Promise((resolve, reject) => {
//         _createPost(barkerId, title, body);
//         resolve();
//     });
// }

export function createPost(barkerId, title, body) {
    const url = `${forumBaseUrl}/forum/post`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        barkerId,
        title,
        body
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

// export function createResponse(barkerId, postId, text) {
//     return new Promise(function(resolve, reject) {
//         resolve(_createResponse(barkerId, postId, text));
//     });
// }

export function createResponse(barkerId, postId, text) {
    const url = `${forumBaseUrl}/forum/response`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        barkerId,
        postId,
        text
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}


// export function getForum(forumId) {
//     return new Promise(function(resolve, reject) {
//         resolve(_getForum(forumId));
//     });
// }

export function getForum(forumId) {
    let url = `${forumBaseUrl}/forum` + `?forumId=${forumId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

// export function getPost(postId) {
//     return new Promise(function(resolve, reject) {
//         resolve(_getPost(postId));
//     });
// }

export function getPost(postId) {
    let url = `${forumBaseUrl}/forum/post` + `?postId=${postId}`;

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
}

// function _createPost(barkerId, title, body) {
//     const newPost = {
//         id: uuid(),
//         ts: moment().unix(),
//         barkerId: barkerId,
//         title: title,
//         body: body,
//         responses: []
//     };
//
//     const newForum = [
//         newPost,
//         ..._getForum(0)
//     ];
//
//     localStorage.setItem(forumKey, JSON.stringify(newForum));
// }
//
// function _createResponse(barkerId, postId, text) {
//     let wooferId = barkerId;
//     while(wooferId === barkerId) {
//         wooferId = Math.floor(Math.random()*18) + 1;
//     };
//
//     console.log(wooferId);
//     const newResponse = {
//         id: uuid(),
//         ts: moment().unix(),
//         wooferId: wooferId,
//         text: text
//     };
//
//     const post = _getPost(postId);
//
//     const newResponses = [
//         newResponse,
//         ...post.responses
//     ];
//
//     const newPost = {
//         ...post,
//         responses: newResponses
//     };
//
//     const newForum = _getForum(0).map(p => {
//         if(p.id === postId)
//             return newPost;
//         return p;
//     });
//
//     localStorage.setItem(forumKey, JSON.stringify(newForum));
//
//     return newResponses;
// }
//
// function _getForum(forumId) {
//     const forumString = localStorage.getItem(forumKey);
//     const forum = (forumString)? JSON.parse(forumString): [];
//
//     const newForum = (forumId === 0)? forum
//                                     : forum.filter(p => { return p.barkerId === forumId; });
//
//     return newForum;
// }
//
// function _getPost(postId) {
//     const forumString = localStorage.getItem(forumKey);
//     const forum = (forumString)? JSON.parse(forumString): [];
//
//     const post = forum.filter(p => {
//         return p.id === postId;
//     })
//
//     return post[0];
// }

//
// export function listPosts(searchText = '') {
//     let url = `${forumBaseUrl}/forum`;
//     if (searchText)
//         url += `?searchText=${searchText}`;
//
//     console.log(`Making GET request to: ${url}`);
//
//     return axios.get(url).then(function(res) {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.data;
//     });
// }
//
// export function createPost(mood, text) {
//     let url = `${postBaseUrl}/posts`;
//
//     console.log(`Making POST request to: ${url}`);
//
//     return axios.post(url, {
//         mood,
//         text
//     }).then(function(res) {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.data;
//     });
// }
//
// export function createVote(id, mood) {
//     let url = `${postBaseUrl}/posts/${id}/${mood.toLowerCase()}Votes`;
//
//     console.log(`Making POST request to: ${url}`);
//
//     return axios.post(url).then(function(res) {
//         if (res.status !== 200)
//             throw new Error(`Unexpected response code: ${res.status}`);
//
//         return res.data;
//     });
// }
