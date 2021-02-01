import axios from 'axios';


axios.interceptors.response.use( res => {
    let responseOrigin  = res.config.url;
    responseOrigin = responseOrigin.split('/');
    responseOrigin = responseOrigin[0]+"//"+responseOrigin[2];
    const allowedOrigin = process.env.REACT_APP_API_URL;
    if(responseOrigin == allowedOrigin){
        const token = res.headers['x-auth-token'];
        if(token){
            localStorage.setItem('token', token);
        }
    }
    return res;
} ,
error => Promise.reject(error)
)

axios.interceptors.request.use( req => {
    let requestURL = req.url;
    requestURL = requestURL.split('/');
    requestURL = requestURL[0]+"//"+requestURL[2];
    const token = localStorage.getItem('token');
    if(token && requestURL ==  process.env.REACT_APP_API_URL){
        req.headers['x-auth-token'] = token
    }
    return req;
} ,
error =>  Promise.reject(error)
)

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}