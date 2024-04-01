<template>
	<div>
		<header :class="{ 'fixed-header': isHeaderFixed }">
			<div class="header__inner-2">
				<div class="header__logo-2">
					<a href="index.html" class="logo-dark"><img src="../assets/imgs/logo/fab-logo.png" alt="Site Logo"></a>
					<a href="index.html" class="logo-light"><img src="../assets/imgs/logo/fab-logo.png" alt="Site Logo"></a>
				</div>
				<div class="header__nav-2">
					<ul class="main-menu-4 menu-anim">
						<li class="has-megamenu">
							<NuxtLink to="/">home </NuxtLink>
							<ul class="mega-menu-2">
								<li>
									<div class="menu-heading">Agency</div>
									<ul>
										<li><a href="index.html">Digital Maketing</a></li>
										<li><a href="index-2.html">Design Studio </a></li>
										<li><a href="index-3.html">Digital Agency</a></li>
										<li><a href="index-7.html">creative Agency</a></li>
										<li><a href="index-6.html">Startup Agency</a></li>
										<li><a href="index-8.html">modern agency</a></li>
										<li><a href="index-4.html">personal Portfolio</a></li>
									</ul>
								</li>
								<li>
									<div class="menu-heading">Agency Dark</div>
									<ul>
										<li><a href="index-dark.html">Digital Maketing</a></li>
										<li><a href="index-2-dark.html">Design Studio</a></li>
										<li><a href="index-3-dark.html">Digital Agency</a></li>
										<li><a href="index-7-dark.html">creative Agency</a></li>
										<li><a href="index-6-dark.html">Startup Agency</a></li>
										<li><a href="index-8-dark.html">modern agency</a></li>
										<li><a href="index-4-dark.html">personal Portfolio</a></li>
									</ul>
								</li>
								<li>
									<div class="menu-heading">Portfolio</div>
									<ul>

										<li><a href="index-5.html">portfolio showcase</a></li>
										<li><a href="index-10.html">showcase carousel</a></li>
										<li><a href="index-12.html">Interactive link</a></li>
										<li><a href="index-13.html">portfolio masonry</a></li>
										<li><a href="index-14.html">vertical grid</a></li>
										<li><a href="index-15.html">Interactive image slider</a></li>
										<li><a href="index-16.html">showcase parallax</a></li>
										<li><a href="index-17.html">logo showcase</a></li>
										<li><a href="index-9.html">showcase slider</a></li>
										<li><a href="index-11.html">Interactive hover showcase</a></li>
									</ul>
								</li>
								<li>
									<div class="menu-heading">Portfolio dark</div>
									<ul>
										<li><a href="index-5-dark.html">portfolio showcase</a></li>
										<li><a href="index-10-dark.html">showcase carousel</a></li>
										<li><a href="index-12-dark.html">Interactive link</a></li>
										<li><a href="index-13-dark.html">portfolio masonry</a></li>
										<li><a href="index-14-dark.html">vertical grid</a></li>
										<li><a href="index-15-dark.html">Interactive image slider</a></li>
										<li><a href="index-16-dark.html">showcase parallax</a></li>
										<li><a href="index-17-dark.html">logo showcase</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<NuxtLink to="/about"> About </NuxtLink>
						</li>

						<li>
							<nuxtLink to="/services">services</nuxtLink>
							<ul class="main-dropdown">
								<li><a href="service.html">service</a>
									<ul class="sub-dropdown">
										<li><a href="service-dark.html">service dark</a></li>
										<li><a href="service-2-dark.html">service V.2 dark</a></li>
										<li><a href="service-3-dark.html">service V.3 dark</a></li>
										<li><a href="service-4-dark.html">service V.4 dark</a></li>
										<li><a href="service-5-dark.html">service V.5 dark</a></li>
										<li><a href="service-6-dark.html">service V.6 dark</a></li>
										<li><a href="service-details-dark.html">service details dark</a></li>
									</ul>
								</li>
								<li><a href="service-2.html">service V.2</a></li>
								<li><a href="service-3.html">service V.3</a></li>
								<li><a href="service-4.html">service V.4</a></li>
								<li><a href="service-5.html">service V.5</a></li>
								<li><a href="service-6.html">service V.6</a></li>
								<li><a href="service-details.html">service details</a></li>
							</ul>
						</li>
						<!-- <li><a href="team.html">team</a>
							<ul class="main-dropdown">
								<li><a href="team.html">team</a></li>
								<li><a href="team-details.html">team details</a></li>
							</ul>
						</li> -->
						<li><a href="blog.html">Blog</a>
							<ul class="main-dropdown">
								<li><a href="blog.html">blog</a></li>
								<li><a href="blog-2.html">blog v.2</a></li>
								<li><a href="category.html">category</a></li>
								<li><a href="blog-details.html">blog details</a></li>
							</ul>
						</li>
						<li>
							<nuxtLink to="/contact">Contact</nuxtLink>
						</li>
					</ul>
				</div>
				<div class="header__nav-icon-7">
					<button class="menu-icon-2" id="open_offcanvas" @click="toggleDiv"><img
							src="../assets/imgs/icon/menu-dark.png" alt="Menubar Icon"></button>
				</div>
			</div>
		</header>
		<div :style="{
			visibility: active ? 'hidden' : 'visible',
			// color: active ? 'black' : 'white',
			opacity: active ? '0' : '1'
		}" class="offcanvas__area">
			<div class="offcanvas__body">
				<div class="offcanvas__left">
					<div class="offcanvas__logo">
						<a href="index.html"><img src="../assets/imgs/logo/fab-logo.png" alt="Offcanvas Logo"></a>
					</div>
					<div class="offcanvas__social">
						<h3 class="social-title">Follow Us</h3>
						<ul>
							<li><a href="#">Dribbble</a></li>
							<li><a href="#">Behance</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Twitter</a></li>
							<li><a href="#">YouTube</a></li>
						</ul>
					</div>
					<div class="offcanvas__links">


					</div>
				</div>
				<div class="offcanvas__mid">
					<div class="offcanvas__menu-wrapper mean-container ">
						<nav class="offcanvas__menu mean-nav ">
							<ul class="menu-anim">
								<li><nuxt-link to="/">home</nuxt-link></li>
								<!-- <li><nuxt-link to="/team.html">team</nuxt-link></li> -->

								<li><a href="about.html">about </a></li>

								<li><a href="service.html">services </a></li>
								<li><a href="contact.html">contact</a></li>


							</ul>


						</nav>
					</div>
				</div>
				<div class="offcanvas__right">
					<div class="offcanvas__search">
						<form action="#">
							<input type="text" name="search" placeholder="Search keyword">
							<button><i class="fa-solid fa-magnifying-glass"></i></button>
						</form>
					</div>
					<div class="offcanvas__contact">
						<h3>Get in touch</h3>
						<ul>
							<li><a href="tel:02094980547">+(91) 9888889113 </a></li>
							<li><a href="mailto:info@extradesign.com"> mail@fabdnc.com </a></li>
							<li>C-98(B),Ph 7, Ind.Area, Mohali</li>
						</ul>
					</div>
					<img src="../assets/imgs/shape/11.png" alt="shape" class="shape-1">
					<div class="shape-2">
						<img src="../assets/imgs/shape/12.png" alt="shape">
					</div>
				</div>
				<div class="offcanvas__close">
					<button type="button" id="close_offcanvas" @click="offcanvasOpen"><i
							class="fa-solid fa-xmark"></i></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>


