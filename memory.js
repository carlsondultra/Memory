$(document).ready(function() {
    
    var cards = ['shoe', 'bred', 'dior', 'mocha', 'blackwhite', 'universityblue', 'sbb', 'shadow']; // Represents each pair of cards
    var pairs = cards.concat(cards);//create pairs of cards
    var chosenCards = [];
    var cardsToFlip = [];
    
    var gameStarted = false;
    var running = false;
    var outOfTime = false;
    var countdownStarted = false;
    var win = false;
    var pairCount = 0;
    var time = 60;

    shuffleArray(pairs);//shuffle cards
    
    $('.back').each(function(i, element) {
        $(this).attr('id', pairs[i]);//sets id for cards, access styles via css
    });
     
});