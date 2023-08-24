# Hardcoded Database
const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
};
# OLD REGISTER METHOD
 // database.users.push({
  //   id: "125",
  //   name: name,
  //   email: email,
  //   password: password,
  //   entries: 0,
  //   joined: new Date(),
  // });

# OLD PROFILE METHOD
database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });	

/*
.then(entries => {
    // If you are using knex.js version 1.0.0 or higher this now 
    // returns an array of objects. Therefore, the code goes from:
    // entries[0] --> this used to return the entries
    // TO
    // entries[0].entries --> this now returns the entries
    res.json(entries[0].entries);
  })

	.insert({
  // If you are using Knex.js version 1.0.0 or higher this 
  // now returns an array of objects. Therefore, the code goes from:
  // loginEmail[0] --> this used to return the email
  // TO
  // loginEmail[0].email --> this now returns the email
     email: loginEmail[0].email, // <-- this is the only change!
     name: name,
     joined: new Date()
})
*/

# OLD IMAGE PUT METHOD
let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("no such user");
  }

# bcrypt sample
 // // Load hash from your password DB.
  const hash = "$2b$10$xKEExVLmGcya7aY0RrF.8.lbXImHPjQlCqBqRrvggyxq3O4ByFWiy";
  bcrypt.compare("apples", hash, function (err, result) {
    // result == true
    console.log("first guess", result);
  });
  bcrypt.compare("veggies", hash, function (err, result) {
    // result == false
    console.log("second guess", result);
  });

# Facial-Recognition DB
CREATE TABLE users (
    id serial PRIMARY KEY,
    "name" VARCHAR(100),
    email TEXT UNIQUE NOT NULL, 
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY,
    secret VARCHAR(100) NOT NULL,
    "name" text UNIQUE NOT NULL
);