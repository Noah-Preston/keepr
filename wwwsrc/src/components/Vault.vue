<template>
  <div class="col-3">
    <div class="card" style="width: 18rem;" @click="viewVault">
      <div class="card-body">
        <h5 class="card-title text-dark">{{vaultData.name}}</h5>
        <p class="card-text">{{vaultData.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vault",
  props: ["vaultData", "vaultIndex"],
  computed: {
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    viewVault() {
      // debugger;
      this.$router.push({
        name: "activevault",
        params: { id: this.vaultData.id }
      });
    }
  }
};
</script>

<style>
</style>