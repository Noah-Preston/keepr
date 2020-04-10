<template>
  <div class="bgc main-font container-fluid">
    <div class="row text-center">
      <div class="col">{{activeVault.name}}</div>
    </div>
    <div class="row text-center">
      <div class="col">{{activeVault.description}}</div>
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
import Keep from "../components/Keep";
export default {
  name: "ActiveVault",
  components: {
    Keep
  },
  computed: {
    activeVault() {
      return this.$store.state.vaults.find(v => v.id == this.$route.params.id);
    },
    vaultKeeps() {
      return this.$store.state.activeVault.keeps;
    }
  },
  mounted() {
    this.$store.dispatch("getVaultKeeps", this.$route.params.id);
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