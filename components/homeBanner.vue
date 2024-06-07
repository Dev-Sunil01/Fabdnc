<template>
    <section class="main-container">
        <div class="main home-banner-circle">
            <div class="big-circle">
                <div class="icon-block">
                    <img src="../assets/images/wordpress-icon.png" alt="web design icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/php-icon.png"
                        alt="game design icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/java-script-icon.png" alt="game dev icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/illustrator-icon.png" alt="ui-ux icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/photoshop-icon.png"
                        alt="artificial intelligence icon" />
                </div>
            </div>
            <div class="circle">
                <div class="icon-block">
                    <img src="../assets/images/css-icon.png" alt="app icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/html-icon.png" alt="blockchain icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/react-icon.png"
                        alt="artificial intelligence icon" />
                </div>
                <div class="icon-block">
                    <img src="../assets/images/figma-icon.png" alt="ar-vr icon" />
                </div>
              
            </div>
            <div class="center-logo homeBanner-laptop">
                <img src="../assets/images/laptop.png" alt="logo" />
                
            </div>
            
        </div>
    </section>
</template>


<style scoped >
@charset "utf-8";
/* CSS Document */

/******* Common Element CSS Start ******/



.main {
    margin: 0px auto;
    width: 535px;
    height: 535px;
    position: relative;
}

.big-circle {
    height: 100%;
    width: 100%;
    position: relative;
    border: 2px dashed #6495f2;
    border-radius: 50%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    animation: Rotate 60s linear infinite;
    -webkit-animation: Rotate 60s linear infinite;
}

.icon-block {
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    background: #fff;
    border: 1px solid #2980b9;
    
}

.icon-block img {
    margin: 0px auto;
    width: 30px;
    animation: Rotate-reverse 20s linear infinite;
    -webkit-animation: Rotate-reverse 20s linear infinite;
}

.icon-block:first-child {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}

.icon-block:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    -webkit-transform: translate(50%, -50%);
}

.icon-block:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    -webkit-transform: translate(-50%, 50%);
}

.icon-block:nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}

/* circle content */
.circle {
    animation: circle-rotate 60s linear infinite;
    -webkit-animation: circle-rotate 60s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    width: 75%;
    height: 75%;
    border: 2px dashed #2980b9;
    border-radius: 50%;
}

.circle .icon-block img {
    animation: img-rotate 20s linear infinite;
    -webkit-animation: img-rotate 20s linear infinite;
}

/* center logo */
.center-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}



/* keyframe animation */

@keyframes Rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes Rotate {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes Rotate-reverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@-webkit-keyframes Rotate-reverse {
    from {
        -webkit-transform: rotate(360deg);
    }

    to {
        -webkit-transform: rotate(0deg);
    }
}

@keyframes circle-rotate {
    from {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(-405deg);
    }
}

@-webkit-keyframes circle-rotate {
    from {
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
    }

    to {
        -webkit-transform: translate(-50%, -50%) rotate(-405deg);
    }
}

@keyframes img-rotate {
    from {
        transform: rotate(-45deg);
    }

    to {
        transform: rotate(-405deg);
    }
}

@-webkit-keyframes img-rotate {
    from {
        -webkit-transform: rotate(-45deg);
    }

    to {
        -webkit-transform: rotate(-405deg);
    }
}


</style>