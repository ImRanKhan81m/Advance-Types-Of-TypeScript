// Mocking 
// const makePromise = () =>{
//     return new Promise((resolve, reject) => {
//         const data : string = 'Data is fetched from server';
//         if(data){
//             resolve(data);
//         }else{
//             reject('No data found');
//         }
//     }
//     )
// }
const makePromise = ():Promise<string> =>{
    return new Promise<string>((resolve, reject) => {
        const data : string = 'Data is fetched from server';
        if(data){
            resolve(data);
        }else{
            reject('No data found');
        }
    }
    )
}


const getPromiseData = async ():Promise<string> =>{
    const data = await makePromise();
    return data;
}

// Promise <string> Promise <number> Promise <boolean> Promise <object>

