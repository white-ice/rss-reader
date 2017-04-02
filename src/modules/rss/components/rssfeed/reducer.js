import {GET_RSS_DATA} from './actions';

const initialStateRssFeed = {
    arrayRssData: []
};

function rssFeedState(state = initialStateRssFeed, action) {
    switch (action.type) {
        case GET_RSS_DATA:
            return Object.assign({}, state, {
                arrayRssData: action.arrayData
            });
        default:
            return state;
    }
}

const RssFeed = {
    rssFeed: rssFeedState
};

export default RssFeed;
