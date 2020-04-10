<template>
  <div class="row" @click="addKeep">{{vaultData.name}}</div>
</template>

<script>
export default {
  name: "vaultname",
  props: ["vaultData", "vaultIndex"],
  methods: {
    addKeep() {
      //debugger;
      let temp = this.vaultData;
      let data = {
        vaultId: temp.id,
        keepId: this.$store.state.activeKeep.id
      };
      console.log(data);
      this.$store.dispatch("createVaultKeep", data);
      $("#vaultModal").modal("hide");
    }
  }
};
</script>

<style>
</style>