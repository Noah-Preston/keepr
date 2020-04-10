<template>
  <div class="col-3">
    <div class="card" style="width: 18rem;" @click="viewKeep">
      <img class="card-img-top" :src="require(`${keepData.img}`)" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{keepData.name}}</h5>
        <p class="card-text">{{keepData.description}}</p>
        <button class="btn btn-sm btn-success" v-if="this.$auth.isAuthenticated">Keep</button>
        <button
          class="btn btn-sm btn-danger"
          v-if="keepData.userId == this.$store.state.user.id"
          @click="deleteKeep"
        >delete</button>
        <button
          class="btn btn-sm btn-warning"
          v-if="this.keepData.isPrivate"
          @click="remove"
        >Remove from Vault</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keep",
  props: ["keepData", "keepIndex"],
  computed: {
    keeps() {
      return this.$store.state.keeps;
    }
  },
  methods: {
    viewKeep() {
      this.$store.commit("setActiveKeep", this.keepData);
      this.$router.push({
        name: "activekeep"
      });
    },
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keepData.id);
      this.$router.push({
        name: "home"
      });
    },
    remove() {
      let data = {
        keepId: this.keepData.id,
        vaultId: this.$store.state.activeVault.id
      };
      this.$store.dispatch("removeKeepFromVault");
    }
  }
};
</script>

<style>
</style>