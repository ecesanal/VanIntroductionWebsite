function urlParametreYakala(parametre) {
    //Sayfa urlsinden gelen tema parametresininin içeriğini alıp dönderiyor
    var sayfaURL = window.location.search.substring(1);
    var sURLParametreler = sayfaURL.split('&');
    for (var i = 0; i < sURLParametreler.length; i++) {
        var sParametreAdi = sURLParametreler[i].split('=');
        if (sParametreAdi[0] === parametre) {
            return decodeURIComponent(sParametreAdi[1]);
        }
    }
}
function linkDegistir(tema){
    //linkleri temaya göre değişen fonksiyon
    const href = $(".saniyeHesapla");
    href.each(function (){
        $(this).attr("href",$(this).attr("href")+"?tema="+tema);
    })
}

$(window).on("load",function (){
    // sayfa yüklenirken linkleri değiştiriyoruz.
    var tema=  urlParametreYakala("tema");
    const body = $("body")
    const navigation = $("#navigation")
    if (tema==="karanlik"){
       linkDegistir(tema)
        body.attr("class","index-arkaplan-karanlik")
        body.attr("text","white") // karanlik mod yaziların rengi
        body.attr("vlink","darkpink") // karanlık mod vlink rengi
        body.attr("alink","green") // karanlik mod alink rengi
        navigation.attr("class","navigation_bar_karanlik") //karanlik mod body class
    }else {
        linkDegistir(tema)
        body.attr("class","index-arkaplan")
        body.attr("text","black") // aydinlik mod yazirengi
        body.attr("vlink","darkpink") // aydinlik mod vlink rengi
        body.attr("alink","green") // aydinlik mod alink rengi
        navigation.attr("class","navigation_bar") // aydinlik mod body class
    }
})