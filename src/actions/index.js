const cardsLoaded = (books) => ({
    type: "CARDS_LOADED",
    payload: books
});

const lanesLoaded = (lanes) => ({
    type: "LANES_LOADED",
    payload: lanes
})

export {
    cardsLoaded,
    lanesLoaded
};