export default {
	data() {
		return {
			active: true,
			isHeaderFixed: false
		};
	},

	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	mounted() {


		// Get the menu buttons from the template
		const buttons = this.$el.querySelectorAll(".menu-anim > li > a");
		// Wrap each button text with a div and span elements
		buttons.forEach((button) =>
		(button.innerHTML =
			'<div class="menu-text"><span>' +
			button.textContent.split("").join("</span><span>") +
			"</span></div>")
		);
		// Set a timeout to adjust the width of the empty spaces
		setTimeout(() => {
			// Get the menu text elements from the template
			var menu_text = this.$el.querySelectorAll(".menu-text span");
			// Loop through each menu text element
			menu_text.forEach((item) => {
				// Get the font size of the element
				var font_sizes = window.getComputedStyle(item, null);
				let font_size = font_sizes.getPropertyValue("font-size");
				// Convert the font size to a number
				let size_in_number = parseInt(font_size.replace("px", ""));
				// Divide the font size by 3
				let new_size = parseInt(size_in_number / 3);
				// Add the px unit to the new size
				new_size = new_size + "px";
				// If the element is an empty space, set its width to the new size
				if (item.innerHTML == " ") {
					item.style.width = new_size;
				}
			});
		}, 1000);
	},

	methods: {
		offcanvasOpen() {
			this.active = !this.active;
		},
		offcanvasClose() {
			this.active = this.active
		},

		handleScroll() {
			this.isHeaderFixed = window.scrollY > 100;
		},

		toggleDiv() {
			this.$emit('toggle-div');



		}


	},
}
</script>

