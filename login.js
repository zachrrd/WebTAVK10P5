
function switchToLogin(event) {
  event.preventDefault(); 
  document.getElementById('reg-log').checked = false;
  Swal.fire({
      icon: 'success',
      title: 'Registrasi Sukses!',
      text: 'Tolong Log in untuk melanjutkan.',
      confirmButtonText: 'OK'
  });
}


document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  Swal.fire({
      icon: 'success',
      title: 'Login Sukses!',
      text: 'Selamat Datang Kembali!.Menghubungkan ke Homepage...',
      confirmButtonText: 'OK'
  }).then((result) => {
      if (result.isConfirmed) {

          window.location.href = "index.html"; 
      }
  });
});

document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  document.getElementById("reg-log").checked = false; 
});