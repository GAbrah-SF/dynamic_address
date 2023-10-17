function copy_address(id_element) {
  let address = document.getElementById("address_form").value
  if (!address) {
    this.showAlert3();
  } else {
    let address = document.createElement("input");
    address.setAttribute("value", document.getElementById(id_element).value);
    document.body.appendChild(address);
    address.select();
    document.execCommand("copy");
    document.body.removeChild(address);
  }
}

export {copy_address}
