function demo(state = {
    isNow: true
}, action) {
    state = {
        ...state,
        error: '',
        success: '',
    }
    switch (action.type) {
        default:
            return state
    }
}

export default demo