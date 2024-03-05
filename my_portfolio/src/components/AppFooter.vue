<template>
    <div>
        <footer class="footer">
            <div class="footer--container">
                <div class="row">
                    <div class="footer-col">
                        <div class="responsive-map">
                            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9.92760029465883,%2078.12785625457765+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="auto" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow Me</h4>
                        <div class="social-links">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div :class="$store.state.isDarkTheme ? 'foot--containerlight': 'foot--containerdark'"  >
            Copyright © 2023 Nithish .  All Right Reserved
        </div>
    </div>
</template>
<script>
export default {
    name:'AppFooter'
}
</script>
<style lang="scss">
.footer--container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
    justify-content: space-around;
}
ul{
	list-style: none;
    padding:0;
}
.footer{
	background-color: #24262b;
    padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	bottom: -10px;
	background-color: #e91e63;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
    .foot{
        &--about{
            background-color: #7CB7AF;
        }
        &--containerdark{
            padding:20px;
            background-color: #C3E0E5;
            color:#274472;
        }
        &--containerlight{
            padding:20px;
            background-color: #274472;
            color:#C3E0E5;
        }
    }
</style>