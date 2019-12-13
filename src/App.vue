<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="black--text font-italic mr-5">
        <h2 class="font-weight-regular">Stepdemy</h2>
      </div>

      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn text v-on="on">
            <span class="black--text">Категорії</span>

            <v-icon class="grey--text">{{idef}}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/python">Python</v-list-item>
          <v-list-item>Javascript</v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>

      <v-btn text class="grey--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="!isUserLoggedIn" to="/login" text class="black--text">Вхід</v-btn>

      <v-btn v-if="isUserLoggedIn" to="/" text @click="onLogout" class="black--text">Вийти</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        color="dark"
        :timeout="30000"
        :multi-line="true"
        @input="closeError"
        :value="true"
      >
        {{ error}}
        <v-btn text dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>
<script>
export default {
  name: "App",

  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout() {
      this.$store.dispatch("logoutUser").catch(error => {
        console.log(error);
      });
      this.$router.push("/");
    }
  },

  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  data: () => ({
    //
    idef: "mdi-menu-down",
    idw: "mdi-menu-down",
    iup: "mdi-menu-up"
  })
};
</script>
<style  scoped>
.txt {
  font-size: 50px;
}
.c1 {
  height: 550px;
  width: 100%;
  background-image: url("./img/laptop.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0;
  background-size: cover;
}
.blackt {
  height: 130px;
  background: rgba(0, 0, 0, 0.75);
  background-size: 100%;
  width: 100%;
  margin-top: 60px;

  justify-content: center;
}
.comp {
  width: 500px;
  height: 45px;
  background: rgba(128, 128, 128, 0.5);
  font-size: 20px;
}
.courses > div {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  background-size: contain;
  border-style: none;
  background-position: center;

  background-image: url("https://tadtadya.com/en/wp-content/uploads/sites/2/2017/09/html5-css3.png");
  background-color: lightgray;
}
.ft {
  background: black;
}
.sbox {
  background: rgba(128, 128, 128, 0.7);
  height: 50px;
  width: 500px;
  font-size: 25px;
  padding-left: 30px;
}
.blacktm {
  height: 90px;
  background: rgba(0, 0, 0, 0.75);
  background-size: 100%;
  margin-top: 50px;
  width: 100%;
}
.courses > div > div {
  height: 90px;
  background: rgba(0, 0, 0, 0.75);
  background-size: 100%;
  margin-top: 50px;
  width: 100%;
  text-align: center;
}
.blacktm:hover {
  display: none;
}
</style>
