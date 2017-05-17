// Forum

const initForumState = {
    postOpen: false,
    post: null
}

export function forum(state = initForumState, action) {
    switch(action.type) {
        case '@FORUM/SETPOST':
            return {
                ...state,
                post: action.post
            };
        case '@FORUM/SETPOSTOPEN':
            return {
                ...state,
                postOpen: action.postOpen
            };
        default:
            return state;
    }
}

// ForumNavbar

const initForumNavbarState = {
    forumId: 0
};

export function forumNavbar(state = initForumNavbarState, action) {
    switch(action.type) {
        case '@FORUMNAVBAR/SETFORUMID':
            return {
                forumId: action.forumId
            };
        default:
            return state;
    }
}

// ForumForm

const initForumFormState = {
    barkerId: 0,
    barkerToggle: false,
    title: '',
    body: '',
    titleDanger: false,
    bodyDanger: false
};

export function forumForm(state = initForumFormState, action) {
    switch(action.type) {
        case '@FORUMFORM/SELECTBARKER':
            return  {
                ...state,
                barkerId: action.barkerId
            };
        case '@FORUMFORM/SETBARKERTOGGLE':
            return {
                ...state,
                barkerToggle: action.barkerToggle
            };
        case '@FORUMFORM/INPUTTITLE':
            return {
                ...state,
                title: action.title
            };
        case '@FORUMFORM/INPUTBODY':
            return {
                ...state,
                body: action.body
            };
        case '@FORUMFORM/SETTITLEDANGER':
            return {
                ...state,
                titleDanger: action.titleDanger
            };
        case '@FORUMFORM/SETBODYDANGER':
            return {
                ...state,
                bodyDanger: action.bodyDanger
            };
        default:
            return state;
    }
}

// ForumList

const initForumListState = {
    forum: []
};

export function forumList(state = initForumListState, action) {
    switch(action.type) {
        case '@FORUMLIST/SETFORUM':
            return {
                forum: action.forum
            };
        default:
            return state;
    }
}

// Post

const initPostState = {
    postToggle: false
};

export function post(state = initPostState, action) {
    switch(action.type) {
        case '@POST/SETPOSTTOGGLE':
            return {
                postToggle: action.postToggle
            };
        default:
            return state;
    }
}


// ResponseForm

const initResponseFormState = {
    text: '',
    textDanger: false,
}

export function responseForm(state = initResponseFormState, action) {
    switch(action.type) {
        case '@RESPONSEFORM/INPUTEXT':
            return {
                ...state,
                text: action.text
            };
        case '@RESPONSEFORM/SETTEXTDANGER':
            return {
                ...state,
                textDanger: action.textDanger
            };
        case 'RESPONSEFORM/SETRESPONSES':
            return {
                ...state,
                responses: action.responses
            }
        default:
            return state;
    }
}


//ResponseList

const initResponseListState = {
    responses: []
}

export function responseList(state = initResponseListState, action) {
    switch(action.type) {
        case '@RESPONSELIST/SETRESPONSES':
            return {
                responses: action.responses
            }
        default:
            return state;
    }
}
