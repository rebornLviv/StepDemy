<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <p class="text-center display-3">Зареєструйтеся, щоб продовжити</p>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-form v-model="valid" lazy-validation ref="form">
            <v-text-field
              v-model="email"
              color="secondary"
              name="login"
              :rules="emailRules"
              type="text"
              placeholder="Email"
            />

            <v-text-field
              class="pa"
              color="secondary"
              v-model="password"
              id="password"
              :rules="passwordRules"
              placeholder="Password"
              name="password"
              type="password"
            />
            <v-text-field
              class="pa"
              color="secondary"
              id="password"
              v-model="repassword"
              :rules="rePasswordRules"
              placeholder="Confirm password"
              name="password"
              type="password"
            />
          </v-form>

          <v-card-actions class="mt-4 bts">
            <v-btn class="nr ml-2" text to="/" color="secondary">Закрити</v-btn>
            <v-btn @click="OnSubmit" class="nr elevation-0 mr-2" dark>Далі</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import * as fb from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 6) ||
          "Password must be equal or more than 6 characters"
      ],
      rePasswordRules: [
        v => !!v || "Please repeat password",
        v => v === this.password || "Passwords didn`t match"
      ]
    };
  },
  methods: {
    OnSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        const onlyemail = {
          email: this.email
        };
        this.$store
          .dispatch("registerUser", user)
          .then(() => {
            fb.firestore()
              .collection("User")
              .add(onlyemail);

            this.$router.push("/");
          })
          .catch(err => console.log(err));

        console.log(user);
      }
    }
  }
};
</script>

<style scoped>
.nr {
  border-radius: 0px;
}
.cc {
  padding: 0;
}
.nr:first-child {
  border: 1px solid gray;
}
.v-text-field__details {
  display: none !important;
}
.v-messages {
  display: none !important;
}
.pa {
  padding: 0px;
}
.sz {
  font-size: 12px;
}
.pr {
  display: flex;
  justify-content: space-between;
}
.bts {
  justify-content: center;
}
</style>