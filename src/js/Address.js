import {capitalize} from "./function/capitalize.mjs";
import {showAlert2} from "./function/alert2";
import {showAlert3} from "./function/alert3";
import {validate_address} from "@/js/function/address_validate";
import {delete_address} from "@/js/function/address_delete";
import {copy_address} from "@/js/function/address_copy";

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
    showAlert3,
    validate_address,
    delete_address,
    copy_address,
  },
}

export default address
