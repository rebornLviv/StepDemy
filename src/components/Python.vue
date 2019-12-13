<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center"></v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <video ref="source" width="650" height="420" src="./video1.mp4" type="video/mp4" controls></video>
        </v-col>
        <div class="playlist mt-6">
          <v-list>
            <v-list-item @click="changeVideo">Lesson 1</v-list-item>
            <v-list-item @click="changeVideo">Lesson 2</v-list-item>
            <v-list-item @click="changeVideo">Lesson 3</v-list-item>
            <v-list-item @click="changeVideo">Lesson 4</v-list-item>
            <v-list-item @click="changeVideo">Lesson 5</v-list-item>
            <v-list-item @click="changeVideo">Lesson 5</v-list-item>
            <v-list-item @click="changeVideo">Lesson 5</v-list-item>
          </v-list>
        </div>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
import * as fb from "firebase";
export default {
  data() {
    return {};
  },

  methods: {
    changeVideo() {
      var storage = fb.storage();
      var storageRef = storage.ref("vids/video.mp4");

      storageRef.getDownloadURL().then(url => {
        this.$refs.source.src = url;
        console.log(url);
      });
      console.log(this.$refs.source.src);
    }
  }
};
</script>



<style scoped>
.playlist {
  border: 1px solid gray;
  height: 400px;
  margin-left: 170px;
}
</style>