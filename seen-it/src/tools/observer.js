let subscriptions = {
    'loginUser' : []
};

const observer = {
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
export default observer;