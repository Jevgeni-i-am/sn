import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {postId: 1, post: 'Hi! How are you? :)', likes: 10},
        {postId: 2, post: 'How are you? :)', likes: 20},
        {postId: 3, post: 'Hi! ', likes: 15},
        {postId: 4, post: 'it\'s my first post!', likes: 5}
    ]
};

// Test 1
it ('length of posts should be incremented', ()=>{
    //1. test data
    let action = addPostActionCreator ("IT-kamasutra.com");
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(5);
    expect (newState.posts[4].post).toBe("IT-kamasutra.com");
});

// Test 2
it ('post 4 should be corrected to "IT-kamasutra.com"', ()=>{
    //1. test data
    let action = addPostActionCreator ("IT-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts[4].post).toBe("IT-kamasutra.com");
})

// Test 3
it ('After deleting length of messages should be decremented', ()=>{
    //1. test data
    let action = deletePost (1);

    //2. action
    let newState = profileReducer(state, action);

  //3. expectation
    expect (newState.posts.length).toBe(3);
})

// Test 4
it ("After deleting length shouldn't be decrement if id is incorect", ()=>{
    //1. test data
    let action = deletePost (1000);

    //2. action
    let newState = profileReducer(state, action);

  //3. expectation
    expect (newState.posts.length).toBe(4);
})