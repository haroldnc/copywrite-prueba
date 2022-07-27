import { NEW_TEXT } from "../actions/actionsTypes";

const initialState = {
    text_list: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_TEXT:
            return {
                ...state,
                text_list: [action.payload, ...state.text_list],
            };
        default:
            return state;
    }
}
