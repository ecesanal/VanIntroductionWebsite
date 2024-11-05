$(document).ready(function(){
   var dogrucevaplar =[
        "soru1cevap2",
        "soru2cevap1",
        "soru3cevap1",
        "soru4cevap1",
        "soru5cevap2",
    ]
    var current_fs, next_fs, previous_fs;
    var opacity;
    var dogru=0;
    var yanlis=0;
    $(".next").click(function(){
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        next_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });

    $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        previous_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 600
        });
    });
    $("[name='soru1']").click(function (){
        $("#soru1buton").removeAttr("disabled")
    })
    $("[name='soru2']").click(function (){
        $("#soru2buton").removeAttr("disabled")
    })
    $("[name='soru3']").click(function (){
        $("#soru3buton").removeAttr("disabled")
    })
    $("[name='soru4']").click(function (){
        $("#soru4buton").removeAttr("disabled")
    })
    $("[name='soru5']").click(function (){
        $("#soru5buton").removeAttr("disabled")
    })
    $("#sonuclarıGetir").click(function (){
        for (let i in dogrucevaplar){
            if ($("#"+dogrucevaplar[i]).is(":checked")){
                dogru++
            }else{
                yanlis++
            }
        }
        alert("Dogu cevap sayisi: "+dogru+"\nYanlis cevap sayisi: "+yanlis);
        location.reload();
    })
});