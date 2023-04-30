let baseUrl = "http://localhost:1337/api/";

let checkIdUser = localStorage.getItem("user");
let toIdUser = JSON.parse(checkIdUser);
let idUser = toIdUser.user.id;
let Authorization = toIdUser.jwt;
console.log(toIdUser)



function ui() {
    let hi = document.querySelector(".hi")
    hi.innerHTML = ` مرحبًا  
   ${toIdUser.user.username}  👋
    `





    let myUser = document.querySelector(".my-user")
    // add info
   myUser.innerHTML = `  <div class="close">

   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
     </svg>
</div>

<div class="username-email">
   <span> ${toIdUser.user.username} </span>
   <span> ${toIdUser.user.email}</span>
</div>


<div class="changePassword" onclick="location.pathname = '/changePassword.html'"> تغير الباسورد  <img src="./icon/change-password-icon.svg"> </div>
<div class="changePassword" onclick="location.pathname = '/changePassword.html'"> نسيت الباسورد  <img src="./icon/forgot-user-password-icon.svg"> </div>

`
    
    // model user header
    let iconuser = document.querySelector(".iconuser")
    iconuser.addEventListener("click", () => {
        myUser.classList.toggle("appear")
    })
    let  close = document.querySelector(" .close")
    close.addEventListener("click", () => {
        myUser.classList.toggle("appear")
    })



}
ui() 
//console.log(Authorization)

async function getServer() {
  const response = await fetch(baseUrl + "pending-requests-orders?populate=*", {
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer  ${Authorization}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
      .then((response) => {
      //  console.log(response.data[0].attributes.own.data.id)
       // console.log(response.data)
          
          for (order of response.data) {
              let idOwn = order.attributes.own.data.id;
              let server = document.querySelector(".server");

            //   check id order befor add
              if (idOwn = idUser) {
           //       console.log(order)
                  if(order.attributes.status == null) { order.attributes.status= " معلق " }
                  server.innerHTML += `
                  <div class="one-server">
                  <a href="#" class="Manage"> إدارة</a>
                  <div class="div-in-server">
                      <div class="status-name">  <span class="status"> الحالية : <span>   ${order.attributes.status} </span> </span>
                      <span class="name-server"> رقم السيرفر :  ${order.id} </span>
                      </div>
                      <img src="./img/vps.svg" alt="" srcset="">
                  </div>
              </div>


                  `


              }
              


          }
        


    })
    .catch((error) => console.log(error));
}

getServer();









