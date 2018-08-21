const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApps",(err, client) => {
    if(err){
        return console.log('unable to connect to MongoDB server');

    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
        console.log(result);
    });

    //client.close();
});