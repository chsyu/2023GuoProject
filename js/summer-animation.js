// spring-animation.js 文件内容
window.onload = function() {
    // 添加一个 CSS 类，以触发淡出和平移效果
    document.body.classList.add('fade-in');

    // 获取和菓子图片元素
    var wagashiImages = document.querySelectorAll('.image_wagashi_spring');

    // 执行平移效果
    setTimeout(function() {
        wagashiImages.forEach(function(image) {
            image.style.marginBottom = '-50px';
        });
    }, 500); // 500 毫秒是淡出效果的时间

    // 过渡结束后，移除动画类
    setTimeout(function() {
        document.body.classList.remove('fade-out');
    }, 1000); // 1000 毫秒是淡出和平移效果的总时间
}


let clickstate = 0;
let isPopupClick = false;
let lookNum=0;
let wagashi_m1 = document.querySelector("#wagashi_m1");
let wagashi_m2 =document.querySelector("#wagashi_m2");
let wagashi_m3 =document.querySelector("#wagashi_m3");
let wagashi_m4 =document.querySelector("#wagashi_m4");
let wagashi_m5 =document.querySelector("#wagashi_m5");
let wagashi_m6 =document.querySelector("#wagashi_m6");

let look1 = document.querySelector("#look1");
let look2 = document.querySelector("#look2");
let look3 = document.querySelector("#look3");
let look4 = document.querySelector("#look4");
let look5 = document.querySelector("#look5");
let look6 = document.querySelector("#look6");

let btn_left = document.querySelector("#btn_left");
let btn_right = document.querySelector("#btn_right");
let btn_close = document.querySelector("#btn_close");

let container = document.querySelector("#container");
let popup_summer = document.querySelector("#popup_summer");

//gets current delay



// function addpopupNum() {
//     popup_spring.classList.add("#look"+${popupNum[i]});
// }







wagashi_m1.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:1000},{y:0});
        popup_summer.style.display = "flex";
        container.classList.add("transparent");
        look1.style.display = "flex";
        lookNum=1;
        clickstate = 1;
    };

};
wagashi_m2.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:610},{y:0});
        container.classList.add("transparent");
        look2.style.display = "flex";
        popup_summer.style.display = "flex";
        
        lookNum=2;
        clickstate = 1;
    };
};
wagashi_m3.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:610},{y:0});
        container.classList.add("transparent");
        look6.style.display = "flex";
        popup_summer.style.display = "flex";
        
        lookNum=6;
        clickstate = 1;
    };
};
wagashi_m4.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:610},{y:0});
        container.classList.add("transparent");
        container.classList.add("transparent");
        popup_summer.style.display = "flex";
        look3.style.display = "flex";
        lookNum=3;
        clickstate = 1;
    };
};
wagashi_m5.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:610},{y:0});
        container.classList.add("transparent");
        popup_summer.style.display = "flex";
        look5.style.display = "flex";
        lookNum=5;
        clickstate = 1;
    };
};
wagashi_m6.onclick = function() {
    if(clickstate == 0){
        look1.style.display="none";
        look2.style.display="none";
        look3.style.display="none";
        look4.style.display="none";
        look5.style.display="none";
        look6.style.display="none";
        gsap.fromTo("#popup_summer",1,{y:610},{y:0});
        container.classList.add("transparent");
        popup_summer.style.display = "flex";
        look4.style.display = "flex";
        lookNum=4;
        clickstate = 1;
    };
};

btn_left.onclick = function(){
    if(lookNum==1){
        look1.style.display="none";
        look6.style.display="flex";
        lookNum=7;
    }else if(lookNum==2){
        look2.style.display="none";
        look1.style.display="flex";
    }else if(lookNum==3){
        look3.style.display="none";
        look2.style.display="flex";
    }else if(lookNum==4){
        look4.style.display="none";
        look3.style.display="flex";
    }else if(lookNum==5){
        look5.style.display="none";
        look4.style.display="flex";
    }else{
        look6.style.display="none";
        look5.style.display="flex";
    }

    lookNum=lookNum-1;
    
    
}
btn_right.onclick = function() {
    
    if(lookNum==1){
        
        
        
        look1.style.display="none";
        look2.style.display="flex";
    }else if(lookNum==2){
        look2.style.display="none";
        look3.style.display="flex";
    }else if(lookNum==3){
        look3.style.display="none";
        look4.style.display="flex";
    }else if(lookNum==4){
        look4.style.display="none";
        look5.style.display="flex";
    }else if(lookNum==5){
        look5.style.display="none";
        look6.style.display="flex";
    }else{
        look6.style.display="none";
        look1.style.display="flex";
        lookNum=0;
    }
    lookNum=lookNum+1;
}

// btn_close.onclick = function() {
//     // btn_close.style.image="./image/close.png";
//     gsap.fromTo("#popup_spring",1,{y:0},{y:2000});
//     clickstate=0;
    
// }


$(document).ready(function () {
    
    $("#btn_close").on('click',function () {
        if(clickstate==1){
            $('#popup_summer').fadeOut(300);
            container.classList.remove("transparent");
            clickstate=0;
        };
        
       
    });
});




function navigateToMainPage() {
    window.open("index.html", "_blank"); 
}

let menutoprect=document.querySelector("#menutoprect");
let menu_windowcontent=document.querySelector("#menu_windowcontent");
let btn_menumb=document.querySelector("#btn_menumb");
let isMenuClick=false;

$('#menutoprect').on('click',function () {
    if(!isMenuClick) {
        $('#menu_windowcontent').slideDown(700);
        gsap.fromTo("#btn_menumb",0.6,{y:0},{y:150,ease:"sine.in"});
        isMenuClick = true;
    } else {
        $('#menu_windowcontent').slideUp(650);
        gsap.fromTo("#btn_menumb",0.5,{y:150},{y:0,ease:"sine.in"});
        isMenuClick = false;        
    }
});