interface UserMeta {
  name: string;
  lastName: string;
}

interface User extends UserMeta {
  uuid: string,
}

export function makeUser(user: UserMeta): User {
    return {
      uuid: (Math.random() * 8000).toString(36),
      name: user.name,
      lastName: user.lastName
    }
}


console.log(makeUser({name: "Michał", lastName: "Kowalski"}))
