let subscriptions = {
    'loginUser' : []
};

export default {
    events:{
        loginUser : 'loginUser'
    },
    subscribe: (ev,fn) =>{
        subscriptions[ev].push(fn)
    },
    trigger:(ev,data) =>{
        subscriptions[ev].forEach(fn => fn(data));
    }

}