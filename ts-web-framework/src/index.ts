import { User } from "./entities";

const user = User.createUser({id: 1});

user.registerEvent("fetch", () => {
  console.log("user changed")
  console.log(user);
});

user.fetchData('id')
