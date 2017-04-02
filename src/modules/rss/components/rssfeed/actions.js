import { load } from '../../../../utils/index';

export const GET_RSS_DATA = 'GET_RSS_DATA';

export function getRssData(arrayRssUrl) {
    const parser = new DOMParser();
    const arrayData = [];

    return dispatch => {
        arrayRssUrl.map(item => {
            load(item.rssUrl).then(dataXML => {
                const parsData = parser.parseFromString(dataXML, 'text/xml');
                const titleFeed = parsData.getElementsByTagName('title')[0].childNodes[0].nodeValue;

                arrayData.push({titleFeed});

                dispatch({
                    type: GET_RSS_DATA,
                    arrayData
                });
            });
        });
    };
}
