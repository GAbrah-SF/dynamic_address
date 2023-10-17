let swal3_alert = {
  title: 'Campo Domicilio Vacío!!!',
  icon: 'warning',
  text: 'Valide primero el Domicilio',
  // confirmButtonColor: '#279b01',
  // confirmButtonText: "DE ACUERDO",
  background: "#000",
  showConfirmButton: false,
  footer: "Gabu's WebSite " + 'analizando el detalle'.toLocaleUpperCase(),
  timer: 2000,
}

function showAlert3() {
  this.$swal(swal3_alert);
}

export {showAlert3}
