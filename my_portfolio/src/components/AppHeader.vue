<template>
    <div class="header--container">
        <nav :class="$store.state.isDarkTheme ? 'nav_containerlight': 'nav_containerdark'">
            <div :class="$store.state.isDarkTheme ? 'nav_containerlight_logo--container': 'nav_containerdark_logo--container'">
                <router-link to="/"><font-awesome-icon class="font--icon" icon="fa-solid fa-code" /></router-link>
            </div>
            <template v-if="$store.state.isDesktopdevice">
                <div :class="$store.state.isDarkTheme ? 'nav_containerlight--list': 'nav_containerdark--list'">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <button @click="navigate">Contact</button>                
                </div>
                <div class="logo--icon" :style="$store.state.isDarkTheme ? '' : 'color: yellow'">
                    <span @click="switchTheme">
                        <font-awesome-icon class="font--icon" :icon="$store.state.isDarkTheme ? ['fas', 'moon'] : ['fas', 'sun']" />
                    </span>
                </div>
            </template>

            <template v-else>
                <div class="logo--icon" :style="$store.state.isDarkTheme ? '' : 'color: yellow'">
                    <span @click="switchTheme">
                        <font-awesome-icon class="font--icon" :icon="$store.state.isDarkTheme ? ['fas', 'moon'] : ['fas', 'sun']" />
                    </span>
                </div>
                <span @click="openMenu"><font-awesome-icon class="font--icon" icon="fa-solid fa-bars" /></span>
            </template>
        </nav>
        <transition name="slide-menu">
            <div v-show="showMenu" class="slideLayer">
                <div class="side_menu">
                    <span @click="openMenu"><font-awesome-icon class="font--icon" icon="fa-solid fa-xmark" /></span>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><button @click="navigate">Contact</button></li>
                    </ul>
                </div>
            </div>
        </transition>
        
    </div>
</template>
<script>
import logoDark from '../assets/n-logo-dark.png'
import logoLight from '../assets/n-logo-light.png'
import darkIcon from '../assets/darkMode.png'
import lightIcon from '../assets/lightMode.png'

export default {
    name:'AppHeader',
    data(){
        return {
            showMenu:false
        }
    },
    methods:{
        switchTheme(){
            this.$store.commit('setTheme');
            document.body.style.backgroundColor = this.$store.state.isDarkTheme ? 'white' : '#274472';
            document.body.style.color = this.$store.state.isDarkTheme ? '#274472' : '#C3E0E5';
        },
        navigate(){
            return this.$router.push('/contact');
        },
        openMenu(){
            this.showMenu = !this.showMenu;
        }
    },
    computed:{
        logoUrl(){
            return this.$store.state.isDarkTheme ? logoDark : logoLight;
        },
        logoTheme(){
            return this.$store.state.isDarkTheme ? darkIcon : lightIcon;
        }
    },
    created(){
        if(window.innerWidth > 730) {
            this.$store.commit('isDesktop');
        }
        
    }
}
</script>
<style lang="scss">
.header--container{
    position: fixed;
    width: 100%;
    z-index: 11;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
}

// Transition 

.close {
  position: fixed;
  right: 11px;
  top: 11px;
}
.side_menu{
    margin-top: 5vh;
}
.slide-menu-enter-active {
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}

.slide-menu-leave-active {
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}

.slideLayer {
  position: fixed;
  top: 0;
  right: 0;
  width: 275px;
//   padding: 50px;
  min-height: 275px;
  z-index: 9999;
  background-color: rgb(34,34,34);
  
  transition: all 0.2s ease-in-out 0s;
  -webkit-transition: all 0.2s ease-in-out 0s;

        a {
            text-decoration: none;
            color:#fff;
            &:hover{
                color: #C3E0E5;
                border-bottom: #C3E0E5 2px solid;
            }
        }
        button {
            border: #fff solid 1px;
            background-color: #274472;
            color: white;
            border-radius: 8px;
            color: #ffffff;
            font-size: 18px;
            margin: 0 20px;
            padding: 10px 20px;
            text-decoration: none;

            &:hover {
                background: #5885AF;
                color:#fff;
                text-decoration: none;
            }
        }

  ul {
    padding: 0;
    list-style: none;
    li {
        margin:20px;
    }
  }

//   &--dark{
//     // background-color: #5885AF;
//     a {
//             text-decoration: none;
//             color:#274472;
//             &:hover{
//                 color: #C3E0E5;
//                 border-bottom: #C3E0E5 2px solid;
//             }
//         }
//         button {
//             border: #fff solid 1px;
//             background-color: #274472;
//             color: white;
//             border-radius: 8px;
//             color: #ffffff;
//             font-size: 18px;
//             margin: 0 20px;
//             padding: 10px 20px;
//             text-decoration: none;

//             &:hover {
//                 background: #5885AF;
//                 color:#fff;
//                 text-decoration: none;
//             }
//         }
//   }
//   &--light{
//     // background-color: #C3E0E5;
//     a {
//             text-decoration: none;
//             color:#274472;
//             &:hover{
//                 border-bottom: #274472 2px solid;
//             }
//         }  
        
//         button {
//             border: #fff solid 1px;
//             background-color: #274472;
//             color: white;
//             border-radius: 8px;
//             color: #ffffff;
//             font-size: 18px;
//             margin: 0 20px;
//             padding: 10px 20px;
//             text-decoration: none;

//             &:hover {
//                 background: #fff;
//                 color:#274472;
//                 text-decoration: none;
//             }
//         }
//   }
}


.font--icon{
    font-size: 5vh;
    cursor: pointer;
    @media screen and (max-width:450px) {
        font-size: 4vh;
    }
    @media screen and (max-width:900px) {
        font-size: 3vh;
    }
}
.nav_containerdark {
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #5885AF;
    font-size: large;
    font-weight: bold;
    padding:20px;
    
    
    &_logo{
        &--container {
            a {
                text-decoration: none;
                color:#C3E0E5
            }
            text-align: left;
            img{
                width:10%;
                float: left;
            }
        }
    }
    &--list{
        width:50%;
        a {
            text-decoration: none;
            color:#274472;
            padding:20px;
            &:hover{
                color: #C3E0E5;
                border-bottom: #C3E0E5 2px solid;
            }
        }
        button {
            border: #fff solid 1px;
            background-color: #274472;
            color: white;
            border-radius: 8px;
            color: #ffffff;
            font-size: 18px;
            margin: 0 20px;
            padding: 10px 20px;
            text-decoration: none;

            &:hover {
                background: #5885AF;
                color:#fff;
                text-decoration: none;
            }
        }
    }
}

.nav_containerlight {
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #C3E0E5;
    font-size: large;
    font-weight: bold;
    padding:20px;
    a{
        text-decoration: none;
    }
    &_logo{
        &--container {
            a {
                text-decoration: none;
                color:#274472
            }
            text-align: left;
            img {
                width: 10%;
                float: left;
            }
        }
    }
    &--list{
        width:50%;
        a {
            text-decoration: none;
            color:#274472;
            padding:20px;
            &:hover{
                border-bottom: #274472 2px solid;
            }
        }  
        
        button {
            border: #fff solid 1px;
            background-color: #274472;
            color: white;
            border-radius: 8px;
            color: #ffffff;
            font-size: 18px;
            margin: 0 20px;
            padding: 10px 20px;
            text-decoration: none;

            &:hover {
                background: #fff;
                color:#274472;
                text-decoration: none;
            }
        }
    } 

}

.logo--icon {
    img {
        width: 50%;
    }
}
    
</style>