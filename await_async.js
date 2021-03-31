// ENTRAMBI PORTANO DATI 

const yt = new Promise (resolve => {
    setTimeout (() => {
        console.log("getting some stuff from Youtube");
        resolve({ videos: [1, 2, 3, 4, 5] });
    }, 2000)
});

const fb = new Promise (resolve => {
    setTimeout (() => {
        console.log("getting some stuff from Facebook");
        resolve({ user: "name" });
    }, 2000)
});

Promise.all([yt,fb])
.then(result => console.log(result) );