import * as CONSTANTS from "./constant";
export const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONSTANTS.GET_COUNTERS_SUCCESS:
            return {
                ...state,
                counterSuccess: action.response,
            };

        case CONSTANTS.GET_COUNTERS_FAILURE:
            return {
                ...state,
                counterFailure: action.error,
            };

        default:
            return state;
    }
};
