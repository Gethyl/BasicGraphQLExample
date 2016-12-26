import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// create a schema
var toDoSchema = new Schema({
    itemId: Number,
    item: String,
    completed: Boolean
}, {collection:"TodoList"});

// the schema is useless so far
// we need to create a model using it
var ToDo = mongoose.model('ToDo', toDoSchema);

export default ToDo

// Select an item from TodoList collection
// ToDo.find({item:"Gethyl"},(err,res)=>{
// 	if (err){console.log("---Gethyl not found in ToDo" + err)}
// 	else console.log("+++Gethyl fetched ==> " + res)
// })	