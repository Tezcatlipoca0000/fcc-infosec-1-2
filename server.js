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
(async () => {
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log('my hash', hash);
    const result = await bcrypt.compare(myPlaintextPassword, hash);
    const result2 = await bcrypt.compare(someOtherPlaintextPassword, hash);
    console.log('the results', result, result2);
})();

//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
