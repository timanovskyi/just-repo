import {User} from './entities'

const user = new User({name: 'myName', age: 20})
console.log(user.get('name'));