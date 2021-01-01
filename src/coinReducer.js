const initialState = {
    data: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'update':
            return {
              ...state,
              data: action.data,
            };
        default:
            return state;
    }
}
