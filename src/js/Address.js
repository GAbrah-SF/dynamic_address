import {capitalize} from "./function/capitalize.mjs";
import {showAlert2} from "./function/alert2";

let address = {
  name: "Address",
  address: "",
  props: {
    via1: String,
    street: String,
    via2: String,
    corner: String,
    no: String,
    no_int: String,
    mz: String,
    lt: String,
    col: String,
    loc: String,
    town: String,
    edo: String,
    cod_post: String,
  },
  methods: {
    capitalize,
    showAlert2,
    validate_address() {
      this.address = document.getElementById("address").innerText
      if (!this.address) {
        this.showAlert2();
      } else {
        document.getElementById("address_form").value = this.address
      }
    },
    delete_address() {
      document.getElementById("address_form").value = ""
    },
  },
}

export default address
