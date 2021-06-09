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
    
            else if ($(this).find('.back').attr('id') == chosenCards[0] && chosenCards[1] == null && $(this).hasClass('flip') && !running) {
                
                running = true;
                
                chosenCards[0] = null;//if one card has been chosen and then clicked again, flip back over
                $(this).toggleClass('flip');
                
                running = false;
                
            }
            
            else if ($(this).hasClass('flip')) {
                        
                return;//if the card clicked is already flipped, return
                
            }
        
            else if (chosenCards[0] == null && chosenCards[1] == null && !$(this).hasClass('flip') && !running) {
                
                if (!countdownStarted) {
                    countdown();
                }
                
                running = true;
                
                chosenCards[0] = $(this).find('.back').attr('id');//if no cards have been chosen, store the chosen card's in chosenCards[0]
                $(this).toggleClass('flip');
                
                running = false;
                
            }
        
            
            else if (chosenCards[0] != null && chosenCards[1] == null && !$(this).hasClass('flip') && !running) {
                
                running = true;
                
                chosenCards[1] = $(this).find('.back').attr('id');//if no second card has been flipped, store the chosen card's brand in chosenCards[1] and flip it
                $(this).toggleClass('flip');
        
                if (chosenCards[0] == chosenCards[1]) {
                    
                    chosenCards[0] = null;
                    chosenCards[1] = null;
                    
                    pairCount++;
                    
                    if (pairCount == cards.length) {
                        win = true;
                        alert("you win :D");
                    }
                    
                    running = false;
                    
                }
        
                else {//if the brands did not match - empty the chosenCards & flip the cards back over 
                    
                    cardsToFlip[0] = chosenCards[0];
                    cardsToFlip[1] = chosenCards[1];
                    
                    chosenCards[0] = null;
                    chosenCards[1] = null;
                    
                    setTimeout(function(){//flip back the chosen cards that did not match
        
                        $('*[id*=' + cardsToFlip[0] + ']').each(function() {
                            $(this).closest('.flip').toggleClass('flip');
                        });
                        $('*[id*=' + cardsToFlip[1] + ']').each(function() {
                            $(this).closest('.flip').toggleClass('flip');
                        });
                        
                        running = false;
                        
                    }, 800);
                }
                
            }
                
        } else {
            alert("you have run out of time :(");
        };
        
    });//Flip Container On Click Finished
    
    
});