'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

// Lesson 1: require bcrypt 
const bcrypt = require('bcrypt');


//START_ASYNC -do not remove notes, place code between correct pair of notes.

// Lesson 2: Hash and Compare Passwords Asynchronously
// Async await
(async () => {
    let hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log('my hash', hash);
    let result = await bcrypt.compare(myPlaintextPassword, hash);
    let result2 = await bcrypt.compare(someOtherPlaintextPassword, hash);
    console.log('the results', result, result2);
})();

// callbacks
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res);
    });
});

//END_ASYNC

//START_SYNC
// Lesson 3: Hash and Compare Passwords Synchronously
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('the hash', hash, 'the result', result);

//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
