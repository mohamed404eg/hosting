// responsein html
let response = document.querySelector(".response") 

function loginFu() {
  let email = document.querySelector("input[type='email']");

  let pass = document.querySelector("input[type='password']");


  axios
    .post("https://reqres.in/api/login", {
      email: `${email.value}`,
      password: `${pass.value}`,
    })
    .then((rseponse) => {
      formLogin.innerHTML = " <p> تم تسجيل الدخول بنجاح 😊 </p> <p> تم الاعتماد علي تسجيل الدخول علي api وهمية لذلك لا يتم تحويل الي اي مكان</p>"
    }).catch((error) => {
      response.innerHTML = error.response.data.error;
    })
}
