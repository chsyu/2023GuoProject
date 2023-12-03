window.onload = function() {
    // // 添加一个 CSS 类，以触发淡出和平移效果
    // document.body.classList.add('fade-in');

    // // 获取元素
    // var wagashiImages = document.querySelectorAll('.maincotent');

    // // 执行平移效果
    // setTimeout(function() {
    //     wagashiImages.forEach(function(image) {
    //         image.style.marginBottom = '-50px';
    //     });
    // }, 500); // 500 毫秒是淡出效果的时间

    // // 过渡结束后，移除动画类
    // setTimeout(function() {
    //     document.body.classList.remove('fade-out');
    // }, 1000); // 1000 毫秒是淡出和平移效果的总时间
    
}

function navigateToSpringPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 spring.html
    setTimeout(function() {
        // window.location.href = "spring.html";
        window.open("spring.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}
function navigateToFallPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 fall.html
    setTimeout(function() {
        // window.location.href = "fall.html";
        window.open("fall.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}

function navigateToSummerPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 summer.html
    setTimeout(function() {
        // window.location.href = "summer.html";
        window.open("summer.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}
function navigateToWinterPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 winter.html
    setTimeout(function() {
        // window.location.href = "winter.html";
        window.open("winter.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}



// four seasons animation
$(document).ready(function () {
let openingAnimWindow = document.querySelector("#spring")
let openingAnimData = {
    container: openingAnimWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/spring.json'
};
let openingsummerWindow = document.querySelector("#summer")
let openingsummerData = {
    container: openingsummerWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/summer.json'
};
let openingfallWindow = document.querySelector("#fall")
let openingfallData = {
    container: openingfallWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/fall.json'
};
let openingwinterWindow = document.querySelector("#winter")
let openingwinterData = {
    container: openingwinterWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/winter.json'
};
let openingAnim = bodymovin.loadAnimation(openingAnimData);
let openingsummerAnim = bodymovin.loadAnimation(openingsummerData);
let openingfallAnim = bodymovin.loadAnimation(openingfallData);
let openingwinterAnim = bodymovin.loadAnimation(openingwinterData);

$('#spring').on('mouseenter',function () {
    openingAnim.stop();
    openingAnim.play();
}).on('mouseleave',function () {
    openingAnim.pause();
});
$('#summer').on('mouseenter',function () {
    openingsummerAnim.stop();
    openingsummerAnim.play();
}).on('mouseleave',function () {
    openingsummerAnim.pause();
});
$('#fall').on('mouseenter',function () {
    openingfallAnim.stop();
    openingfallAnim.play();
}).on('mouseleave',function () {
    openingfallAnim.pause();
});
$('#winter').on('mouseenter',function () {
    openingwinterAnim.stop();
    openingwinterAnim.play();
}).on('mouseleave',function () {
    openingwinterAnim.pause();
});

   

});


$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);
    // doors
     // Register Pin Page
    
          let timeLine_doorsopen = gsap.timeline({
            scrollTrigger: {
              trigger: "#doors",
              yoyo: true,
              pin: true, // pin the trigger element while active
            //   pinSpacing: false,
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "100%", // end after scrolling 500px beyond the start
              scrub: true,
              markers: true,
              id: "doors",
            },
          });
          
           // gsap.set("#block", {x: -$("#block").width()});
      gsap.set("#history", {opacity: 0});
      gsap.set("#history", {y:100});
      gsap.set("block-l", {x:0});
      gsap.set("block-r", {x:0});
      // gsap.set("#block-r", {x: $("#block-r").width()});
      timeLine_doorsopen
        // .to("#block", 2, { backgroundColor: "red" })
        .fromTo("#block-l", 1,{x:0},{ x:- $("#block-l").width() +200,ease: "power4.out"})
        .fromTo("#block-r", 1, {x:0},{ x:$("#block-r").width() -200,ease: "power4.out"}, 0)
        .to("#history", 3, { opacity: 1 ,ease: "power4.out"})
        .to("#history", 3, { y:0 },0)
        // .fromTo("#block-l",1,{x:- $("#block-l").width() +200},{x:0})
        // .fromTo("#block-r",1,{ x:$("#block-r").width() -200},{x:0})
        


        let timeLine_doorsclose = gsap.timeline({
            scrollTrigger: {
              trigger: "#doors2",
              yoyo: true,
              pin: true, // pin the trigger element while active
            //   pinSpacing: false,
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "50%", // end after scrolling 500px beyond the start
              scrub: true,
            //   markers: true,
              id: "doors2",
            },
          });
    timeLine_doorsclose
    .fromTo("#block-l2", 1, { x:- $("#block-l").width() +200},{ x:  - $("#block-l").width(),ease: "power4.out"})
    .fromTo("#block-r2", 1, {x:$("#block-r").width() -200},{ x:  $("#block-r").width(),ease: "power4.out"},0)
    .to("#gradient",3,{opacity:0})
          
    let timeLine_scene2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#door2",
          yoyo: true,
          pin: true, // 沒作用
        //   pinSpacing: false,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "100%", // end after scrolling 500px beyond the start
          scrub: true,
          markers: true,
          id: "doors2",
        },
      });
      
       // gsap.set("#block", {x: -$("#block").width()});
  gsap.set("#history2", {opacity: 0});
  gsap.set("#history2", {y:100});
  gsap.set("#block-l2", {x:-300});
  gsap.set("#block-r2", {x:-300});
  gsap.set("#gap",{opacity:0});
  // gsap.set("#block-r", {x: $("#block-r").width()});
  timeLine_scene2
    // .to("#block", 2, { backgroundColor: "red" })
    .to("#history2", 1, { opacity: 1 ,ease: "power4.out"})
    .to("#history2", 1, { y:0},0)
    .to("#gap" , 1, {opacity: 2})
    
});


// .to("#jyounama",1,{opacity:0})




// menu animation
let menu_windowcontent = document.querySelector("#menu_windowcontent");
let menubottomrect = document.querySelector("#menubottomrect");
let menutoprect = document.querySelector("#menutoprect");
let isMenuClick = false;

$('#menutoprect').on('click',function () {
    if(!isMenuClick) {
        $('#menu_windowcontent').slideDown(800);
        isMenuClick = true;
    } else {
        $('#menu_windowcontent').slideUp(300);
        isMenuClick = false;        
    }
});



