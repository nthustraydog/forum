import {
    createPost as createPostWithApi,
    createResponse as createResponseWithApi,
    getForum as getForumWithApi,
    getPost as getPostWithApi,
} from 'api/forum.js';

// Forum

function setPost(post) {
    return {
        type: '@FORUM/SETPOST',
        post: post
    }
}

function setPostOpen(postOpen) {
    return {
        type: '@FORUM/SETPOSTOPEN',
        postOpen: postOpen
    }
}

// ForumNavbar

export function selectForum(forumId) {
    return (dispatch, getState) => {
        dispatch(setForumId(forumId));
        dispatch(listForum(forumId));
    }
}

export function setForumId(forumId) {
    return {
        type: '@FORUMNAVBAR/SETFORUMID',
        forumId: forumId
    }
}

// ForumForm

export function selectBarker(barkerId) {
    return {
        type: '@FORUMFORM/SELECTBARKER',
        barkerId: barkerId
    }
};

export function setBarkerToggle(barkerToggle) {
    return {
        type: '@FORUMFORM/SETBARKERTOGGLE',
        barkerToggle: barkerToggle
    }
};

export function inputTitle(title) {
    return {
        type: '@FORUMFORM/INPUTTITLE',
        title: title
    }
}

export function inputBody(body) {
    return {
        type: '@FORUMFORM/INPUTBODY',
        body: body
    }
}

export function setTitleDanger(titleDanger) {
    return {
        type: '@FORUMFORM/SETTITLEDANGER',
        titleDanger: titleDanger
    }
}

export function setBodyDanger(bodyDanger) {
    return {
        type: '@FORUMFORM/SETBODYDANGER',
        bodyDanger: bodyDanger
    }
}

export function bark(barkerId, title, body) {
    return (dispatch, getState) => {
        return createPostWithApi(barkerId, title, body).then(post => {
            dispatch(listForum(0));
        }).catch(err => {
            console.error('Error: Cannot create post!', err);
        });
    }
}

// ForumList

export function listForum(forumId) {
    return (dispatch, getStates) => {
        return getForumWithApi(forumId).then(forum => {
            dispatch(setForum(forum));
        }).catch(err => {
            console.error('Error: Cannot list forum!', err);
        });
    }
}

function setForum(forum) {
    return {
        type: "@FORUMLIST/SETFORUM",
        forum: forum
    };
}

// ForumItem

export function openPost(postId) {
    return (dispatch, getState) => {
        return getPostWithApi(postId).then(post => {
            dispatch(setPost(post));
            dispatch(setResponses(post.responses));
            dispatch(setPostOpen(true));
            dispatch(setPostToggle(true));
        }).catch(err => {
            console.error('Error: Cannot open post!', err);
        });
    }
}

// Post

export function setPostToggle(postToggle) {
    return {
        type: '@POST/SETPOSTTOGGLE',
        postToggle: postToggle
    }
}

export function closePost() {
    return (dispatch, getState) => {
        dispatch(setPostToggle(false));
        dispatch(setPost(null));
        dispatch(setPostOpen(false));
        dispatch(listForum(getState().forumNavbar.forumId));
    }
}

// ResponseForm

export function inputText(text) {
    return {
        type: "@RESPONSEFORM/INPUTEXT",
        text: text
    };
}

export function setTextDanger(textDanger) {
    return {
        type: "@RESPONSEFORM/SETTEXTDANGER",
        textDanger: textDanger
    };
}

export function woof(barkerId, postId, text) {
    return (dispatch, getState) => {
        return createResponseWithApi(barkerId, postId, text).then(responses => {
            dispatch(setResponses(responses));
        }).catch(err => {
            console.error('Error: Cannot create response!', err);
        });
    }
}

// ResponseList

export function setResponses(responses) {
    return {
        type: "@RESPONSELIST/SETRESPONSES",
        responses: responses
    }
}


// export function createPost(mood, text) {
//     return (dispatch, getState) => {
//         dispatch(startLoading());
//
//         return createPostFromApi(mood, text).then(post => {
//             dispatch(listPosts(getState().searchText, true));
//         }).catch(err => {
//             console.error('Error creating post', err);
//             dispatch(endLoading());
//         });
//     };
// };
