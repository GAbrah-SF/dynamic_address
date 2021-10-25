<template>
  <div id="formulario">
    <form class="row g-3">
      <div class="col-md-2">
        <label for="via1" class="form-label h5 fw-bold">Vía:</label>
        <select id="via1" class="form-select text-center campos" v-model="via1">
          <option v-for="via in vias"
                  v-bind:value="via.value"
                  v-bind:key="via">
            {{ capitalize(via.text) }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="domicilio" class="form-label h5 fw-bold">Domicilio:</label>
        <input type="text" class="form-control text-center campos" id="domicilio"
               v-model="street" required>
      </div>
      <div class="col-md-2">
        <label for="via2" class="form-label h5 fw-bold">Vía:</label>
        <select id="via2" class="form-select text-center campos" v-model="via2">
          <option v-for="via in vias"
                  v-bind:value="via.value"
                  v-bind:key="via">
            {{ capitalize(via.text) }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="esquina" class="form-label h5 fw-bold">Esquina con:</label>
        <input type="text" class="form-control text-center campos" id="esquina" placeholder="OPTIONAL"
               v-model="corner">
      </div>

      <div class="col-md-3">
        <label for="num_exterior" class="form-label h5 fw-bold">Núm. Exterior:</label>
        <input type="text" class="form-control text-center campos" id="num_exterior" placeholder="S/N"
               v-model="no" maxlength="5">
      </div>
      <div class="col-md-3">
        <label for="num_interior" class="form-label h5 fw-bold">Núm. Interior:</label>
        <input type="text" class="form-control text-center campos" id="num_interior" placeholder="OPTIONAL"
               v-model="no_int" maxlength="5">
      </div>
      <div class="col-md-3">
        <label for="num_manzana" class="form-label h5 fw-bold">Núm. de Manzana:</label>
        <input type="text" class="form-control text-center campos" id="num_manzana" placeholder="OPTIONAL"
               minlength="5" maxlength="5"
               v-model="mz" @keypress="onlyNumbers">
      </div>
      <div class="col-md-3">
        <label for="num_lote" class="form-label h5 fw-bold">Núm. de Lote:</label>
        <input type="text" class="form-control text-center campos" id="num_lote" placeholder="OPTIONAL"
               minlength="5" maxlength="5"
               v-model="lt" @keypress="onlyNumbers">
      </div>

      <div class="col-md-2">
        <label for="colonia" class="form-label h5 fw-bold">Colonia:</label>
        <input type="text" class="form-control text-center campos" id="colonia" v-model="col" required>
      </div>
      <div class="col-md-2">
        <label for="localidad" class="form-label h5 fw-bold">Localidad:</label>
        <input type="text" class="form-control text-center campos" id="localidad" placeholder="OPTIONAL"
               v-model="loc">
      </div>
      <div class="col-md-3">
        <label for="cd_del_mpio" class="form-label h5 fw-bold">Cd./Del./Mpio:</label>
        <input type="text" class="form-control text-center campos" id="cd_del_mpio" v-model="town" required>
      </div>
      <div class="col-md-3">
        <label for="estado" class="form-label h5 fw-bold">Estado:</label>
        <select id="estado" class="form-select text-center campos" v-model="edo">
          <option v-for="estado in estados" v-bind:value="estado.value" v-bind:key="estado">
            {{ estado.text.toLocaleUpperCase() }}
          </option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="cod_post" class="form-label h5 fw-bold">Código Postal:</label>
        <input type="text" class="form-control text-center cod_post campos" id="cod_post" minlength="5" maxlength="5"
               @keypress="onlyNumbers"
               v-model="cod_post" required>
      </div>
      <br>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button type="button" class="btn btn-outline-info" @click="showAlert">INSTRUCTIONS</button>
        <button type="button" class="btn btn-outline-danger" @click="limpiar">CLEAN FORM</button>
      </div>
      <br>
      <Address :via1="via1" :street="street" :via2="via2" :corner="corner"
               :no="no" :no_int="no_int" :mz="mz" :lt="lt"
               :col="col" :loc="loc" :town="town" :edo="edo" :cod_post="cod_post"/>
      <br><br>
    </form>
  </div>
</template>

<script src="../js/Form.js"></script>
<style src="../css/Form.css"></style>
