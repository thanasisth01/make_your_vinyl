// Vinyl Color Picking

var button = document.getElementById('vinyl_change_button');

button.addEventListener('click', function(ev) {

    var inputs_color=document.getElementsByClassName('color');

    for (var i=0; i<inputs_color.length; i++ ) {
        if ( inputs_color[i].selected==true) {
            selected_value = i;
            break;
        }
    }

    var selected_vinyl;

    switch(selected_value) {
        case 0:
            selected_vinyl = 'black';
            break;

        case 1:
            selected_vinyl = 'silver';
            break;

        case 2:
            selected_vinyl = 'white';
            break;

        case 3:
            selected_vinyl = 'yellow';
            break;
            
        case 4:
            selected_vinyl = 'orange';
            break;
            
        case 5:
            selected_vinyl = 'red';
            break;
        
        case 6:
            selected_vinyl = 'pink';
            break;
        
        case 7:
            selected_vinyl = 'purple';
            break;

        case 8:
            selected_vinyl = 'blue';
            break;

        case 9:
            selected_vinyl = 'green';
            break;

        case 10:
            selected_vinyl = 'colourful-scaled';
            break;
        
        case 11:
            selected_vinyl = 'green-orange-scaled';
            break;

        default :
            selected_vinyl = 'red-orange-white-scaled';
            break;
    }

    var selected_file = 'Colors/'+selected_vinyl+'_vinyl.jpg';

    console.log(selected_file);

    var image = document.getElementById('vinyl_image');

    image.setAttribute('src', selected_file);
})

// Finding the total price of the Vinyl // Preview Vinyl Info

var button_charge = document.getElementById("charge_button");

button_charge.addEventListener('click', function (ev) {

var diametros = [5, 7, 8.5];
var diarkeia = [10, 13, 15, 18];
var strofes = [10, 13];
var baros = [7, 10];

var inputs_diametros = document.getElementsByClassName('diametros_input');
var inputs_diarkeia = document.getElementsByClassName('diarkeia_input');
var inputs_RPM = document.getElementsByClassName('RPM_input');
var inputs_weight = document.getElementsByClassName('weight_input');
var inputs_color = document.getElementsByClassName('color');

var selected_diametros;
var selected_diarkeia;
var selected_RPM;
var selected_weight;
var selected_color;

for (var i=0; i<inputs_diametros.length; i++) {
    if (inputs_diametros[i].checked==true){
        selected_diametros=i;
        break;
    }
}

for (var i=0; i<inputs_diarkeia.length; i++) {
    if (inputs_diarkeia[i].checked==true){
        selected_diarkeia=i;
        break;
    }
}

for (var i=0; i<inputs_RPM.length; i++) {
    if (inputs_RPM[i].checked==true){
        selected_RPM=i;
        break;
    }
}

for (var i=0; i<inputs_weight.length; i++) {
    if (inputs_weight[i].checked==true){
        selected_weight=i;
        break;
    }
}

var total_charge;

total_charge = diametros[selected_diametros] + diarkeia[selected_diarkeia] + strofes[selected_RPM] + baros[selected_weight];

for (var i=0; i<inputs_color.length; i++) {
    if (inputs_color[i].selected==true){
        selected_color=i;
        break;
    }
}

if (selected_color <= 9) {
    total_charge = total_charge + 4;
}
else {
    total_charge = total_charge +7;
}

var preview_diametros = "";
var preview_diarkeia = "";
var preview_RPM = "";
var preview_weight = "";

switch(selected_diametros) {
    case 0:
        preview_diametros = "7 inch";
        break;

    case 1:
        preview_diametros = "10 inch";
        break;

    case 2:
        preview_diametros = "12 inch";
        break;

}

switch(selected_diarkeia) {
    case 0:
        preview_diarkeia = "Maxi Single";
        break;

    case 1:
        preview_diarkeia = "Mini LP";
        break;

    case 2:
        preview_diarkeia = "EP";
        break;

    case 3:
        preview_diarkeia = "LP";
        break;
        
}

switch(selected_RPM) {
    case 0:
        preview_RPM = "33 1/3";
        break;

    case 1:
        preview_RPM = "45";
        break;
        
}

switch(selected_weight) {
    case 0:
        preview_weight = "120-140 gr.";
        break;

    case 1:
        preview_weight = "180-200 gr.";
        break;
        
}

var price_input = document.getElementById('price');

price_input.setAttribute('value', total_charge +' €');

var vinyl_info = document.getElementById("vinyl_info");

var information = "Διάμετρος:" + preview_diametros + ", Διάρκεια:" + preview_diarkeia + ", Στροφές Ανά Λεπτό:" + preview_RPM + ", Βάρος:" + preview_weight;

console.log(information);
vinyl_info.innerHTML = information;

});

