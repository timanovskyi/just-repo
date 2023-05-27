import { User } from "./entities";
import { Collection } from "./entities/collection";
import { UserProps } from "./models";
import { UserEdit, UserForm } from "./views";
import { UserLists } from "./views/entities/user-lists";
const URL = "http://localhost:3000/users";

// Part 1
// to see all the collection
const collection = new Collection<User, UserProps>(URL, (json: UserProps) =>
  User.createUser(json)
);
collection.registerEvent("change", () =>
  new UserLists(document.getElementById("root")!, collection).render()
);

collection.fetchAllData();

// Part 2
// user edit functionality
// const userForm = new UserEdit(
//     document.getElementById("root")!,
//     User.createUser({ name: "test", age: 22 })
// );
// userForm.render();

// Part 3
// const user = User.createUser({ id: 1 });
// to get specific user
// user.fetchDataById('id')
// to save data
// user.saveData({name: 'newUser21'})
