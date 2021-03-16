$(function () {
$("#vnev").on("keyup",be);

});
var varosok = [];
function be(){
//    console.log($("#vnev").val());
    $.ajax({
        type: "GET",
        url: "feldolgoz.php?nev="+$("#vnev").val(),
        success: function (result){
          
            varosok = JSON.parse(result);
            console.log(varosok);
//            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
}

