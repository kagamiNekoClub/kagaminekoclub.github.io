<template>
  <div>
    <div id="navbar">
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand  v-on:click="sceen = 'proj'" href="#">Kagami Neko Club</b-navbar-brand>
        <b-nav-text>{{ message }}</b-nav-text>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-on:click="sceen = 'about'" href="#">About</b-nav-item>
            <b-nav-item href="https://github.com/kagamiNekoClub" target="_blank">GitHub</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <img src="../assets/logo.png">
    </div>

    <div id="body">
      <audio :src='bgMusic' preload="auto" autoplay="autoplay" loop="true"></audio>

      <div v-if="sceen == 'proj'" class="proj">
        <h3 align="left">Projects</h3>
        <hr color=#987cb9 size=3>
        <b-card-group deck class="proj">
          <b-card title="雾海世界"
                  :img-src='ais'
                  img-alt="AIS"
                  img-top
                  tag="article"
                  style="max-width: 30rem;"
                  class="mb-3"
                  align="left">
            <p class="card-text">
              在雾海世界中，万物万事皆由信息构成：事物的形状、颜色、气味、触感、温度、声音……
            </p>
            <b-link :href='doc'
                    class="card-link" target="_blank">规则书</b-link>
            <b-link href='https://github.com/kagamiNekoClub/AllInSecretDataSchema'
                    class="card-link" target="_blank">Data Schema</b-link>
          </b-card>
        </b-card-group>
      </div>

      <div v-if="sceen == 'about'" class="proj">
        <h3 align="left">About</h3>
        <hr color=#987cb9 size=3>
        <b-container>
          <p class="about-text">
            有小姐姐的地方，就有拜小姐姐的人；而拜小姐姐的多了，便有了拜小姐姐神教。
          </p>
        </b-container>
      </div>
    </div>

    <div v-if="sceen == 'proj'" id="footer">
        <h6 class="footer-text">{{ footer }}</h6>
    </div>
    <div v-else class="fixed-bottom">
      <h6 class="footer-text">{{ footer }}</h6>
    </div>

  </div>
</template>

<script>
  import ais from '../assets/ais.png'
  import bg from '../assets/bgMusic.ogg'
  import aisDoc from '../assets/AIS-Doc-v1.5.pdf'

  import bCard from 'bootstrap-vue/es/components/card/card'

  let xmlhttp = new XMLHttpRequest()
  let data = {
    message: '',
    bgMusic: bg,
    ais: ais,
    doc: aisDoc,
    footer: 'Copyright © 2018 shitake',
    sceen: 'proj'
  }
  xmlhttp.onreadystatechange = _ => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      data.message = xmlhttp.responseText
    }
  }

  xmlhttp.open('GET', 'https://sslapi.hitokoto.cn/?c=abc&encode=text', true)
  xmlhttp.send()

  export default {
    name: 'el-main',
    data: function () {
      return data
    },
    components: {
      bCard
    }
  }
</script>

<style scoped>
  #body {
    height: 100%;
    margin-left: 160px;
    margin-right:160px;
  }

  #footer {
    position: relative;
    height: 100px;
  }

  .fixed-bottom {
    position: fixed;
    bottom: 0;
    width:100%;
  }

  .footer-text {
    position: absolute;
    line-height: 40px;
    margin-bottom: 0px;
    bottom: 5%;
    left:46%;
  }

</style>
