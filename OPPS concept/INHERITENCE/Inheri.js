class parent{
    get_bal(){
        console.log("this is a get_bal method")
    }
}
class child extends parent{
    min_bal(){
        console.log("this is min_bal method")
    }
 

}
const c1=new child();
//console.log(c1);
c1.get_bal();
c1.min_bal();