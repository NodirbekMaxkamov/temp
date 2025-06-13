// const sum = function(){
//     let sumnumber = 0;
//     for(let i = 0;i<10;i++) sumnumber+=i
//     return sumnumber
// };
// console.log(sum())

let eluserlist = document.querySelector(".js-user-list")
const handlerenderuser = (users) => {
    for(let user of users){
        let li = document.createElement("li");
        li.textContent = user.name;
        eluserlist.append(li)
    }
}
const handleuserequest = async () => {
    let req = await fetch("hhtps://jsonplaceholder.typicode.com/users");
    let res = await req.json();
    handlerenderuser(res);
};
handleuserequest();