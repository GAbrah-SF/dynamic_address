import Address from "../components/Address";
import {capitalize} from "./function/capitalize.mjs";
import {onlyNumbers} from "./function/numbers";
import {showAlert} from "./function/alert";

let separator = '-'.repeat(15);
let form = {
  components: {
    Address,
  },
  data() {
    return {
      via1: "",
      street: "",
      via2: "",
      corner: "",
      no: "",
      no_int: "",
      mz: "",
      lt: "",
      col: "",
      loc: "",
      town: "",
      edo: "",
      cod_post: "",

      vias: [
        {value: '', text: separator},
        {value: 'arr.', text: 'arroyo'},
        {value: 'av.', text: 'avenida'},
        {value: 'bo.', text: 'barrio'},
        {value: 'blvr.', text: 'bulevar'},
        {value: 'calle.', text: 'calle'},
        {value: 'call.', text: 'callejón'},
        {value: 'camino.', text: 'camino'},
        {value: 'ca.', text: 'camino alto'},
        {value: 'cb.', text: 'camino bajo'},
        {value: 'cv.', text: 'camino viejo'},
        {value: 'camp.', text: 'campillo'},
        {value: 'carr.', text: 'carrera'},
        {value: 'ctra.', text: 'carretera'},
        {value: 'cda.', text: 'cerrada'},
        {value: 'cerr.', text: 'cerrillo'},
        {value: 'circ.', text: 'circuito'},
        {value: 'cost.', text: 'costanilla'},
        {value: 'cta.', text: 'cuesta'},
        {value: 'ens.', text: 'ensanche'},
        {value: 'extr. ', text: 'extrarradio'},
        {value: 'gta.', text: 'glorieta'},
        {value: 'int.', text: 'interior'},
        {value: 'pzo.', text: 'pasadizo'},
        {value: 'pje.', text: 'pasaje'},
        {value: 'p.', text: 'paseo'},
        {value: 'pa.', text: 'paseo alto'},
        {value: 'pb.', text: 'paseo bajo'},
        {value: 'pza.', text: 'plaza'},
        {value: 'prad.', text: 'pradera'},
        {value: 'pret.', text: 'pretil'},
        {value: 'pte.', text: 'puente'},
        {value: 'pk.', text: 'punto kilométrico'},
        {value: 'rbla.', text: 'rambla'},
        {value: 'rib.', text: 'ribera'},
        {value: 'rda.', text: 'ronda'},
        {value: 'tr.', text: 'travesía'},
        {value: 'vda.', text: 'vereda'},
      ],

      estados: [
        {value: '', text: separator},
        {value: 'Ags', text: 'Aguascalientes'},
        {value: 'B.C', text: 'Baja California'},
        {value: 'B.C.S', text: 'Baja California Sur'},
        {value: 'Camp', text: 'Campeche'},
        {value: 'Coah', text: 'Coahuila de Zaragoza'},
        {value: 'Col', text: 'Colima'},
        {value: 'Chis', text: 'Chiapas'},
        {value: 'Chih', text: 'Chihuahua'},
        {value: 'C.D.Mx', text: 'Ciudad de México'},
        {value: 'Dgo', text: 'Durango'},
        {value: 'Gto', text: 'Guanajuato'},
        {value: 'Gro', text: 'Guerrero'},
        {value: 'Hgo', text: 'Hidalgo'},
        {value: 'Jal', text: 'Jalisco'},
        {value: 'Edo. Méx', text: 'Estado de México'},
        {value: 'Mich', text: 'Michoacán de Ocampo'},
        {value: 'Mor', text: 'Morelos'},
        {value: 'Nay', text: 'Nayarit'},
        {value: 'N.L', text: 'Nuevo León'},
        {value: 'Oax', text: 'Oaxaca'},
        {value: 'Pue', text: 'Puebla'},
        {value: 'Qro', text: 'Querétaro'},
        {value: 'Q.R', text: 'Quintana Roo'},
        {value: 'S.L.P', text: 'San Luis Potosí'},
        {value: 'Sin', text: 'Sinaloa'},
        {value: 'Son', text: 'Sonora'},
        {value: 'Tab', text: 'Tabasco'},
        {value: 'Tams', text: 'Tamaulipas'},
        {value: 'Tlax', text: 'Tlaxcala'},
        {value: 'Ver', text: 'Veracruz de Ignacio de la Llave'},
        {value: 'Yuc', text: 'Yucatán'},
        {value: 'Zac', text: 'Zacatecas'},
      ]
    }
  }, methods: {
    capitalize,
    onlyNumbers,
    showAlert,
    clean() {
      this.via1 = ""
      this.street = ""
      this.via2 = ""
      this.corner = ""
      this.no = ""
      this.no_int = ""
      this.mz = ""
      this.lt = ""
      this.col = ""
      this.loc = ""
      this.town = ""
      this.edo = ""
      this.cod_post = ""
    },
  },
}

export default form
