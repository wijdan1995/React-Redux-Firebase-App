const initState = {
    projects: [
        { id: '1', title: 'title one is here', content: 'blah blah blaaaaah' },
        { id: '2', title: 'title two is here', content: 'blah blah blaaaaah' },
        { id: '3', title: 'title three is here', content: 'blah blah blaaaaah' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer