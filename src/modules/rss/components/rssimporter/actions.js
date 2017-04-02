import { LS, delay } from '../../../../utils/index';
import $ from 'jquery';

export const ADD_RSS = 'ADD_RSS';
export const GET_RSS = 'GET_RSS';
export const DELETE_RSS = 'DELETE_RSS';
export const GET_RSS_DATA = 'GET_RSS_DATA';

export function addRssUrl(inputText) {
    return {
        type: ADD_RSS,
        inputText
    };
}

export function deleteRss(delRssItem) {
    return {
        type: DELETE_RSS,
        delRssItem
    };
}

export function getRssLS() {
    let arrayRss = LS.get('arrayRss');

    if (!arrayRss) {
        arrayRss = [];
    }

    return (dispatch) => {
        delay(2000).then(() => {
            dispatch({
                type: GET_RSS,
                arrayRss
            });
        });
    };
}

export function getRssData(idx, arrayRssData) {
    // console.log(arrayRssData);
    // console.log($(arrayRssData).find('channel').children('title').text());

    const rssDataDoc = {
        id: idx,
        data: {
            title: $(arrayRssData).find('channel').children('title').text()
        }
    };

    return {
        type: GET_RSS_DATA,
        rssDataDoc
    };
}
