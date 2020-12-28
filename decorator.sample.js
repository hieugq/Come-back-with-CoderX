//Assum we have a large database. Searching on this database is heavy CPU 
//so we need to cache them
let users = [
    {name: 'John', id: 1},
    {name: 'Tom', id: 2},
    {name: 'Andy', id: 3},
    {name: 'Peter', id: 4},
];

function getUser(id){
    return users.find(function(item, index, array){
        return item.id == id;
    });
}

function cacheDecorator(func){
    let cacheUsers = [];
    return function(id){
        let user = cacheUsers.find((item, index, array)=> item.id == id);
        if(!user){
            user = func(id);
            cacheUsers.push(user)
        }
        return user;
    }
}

let cache = cacheDecorator(getUser);

let user = cache(1);
console.log(user.name);