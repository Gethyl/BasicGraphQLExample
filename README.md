# Graph SQL Server Example

This is a short example to help setup a GraphQL server on Node using Express and connect to Mongo DB using Mongoose.

> Refer `package.json`'s ***dependencies*** and ***devDependencies*** to see the npm packages and versions used.

### Important Files and Folders

|File/Folder|Description|
|-----------|-----------|
|**index.html**| The main HTML file|
|**server.js**| GraphQL Express Server|
|**graphql**| Folder related to graphQL Schema.|
|**mongoose**| Folder related to Mongoose(mongodb) *Schema* and *Model*|

### Pre-requisites for this example to work.
This example uses mongodb installed on the local machine. 

* Refer [Installation](https://docs.mongodb.com/manual/administration/install-community/) for instructions to install mongodb locally on your machine.
* MongoDb has only a CLI, so you can install any UI tools for mongodb so that its easier to work on the database. I have installed [robomongo](https://robomongo.org/) and find it perfect for my basic use cases.

### Starting the GraphQL server
* Before running the example we start the mongo db service using the below command.
```
sudo service mongod start
```

* Once the service is up and running, then issue the below command to start your graph QL server.
***Note*** - *babel-node is to be used in Dev environments only.*
```
npm run dev3
```

### Testing the server
* In this example we have a mongodb collection called ***TodoList*** which has the below schema:
```
    itemId: Number,
    item: String,
    completed: Boolean

```

* Once the server is up, go to browser and run http://localhost:3000/. 
  * The first section is a simple form which you can use to insert a new task to the ***TodoList*** collection. 
> As this is a basic example, only the property `item` is taken from the html, while `itemId` and `completed` are **hardcoded** as *1* and *false* respectively.
  * The second section is where we can see how GraphQL is used to GET value from ***TodoList*** where `itemId = 1`(hardcoded), by clicking on the link.



