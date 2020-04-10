<template>
  <div class="col-3">
    <div class="card" style="width: 18rem;" @click="viewVault">
      <div class="card-body">
        <h5 class="card-title text-light">{{vaultData.name}}</h5>
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
      this.$store.commit("setActiveVault", this.vaultData);
      this.$router.push({
        name: "activevault"
      });
    }
  }
};
</script>

<style>
</style>