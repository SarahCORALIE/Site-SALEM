$( document ).ready(function() {
let logoMarque = $('.logo-marque');
let loupe = $('.logo-marque-loupe');
let conteneurImage = $('.conteneur-image');
let imageAgrandie = $('.image_agrandie');
let container = $('.container-fluid');

console.log('test logMarque', logoMarque);
console.log('test loupe', loupe);
console.log('test conteneurImage', conteneurImage);
console.log('test imageAgrandie', imageAgrandie)
console.log('test container', container);


// fait apparaitre la loupe et grise l'image au survol
logoMarque.on('mouseenter',function imageChange(){

    // console.log('ok', $(this));
    // logoMarque.hide(100);
    // loupe.show(100);
    $(this).hide()
    $(this).next().show()
    //console.log('test last', $('this first:img'),'test first', $('this last:img'))   
});

// retourne l'image a son etat initial
loupe.on('mouseout', function imageRevert(){

    $(this).hide();
    $(this).prev().show();
});

// agrandi l'image au clic + mais un voile gris sur l'arriere plan
loupe.on('click', function magnifying() {

    let imageSrc = $(this).prev().attr('src');
    console.log('test imageSrc', imageSrc);
    console.log('click ok');

    imageAgrandie.attr('src',imageSrc);
    imageAgrandie.show();
});

// fait disparaitre l'image agrandie + enleve le voile gris sur l'arriere plan
imageAgrandie.on('click',function () {
   
    console.log('click ok2');
    

    $(this).hide();
    // container.css('filter,grayscale(50%)');
});





});//fin document ready