<style scoped lang="scss">
@import '../assets/scss/utils/mixin';

header  {
	transition: all 0.2s ease-in-out;
}

.fixed-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	background: #fff;
	/* Adjust z-index as needed */
	/* Add any additional styling for your fixed header */
}

.header-logo img {
	width: 60px;
	margin-right: 10px;
}

.header-logo {
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	display: flex;
	align-items: center;
}

.menu-anim-wrapper {
	overflow: hidden;
	height: 15px;
	display: flex;
	align-items: center;

}

.menu-anim-wrapper span {
	text-transform: uppercase;
}

.shape-2 img {
	width: 100%;
	height: 100%;
}

/* 
.menu-anim-wrapper  span {
    
    transition: all 0.2s ease-in-out;
} */

.menu-anim-sub {
	position: relative;
	width: 11px;
	height: 100%;
	margin: 0 1px;
}

.menu-anim-link {
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.2s ease-in-out;

}

.menu-link-i-letter {
	width: 5px !important;
}



/* .menu-anim-wrapper .menu-anim-h::after {
    content: 'h';
    position: absolute;
    bottom: -9px;
    left: 0;
    color: #fff;
    font-size: 18px;
    transition: all 0.2s ease-in-out;

} */

.header-menu-wrapper:hover .menu-anim-link {
	top: -14px;
}

.header-menu-wrapper:hover .menu-anim-linkSub {
	top: 0px;
}

/* .has-megamenu:hover .menu-anim-h::after { 
    bottom: 0;
}  */


.main-menu>li,
.main-menu-4>li {
	display: inline-block;
	margin: 0 38px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

	.main-menu>li,
	.main-menu-4>li {
		margin: 0 19px;
	}
}

.main-menu>li.has-megamenu,
.main-menu-4>li.has-megamenu {
	position: static;
}

.main-menu>li:hover .main-dropdown,
.main-menu-4>li:hover .main-dropdown {
	top: 75px;
	opacity: 1;
	visibility: visible;
}

.main-menu>li:hover .mega-menu,
.main-menu-4>li:hover .mega-menu,
.main-menu-4>li:hover .mega-menu-2,
.main-menu>li:hover .mega-menu-2 {
	top: 75px;
	opacity: 1;
	visibility: visible;
}

