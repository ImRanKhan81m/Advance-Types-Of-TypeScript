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

const makePromiseBoolean = ():Promise<boolean> =>{
    return new Promise<boolean>((resolve, reject) => {
        const data : boolean = false;
        if(data){
            resolve(data);
        }else{
            reject('No data found');
        }
    }
    )
}

const getPromiseDataBoolean = async ():Promise<boolean> =>{
    const data = await makePromiseBoolean();
    return data;
}

const makePromiseObject = ():Promise<object> =>{
    return new Promise<object>((resolve, reject) => {
        const data : object = {name: 'John', age: 30};
        if(data){
            resolve(data);
        }else{
            reject('No data found');
        }
    }
    )
}

const getPromiseDataObject = async ():Promise<object> =>{
    const data = await makePromiseObject();
    return data;
}


