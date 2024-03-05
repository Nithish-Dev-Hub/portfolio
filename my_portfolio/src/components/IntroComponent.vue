<template>
    <div class="intro--container">
        <div class="intro--container__name">
            <h3>Nithish Kumar </h3>
            <h6 class="tagline">Senior Frontend Engineer</h6>
        </div>
        
        <div class="intro--container__description">
            <h1>Hello <span class="wave">&#128075;</span></h1>
            <p>I'm a passionate web developer with a relentless drive to create exceptional digital experiences. With 5 years of experience in the web technologies, I've had the privilege of turning ideas into interactive, user-friendly websites and web applications.</p>
            <p>Let's connect and discuss how I can bring your web projects to life. I'm excited to embark on new coding adventures and create digital magic!</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'IntroComponent'
}
</script>
<style lang="scss">
.wave {
  animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}

h1,h3,h5,h6{
            text-align: left;
            margin: 0;
        }

.intro{
    
    &--container{
        padding:20px;
       &__name {

        font-size: 2vw;
        @media screen and (max-width:900px) {
            font-size: 4vw;
        }
        display: inline-block;
        width:45%;
        vertical-align:top;  
        @media screen and (max-width:500px) {
            display: block;
            width:100%;
        }      
       }
       &__description{
        display: inline-block;
        width:45%;
        @media screen and (max-width:500px) {
            display: block;
            width:100%;
        }
        p {
            line-height: 1.5;
            text-align: left;
        }
       }
    }
}
    
</style>