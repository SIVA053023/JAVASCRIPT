let users_url='https://jsonplaceholder.typicode.com/users'
fetch(users_url)
.then(resp=>resp.json())
.then(data=>console.log(data.length))