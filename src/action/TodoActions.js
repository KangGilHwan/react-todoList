import * as types from './ActionTypes';

var index = 0;

export function create() {
    return {
        type: types.CREATE,
        id: index++
    };
}

export function remove(id) {
    return {
        type: types.REMOVE,
        id: id
    };
}

export function toggle(id) {
    return {
        type: types.TOGGLE,
        id: id
    };
}

export function changeValue(e) {
    return {
        type: types.CHANGE,
        input: e.target.value
    };
}
