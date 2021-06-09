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

    $('.flip-container').click(function(){ //Once flip-container is clicked, function activates
        
        if (!outOfTime) {
        
            if (!gameStarted && !running){  //before the game starts, show all cards to the user face up, then flip back the cards
                
                running = true;
                
                $('.flip-container').each(function() {
                    $(this).toggleClass('flip');
                });
                
                setTimeout(function() {
                    
                    $('.flip-container').each(function() {
                        $(this).toggleClass('flip');
                    });
                    
                    gameStarted = true;
                    running = false;
                    
                }, 2000);
            }
    
        }
    });
    
});