// 1、let
// var a = 1;
let b = 1;
//====1.1 越域
// {
//     var a = 1;
//     let b = 1;
// }
// console.log(a)
// console.log(b)

//====1.2 重复声明
// var a = 1;
// var a = 2;
// var a = 'sss';
// let b = 1;
// let b = 2;

//====1.3 变量提升
// console.log(a)
// var a = 1;
//
// console.log(b)
// let b = 1;

// 2、const
// const x = 1;
// x = 2;

// 3、解构
//====3.1 数组解构
let arr = [1, 2, 3];
// console.log(arr[0])
let [x, y, z] = arr;
console.log(x)
console.log(y)
console.log(z)

//====3.2 对象解构
let person = {
    name: "张三",
    age: 18,
    email: "haha@atguigu.com"
}

// console.log(person.name)
// console.log(person.age)

let {name, age} = person;
console.log(name)
console.log(age)

function haha({name, age, email}) {
    console.log(name)
    console.log(age)
    console.log(email)
}

haha(person)


// 4、链判断
let message = {
    body: {
        user: {
            firstName: "哈哈"
        }
    }
};
// console.log(message.body.user.firstName)

let content =
    (message && message.body && message.body.user && message.body.user.firstName) || 'default'

// console.log(content)


let first = message?.body?.user?.firstName || 'default';
console.log(first)

// 5、参数默认值
function add(a, c, b = 5) {
    return a + b + c;
}

console.log(add(1, 2))

// 6、箭头函数
function print(arg) {
    console.log(arg)
}

let print1 = function (arg) {
    console.log(arg)
}

let print2 = (arg) => console.log(arg)
print2(2222)

let sum = (a, b) => {
    let x = a + b;
    console.log(x)
}
sum(1, 3)


// 7、模板字符串
let info = `你好，我的名字是：【${name}】，年龄是：【${age}】，邮箱是：【${person.email}】`
console.log(info)

// 8、Promise
let url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
console.log(1)
// Promise
let promise = fetch(url); //网络 3s
promise.then(resp => {
    // console.log("响应数据",resp)
    resp.json().then(data => {
        console.log(data)
    })
})

promise.catch(err => {
    console.log("远程抓取失败", err)
})
console.log(2)

// promise.then();   // 操作成功以后
// promise.catch();  // 操作失败以后

// new Promise((resolve, reject)=>{
//     //某段业务
//     resolve(data); //成功以后
//     reject(err); //失败以后
// })
//
// function get(url){
//     return new Promise((resolve, reject)=>{
//         $.ajax({
//             url: url,
//             type: "GET",
//             success(result) {
//                 resolve(result); //成功结果
//             },
//             error(error) {
//                 reject(error); //失败结果
//             }
//         });
//     })
// }
//
// get('aaa').then(resp=>{}).catch(err=>{})

// 9、async 与  await
// function func1(){
//     //业务、计算
//     return new Promise((resolve, reject)=>{
//         let x = 101;
//         if(x%2 === 0){
//             resolve(x);
//         }else {
//             reject("x不是偶数")
//         }
//
//     })
// }
//
// func1().then(data=>console.log(data)).catch(err=>console.log(err))

async function func1() {
    //业务、计算
    let x = 101;
    if (x % 2 === 0) {
        return x; //正常返回
    } else {
        throw new Error("x不是偶数") //异常返回
    }
}

func1().then(data => console.log("then", data)).catch(err => console.log("err", err))

async function fetchProducts() {
    let promise1 = await  fetch(url);
    let promise2 = await promise1.json();
    console.log('promise2',promise2)
    
}
fetchProducts();
// 10、模块化

