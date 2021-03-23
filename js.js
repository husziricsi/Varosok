$(function () {
    $("#vnev").on("keyup", be);
    $("article").delegate("th", "click", rendezes);
    $("article").delegate("th", "click", rendezes);
    $("article").delegate("th", "click", rarak);
    $("article").delegate("th", "click", levesz);

});
var varosok = [];
function rarak(){
    $(this).addClass("fejlec");
    
}
function levesz(){
    $(this).removeClass("fejlec");
    
}


function be() {
//    console.log($("#vnev").val());
    $.ajax({
        type: "GET",
        url: "feldolgoz.php?nev=" + $("#vnev").val(),
        success: function (result) {

            varosok = JSON.parse(result);
            console.log(varosok);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
}
function kiir() {
    var txt = "<table><tr><th id='nev'>Város</th><th id='megye'>Megye</th><th id='jaras'>Járás</th> <th id ='torol'>Torol</th>";
    for (var i = 0; i < varosok.length; i++) {
        txt += "<tr><td>" + varosok[i].nev + "</td><td>" + varosok[i].megye + "</td><td>" + varosok[i].jaras + "</td><button id='torol'>Torol</button></tr>";
    }
    txt += "</table>";
    $("article").html(txt);

    txt = "<select>";
    for (var i = 0; i < varosok.length; i++) {
        txt += "<option>" + varosok[i].nev + "</option>";
    }
    txt += "</option>";
    $("#legordulo").html(txt);

}
var irany = false;
function rendezes() {
    console.log($(this).attr("id"));
    var ez = $(this).attr("id");

    if (ez === "id") {
        varosok.sort(function (a, b) {
            if (irany) {
                return Number(a[ez]) - Number(b[ez]);
            } else {
                return Number(b[ez]) - Number(a[ez]);
            }
        });
    } else {
        varosok.sort(function (a, b) {
            if (irany) {
                return Number(a[ez] > b[ez]) - 0.5;
            } else {
                return Number(a[ez] < b[ez]) - 0.5;
            }

        });
    }



    irany = !irany;
    kiir();
}

