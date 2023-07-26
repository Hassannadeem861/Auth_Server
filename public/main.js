
const form = document.querySelector("#form")

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const email = document.querySelector("#email")
    const password = document.querySelector("#password")

});

axios.post('api/v1/signup', {
    email: email,
    password: password
  })
  .then(function (response) {
    console.log(response.data);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'response.data',
        showConfirmButton: false,
        timer: 1500
    });
  })
  .catch(function (error) {
    console.log(error);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Error',
        showConfirmButton: false,
        timer: 1500
    });
  });