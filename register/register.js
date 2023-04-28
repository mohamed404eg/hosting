// responsein html
let responsePage = document.querySelector(".response");

const urlApi = "http://localhost:1337/api/auth/local/register";
function loginFu() {
  let username = document.querySelector(".username");
  let email = document.querySelector("input[type='email']");
  let pass = document.querySelector("input[type='password']");

  axios
    .post(urlApi, {
      username: `${username.value}`,
      email: `${email.value}`,
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
      let responseError = error.response.data.error.details.errors;
      // console.log(error.response.data.error.details.errors)
      // append error to webPage
      for (oneError of responseError) {
        responsePage.style.color = "red";
        responsePage.innerHTML += " | " + oneError.message;
        //console.log(oneError.message)
      }
    });
}
