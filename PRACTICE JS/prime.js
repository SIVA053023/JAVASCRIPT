function prime(n){
    if(n==1 || n==0) return false;
    for(let i=2; i<n;i++){
        if(n%i==0) {
            return false;
        }
    }
    return true;
    
}
let  n=100;
let reuslt=[]
for(let i=1;i<=n;i++){
    if(prime(i)){
        reuslt.push(i);
    }
}
console.log(reuslt.join(' ,'))