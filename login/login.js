// responsein html
let responsePage = document.querySelector(".response");
const urlApi = "http://localhost:1337/api/auth/local/";

function loginFu() {
  let identifier = document.querySelector("input[type='email']");
  let pass = document.querySelector("input[type='password']");

  axios
    .post(urlApi, {
      identifier: `${identifier.value}`,
      password: `${pass.value}`,
    })

    .then((response) => {
      responsePage.innerHTML = "";
      responsePage.style.color = "#000";
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      responsePage.innerHTML = " <p> تم التسجيل بنجاح 😊 </p> ";
    })
    .catch((error) => {
      // Received the error
      responsePage.innerHTML = "";
       console.log(error.response.data.error.message)
       
       // append error to webPage
       responsePage.style.color = "red";
      let responseError = error.response.data.error.message;
      responsePage.innerHTML = responseError;
  
    });
}
