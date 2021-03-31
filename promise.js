    // PROMISE è un oggetto che ci torna indietro un risultato di fallimento di un'operazione asincrona 

    // const promise = new Promise((resolve, reject) =>  {
    //     setTimeout(() => {
    //         // resolve({user: 'Francesco'})
    //         console.log('got the user:');
    //         reject(new Error("User not logged in "));
    //     }, 2000);
    // });

    // promise.then(user => {
    //     console.log(user);
    // }).catch(err => console.log(err.message));

console.log("Start");

function loginUser(email, password) { // <-- funzione di callback
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve( { userEmail: email }); // <-- parametro
        }, 2000); 
    });
}
// Un'altra funzione 
function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (["video1", "video2", "video3"]); // <--parametri
        }, 1500);
    });
}
function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("title of the video"); // <--parametri
        }, 1500);
    });
}

// const user = loginUser("francesco.duff@gmail.com", 123456, user =>{ // invochiamo qui la funzione e avremo l'accesso a USER
// console.log(user);
// getUserVideos(user.userEmail, videos => {
//     console.log(videos);
//     videoDetails(videos[0], title => {
//         console.log(title);
//      });
//    });
// });

// loginUser('Francesco', 'purchiacca')
// .then(user => getUserVideos(user.email))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));

// ASYNC 
async function displayUser() {
    try {
    const logged = await loginUser ('Francesco', 12345);
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail); 
    }
    catch(err){
        console.log("we could not get the videos");
    }
}
displayUser();

console.log("Finish");
