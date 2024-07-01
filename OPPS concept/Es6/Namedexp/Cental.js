let tax =18;
let discount=5;
function add(){
    console.log("Addition")

}
class Account{
    constructor(){
        console.log("central _account")
    }
}
// export default tax   =for to export the only one value
export {tax,discount,add,Account};