let swal2_options = {
  title: 'Ingresa tu Domicilio!!!',
  icon: 'info',
  text: 'Utiliza todos los campos y verás la magia',
  confirmButtonColor: '#279b01',
  confirmButtonText: "DE ACUERDO",
  background: "#000",
  // showConfirmButton: false,
  footer: "Gabu's WebSite " + 'analizando el detalle'.toLocaleUpperCase(),
  // timer: 3000,
};

function showAlert() {
  this.$swal(swal2_options);
}

export {showAlert}
