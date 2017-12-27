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
        tit = 'Wip';
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

function searchCard(cardTitle) {
    const lane = lanes.find(l =>  l.cards.find(c => c.title.indexOf(cardTitle) > -1 ));
    return lane.cards.filter(c => c.title.indexOf(cardTitle) > -1 );
}

function reorder(startList, startIndex, endList,endIndex) {
    let remove;
    const lane = lanes.map(l => {
        if(l.id === startList) {
            remove = l.cards.splice(startIndex, 1);
        }
        return l;
    });
    return lane.map(l => {
       if(l.id === endList) {
            l.cards.splice(endIndex,0,remove['0'])
       }
       return l
    });

}

export default {
    getLanes,
    onCardDelete,
    editCard,
    searchCard,
    reorder,
    addCard
};
