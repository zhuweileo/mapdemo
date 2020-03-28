export default {
    state: {
        showVideoActions: false,
    },
    reducers: {
        setState(state, payload){
            return {...state, ...payload};
        }
    },
    effects: {

    }
}