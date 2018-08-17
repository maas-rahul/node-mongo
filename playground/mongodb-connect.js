const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApps",(err, client) => {
    if(err){
        return console.log('unable to connect to MongoDB server');

    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection("Todos").insertOne(
        {
            text: "something to do with <3",
            completed: false
        },(err, result) => {
            if(err){
                return console.log("Unable to insert todo",err);
            }

             console.log(JSON.stringify(result.ops, undefined, 2));

            }
    );
    // insert another collection

    db.collection('users').insertOne(
        {
            _id:1234,
            name:'Rajesh',
            Age:245,
            Address: 'Jaydev Bihar'

        },(err, result) => {
            if(err){
                return console.log("Unable to insert todo",err);
            }

             console.log(JSON.stringify(result.ops, undefined, 2));

            }
        );
    client.close();
});