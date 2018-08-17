const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApps",(err, client) => {
    if(err){
        return console.log('unable to connect to MongoDB server');

    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));},(err) => {
        console.log('unable to fetch todos', err);
    });

    //client.close();
});