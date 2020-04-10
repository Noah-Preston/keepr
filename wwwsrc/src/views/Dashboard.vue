<template>
  <div class="dashboard bgc main-font container-fluid">
    <div class="row text-center pt-3">
      <div class="col">
        <h1>Your DashBoard</h1>
      </div>
    </div>
    <div class="row">
      <keep
        v-for="(keepObj, index) in myKeeps"
        :key="keepObj.id"
        :keepData="keepObj"
        :keepIndex="index"
      />
    </div>
    <div class="row">
      <vault
        v-for="(vaultObj, index) in vaults"
        :key="vaultObj.id"
        :vaultData="vaultObj"
        :vaultIndex="index"
      />
    </div>
    <div class="row">
      <div class="col-10"></div>
      <div class="col-2">
        <button class="btn btn-success" data-toggle="modal" data-target="#vaultModal">New Vault</button>
      </div>
    </div>

    <div
      class="modal fade"
      id="vaultModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="vaultModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="vaultModalLabel">New Vault</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Title</label>
                <input type="Title" class="form-control" v-model="newVault.Name" />
                <label>Description</label>
                <input type="Description" class="form-control" v-model="newVault.Description" />
              </div>
              <button type="button" class="btn btn-primary" @click="makeVault">Post</button>
            </form>
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
import Keep from "../components/Keep";
import Vault from "../components/Vault";
export default {
  mounted() {
    this.$store.dispatch("getMyKeeps", this.$store.state.user.id);
    this.$store.dispatch("getVaults");
  },
  computed: {
    myKeeps() {
      return this.$store.state.myKeeps;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    makeVault() {
      debugger;
      this.$store.dispatch("makeVault", this.newVault);
      $("#vaultModal").modal("hide");
    }
  },
  data() {
    return {
      newVault: {
        UserId: this.$store.state.user.id
      }
    };
  },
  components: {
    Keep,
    Vault
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
