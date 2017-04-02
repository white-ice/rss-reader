import {} from './actions';

const initialStateRssImporter = {
    arrayRssUrl: [],
    error: ''
};

function rssImporterState(state = initialStateRssImporter) {
    return state;
}

const RssImporter = {
    rssImporter: rssImporterState
};

export default RssImporter;
