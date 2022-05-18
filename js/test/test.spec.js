import {initializeApp} from "firebase/app";

const sayHello = require('./test').sayHello;
import {getDatabase, onValue, ref, set} from "firebase/database";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
import {firebaseConfig} from "../../apikey";

// describe('App test!', function () {
//   it('sayHello should return hello', function (done) {
//     if (sayHello() === 'hello') {
//       done();
//     }
//   });
// });

describe('Api test!', function () {
    it('readData', function (done) {
      const db=getDatabase();
      onValue(ref(db,'weather/'),snapshot => {
        if(snapshot.val()!=undefined){
          done();
        }
      })
  });
});
