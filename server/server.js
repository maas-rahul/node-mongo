var mongoose = require('mongoose');
mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApi');

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },compleated:{
        type:Boolean

    },compleatedAt:{
        type:Number
    }
});

//var newTodo = new Todo({
   // text:'cook dinner'
//});

//newTodo.save().then((doc) => {
  //  console.log('saved todo', doc);
//},(e) => {
  //  console.log('unable to save to do');
//});

var otherTodo = new Todo({
    text:'Feed the cat',
    compleated: true,
    compleatedAt:123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
},(e) => {
    console.log('unable to save',e);
});