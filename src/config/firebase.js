import * as firebase from 'firebase';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAwF3vVC0EyminLjle-7tUKZKiYGtW9f3E",
    authDomain: "medconnect-6fdaa.firebaseapp.com",
    databaseURL: "https://medconnect-6fdaa.firebaseio.com",
    projectId: "medconnect-6fdaa",
    storageBucket: "medconnect-6fdaa.appspot.com",
    messagingSenderId: "290600307048",
    appId: "1:290600307048:web:6ef701461cacb76fdb6edd",
    measurementId: "G-DHJ5G4291L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();






// TODO Modify for our firebase 
function signUp(userDetails) {
    return new Promise((resolve, reject) => {
        console.log("Start 1")
        const { userName, userEmail, userPassword, userZip, userAge, userStatus } = userDetails;
        console.log("Start 2")
        firebase.auth().createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword).then((success) => {
            console.log("Start 3")
            let user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            };
            console.log("Start 4")
            firebase.storage().ref().child(`Users/${uid}/`).put(uid).then((url) => {
                console.log("Start 5")
                url.ref.getDownloadURL().then((success) => {
                    console.log("Start 6")
                    const userIDUrl = success
                    console.log(userIDUrl)
                    const userDetailsForDb = {
                        userUid: uid,
                        userName: userName,
                        userEmail: userEmail,
                        userPassword: userPassword,
                        userZip: userZip,
                        userAge: userAge,
                        userStatus: userStatus,
                    }
                    db.collection("users").doc(uid).set(userDetailsForDb).then((docRef) => {
                        // console.log("Document written with ID: ", docRef.id);
                        userDetails.propsHistory.push("/user-profile");
                        resolve(userDetailsForDb)

                    }).catch(function (error) {
                        console.error("Error adding document: ", error);
                        reject(error)
                    })
                }).catch((error) => {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log("Error in getDownloadURL function", errorMessage);
                    reject(errorMessage)
                })
            }).catch((error) => {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("Error in Image Uploading", errorMessage);
                reject(errorMessage)
            })
        }).catch((error) => {
            var errorMessage = error.message;
            console.log("Error in Authentication", errorMessage);
            reject(errorMessage)
        })
    })
}

// Modify for our firebase
function logIn(userLoginDetails) {
    return new Promise((resolve, reject) => {
        const { userLoginEmail, userLoginPassword } = userLoginDetails;
        firebase.auth().signInWithEmailAndPassword(userLoginEmail, userLoginPassword).then((success) => {
            db.collection('users').doc(success.user.uid).get().then((snapshot) => {
                userLoginDetails.propsHistory.push("/user-profile");
                resolve(success)            
            })
        }).catch((error) => {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            reject(errorMessage)
        });

    })
}

// Could use for survey
function addItem(itemDetails) {
    const { contactName, contactEmail, itemImage } = itemDetails;
    return new Promise((resolve, reject) => {
        let user = firebase.auth().currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
        };
        firebase.storage().ref().child(`itemImage/${uid}/` + itemImage.name).put(itemImage).then((url) => {
            url.ref.getDownloadURL().then((success) => {
                const itemImageUrl = success
                console.log(itemImageUrl)
                const itemDetailsForDb = {
                   
                    itemImageUrl: itemImageUrl,
                    contactEmail: contactEmail,
                    contactName: contactName,
                }
                db.collection("users").doc(uid).collection("menuItems").add(itemDetailsForDb).then((docRef) => {

                    resolve("Successfully added Contact")
                }).catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    reject(errorMessage)

                })
            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("Error in getDownloadURL function", errorCode);
                console.log("Error in getDownloadURL function", errorMessage);
                reject(errorMessage)
            })
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("Error in Image Uploading", errorMessage);
            reject(errorMessage)
        })
        
    })
 }


export default firebase;
export {
    signUp,
    logIn,
    addItem,



    // DONE YAYAYAYA
    // signUp
    // logIn


    // TODO for Rachana
    // addContact
    // removeContact

    // Make the survey
    // submitSurvey

    // Official Covid Test
    

}