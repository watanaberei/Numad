function groupCardsByVariant(cards) {
    const groupedCards = {};

    cards.forEach(card => {
        const variant = card.className;
        if (!groupedCards[variant]) {
            groupedCards[variant] = document.createElement('div');
            groupedCards[variant].className = variant;
        }
        groupedCards[variant].appendChild(card);
    });

    return Object.values(groupedCards);
}