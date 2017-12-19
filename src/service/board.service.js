import data from '../data'

let lanes = Object.keys(data.lanes).map(item => data.lanes[item]);
function getLanes() {
    return lanes
}

function countCards(lineId) {
    let count;
    lanes.map(line => {
        if(line.id === lineId) {
            count = line.cards.length;
        }
    });
    return count
}


function onCardDelete(cardId, lineId) {
    const lane = lanes.find(l => l.id === lineId);
    lane.cards = lane.cards.filter(c => c.id !== cardId);
}

export default {
    getLanes,
    onCardDelete,
    countCards
};
