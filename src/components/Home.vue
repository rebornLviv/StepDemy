<template>
  <div>
    <v-content fluid class="c1">
      <v-row>
        <v-col class="blackt">
          <h1 class="white--text text-center">Вітаємо на нашому ресурсі</h1>
          <h1 class="white--text text-center">Тут ви можете не лише навчатися, а й навчати!</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="middle">
          <input class="white--text sbox" type="text" placeholder="Пошук.." />
        </v-col>
      </v-row>
      <v-row></v-row>
    </v-content>
    <v-container class="mb-12">
      <p class="text-center txt">Популярні курси</p>
      <v-row class="courses justify-space-around">
        <v-card v-for="x in 3" :key="x">
          <div>
            <h1 class="white--text">Назва Курсу</h1>

            <p class="white--text">К-ть уроків</p>
          </div>
        </v-card>
      </v-row>
      <v-row class="courses justify-space-around mt-7">
        <v-card v-for="x in 3" :key="x">
          <div>
            <h1 class="white--text">Назва Курсу</h1>

            <p class="white--text">К-ть уроків</p>
          </div>
        </v-card>
      </v-row>
      <v-row class="courses justify-space-around mt-7 mb-10">
        <v-card v-for="x in 3" :key="x">
          <div>
            <h1 class="white--text">Назва Курсу</h1>

            <p class="white--text">К-ть уроків</p>
          </div>
        </v-card>
      </v-row>
    </v-container>

    <v-footer absolute dark class="font-weight-medium white--text">
      <v-col class="text-center" cols="12">
        <strong>Львів</strong>
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </div>
</template>
<style  scoped>
.txt {
  font-size: 50px;
}
.c1 {
  height: 550px;
  width: 100%;
  background-image: url("../img/laptop.jpg");
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

.courses > div:hover > div {
  display: none;
}

.blacktm:hover {
  display: none;
}
</style>