import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ToDo from './mongoose/todo'
import schema from './graphql/Schema/Schema'
const app = express();

import {graphql} from 'graphql'
import graphqlHTTP from 'express-graphql';

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/local')

var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
	console.log( '+++Connected to mongoose')
})

app.listen(3000,()=> {console.log("+++Express Server is Running!!!")})

app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html')
})

app.use('/graphql', graphqlHTTP (req => ({
	schema
	//,graphiql:true
})))

app.post('/quotes',(req,res)=>{
	// Insert into TodoList Collection
	var todoItem = new ToDo({
		itemId:1,
		item:req.body.item,
		completed: false
	})

	todoItem.save((err,result)=> {
		if (err) {console.log("---TodoItem save failed " + err)}
		console.log("+++TodoItem saved successfully "+todoItem.item)

		res.redirect('/')
	})
})
