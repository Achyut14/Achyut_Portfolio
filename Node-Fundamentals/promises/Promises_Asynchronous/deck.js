
 $(function(){
    let url = 'https://deckofcardsapi.com/api/deck';

// //Getting single card from shuffled deck.

$.getJSON(`${url}/new/draw/`).then(data => {
    let {suit, value} = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

// //make a request to the same API to get one more card from the same deck.

let firstCard = null;
$.getJSON(`${url}/new/draw/`).then(data => {
    firstCard = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${url}/${deckId}/draw/`);
})
    .then(data =>{
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card){
            console.log(
                `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
            );
        });
    });


// HTML page that lets you draw cards from a deck
let deckId = null;
let $btn = $('button');
let $cardId = $('#card-id');

    $.getJSON(`${url}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btn.show();
    });
    $btn.on('click', function() {
        $.getJSON(`${url}/${deckId}/draw/`).then(data => {
            let cardSrc = data.cards[0].image;
            let angle = Math.random() * 90-45;
            let randomX = Math.random() * 40-20;
            let randomY = Math.random() * 40-20;
            $cardId.append(
                $('<img>', {
                    src:cardSrc,
                    css: {
                         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (data.remaining === 0) $btn.remove();
        });
    });

 });
 