
type GenericArray<T> = Array<T>

// const rollNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const rollNumber2: string [] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const rollNumbers3 : Array<boolean> =[true, false]


const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber2: GenericArray<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rollNumbers3: GenericArray<boolean> = [true, false]

type NameRollType = {
    name: string;
    roll: number;
};

const userNameAndRollNumbers: GenericArray<NameRollType> = [{
    name: 'Mr. Habul',
    roll: 1
}, {
    name: 'Mr. Kabul',
    roll: 2
}]


// Generic tuple

type GenericTuple <X, Y> = [X, Y];

