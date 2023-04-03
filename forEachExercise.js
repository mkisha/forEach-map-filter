
//forEach

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function doubleValues(arr) {
    let newArray = [];
     arr.forEach(function(val){
        newArray.push(val * 2);
    })
   return newArray;
}



onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

function onlyEvenValues(arr) {
let newArray = [];
arr.forEach(function(val){

if (val % 2 === 0) {
    newArray.push (val);
}
})
return newArray;
}




showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(arr) {

let newArray = [];
arr.forEach(function(val){
    newArray.push(val[0]+val[val.length-1]);
})

return newArray;
}




addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */

    function addKeyAndValue (arrOfObj, key, value) {


        arrOfObj.forEach(function(val) {
            val[key] = value;

        } );

        return arrOfObj;

    }




    vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount (str) {
    let vowels = 'aeiou';
    let result = {};
    strLetters = str.split('');

    strLetters.forEach(function(letter){
        let lowerCased = letter.toLowerCase();
        if (vowels.indexOf(lowerCased) !== -1) {
            if(result[lowerCased]) {
                result[lowerCased]++;
            }
            else {
                result[lowerCased] = 1;
            }
        }

    });

    return result;
}





//map

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

function doubleValuesWithMap(arr) {
    

   let newArray = arr.map(function(val){
        return val * 2;
    })
    return newArray;
}





valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]

function valTimesIndex(arr) {

    let newArray = arr.map(function(val, index){
        return val * index;
    })
    return newArray;
}







extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  
    // ['Elie', 'Tim', Matt', 'Colt']

    function extractKey(arrOfObj, key) {
      let newArray =  arrOfObj.map(function(Obj){
          return Obj[key];
        })
        return newArray;
    }




    extractFullName([
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia"},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele"}
      ])
      
        // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


        function extractFullName(arrOfObj) {
         let newArray = arrOfObj.map(function(val){
                return val.first + ' ' + val.last;
            })

            return newArray;
        }







//Filter


filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )



    function filterByValue(arrOfObj, key) {
       return arrOfObj.filter(function(val){
            return val[key];
        })
    }





    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined

    function find(arr, value) {
      return  arr.filter(function(val){
        if (val === value) {
            return val;
        }
        
        })[0];
    }






    findInObj(
        [
          {first: 'Elie', last:"Schoppik"},
          {first: 'Tim', last:"Garcia", isCatOwner: true},
          {first: 'att', last:"Lane"},
          {first: 'Colt', last:"Steele", isCatOwner: true}
        ],
        'isCatOwner',
        true
      )
      
      // {first: 'Tim', last:"Garcia", isCatOwner: true}

      function findInObj(arrOfObj, key, value) {
        arrOfObj.filter(function(val){
            if (val === key[value]) {
                return val;
            }
        })[0];
      }




        removeVowels('Elie') // ('l')
        removeVowels('TIM') // ('tm')
        removeVowels('ZZZZZZ') // ('zzzzzz')


function removeVowels(str) {

    let vowels = "aeiou";
    let lowerCased = str.toLowerCase();
    return lowerCased.split('').filter(function(val){
        return vowels.indexOf(val) === -1;
 
     }).join('');
    
}




doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []

function doubleOddNumbers(num){
   let newArray = num.map(function(val){
        if(val % 2 !== 0){
            return val * 2;
        }
    })
   

   newArray = newArray.filter(function(val){
        return val % 2 === 0 && val !== undefined;
    })

    return newArray;
}