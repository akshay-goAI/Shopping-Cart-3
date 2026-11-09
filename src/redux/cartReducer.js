import { REMOVE_ITEM } from './cartActions';

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.item_id !== action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
