//List of Techniques

var zukiWaza = [
    'Oi-Zuki',
    'Gyaku-Zuki',
    'Empi',
    'Kizami',
    'Ni-Tetsui-Uchi'
];

var geriWaza = [
    'Mae-Geri Keage',
    'Mae-Geri Kekomi',
    'Yoko-Geri Keage',
    'Yoko-Kekomi'
];

var ukeWaza = [
    'Age-Uke',
    'Soto-Uke',
    'Gedan-Barai',
    'Uchi-Uke',
]

var stances = [
    'Zenkutsu-Dachi',
    'Kokutsu-Dachi',
    'Kiba-Dachi',
    'Neko-Ashi-Dachi'
]

//List of Cool Downs

var coolDowns = [
    'Sun Salutations A',
    '23 Sequence Yoga',
    'Sun Salutations B'
]

//Loads up the CoolDowns

document.querySelector(".cooldown-btn").addEventListener("click", function() {
    var randomCooldown = Math.floor(Math.random() * coolDowns.length);
    document.querySelector(".cooldown").innerHTML = (coolDowns[randomCooldown]);
    document.querySelector(".cooldown-btn").innerHTML = "Load Another Cool Down";
});


//Loads up the Stance of the Day - VanillaJS

document.querySelector(".stance-btn").addEventListener("click", function() {
    var randomStance = Math.floor(Math.random() * stances.length);
    document.querySelector(".stance-lesson").innerHTML = (stances[randomStance]);
    document.querySelector(".stance-btn").innerHTML = "Load Another Stance"
});


//Loads up the combinations - jQuert and VanillaJS
$(".combo-btn").on("click", function() {
    var randomZuki = Math.floor(Math.random() * zukiWaza.length);
    var randomGeri = Math.floor(Math.random() * geriWaza.length);
    var randomUke = Math.floor(Math.random() * ukeWaza.length);
    document.querySelector(".main-lesson").innerHTML = (zukiWaza[randomZuki] + ', ' + geriWaza[randomGeri] + ', ' 
    + ukeWaza[randomUke]);
    $(".combo-btn").html("Reload Another Combo");
});