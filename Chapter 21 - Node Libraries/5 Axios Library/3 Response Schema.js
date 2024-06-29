/*

Response Schema

Axios response object has the following properties:

- config     => the request configuration you provided

- data       => the response data
- status     => the HTTP status code like 200, 404, 500, etc.
- statusText => the HTTP status message like 'OK', 'Not Found', 'Internal Server Error', etc.

- headers    => the HTTP headers that the server responded with
- request    => the request that generated this response (XHR object)

// ============================================================

Error Schema

Axios error object has the following properties:

- code       => (from axios) like 'ERR_NETWORK', 'ERR_BAD_REQUEST', 'ERR_TIMEOUT', etc.
- message    => (from axios) like 'Network Error', 'Request failed with status code 404', etc.

- config     => (from axios) the request configuration you provided
- request    => (from axios) the request that generated this error (XHR object)

- response   => (from server) the response that was received from the server (if a network error occurred, response is undefined).
                This is the same response object as the one returned in case of a success but with different status code, data, etc. (the data property usually contains the error message).

*/
