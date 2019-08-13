const snackbarAction = (object) => {
    return {
        type: 'SNACKBAR',
        payload: object
    }
}

const snackbar = (type, message) => dispatch => {
    let object = {
        type,
        message
    }
    dispatch(snackbarAction(object));
}

export {
    snackbar,
    snackbarAction
}