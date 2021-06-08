import * as firebase from 'firebase';

 var firebaseConfig = {
   apiKey: 'AIzaSyDPgHT2LGd69ygeaDv9VuXCbKdOYVde6O0',
   authDomain: 'crud-bc33d.firebaseapp.com',
   databaseURL: 'https://crud-bc33d.firebaseio.com',
   projectId: 'crud-bc33d',
   storageBucket: 'crud-bc33d.appspot.com',
   messagingSenderId: '1059992677627',
   appId: '1:1059992677627:web:e46c71c6cf01e2f7d5545e',
   measurementId: 'G-46T9YTV92K',
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase;