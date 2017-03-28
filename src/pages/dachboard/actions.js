import { LS, delay } from '../../utils/index';

export const ADD_RSS = 'ADD_RSS';
export const GET_RSS = 'GET_RSS';

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

export function getTodos() {
    const arrayRss = LS.get('arrayRss');

    console.log('LS rss', arrayRss);

    return (dispatch) => {
        delay(2000).then(() => {
            dispatch({
                type: GET_RSS,
                arrayRss
            });
        });
    };
}
