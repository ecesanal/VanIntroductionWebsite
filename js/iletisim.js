
$(document).ready(function (){
    // Modal kaynak https://getbootstrap.com/docs/4.0/components/modal/
    $("#sendMessage").click(function (){
        // kullanıcının forma girdiği veriler.
        const adSoyad = $("#iletisimFormAdSoyad").val();
        const email = $("#iletisimEmail").val();
        const adres = $("#iletisimFormAdres").val();
        const mesaj = $("#iletisimFormMesaj").val();
        // Gönder butonuna bastığımızda formdaki içerikleri siliyoruz.
        icerikSil("iletisimFormAdSoyad");
        icerikSil("iletisimEmail")
        icerikSil("iletisimFormAdres")
        icerikSil("iletisimFormMesaj")
        if (mesaj === "" || adSoyad === ""||email===""||adres===""){
            //Fromda eksik bölüm varsa hata veriyor.
            alert("Lütfen formu eksiksiz doldurunuz")
        }else{
            $("#modalAdSoyad").val(adSoyad);
            $("#modalEposta").val(email);
            $("#modalAdres").val(adres);
            $("#modalMesaj").val(adres);
            $("#iletisimModal").modal("show")
        }
    });
    $("#modalKapat").click(function (){
        // idsi modalKapat olan butona basıldığında modalı kapatıyor.
        $("#iletisimModal").modal("hide")
    })
})

function icerikSil(input){
    $('#'+input).val("");
}