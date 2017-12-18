import data from '../data'

let lanes = Object.keys(data.lanes).map(item => data.lanes[item]);

function getLanes() {
    return lanes
}


function getCards(laneId) {
    return lanes[laneId].cards
}
function onCardDelete(id) {
    const newState = lanes;
    console.log(newState);
    lanes = newState.map(newstate => newstate.cards.filter(card => card.id != id));
    return lanes
}
export default {
    getCards,
    getLanes,
    onCardDelete
};
