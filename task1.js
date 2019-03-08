// коллекция юзеров. может содержать уже существующих юзеров (в базе, "есть id")
// и так же новых (без id)
const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
];

const groups = [
    {id: 1, title: 'First Group'},
    {id: 2, title: 'Last Group'},
];

const mintimeout = 500;
const maxtimeout = 1000;


function addSelectedGroupToUsers(users, group) {
    return new Promise(function(resolve, reject) {
        let chain = Promise.resolve();
        for(let value of users)
        {
            if(value.id === undefined) {
                chain = chain.then(() => generateUserId(value));
            }
            if(value.groupId === undefined && group.id !== undefined) {
                chain = chain.then(() => addGroup(value, group));
            }
        }
        resolve(chain.then());
    });
}

function generateUserId(user) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let max = 0;
            users.map(function (item) {
                let id = parseInt(item.id);
                max = id > max ? id : max;
            });
            console.log('Add id = ' + (max + 1) + ' to user ' + user.name);
            user.id = ++max;
            resolve();
        }, getRandom(mintimeout, maxtimeout));
    });
}

function addGroup(user, group) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            user.groupId = group.id;
            console.log('Add gropId = ' + group.id + ' to user ' + user.id);
            resolve();
        }, getRandom(mintimeout, maxtimeout));
    })
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

addSelectedGroupToUsers(users, groups[1])
    .then(() => {console.log(users)});