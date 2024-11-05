$(document).ready(function () {
    var baslangic = new Date();
   var baslangicZaman = baslangic.getHours() + ":" + baslangic.getMinutes() + ":" + baslangic.getSeconds();

    $(".saniyeHesapla").click(function () {
        var bitis = new Date();
       var bitisZaman = bitis.getHours() + ":" + bitis.getMinutes() + ":" + bitis.getSeconds();
        var fark = Math.abs((bitis.getTime() - baslangic.getTime())/1000);
        alert("Sayfaya girdiğiniz zaman "+baslangicZaman + " \nSayfadan Çıkış zamanı "+bitisZaman + " \nSayfada kalınan süre "+fark+" Sn")
    })
})