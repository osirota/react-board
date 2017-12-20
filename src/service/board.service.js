import data from '../data'

let lanes = Object.keys(data.lanes).map(item => data.lanes[item]);
function getLanes() {
    return lanes
}

function onCardDelete(cardId, lineId) {
    const lane = lanes.find(l => l.id === lineId);
    lane.cards = lane.cards.filter(c => c.id !== cardId);
}

function addCard(id, title, description, tit) {
    if(tit === 'Work In Progress (Not Droppable)') {
        tit = 'Wip'
    }
    const lane = lanes.find(l => l.id === id);
    const pos = lane.cards.length + 1;
    console.log(tit);
    lane.cards.push({
        "id": tit + pos,
        "title": title,
        "description": description
    })
}
export default {
    getLanes,
    onCardDelete,
    addCard
};
