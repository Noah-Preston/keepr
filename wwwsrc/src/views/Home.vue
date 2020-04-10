<template>
  <div class="home title container-fluid" id="bgc">
    <div class="row text-center pt-3">
      <div class="col-12">
        <h4
          class="main-font"
        >Keepr is a place where you can create your own keeps or store others' keeps to your vault!</h4>
      </div>
    </div>
    <div class="row text-center pt-3">
      <div class="col">
        <button
          class="btn btn-lg btn-success"
          v-if="$auth.isAuthenticated"
          data-toggle="modal"
          data-target="#createModal"
        >Post A Keep!</button>
      </div>
    </div>
    <div class="row">
      <keep
        v-for="(keepObj, index) in keeps"
        :key="keepObj.id"
        :keepData="keepObj"
        :keepIndex="index"
      />
    </div>

    <div
      class="modal fade"
      id="createModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createModalLabel">New Keep</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Title</label>
                <input type="Title" class="form-control" v-model="newKeep.Name" />
                <label>Image Url</label>
                <input type="imageUrl" class="form-control" v-model="newKeep.Img" />
                <label>Description</label>
                <input type="Description" class="form-control" v-model="newKeep.Description" />
              </div>
              <button type="button" class="btn btn-primary" @click="makeKeep">Post</button>
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
export default {
  name: "home",
  components: {
    Keep
  },
  data() {
    return {
      newKeep: {
        UserId: this.$store.state.user.sub
      }
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
    this.$store.commit("setUser", this.$auth.user);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    keeps() {
      return this.$store.state.keeps;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    makeKeep() {
      this.$store.dispatch("makeKeep", this.newKeep);
      $("#createModal").modal("hide");
    }
  }
};
</script>

<style>
.title {
  font-family: "Righteous", cursive;
}
#bgc {
  background-color: black;
  background-size: cover;
  height: 100vh;
}
.main-font {
  color: #1afe49;
}
</style>
