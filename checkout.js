

let baseUrl = "http://localhost:1337/api/";

// append ro page order
let order = document.querySelector(".order");
let BillOrder = document.querySelector(".BillOrder");

function onload() {
  let check = localStorage.getItem("cartShared");
  if (check == null) {
    order.innerHTML = " لا يوجد شي  ";
    order.style.cssText =
      " text-align: center;font-size: 30px; display:flex; justify-content: center; width: 100%;";
  } else {
    let to = JSON.parse(check);
    //  console.log(to)
    let index = 0;
    for (id of to) {
      //  console.log(id)
      getDetailOrder(id, index);
      index++;
    }
  }
}
window.addEventListener("DOMContentLoaded", onload);



let total = 0;
function getDetailOrder(id, index) {
    axios
        .get(baseUrl + `plans/${id}`)
        .then(function (response) {
            // handle success
            //  console.log(response.data.data.attributes);

            let main = response.data.data.attributes;
            // add to page
            order.innerHTML += `

        <div class="plan">
        <h3 class="h3plan">${main.PLANname}</h3>
        <span class="price-in-plan"><span class="price-in-plan2">${main.price}</span>$/الشهر</span>
        <span>${main.Bandwidth} </span>
        <span>${main.Cloudflare} </span>
        <span>${main.Databases} </span>
        <span>${main.FreeDomain} </span>
        <span>${main.Mail} </span>
        <span>${main.SSD} </span>
        <span>${main.SSL} </span>
        <span>${main.Uptime} </span>
        <span>${main.Websites} </span>
        <span>${main.backups} </span>
        <span>${main.dns} </span>
        <span>${main.ftp} </span>
        <span>${main.move} </span>
        <span>${main.subdomain} </span>
        <span>${main.suppport} </span>
        <span>${main.visits_per_month} </span>
        <botton class="delete" onclick="deleteInLocal(${index})"> حذف </botton>
    </div>
    
        `;
            total +=  main.price;
 
          document.querySelector(".total").innerHTML = total;
          
          // BillOrder
          BillOrder.innerHTML += `

          <div class="singleOrder"> 
          <span>${main.PLANname} </span>
          <span>$${main.price }</span>

          </div>


          `
          // BillOrder \\
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function deleteInLocal(index) {
  console.log(index);
  // delete
  let check = localStorage.getItem("cartShared");
  let to = JSON.parse(check);
  to.splice(index, 1);
  // updata localStorage
  to = JSON.stringify(to);
  localStorage.setItem("cartShared", to);
  order.innerHTML = "";

  onload();
}



function sendOrder() {
  let check = localStorage.getItem("cartShared");
    let to = JSON.parse(check);
    
  // get id user
    let checkIdUser = localStorage.getItem("user");
  let toIdUser  = JSON.parse(checkIdUser);
   let idUser = toIdUser.user.id



    for (id of to) {
      
      sendApi(id, idUser)
      
    }



 
  }






async function sendApi(id , idUser) {
   let planname = ""
   if (id == 1) {
    planname = "Shared-1"
   }
   if (id == 2) {
    planname = "Shared-2"
   }
   if (id == 3) {
    planname = "Shared-3"
   }
  
  let body = {
    "data": {
      "own": `${idUser}`,
      "Shared": `${planname}`
    }
  };

  
  const response = await fetch(baseUrl + 'pending-requests-orders/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjgxOTk5NDQzLCJleHAiOjE2ODQ1OTE0NDN9.eLuXkN8KTwkO4cPG_mRrvuMxtRs_Q1YyxRPV9ElD79E'
    },
    body: JSON.stringify(body)
  }
  );

  response.json()
  if (response.ok) {
    setTimeout(() => {
      location.href = "./ControlPanel.html"
    }, 2000)
    

    // apper ok in page
    order.innerHTML = ` 
    تم تقدم طلبك بنجاح سيتم تحويل الي لوحة التحكم بعد ثواني
    `
    document.querySelector(".btn_sab").innerHTML = ' تم ارسل طلبك '

    // delete cartShared localStorage
    localStorage.removeItem("cartShared")
    order.style.color = "#1877F2"


  }

  console.log(response.ok)

  
}
  
  
    
  
