let students=[{name:"siva",rollno:157,email:"sivakrishna053023@gmail.com",gender:"male"},
              {name:"rahul",rollno:158,email:"rahul@gmail.com",gender:"male"},
              {name:"dravid",rollno:159,email:"dravid12@gmail.com",gender:"male"},
              {name:"kohli",rollno:160,email:"kohli18@gmail.com",gender:"male"},
              {name:"rohith",rollno:161,email:"rohith45@gmail.com",gender:"female"},
              {name:"raina",rollno:162,email:"raina78@gmail.com",gender:"male"},
              {name:"krishna",rollno:163,email:"krishna53@gmail.com",gender:"male"},
              {name:"prasad",rollno:164,email:"prasad11@gmail.com",gender:"male"},
              {name:"rajesh",rollno:165,email:"rajesh65@gmail.com",gender:"female"}
]
var mCount=0;                             //here we counting no of males and females
var fCount=0;
for(student of students){
    if(student.gender=="male"){
        mCount++
    }
    else{
        fCount++
    }
}
console.log("no.of.males=",  mCount);
console.log("no fo females=", fCount);