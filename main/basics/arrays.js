        let names = ["lasya" ," lavanya", "bhumika" ,"pravallika", "swetha"];
         let names2 = ["karthik" , "manesh"];
        //  names.push(names2);
        //  console.log(names);
         //for push--> here we get names2 array as an element into the names array instead of having the elements from names2 array individually.(array inside an array).
         let allNames = names.concat(names2)
         console.log(allNames)
         //concat gives a new array without having array inside an array
         
//we have an easier option than concat which is spread operator....
