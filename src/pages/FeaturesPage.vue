<template>
  <component :is="currentComponent" :ref="currentComponent" />
</template>

<script>
import PluginNickName from "components/quickFeatures/PluginNickName";
import FavFile from "components/quickFeatures/FavFile";
import FavUrl from "components/quickFeatures/FavUrl";
import { markRaw } from "vue";

export default {
  components: {
    pluNickName: markRaw(PluginNickName),
    favFile: markRaw(FavFile),
    favUrl: markRaw(FavUrl),
  },
  data() {
    return {
      currentComponent: this.$route.params.featuretype,
    };
  },
  methods: {
    importCommand(command) {
      command = window.lodashM.cloneDeep(command);
      this.$root.utools.putDB(command, "qc_" + command.features.code);
      this.$root.utools.whole.setFeature(command.features);
    },
    getUid() {
      return Number(
        Math.random().toString().substr(3, 3) + Date.now()
      ).toString(36);
    },
  },
};
</script>
