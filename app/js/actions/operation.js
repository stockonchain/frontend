export const REQUEST_OPERATIONS = 'REQUEST_OPERATIONS'
export const RECEIVE_OPERATIONS = 'RECEIVE_OPERATIONS'
export const SELECT_OPERATION = 'SELECT_OPERATION'

export const selectOperation = operation => ({
    type: SELECT_OPERATION,
    operation
})

export const requestOperations = reddit => ({
  type: REQUEST_OPERATIONS,
  reddit
})

const receiveOperations = (reddit, json) => ({
  type: RECEIVE_OPERATIONS,
  reddit,
  operations: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

export const fetchOperations = reddit => dispatch => {
  dispatch(requestOperations(reddit))
  return fetch(`rest/Operations`)
    .then(response => response.json())
    .then(json => dispatch(receiveOperations(reddit, json)))
}