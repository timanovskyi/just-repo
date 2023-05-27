import { User } from "./entities";
import { Collection } from "./entities/collection";
import { UserProps } from "./models";

// const user = User.createUser({ id: 1 });
// fetchById
// user.registerEvent("fetchById", () => {
//   console.log("event fetchById", user);
// });
// user.fetchDataById('id')
//

// save
// user.registerEvent("save", () => {
//   console.log("event save", user);
// });
// user.saveData({name: 'newUser21'})



const collection = User.createUserCollection();
collection.registerEvent("fetchAllData", () => {
  console.log("event fetchAllData", collection.models);
});

collection.fetchAllData()