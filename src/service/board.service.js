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
    lane.cards.push({
        "id": tit + pos,
        "title": title,
        "description": description
    })
}

function editCard(lineId, cardId, title, description, oldCard) {
    const lane = lanes.find(l => l.id === lineId);
    lane.cards = lane.cards.map(c => {
        if(c.id === cardId) {
            return Object.assign({},oldCard, {"title": title,"description": description});
        } else return c
    });
}

export default {
    getLanes,
    onCardDelete,
    editCard,
    addCard
};
