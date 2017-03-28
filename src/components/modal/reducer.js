import { OPEN_MODAL, CLOUSE_MODAL } from './actions';

const initialState = {
    isOpen: false,
    title: 'Модальное окно',
    content: null
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            console.log('Reducer State and Action open', state, action);
            return Object.assign({}, state, {
                isOpen: true,
                title: action.title,
                content: action.content
            });
        case CLOUSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}

const ModalReducer = {
    modal: modalReducer
};

export default ModalReducer;
