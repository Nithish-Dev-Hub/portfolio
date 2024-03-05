<template>
    <div class="homepage" rel="preload">
        <a href="https://github.com/Nithish0120" target="_blank" class="homepage--button">View My Works <font-awesome-icon icon="fa-brands fa-github" /></a>
    </div>
    <IntroComponent/>
    <div class="grid">
      <div class="item">
        <div class="iconContainer">
          <img src="../assets/web-design_3159310.png" />
        </div>
        <div class="gridContent">
          <h1>Designer</h1>
          <p> I value simple content structure, clean design patterns, and thoughtful interactions. </p>
          <p class="colorViolet">
          Things I enjoy designing:
          </p>
          <p>UX, UI, Web, Apps, Logos</p>
                    <p class="colorViolet">Design Tools:</p>
                    <ul>
                      <li>Affinity Designer</li>
                      <li>Figma</li>
                      <li>Font Awesome</li>
                      <li>Pen &amp; Paper</li>
                      <li>Picsart</li>
                      <li>Canvas</li>
                    </ul>
        </div>
      </div>
      <div class="item">
        <div class="iconContainer">
          <img src="../assets/programmer_9888483.png" />
        </div>
        <div class="gridContent">
          <h1>Developer</h1>
          <p>
          I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
          <p class="colorViolet">
          Languages I speak:
          </p>
          <p>HTML/CSS, Javascript, VueJs/NuxtJs, ReactJs, NodeJs, Sass, MongoDb</p>
                    <p class="colorViolet">Dev Tools:</p>
                    <ul>
                      <li>VsCode</li>
                      <li>Kibana</li>
                      <li>Github</li>
                      <li>Pm2</li>
                      <li>Vercel</li>
                    </ul>
        </div>
      </div>
      <div class="item">
        <div class="iconContainer">
          <img src="../assets/training_7855621.png" />
        </div>
        <div class="gridContent">
          <h1>Mentor</h1>
          <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
          <p class="colorViolet">
        Experiences I draw from:
          </p>
          <p>UX/UI, Product design, Freelancing</p>
                    <p class="colorViolet">Mentor Stats:</p>
                    <ul>
                      <li>20+ short courses</li>
                      <li>20+ students</li>
                      <li>50+ mentor sessions</li>
                    </ul>
        </div>
      </div>
    </div>
</template>

<script>
import IntroComponent from '../components/IntroComponent.vue'

export default {
    name:'HomeContainer',
    components:{
        IntroComponent
    }
}
</script>
<style lang="scss">
    // Grid
    .grid {
      margin:10px auto;
      width:80%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-radius: 2px;
      box-shadow: 0 0 5px 5px #00000020;

      @media (max-width: 820px) {
        grid-template-columns: 1fr;
      }
      
      justify-items: stretch;
      align-items: stretch;
}

.item{
  background-color: #fff;
  border: 1px solid #ccc;
}
.iconContainer{    
animation: fadeIn 2s ease 0s 1 normal forwards;
    background-color: #6e07f3;
    width: 50%;
    padding: 40px 0;
    border-radius: 50%;
    margin: 10px auto;
    box-shadow: 0 0 5px 5px #00000020;
    @media (max-width: 820px) {
      width: 30%;
    }
    @media (max-width: 520px) {
      padding: 20px 0;
    }
  img {
    width:50%;
    margin: 0 auto;
  }
}
.colorViolet{
  color: #6e07f3;
}
.gridContent {
  color: #242424;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 400px;
  padding: 10px;
  list-style: none;
  h1{
    text-align: center;
  }
  ul {
    list-style: none;
    padding:0;
  }
}


    .homepage {
        display: flex;
        height: 45vh;
        background-size: cover;
        background-position: center;
        background-image: url('../assets/HeaderImage.jpg');
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: center;

        &--button {
            padding: 20px;
            margin: auto;
            border-radius: 35px;
            background-color: #274472;
            color: white;
            border: #fff solid 2px;
            position:absolute;
            vertical-align: bottom;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                background-color: transparent;
                color: #274472;
                border: #274472 solid 2px;
            }
        }
    }
</style>