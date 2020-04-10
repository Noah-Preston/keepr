<template>
  <div class="row">{{vaultData.Name}}</div>
</template>

<script>
export default {
  name: "vaultname",
  props: ["vaultData", "vaultIndex"],
  methods: {
    addKeep() {
      let newVault = vaultData.keeps;
      let data = {
        vaultId: vaultData.id,
        keepId: this.$store.activeKeep.id
      };
      this.$store.dispatch("addKeepToVault", data);
      $("#vaultModal").modal("hide");
    }
  }
};
</script>

<style>
</style>