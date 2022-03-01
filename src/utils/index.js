export function GetHeaders() {
    let headers = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'application/json'
        }
    };
    // localStorage.token && (headers.headers["X-Authorization"] = `Bearer ${localStorage.token}`);
    return headers
}

export function getBaseUrl() {
    return window.location.host === "localhost:3000" ? "http://144.91.110.221/" : window.location.origin + "/"
}