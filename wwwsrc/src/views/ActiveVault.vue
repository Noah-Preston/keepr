<template>
  <div class="bgc main-font container-fluid">
    <div class="row text-center">
      <div class="col">{{activeVault.Name}}</div>
    </div>
    <div class="row text-center">
      <div class="col">{{activeVault.Description}}</div>
    </div>
    <div class="row">
      <keep
        v-for="(keepObj, index) in vaultKeeps"
        :key="keepObj.id"
        :keepData="keepObj"
        :keepIndex="index"
      />
    </div>
    <div class="row">
      <div class="col-10"></div>
      <div class="col-2">
        <button class="btn-danger btn" @click="deleteVault">Delete Vault</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vault",
  computed: {
    activeVault() {
      return this.$store.state.activeVault;
    },
    vaultKeeps() {
      return this.$store.state.activeVault.keeps;
    }
  },
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.$store.state.activeVault.id);
      this.$router.push({
        name: "dashboard"
      });
    }
  }
};
</script>

<style>
.bgc {
  background-color: black;
  background-size: cover;
  height: 100vh;
}
.main-font {
  color: #1afe49;
}
</style>