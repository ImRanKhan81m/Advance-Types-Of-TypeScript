// Mocking 
const makePromise = () =>{
    return new Promise((resolve, reject) => {
        const data : string = 'Data is fetched from server';
        if(data){
            resolve(data);
        }else{
            reject('No data found');
        }
    }
    )
}