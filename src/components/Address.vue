<template>
  <h2 class="text-center fw-bold">Fixed Address:</h2>
  <h4 class="text-center" id="address">
    <span v-if="via1!==''">{{ capitalize(via1) }}</span>
    <span v-else></span>
    {{ capitalize(street) }}
    <span v-if="street!==''">
          <span v-if="corner!==''">
            <span v-if="no===''">S/N, </span>
            <span v-else>#{{ no }}, </span>
            <span v-if="no_int!==''">Int. {{ no_int }}, </span>
            esquina con <span v-if="via2!==''">{{ capitalize(via2) }} {{ capitalize(corner) }}; </span>
            <span v-else>{{ capitalize(corner) }}; </span>
          </span>
          <span v-else>
            <span v-if="no===''">S/N</span>
            <span v-else>#{{ no }}</span>
            <span v-if="no_int!==''">No. Int. {{ no_int }}; </span>
            <span v-else>; </span>
          </span>
        </span>

    <span v-if="mz!==''">Mz. {{ mz }}, </span>
    <span v-if="lt!==''">Lt. {{ lt }}; </span>

    <span v-if="col!==''">Col. {{ capitalize(col) }}; </span>
    <span v-if="loc===''"> </span>
    <span v-else>{{ capitalize(loc) }}, Mpio. de </span>
    <span v-if="town!==''">{{ capitalize(town) }}, </span>
    <span v-if="edo!==''">{{ edo }}; </span>
    <span v-if="cod_post!==''">C.P. {{ cod_post }}.</span>
  </h4>
  <br><br><br><br>
  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
    <button type="button" class="btn btn-outline-success" @click="validate_address">VALIDATE ADDRESS</button>
    <button type="button" class="btn btn-outline-danger" @click="delete_address">DELETE ADDRESS</button>
  </div>
  <input type="text" class="form-control text-center fst-italic" id="address_form" readonly
         placeholder="VALID ADDRESS FOR A DATABASE">
</template>

<script src="../js/Address.js"></script>
