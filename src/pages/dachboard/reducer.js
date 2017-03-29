import {ADD_RSS, GET_RSS, DELETE_RSS} from './actions';

const initialState = {
    arrayRss: []
};

function rssReducer(state = initialState, action) {
    const arrayRss = state.arrayRss;

    switch (action.type) {
        case ADD_RSS:
            arrayRss.push({id: action.id, rssUrl: action.inputText});

            return Object.assign({}, state, arrayRss);
        case GET_RSS:

            return Object.assign({}, state, {
                arrayRss: action.arrayRss
            });
        case DELETE_RSS:
            const filteredArrayRss = arrayRss.filter(rss => rss.id !== action.delrssItem.id);

            return Object.assign({}, state, { arrayRss: filteredArrayRss });
        default:
            return state;
    }
}

const RssReducer = {
    rss: rssReducer
};

export default RssReducer;
