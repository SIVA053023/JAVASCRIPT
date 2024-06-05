 //              HERE WE ARE REPLACING THE MULTIPLE VALUES


let vehicles=['bike','car','flight','train','bus'];

vehicles.splice(1,2,'ship','cycle'); /*here we are replacing the (flight an dtrain ) with (ship and cycle) 
                                     (1,2 means 1 is a starting index and 2 is number of elements we are 
                                        replacing from given starting index number) */
console.log(vehicles);                // output = [ 'bike', 'ship', 'cycle', 'train', 'bus' ]                     