<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col-12">{{active.Name}}</div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <img :src="require(`${active.Img}`)" alt />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-12">{{active.Description}}</div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-2">
        <button class="btn btn-success" data-toggle="modal" data-target="#vaultModal">Add To Vault</button>
      </div>
      <div class="col-4"></div>
      <div class="col-2">
        <button class="btn btn-danger">Go Back</button>
      </div>
      <div class="col-2"></div>
    </div>

    <div
      class="modal fade"
      id="vaultModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Your Vaults</h5>
          </div>
          <div class="modal-body">
            <vaultname
              v-for="(vaultnameObj, index) in vaults"
              :key="vaultnameObj.id"
              :vaultData="vaultObj"
              :vaultIndex="index"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vaultname from "../components/vaultname";
export default {
  name: "activekeep",
  components: {
    vaultname
  },
  computed: {
    active() {
      return this.$store.state.activeKeep;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {}
};
</script>

<style>
</style>