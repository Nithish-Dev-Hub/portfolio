<template>
  <AppHeader></AppHeader>
  <router-view/>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppFooter from '../src/components/AppFooter.vue'
export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
    margin: 0;
    padding: 0;
    background-color: #274472;
    color: #C3E0E5;
    box-sizing: border-box;
    list-style: none;
}
.tagline{
  color:rgba(233,33,99,1);
  font-size: 4vw;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: scale(0.6);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}

</style>
