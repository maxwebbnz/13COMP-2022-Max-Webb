/*
 * Copyright (c) 2022 Max Webb
 * All rights reserved.
 */
let fb;

fb = {
    init: function() {
        console.log("Loading Firebase....")

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBEWqWk4vpt95GoXCOOHDmldjWwsanKFe0",
            authDomain: "comp-webbmax-18205mw.firebaseapp.com",
            projectId: "comp-webbmax-18205mw",
            storageBucket: "comp-webbmax-18205mw.appspot.com",
            messagingSenderId: "441877040026",
            appId: "1:441877040026:web:ca05ef72df32452e7f8823"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
}