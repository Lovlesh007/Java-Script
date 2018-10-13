const first = [1,2,3,4,5];
const second = [6,7,8,9,10];


// one method to cancatenate

const combined = first.concat(second);
const combined3 = [...first, 'a', ...second,'b'];

console.log(combined);
console.log(combined3);


//spread operator ... to clone a object

const third =
{
    name : 'lucky',
    class : '12th'
};

const fourth =
{
    rollno : 40115603117,
    branch: 'IT'
};


//combined both of them


const combined2 = {...first,...second,location : 'DELHI'
};
console.log(combined2);