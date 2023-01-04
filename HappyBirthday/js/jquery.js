var $heading, $firstWish, $secondWish, $thirdWish;

$heading = $('.heading');
$list = $('ul');
$firstWish = "Puisses tu vivre 100 ans, 100 ordonnances !!!";
$secondWish = "Accompagnés d'une très longue vie !!! ";
$thirdWish = "Ainsi que la satisfaction de tous tes envies !!!";

$heading.on('click', function(e){
    e.preventDefault();
    $list.append('<li class="heading">' + $firstWish + '</li>');
} );


