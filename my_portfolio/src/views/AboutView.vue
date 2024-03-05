<template>
  <div class="about">
      <p class="about--me">About Me</p>
      <hr class="border--line" />

      <div class="about--nav" v-for="(item, index) in navList" :key="index" @click="showContainer(item)">
          <p>{{ item }}</p>
      </div>
      <div class="about--experience" v-if="selectItem === 'Experience'">
        <div class="blog-card">
            <div class="meta">
                <div class="photo client1"></div>
                <ul class="details">
                    <li class="author"><a href="https://www.sir.com" target="_blank">Client: Sotheby's International Realty</a></li>
                    <li class="date">May 26, 2021</li>
                    <li class="tags">Software Developer</li>
                </ul>
            </div>
            <div class="description" :class="$store.state.isDarkTheme ? 'description--light' : 'description--dark'">
                <h1 class="titleHeader">Gabriels Technology Solutions</h1>
                <h2>New York, USA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p class="read-more">
                    <a href="#">Read More</a>
                </p>
            </div>
        </div>

        <div class="blog-card alt">
            <div class="meta">
                <div class="photo client2"></div>
                <ul class="details">
                    <li class="author"><a href="https://www.wizinoa.com" target="_blank">Client: Wizinoa</a></li>
                    <li class="date">Aug 22, 2023</li>
                    <li class="tags">Mentor</li>
                </ul>
            </div>
            <div class="description" :class="$store.state.isDarkTheme ? 'description--light' : 'description--dark'">
                <h1 class="titleHeader">Wizinoa</h1>
                <h2>Tamilnadu, India</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p class="read-more">
                    <a href="#">Read More</a>
                </p>
            </div>
        </div>
      </div>
      <div class="about--projects" v-if="selectItem === 'Projects'">
          <div class="container">
            <div class="card" v-for="(item, index) in projectData" :key="index">
              <div class="top--container">
                <img :src="item.image" />
              </div>
              <div class="bottom--container">
                <div class="project--details">
                  <p class="project--details__title" v-if="item.project">{{ item.project }}</p>
                  <p class="project--details__status" v-if="item.status">{{ item.status }} <span>{{ item.timeline }}</span></p>
                  <p class="project--details__description" v-if="item.description">{{ item.description }}</p>
                  <p class="project--details__website" v-if="item.website"><a :href="item.website">Website</a></p>
                  <p class="project--details__need" v-if="item.needs">{{ item.needs }}</p>
                </div>
                <div class="project--skills" >
                  <div class="tag" v-for="(skills, index) in item.stack" :key="index">{{ skills }}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="about--academics" v-if="selectItem === 'Academics'">

          <div class="timeline">
              <ul>
                <li v-for="(item, index) in academicsData" :key="index">
                      <div class="content">
                          <h3>{{ item.title }}</h3>
                          <div>Institution: {{ item.name }}</div>
                          <div>Location: {{ item.location }}</div>
                          <div>Stream: {{ item.stream }}</div>
                          <div>GPA: {{ item.percentage }}</div>
                      </div>
                      <div class="time">
                          <h4>{{ item.year }}</h4>
                      </div>
                  </li>               
                  <div style="clear: both;"></div>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'AboutView',
  data(){
    return {
      selectItem: "Experience",
      navList:["Experience", "Projects", "Academics"],
      academicsData:[
        {title: "Higher Secondary", name:"TVS Matriculation Higher Secondary School", percentage:"94%", year: "2003 - 2017", stream: "Computer Science", location:"Tamilnadu, India"},
        {title: "Bachelor's Degree", name:"KLN College Of Engineering", percentage:"74%", year: "2017 - 2021", stream: "Computer Science Engineering", location:"Tamilnadu, India"}
      ],
      projectData:[
        {
          "project": "Sotheby's International Realty",
          "stack": ["Vuejs", "Nuxt js", "Vuex", "Apollo GraphQL"],
          "description": "This application is provided as PaaS to our client SIR, which provides a great UX service for branding all the Land properties our client and their affiliate company holds. The data is provided from an Admin tool and from MLS Listings. We process it in backend using an Elastic Search methodology to be stored and retrieve in a format, we developers need. Static pages and magazines are also provided to the clients in an hybrid way using the organizations very own Admin Tool.",
          "website": "https://www.sir.com",
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
          "status": "Live",
        "timeline": "Sep 2021 - Present"
        },
        {
          "project": "Douglas Elliman",
          "stack": ["React.js", "Next.js", "Node.js", "Apollo GraphQL"],
          "description": "Douglas Elliman is one of the Premium Agent which is a real-estate based domain client. The new project architecture is proposed and Implemented in the react platform. I am responsible for migration of a SPA with static contents to React platform and for the middleware API we used GraphQL support.",
          "website": "https://www.elliman.com/sales/usa",
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
          "status": "Live",
        "timeline":"May 2021 - Sep 2021"
        },{
          "project": "Middleware Redis_Cache",
          "stack": ["Nodejs", "Express.js", "Redis", "JavaScript"],
          "description": "This project is an performance improvement for the clients website. Based on the investigation, I found that, clearing the cache in the Elastic search is causing an increase in server error Hits in the server logs. To reduce the error hits, we have implemented redis cache clear based on key-pattern in NodeJs.",
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
          "needs": "To clear cache for a website, based on the server level, key based and precisely ",
          "status": "Live and Enhancing",
        "timeline":"Jun 2023 - Aug 2023"
        },
        {
          "project": "SIR Static Magazine",
          "stack": ["Vuejs", "JavaScript", "Nuxt.js", "Sass"],
          "description": "This Project is a static page designing and development. Using Vuejs to scaffold the template received from the dump posting in the WordPress tool. Fetching data using axios in the Components and Compiling them in to a single magazine pages.",
          "needs": "These Projects are kinda magazine that enriches the Main product's(SIR.com) sales and development.",
          "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
          "status": "Live",
        "timeline":"Sep 2021 - Present"
        }
      ]
    }
  },
  methods:{
    showContainer(val){
      this.selectItem = val;
    }
  }
}
</script>
<style lang="scss">
// Experience 
$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;

  &.alt {
    .meta{
        background-color: chocolate;
      }
  }
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform .2s;
  }
  .client1{
      height: 40px;
      width: 230px;
      margin: 90px auto;
      background-image: url(../assets/client1.jpg);
    }
    .client2{
      background-color: chocolate;
      height: 142px;
      width: 177px;
      margin: 42px auto;
      background-image: url(../assets/client2.jpg);
    }
  .details,
  .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
  }

  .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -108%;
    margin: auto;
    transition: left .2s;
    background: rgba(#000, .6);
    color: $color_white;
    padding: 10px;
    width: 100%;
    font-size: .9rem;
    a {
      text-decoration: dotted underline
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      margin-right: 10px;
    }

    .date:before {
      margin-right: 10px;
    }

    .tags {
      ul:before {
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    &--dark{
        background-color: #C3E0E5;
        color:#274472;
      }
      &--light{
        background-color: #274472;
        color:#fff;
      }
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin .3s, opacity .3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }


  @media (min-width: 640px) {
    flex-direction: row;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 18px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .meta{
        background-color: chocolate;
      }
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg)
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}


// TimeLine 
$color_1: rgba(233,33,99,1);
$color_2: #fff;

.timeline {
	position: relative;
	margin: 50px auto;
	padding: 40px 0;
	width: 1000px;
	box-sizing: border-box;
	&:before {
		content: '';
		position: absolute;
		left: 50%;
		width: 2px;
		height: 75%;
		background: #c5c5c5;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			position: relative;
			width: 50%;
			padding: 20px 40px;
			box-sizing: border-box;
      h3 {
          text-align: center;
        }
        div{
          text-align: center;
        }
			&:nth-child(odd) {
				float: left;
				text-align: center;
				clear: both;
				&:before {
					content: '';
					position: absolute;
					width: 10px;
					height: 10px;
					top: 24px;
					right: -6px;
					background: rgba(233,33,99,1);
					border-radius: 50%;
					box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
				}
				.time {
					position: absolute;
					top: 12px;
					right: -175px;
					margin: 0;
					padding: 8px 16px;
					background: rgba(233,33,99,1);
					color: $color_2;
					border-radius: 18px;
					box-shadow: 0 0 0 3px rgba(233,33,99,0.3);
				}
			}
			&:nth-child(even) {
				float: right;
				text-align: center;
				clear: both;
				&:before {
					content: '';
					position: absolute;
					width: 10px;
					height: 10px;
					top: 24px;
					left: -4px;
					background: rgba(233,33,99,1);
					border-radius: 50%;
					box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
				}
				.time {
					position: absolute;
					top: 12px;
					left: -175px;
					margin: 0;
					padding: 8px 16px;
					background: rgba(233,33,99,1);
					color: $color_2;
					border-radius: 18px;
					box-shadow: 0 0 0 3px rgba(233,33,99,0.3);
				}
			}
			h3 {
				padding: 0;
				margin: 0;
				color: $color_1;
				font-weight: 600;
			}
			p {
				margin: 10px 0 0;
				padding: 0;
			}
			.time {
				h4 {
					margin: 0;
					padding: 0;
					font-size: 14px;
				}
			}
		}
	}
}
.content {
	padding: 0 20px 20px;
  background: rgba( 233, 33, 99, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
animation: fadeIn 2s ease 0s 1 normal forwards;
}
@media (max-width:1000px) {
	.timeline {
		width: 100%;
	}
}
@media (max-width:767px) {
	.timeline {
		width: 100%;
		padding-bottom: 0;
		&:before {
			left: 20px;
			height: 100%;
		}
		ul {
			li {
				&:nth-child(odd) {
					width: 100%;
					text-align: left;
					padding-left: 50px;
					padding-bottom: 50px;
					&:before {
						top: -18px;
						left: 16px;
					}
					.time {
						top: -30px;
						left: 50px;
						right: inherit;
					}
				}
				&:nth-child(even) {
					width: 100%;
					text-align: left;
					padding-left: 50px;
					padding-bottom: 50px;
					&:before {
						top: -18px;
						left: 16px;
					}
					.time {
						top: -30px;
						left: 50px;
						right: inherit;
					}
				}
			}
		}
	}
	.titleHeader {
		font-size: 40px;
		text-align: center;
	}
}


// Card Hover

$color_1: #fff;
$color_2: #414141;
$font-family_1: sans-serif;
$background-color_1: #f1f1f1;

.container {
  display: grid;
  grid-template-columns: repeat(2, 500px);
  justify-content: center;
  grid-gap: 10px;
  @media screen and (max-width:1280px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width:500px) {
    grid-template-columns: repeat(1, auto);
  }
  .card{
    width:auto;

    &:hover {
      box-shadow: 1px 0px 15px 0px rgba(0,0,0,0.46);
    }
    div,p {
      margin: 0;
    }
    .top--container{ 
      margin-bottom: -4px;
      img{
        width:100%;
        margin: 0;
        padding:0;
      }
    }
    .bottom--container{
      background-color: $color_1;
      color: #274472;
      padding:10px;
      text-align: left;
      .project--details {
        p {
          padding:10px 0;
        }
        &__title{
          color:#fc4160;
          font-weight: bold;
        }
        &__description{
          text-align: justify;
        }
        &__status{
          background: darksalmon;
          font-weight: bold;
        }
        &__website{
          a {
            text-decoration: none;
            color: white;
            background: steelblue;
            padding: 10px;
            border-radius: 8px;

            &:hover{
              background: transparent;
              color:steelblue;
              border: 1px solid steelblue;
            }
          }
        }
      }
      .project--skills {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        margin: 10px 0;
      }
      .tag {
        background: #fc4160;
        color: white;
        padding: 5px 10px 5px 25px;
        border-radius: 90px 30px 30px 90px;
        position: relative;
        margin: 0 10px 10px 0;
        font-family: helvetica;
      }
      .tag:after {
        content: '';
        width: 8px;
        height: 8px;
        background: white;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 90px;
      }
    }
  }
  
}
// .container {
//   display: flex;
//   justify-content: space-around;
//   flex-direction: row;
//   @media (max-width: 728px){
//     flex-direction: column;
//     align-items: center;
//   }
// 	.card {
//     width:min-content;
// 		.icon {
// 			position: absolute;
// 			top: 0;
// 			left: 0;
// 			width: 100%;
// 			height: 100%;
//       &--dark{
//         background-color: #C3E0E5;
//       }
//       &--light{
//         background-color: #274472;
//       }
// 			.fa {
// 				position: absolute;
// 				top: 50%;
// 				left: 50%;
// 				transform: translate(-50%, -50%);
// 				font-size: 80px;
// 				color: $color_1;
// 			}
// 		}
//     .slide2{
//       color:#274472;
//       &--dark{
//         background-color: #fff;
//       }
//       &--light{
//         background-color: #C3E0E5;
//       }
//     }
// 		.slide {
// 			width: 300px;
// 			height: 200px;
// 			transition: 0.5s;
// 		}
// 		.slide.slide1 {
// 			position: relative;
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;
// 			z-index: 1;
// 			transition: 0.7s;
// 			transform: translateY(100px);
// 		}
// 		&:hover {
// 			.slide.slide1 {
// 				transform: translateY(0px);
// 			}
// 			.slide.slide2 {
// 				transform: translateY(0);
// 			}
// 		}
// 		.slide.slide2 {
// 			position: relative;
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;
// 			padding: 20px;
// 			box-sizing: border-box;
// 			transition: 0.8s;
// 			transform: translateY(-100px);
// 			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      
// 			&::after {
// 				content: "";
// 				position: absolute;
// 				width: 30px;
// 				height: 4px;
// 				bottom: 15px;
// 				left: 50%;
// 				left: 50%;
// 				transform: translateX(-50%);
// 				background: #2c73df;
// 			}
// 			.content {
// 				p {
// 					margin: 0;
// 					padding: 0;
// 					text-align: center;
// 					color: $color_2;
// 				}
// 				h3 {
// 					margin: 0 0 10px 0;
// 					padding: 0;
// 					font-size: 24px;
// 					text-align: center;
// 					color: $color_2;
// 				}
// 			}
// 		}
// 	}
// }

// General about

.about{
  text-align: center;
  padding:20px;
  padding-top:100px;
  &--nav {
    display: inline-block;
    padding:10px;
    cursor: pointer;
  }
  &--me {
    font-size: 3vw;
    @media screen and (max-width:580px) {
      font-size: 7vw;
    }
    margin:auto;
  }

  // &--academics{
  //   display: grid;
  //   justify-content: stretch;
  //   grid-template-columns: repeat(2, 50%);
  //   gap: 10px;
  //   @media screen and (max-width: 1000px){
  //     grid-template-columns: repeat(1, auto);
  //   }
  //   &__container{
  //     display: flex;
  //     justify-content: space-around;
  //     align-items: stretch;

  //     &--dark{
  //       background: rgba( 255, 255, 255, 0.25 );
  //       box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  //       backdrop-filter: blur( 4px );
  //       -webkit-backdrop-filter: blur( 4px );
  //       border-radius: 10px;
  //       border: 1px solid rgba( 255, 255, 255, 0.18 );
  //     }

  //     &--light{
  //       background: rgba( 88, 133, 175, 0.6 );
  //       box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.15 );
  //       backdrop-filter: blur( 13.5px );
  //       -webkit-backdrop-filter: blur( 13.5px );
  //       border-radius: 10px;
  //       border: 1px solid rgba( 255, 255, 255, 0.18 );
  //     }
  //     &--year {
  //       padding:20px;
  //     }
  //     &--others{
  //       padding:20px;
  //       div {
  //         text-align: left;
  //       }
  //     }
  //   }
  // }
}
  .border {
    &--line{
      width:30px;
      border: #af58ab solid 2px;
    }
  }
</style>
