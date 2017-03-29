import { LS, delay } from '../../utils/index';

export const ADD_RSS = 'ADD_RSS';
export const GET_RSS = 'GET_RSS';
export const DELETE_RSS = 'DELETE_RSS';
export const GET_RSS_DATA = 'GET_RSS_DATA';

export function addRss(arrayRss, inputText) {
    let id = 1;

    if (arrayRss.length) {
        id = arrayRss[arrayRss.length - 1].id + 1;
    }
    return {
        type: ADD_RSS,
        id, inputText
    };
}

export function deleteRss(delrssItem) {
    return {
        type: DELETE_RSS,
        delrssItem
    };
}

export function getRssLS() {
    const arrayRss = LS.get('arrayRss');

    return (dispatch) => {
        delay(2000).then(() => {
            dispatch({
                type: GET_RSS,
                arrayRss
            });
        });
    };
}

export function getRssData(arrayRss) {

    return {
        type: GET_RSS_DATA,
        arrayRss
    };
}
