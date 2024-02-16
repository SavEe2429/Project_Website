// JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function () {
    var openModalBtn = document.getElementById("openModalBtn");
    var closeModalBtn = document.getElementById("closeModalBtn");
    var modal = document.getElementById("myModal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded",function() {
    var openMenu = document.getElementById("responsive-menu");
    var Menu = document.getElementById("link-content");

    openMenu.addEventListener("click",function() {
        Menu.style.zIndex = "99";
    });

    window.addEventListener("click" , function(event){
        if (event.target === Menu) {
            Menu.style.zIndex = "-5";
        }
    });
});

window.addEventListener('scroll', function () {
    // // ค่าความสูงของ div ที่เลือก
    // var divHeight_1 = document.getElementById("hidden-content").offsetHeight; // หรือ clientHeight
    // var divHeight_2 = document.getElementById("hidden-content-2").offsetHeight; // หรือ clientHeight
    // var divHeight_3 = document.getElementById("hidden-content-3").offsetHeight; // หรือ clientHeight
    // var divHeight_4 = document.getElementById("hidden-content-4").offsetHeight; // หรือ clientHeight
    // var divHeight_5 = document.getElementById("hidden-content-5").offsetHeight; // หรือ clientHeight

    // หาความสูงของหน้าจอ (viewport height)
    var viewportHeight = window.innerHeight;

    // หาตำแหน่งและขนาดของ div
    var divElement = document.getElementById("hidden-content");
    var divElement_2 = document.getElementById("hidden-content-2");
    var divElement_3 = document.getElementById("hidden-content-3");
    var divElement_4 = document.getElementById("hidden-content-4");
    var divElement_5 = document.getElementById("hidden-content-5");
    var divElement_6 = document.getElementById("hidden-content-6");

    var divRect = divElement.getBoundingClientRect();
    var divRect_2 = divElement_2.getBoundingClientRect();
    var divRect_3 = divElement_3.getBoundingClientRect();
    var divRect_4 = divElement_4.getBoundingClientRect();
    var divRect_5 = divElement_5.getBoundingClientRect();
    var divRect_6 = divElement_6.getBoundingClientRect();

    // หาตำแหน่ง Y ของ div ที่เริ่มจาก viewport
    var divY = divRect.top;
    var divY_2 = divRect_2.top;
    var divY_3 = divRect_3.top;
    var divY_4 = divRect_4.top;
    var divY_5 = divRect_5.top;
    var divY_6 = divRect_6.top;

    // คำนวณความสูงที่ต้องการ (หน้าจอตั้งแต่เริ่มจนถึง div)
    var heightToDiv = viewportHeight - divY;
    var heightToDiv_2 = viewportHeight - divY_2;
    var heightToDiv_3 = viewportHeight - divY_3;
    var heightToDiv_4 = viewportHeight - divY_4;
    var heightToDiv_5 = viewportHeight - divY_5;
    var heightToDiv_6 = viewportHeight - divY_6;

    // ถ้าผู้ใช้เลื่อนถึงกลาง div จะทำการแสดง content ออกมา
    if (heightToDiv >= 0) {
        // แสดงเนื้อหาที่ซ่อนอยู่
        document.getElementById('hidden-content').style.opacity = 1;
    }
    if (heightToDiv_2 >= 0){
        this.document.getElementById('hidden-content-2').style.opacity = 1;
    }
    if (heightToDiv_3 >= 0){
        this.document.getElementById('hidden-content-3').style.opacity = 1;
    }
    if (heightToDiv_4 >= 0){
        this.document.getElementById('hidden-content-4').style.opacity = 1;
    }
    if (heightToDiv_5 >= 0){
        this.document.getElementById('hidden-content-5').style.opacity = 1;
    }
    if (heightToDiv_6 >= 0){
        this.document.getElementById('hidden-content-6').style.opacity = 1;
    }
    // console.log("Height from top of viewport to div: " + heightToDiv + "px");
    // console.log("=========================")
});

function ScrollToSection(SectionID){
    const section = document.getElementById(SectionID);
    section.scrollIntoView({behavior:'smooth'});
}