.main-menu>li>a,
.main-menu-4>li>a {
	display: block;
	font-weight: 400;
	font-size: 18px;
	line-height: 16px;
	color: var(--white);
	padding: 29px 0;
	outline: none;
	text-transform: capitalize;
	transform: translateY(var(--y)) translateZ(0);
	transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.main-menu-3 {
	text-align: center;
}

@media only screen and (max-width: 767px) {
	.main-menu-3 {
		display: none;
	}
}

.main-menu-3>li {
	display: inline-block;
	padding: 0 40px;
	margin: 0;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.main-menu-3>li {
		padding: 25px 0;
	}
}

.main-menu-3>li.has-megamenu {
	position: static;
}

.main-menu-3>li:hover .main-dropdown {
	top: 80px;
	opacity: 1;
	visibility: visible;
}

.main-menu-3>li:hover .mega-menu,
.main-menu-3>li:hover .mega-menu-2 {
	top: 80px;
	opacity: 1;
	visibility: visible;
}

.main-menu-3>li>a {
	display: block;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
	color: var(--black-2);
	padding: 27px 0;
	outline: none;
	text-transform: capitalize;
	transform: translateY(var(--y)) translateZ(0);
	transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.main-menu-4>li>a {
	color: var(--black-2);
}

.main-menu .mega-menu li a,
.main-menu-4 .mega-menu li a,
.main-menu-4 .mega-menu-2 li a,
.main-menu .mega-menu-2 li a {
	color: var(--white);
}

.main-dropdown {
	position: absolute;
	width: 300px;
	left: 0;
	top: 85px;
	z-index: 9;
	background-color: var(--black-2);
	text-align: left;
	padding: 15px 0;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s;
}

.main-dropdown .sub-dropdown {
	position: absolute;
	width: 300px;
	left: 100%;
	top: 0;
	z-index: 9;
	background-color: var(--black-2);
	text-align: left;
	padding: 15px 0;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s;
}

.main-dropdown li {
	display: block;
	margin: 0;
	padding: 0;
}

.main-dropdown li:hover .sub-dropdown {
	opacity: 1;
	visibility: visible;
}

.main-dropdown li a {
	color: var(--white);
	display: block;
	padding: 10px 20px;
	text-transform: capitalize;
}

.main-dropdown li a .menu-text {
	text-shadow: 0 16px 0 var(--white);
}

.main-dropdown li a:hover {
	letter-spacing: 1px;
}

.mega-menu,
.mega-menu-2 {
	position: absolute;
	width: 100%;
	left: 0;
	top: 90px;
	z-index: 9;
	background-color: var(--black-2);
	text-align: left;
	padding: 40px 200px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 30px;
	opacity: 0;
	visibility: hidden;
	transition: all 0.2s;
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {

	.mega-menu,
	.mega-menu-2 {
		padding: 40px 100px;
	}
}

.mega-menu li,
.mega-menu-2 li {
	padding: 0;
	margin: 0;
}

.mega-menu li a,
.mega-menu-2 li a {
	color: var(--white);
	font-size: 20px;
	font-weight: 500;
	padding: 10px;
	margin-bottom: 10px;
	text-transform: capitalize;
}

.mega-menu li a .menu-text,
.mega-menu-2 li a .menu-text {
	text-shadow: 0 16px 0 var(--white);
}

.mega-menu li a:hover,
.mega-menu-2 li a:hover {
	letter-spacing: 1px;
}

.mega-menu li a:not([href]):not([class]),
.mega-menu-2 li a:not([href]):not([class]) {
	color: var(--white);
}

.mega-menu li a:not([href]):not([class]):hover,
.mega-menu-2 li a:not([href]):not([class]):hover {
	letter-spacing: 0;
	background-color: transparent;
}

.mega-menu li ul,
.mega-menu-2 li ul {
	text-align: left;
}

.mega-menu li ul li,
.mega-menu-2 li ul li {
	display: block;
	margin: 0;
}

.mega-menu li ul li a,
.mega-menu-2 li ul li a {
	font-weight: 400;
	font-size: 16px;
	padding: 10px 12px;
	display: block;
	margin-bottom: 0;
	text-transform: capitalize;
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {

	.mega-menu li ul li a,
	.mega-menu-2 li ul li a {
		padding: 6px 12px;
	}
}

.mega-menu-2 {
	width: 1160px;
	padding: 40px;
	left: 50%;
	transform: translateX(-50%);
	grid-template-columns: repeat(4, 1fr);
}

.menu-heading {
	font-size: 20px;
	font-weight: 500;
	color: var(--white);
	padding-bottom: 10px;
	text-transform: capitalize;
}

.footer-menu,
.footer-menu-2 {
	text-align: right;
}

@media only screen and (max-width: 767px) {

	.footer-menu,
	.footer-menu-2 {
		text-align: center;
	}
}

.footer-menu li,
.footer-menu-2 li {
	display: inline-block;
	padding-left: 80px;
}

@media only screen and (min-width: 1400px) and (max-width: 1919px) {

	.footer-menu li,
	.footer-menu-2 li {
		padding-left: 60px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

	.footer-menu li,
	.footer-menu-2 li {
		padding-left: 20px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

	.footer-menu li,
	.footer-menu-2 li {
		padding-left: 20px;
	}
}

@media only screen and (max-width: 767px) {

	.footer-menu li,
	.footer-menu-2 li {
		padding-left: 8px;
		padding-right: 8px;
	}
}

.footer-menu li a,
.footer-menu-2 li a {
	display: block;
	font-weight: 400;
	font-size: 16px;
	line-height: 1;
	color: var(--black-2);
	text-transform: capitalize;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.footer-menu-2 {
		margin-bottom: 30px;
	}
}

@media only screen and (max-width: 767px) {
	.footer-menu-2 {
		margin-bottom: 30px;
	}
}

.footer-menu-2 li a {
	color: var(--white);
	text-transform: uppercase;
}

.footer-menu-2 li a .menu-text {
	text-shadow: 0 16px 0 var(--white);
}

/* mean menu customize */
.offcanvas__menu-wrapper.mean-container {
	padding-top: 160px;
}

@media only screen and (min-width: 1400px) and (max-width: 1919px) {
	.offcanvas__menu-wrapper.mean-container {
		padding-top: 142px;
	}
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.offcanvas__menu-wrapper.mean-container {
		padding-top: 93px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.offcanvas__menu-wrapper.mean-container {
		padding-top: 93px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container {
		padding-top: 60px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container {
		padding-top: 40px;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-nav>ul {
	padding: 0;
	margin: 0;
	width: 100%;
	list-style-type: none;
	display: block !important;
}

.offcanvas__menu-wrapper.mean-container .mean-nav>ul>li:last-child>a {
	border-bottom: 1px solid var(--black-4);
}

.offcanvas__menu-wrapper.mean-container .mean-nav {
	background: none;
	margin-top: 0;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
	width: 100%;
	padding: 20px 0 20px 100px;
	font-weight: 400;
	font-size: 80px;
	line-height: 1;
	color: var(--white);
	text-transform: capitalize;
	border-top: 1px solid var(--black-4);
	display: flex;
	justify-content: space-between;
	align-items: center;
	outline: none;
	transform: translateY(var(--y)) translateZ(0);
	transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text {
	display: flex;
	overflow: hidden;
	text-shadow: 0 80px 0 var(--white);
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span {
	display: block;
	backface-visibility: hidden;
	font-style: normal;
	transition: transform 0.4s ease;
	transform: translateY(var(--m)) translateZ(0);
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(1) {
	transition-delay: 0.0333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(2) {
	transition-delay: 0.0666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(3) {
	transition-delay: 0.1s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(4) {
	transition-delay: 0.1333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(5) {
	transition-delay: 0.1666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(6) {
	transition-delay: 0.2s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(7) {
	transition-delay: 0.2333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(8) {
	transition-delay: 0.2666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(9) {
	transition-delay: 0.3s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(10) {
	transition-delay: 0.3333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(11) {
	transition-delay: 0.3666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(12) {
	transition-delay: 0.4s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(13) {
	transition-delay: 0.4333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(14) {
	transition-delay: 0.4666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(15) {
	transition-delay: 0.5s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(16) {
	transition-delay: 0.5333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(17) {
	transition-delay: 0.5666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(18) {
	transition-delay: 0.6s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(19) {
	transition-delay: 0.6333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(20) {
	transition-delay: 0.6666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(21) {
	transition-delay: 0.7s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(22) {
	transition-delay: 0.7333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(23) {
	transition-delay: 0.7666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(24) {
	transition-delay: 0.8s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(25) {
	transition-delay: 0.8333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(26) {
	transition-delay: 0.8666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(27) {
	transition-delay: 0.9s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(28) {
	transition-delay: 0.9333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(29) {
	transition-delay: 0.9666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(30) {
	transition-delay: 1s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(31) {
	transition-delay: 1.0333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(32) {
	transition-delay: 1.0666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(33) {
	transition-delay: 1.1s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(34) {
	transition-delay: 1.1333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(35) {
	transition-delay: 1.1666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(36) {
	transition-delay: 1.2s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(37) {
	transition-delay: 1.2333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(38) {
	transition-delay: 1.2666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(39) {
	transition-delay: 1.3s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(40) {
	transition-delay: 1.3333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(41) {
	transition-delay: 1.3666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(42) {
	transition-delay: 1.4s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(43) {
	transition-delay: 1.4333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(44) {
	transition-delay: 1.4666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(45) {
	transition-delay: 1.5s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(46) {
	transition-delay: 1.5333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(47) {
	transition-delay: 1.5666666667s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(48) {
	transition-delay: 1.6s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a .menu-text span:nth-child(49) {
	transition-delay: 1.6333333333s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a:hover {
	--y: 0px;
	background-color: transparent;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a:hover span {
	--m: calc(80px * -1);
}

@media only screen and (min-width: 1400px) and (max-width: 1919px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
		font-size: 60px;
		padding-left: 60px;
	}
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
		font-size: 48px;
		padding-left: 50px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
		font-size: 40px;
		padding-left: 30px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
		font-size: 30px;
		padding-left: 20px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a {
		font-size: 20px;
		padding-left: 15px;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
	width: 60px;
	height: 96px;
	justify-content: center;
	font-weight: 300;
	border: none !important;
}

@media only screen and (min-width: 1400px) and (max-width: 1919px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
		height: 76px;
	}
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
		height: 64px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
		height: 57px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
		height: 46px;
		width: 40px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand {
		height: 36px;
		width: 36px;
		padding: 11px 12px 13px !important;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li a.mean-expand:hover {
	background: var(--secondary);
	opacity: 1;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li:first-child {
	border-top: 1px solid var(--black-4);
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
	font-size: 24px;
	text-transform: capitalize;
	border-top: none !important;
	padding: 20px 0 20px 150px;
	transition: all 0.3s;
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a:hover {
	letter-spacing: 1px;
}

@media only screen and (min-width: 1400px) and (max-width: 1919px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
		padding-left: 90px;
	}
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
		padding-left: 80px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
		padding-left: 60px;
		font-size: 24px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
		font-size: 20px;
		padding: 15px 0 15px 30px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a {
		font-size: 18px;
		padding: 15px 0 15px 30px;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a.mean-expand {
	height: 40px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a.mean-expand {
		height: 25px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li a.mean-expand {
		height: 23px;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li:last-child {
	border-bottom: 1px solid var(--black-4);
}

.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li a {
	padding-left: 180px;
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li a {
		padding-left: 120px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li a {
		padding-left: 40px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li a {
		padding-left: 30px;
	}
}

@media only screen and (max-width: 767px) {
	.offcanvas__menu-wrapper.mean-container .mean-nav ul li li li a {
		padding-left: 30px;
	}
}

.offcanvas__menu-wrapper.mean-container .mean-bar {
	padding: 0;
	background: none;
}

.offcanvas__menu-wrapper.mean-container a.meanmenu-reveal {
	display: none !important;
}

.header__area-2 .main-dropdown {
	background-color: var(--white);
}

.header__area-2 .main-dropdown li a {
	color: var(--black-2);
}

.header__area-2 .main-dropdown li a:hover {
	letter-spacing: 1px;
}

.header__area-2 .main-dropdown li a .menu-text {
	text-shadow: 0 16px 0 var(--black-2);
}

.header__area-2 .main-dropdown .sub-dropdown {
	background-color: var(--white);
}

.header__area-2 .mega-menu,
.header__area-2 .mega-menu-2 {
	background-color: var(--white);
}

.header__area-2 .mega-menu li a,
.header__area-2 .mega-menu-2 li a {
	color: var(--black-2);
}

.header__area-2 .mega-menu li a:hover,
.header__area-2 .mega-menu-2 li a:hover {
	letter-spacing: 1px;
}

.header__area-2 .mega-menu li a:not([href]):not([class]),
.header__area-2 .mega-menu-2 li a:not([href]):not([class]) {
	color: var(--black-2);
}

.header__area-2 .mega-menu li a .menu-text,
.header__area-2 .mega-menu-2 li a .menu-text {
	text-shadow: 0 16px 0 var(--black-2);
}

.dark .menu-heading {
	color: var(--black-2);
}</style>