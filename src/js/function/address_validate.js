function validate_address() {
  this.address = document.getElementById("address").innerText
  if (!this.address) {
    this.showAlert2();
  } else {
    document.getElementById("address_form").value = this.address
  }
}

export {validate_address}
