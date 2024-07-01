let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{                  // promise is in built class and it is created by using the new keyword
        setTimeout(()=>{
            let flag=true;
            flag? resolve('Data inserted'): reject('failed')
            employees.push(emp);

        },4000)

    })
}
createEmployee().then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})