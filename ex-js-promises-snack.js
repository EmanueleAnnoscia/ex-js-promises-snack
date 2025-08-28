//snack 1

// function getPostTitle(id) {
//     const promessa = new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => resolve(post.title))
//             .catch(err => reject(err))
//     })
//     return promessa;
// }


// getPostTitle(1)
//     .then(title => console.log(title))
//     .catch(err => console.error(err));


// //bonus
// function getPost(id) {
//     const promessa = new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => {
//                 fetch(`https://dummyjson.com/users/${post.userId}`)
//                     .then(response => response.json())
//                     .then(user => {
//                         post.user = user;
//                         resolve(post)
//                     })
//                     .catch(err => reject(err))
//             })
//         .catch(err => reject(err))  


//     })

//     return promessa
// }

// getPost(1)
//   .then(post => console.log(post))
//   .catch(err => console.error(err));

//   function getPost2(id){
//     const promessa = new Promise ((resolve, reject) =>{
//         fetch (`https://dummyjson.com/posts/${id}`)
//         .then(response => response.json())
//         .then (post => {
//             fetch(`https://dummyjson.com/users/${post.userId}`)
//             .then(response => response.json())
//             .then(user=> {
//                 post.user = user,
//                 resolve(post)
//             })
//             .catch(err=> reject(err))
//         })
//         .catch(err=> reject(err))
//     })
//     return promessa
//   }

//   getPost2(2)
//     .then(post => console.log(post))
//     .catch(err => console.error(err))

// 🏆 Snack 2

//funzione di randomizzazione del dado
 const diceRoll = (min,max) => Math.floor(Math.random() * (max - min +1)) + min;



//funzione di lancio del dado
function creaLanciaDado(){
    return new Promise ((resolve, reject) =>{
        console.log('sto lanciando il dado...')

        let result = 0;
        let lastResult = 0;
        
        setTimeout(()=>{
            if(Math.random()<0.2){
                reject('il dado si è rotto');
            }else{
               result = diceRoll(1, 6);
               if(result === lastResult){
                console.log('incredibile!')
               }
            lastResult = result;
            resolve(result);
            }
            
        }, 3000)


    })
}

creaLanciaDado()
    .then(res => console.log("Hai ottenuto:", res))
    .catch(err => console.error(err));