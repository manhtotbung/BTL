/*Đăng ký */
 $(document).ready(function(){
     $("#js-Dangky").click(function(){
         alert("Đã click vào đăng ký");
         $("#js-modal").show();
     });
 });




// /* */
 $(document).ready(function(){
     $("#js-back").click(function(){
         alert("Đã quay lại trang chủ");
         $("#js-modal").hide();
     });
 });
 
// đây là animation cho preloader
document.addEventListener("DOMContentLoaded", function() {
    // Sau khi trang đã tải hoàn toàn, ẩn phần preloader
    var preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
});


// const DangKy = document.querySelector('#js-Dangky')
// const modal = document.querySelector('#js-moadal')
// const Back = document.querySelector('#js-back')

// DangKy.addEventListener('click', showDangKy)
// Back.addEventListener('click',hideDangky)

// function showDangKy(){
//     modal.classList.add('open')
// }
// function hideDangky(){
//     modal.classList.remove('open')
// }