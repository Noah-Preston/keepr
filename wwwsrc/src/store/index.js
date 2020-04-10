import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    keeps: [],
    user: {},
    vaults: [],
    activeVault: { keeps: [] },
    vaultKeeps: [],
    activeKeep: {},
    myKeeps: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addKeep(state, keep) {
      state.keeps.push(keep)
    },
    addVault(state, vault) {
      state.vaults.push(vault)
    },
    addVaultKeep(state, keep) {
      state.vaultKeeps.push(keep)
    },
    setKeeps(state, keeps) {
      state.keeps = keeps
    },
    setVaults(state, vaults) {
      state.vaults = vaults
    },
    addKeepToVault(state, keep) {
      state.activeVault.keeps.push(keep)
    },
    removeKeepFromVault(state, id) {
      state.activeVault.keeps.filter(k => k.id != id)
    },
    setActiveVault(state, vault) {
      state.activeVault = vault
    },
    setActiveKeep(state, keep) {
      state.activeKeep = keep
    },
    deleteKeep(state, id) {
      state.keeps = state.keeps.filter(k => k.id != id)
    },
    deleteVault(state, id) {
      state.vaults = state.vaults.filter(v => v.id != id)
    },
    NewKeep(state, keep) {
      state.keeps = state.keeps.map(k => (k.id == keep.id) ? keep : k);
    },
    setMyKeeps(state, keeps) {
      state.myKeeps = keeps
    },
    setVaultKeeps(state, keeps) {
      state.activeVault.keeps = keeps
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getKeeps({ commit, dispatch }) {
      try {
        let res = await api.get("keeps");
        commit("setKeeps", res.data)
      }
      catch (error) {
        console.error(error)
      }
    },
    async getMyKeeps({ commit, dispatch }, UserId) {
      try {
        let res = await api.get("keeps/mykeeps", UserId);
        commit("setKeeps", res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async getVaults({ commit, dispatch }) {
      try {
        let res = await api.get("vaults");
        commit("setVaults", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getKeepById({ commit, dispatch }, id) {
      try {
        let res = await api.get("keeps/" + id)
        commit("setActiveKeep", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getVaultKeeps({ commit, dispatch }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId + "/keeps");
        commit("setVaultKeeps", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getVaultById({ commit, dispatch }, id) {
      try {
        let res = await api.get("vaults/" + id)
        commit("setActiveVault", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async makeKeep({ commit, dispatch }, keep) {
      try {
        let res = await api.post("keeps", keep)
        commit("addKeep", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async makeVault({ commit, dispatch }, vault) {
      try {
        let res = await api.post("vaults", vault)
        commit("addVault", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteKeep({ commit, dispatch }, id) {
      try {
        let res = await api.delete("keeps/" + id)
        commit("deleteKeep", id)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteVault({ commit, dispatch }, id) {
      try {
        let res = await api.delete("vaults/" + id)
        commit("deleteVault", id)
      } catch (error) {
        console.error(error)
      }
    },
    // async addKeepToVault({ commit, dispatch }, data) {
    //   try {
    //     let res = await api.put("vaults" + data.id, data.keep)
    //     commit("addKeepToVault", data.keep)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    async removeKeepFromVault({ dispatch, commit }, data) {
      try {
        let res = await api.put("vaultkeeps/vaultkeep" + data)
        commit("removeKeepFromVault", data.keepId)
      } catch (error) {
        console.error(error)
      }
    },

    async createVaultKeep({ commit, dispatch }, keep) {
      try {
        let res = await api.post("vaultkeeps", keep);
        //commit("addVaultKeep", res.data);
        //dispatch("editKeeps", keep.keepId);
      } catch (error) {
        console.error(error);
      }
    },
    async editKeeps({ commit, dispatch }, keepId) {
      try {
        let res = await api.put("keeps/" + keepId + "/keepcount");
        commit("NewKeep", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
