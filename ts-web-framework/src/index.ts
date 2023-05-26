import {User} from "./entities";

const user = new User({});
user.saveUser({name: 'test1', id: 2});