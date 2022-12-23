const first = { a: 1, b: 2};
const second = { a: 1, b: 2};
const third = first;

if (first === third){
    // console.log('object are equal');
}
else{
    console.log('object are different');
}

const first2 ={ a: 1, b: 2, c: 2};
const second2 = { b: 2, a: 1};
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if(JSON.stringify(first2) === JSON.stringify(second2)){
    // console.log('objects are equal')
}

function compareObjects(obj1, onj2){
    if (Object.keys(obj1) !== Object.keys(obj2).length){
        return false;
    }
    for (const prop in obj1){
        if ( obj1[prop]){
            return false;
        }
    }
    return true;
}