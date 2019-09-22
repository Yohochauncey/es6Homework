// let promise = new Promise(function(resolve,reject){
// });

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()},
//         3000)
//     // reject();
// });
// // console.log(promise);
// promise.
//     then(()=>console.log("成功"))
//     .then(()=>console.log("成功"))
//     .then(()=>console.log("成功"));

// console.log(fetch);

//"http://jsonplaceholder.typicode.com/posts"

// let url = "http://jsonplaceholder1.typicode.com/posts";
// console.log(fetch(url));
// fetch(url)
//     .then(res => res.json()) //解析数据
//     .then(res=> console.log(res)) //打印数据
//     .catch(err => console.log("error:" + err));

document.getElementById('button1').addEventListener
('click',getText);
document.getElementById('button2').addEventListener
('click',getJson);
document.getElementById('button3').addEventListener
('click',getExternal);

function getText(){
    fetch("test.txt")
        .then((res)=>res.text())
        .then((data)=> {
            console.log(data)
            document.getElementById('output').innerHTML = data;
    })
}

function getJson(){
    fetch("posts.json")
        .then(res => res.json())
        .then((JsonData) => {
            console.log(JsonData);
            let output = '';
            JsonData.forEach((postJson)=>{
                output += `<li>${postJson.title}</li>`;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getExternal(){
    fetch("https://api.github.com/users")
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data);
            let output = '';
            data.forEach((user) =>{
                output += `<li>${user.login}</li>`;
                //模版字符串
            })
            document.getElementById('output').innerHTML = output;
    })
}