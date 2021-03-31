// // Sync code Example 
// function otherFunct() {
//     console.log("we are in another funct");
//     console.log("do some stuff");
// }

// console.log('Start');

// otherFunct();

// console.log('End');
// --------------------------------------------------

// Async code Example

// console.log('Start');

// setTimeout(() => {
//     console.log('We are in the timeout');
// }, 5000);

// const items = [1,2,3,4,5]; 

// items.forEach(item => {
//     console.log(item);
// });

// console.log('End');


// ...............SIMULATION OF ASYNC CODE..................

// console.log("Start");

// function loginUser(email, password, callback) { // <-- funzione di callback
//     setTimeout(() => {
//         console.log("Now we have the data");
//         callback( { userEmail: email }); // <-- parametro
//     }, 2000); 
// }
// // Un'altra funzione 
// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback (["video1", "video2", "video3"]); // <--parametri
//     }, 1500);
// }
// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback (["title of the video"]); // <--parametri
//     }, 1500);
// }

// const user = loginUser("francesco.duff@gmail.com", 123456, user =>{ // invochiamo qui la funzione e avremo l'accesso a USER
// console.log(user);
// getUserVideos(user.userEmail, videos => {
//     console.log(videos);
//     videoDetails(videos[0], title => {
//         console.log(title);
//      });
//    });
// });

// console.log("Finish");

// -------------------------------------------------------------

// console.log("Start");

// function loginUser(email, password, callback) { // <-- funzione di callback
//     setTimeout(() => {
//         console.log("Now we have the data");
//         callback( { userEmail: email }); // <-- parametro
//     }, 2000); 
// }
// // Un'altra funzione 
// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback (["video1", "video2", "video3"]); // <--parametri
//     }, 1500);
// }
// function videoDetails(video, callback) {
//     setTimeout(() => {
//         callback (["title of the video"]); // <--parametri
//     }, 1500);
// }

// const user = loginUser("francesco.duff@gmail.com", 123456, user =>{ // invochiamo qui la funzione e avremo l'accesso a USER
// console.log(user);
// getUserVideos(user.userEmail, videos => {
//     console.log(videos);
//     videoDetails(videos[0], title => {
//         console.log(title);
//      });
//    });
// });

// console.log("Finish");
