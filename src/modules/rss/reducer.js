import {ADD_RSS, DELETE_RSS} from './actions';
import {isEmpty, isObject} from 'lodash';

const initialState = {
    arrayRssUrl: [],
    error: ''
};

function rssImporterState(state = initialState, action) {
    switch (action.type) {
        case ADD_RSS:
            if (!action.error) {
                if (isEmpty(state.arrayRssUrl) && isObject(state.arrayRssUrl)) state.arrayRssUrl = [];

                let id = 1;

                if (state.arrayRssUrl.length) {
                    id = state.arrayRssUrl[state.arrayRssUrl.length - 1].id + 1;
                }

                state.arrayRssUrl.push({id: id, rssUrl: action.inputText});
            }

            return Object.assign({}, state, {
                arrayRss: state.arrayRssUrl
            });
        case DELETE_RSS:
            const filteredArrayRss = state.arrayRssUrl.filter(rss => rss.id !== action.delRssItem.id);

            return Object.assign({}, state, { arrayRssUrl: filteredArrayRss });
        default:
            return state;
    }
}

const RssImporter = {
    rssImporter: rssImporterState
};

export default RssImporter;
