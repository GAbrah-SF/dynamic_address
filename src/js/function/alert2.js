let swal2_alert = {
  title: 'Domicilio Indefinido!!!',
  icon: 'warning',
  text: 'Llene los campos obligatorios',
  // confirmButtonColor: '#279b01',
  // confirmButtonText: "DE ACUERDO",
  background: "#000",
  showConfirmButton: false,
  footer: "Gabu's WebSite " + 'analizando el detalle'.toLocaleUpperCase(),
  timer: 2000,
}

function showAlert2() {
  this.$swal(swal2_alert);
}

export {showAlert2}
