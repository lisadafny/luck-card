$(function () {
    addCards();
    randomCardImages();
    addCardEvent();
});
function addCardEvent() {
    $(".card-wrap").on("click", (event) => {
        const card = event.currentTarget;
        $(card).toggleClass("flip");
        $(".card-wrap").on("click", () => {
            memoryCardLogic(card);
        })
    });
}
function addCards() {
    const cardNumber = 8;
    for (let i = 0; i < cardNumber; i++) {
        $("#mainDiv").append(`
        <div class="card-wrap">
            <div class="card-content">
                <div class="card-front">
                </div>
                <div class="card-back">
                </div>
            </div>
        </div>`);
    }
}

function randomCardImages() {
    const classCardOne = "card-image-cc803b57be7d55444ae6f763d256ef6a4fda5deb";
    const classCardTwo = "card-image-a684248598a590e37dd16686c8022b880a9a63d9";
    const classCardThree = "card-image-a2f7fcb5afeb7983ffbb6ce3d1a7e91edf321350";
    const classCardFour = "card-image-827aa9268a9231cb0d5425a1616beb259352e703";

    const arrClass = [classCardOne, classCardTwo, classCardThree, classCardFour, classCardOne, classCardTwo, classCardThree, classCardFour];

    for (let i = 0; i < 8; i++) {
        let chosenClass = Math.floor(Math.random() * arrClass.length);
        $('.card-back').eq(i).addClass(arrClass[chosenClass]);
        $('.card-back').eq(i).parent().parent().addClass(arrClass[chosenClass]);
        arrClass.splice(chosenClass, 1);
    }
}

function memoryCardLogic(card) {
    $(".card-wrap").off("click");
    addCardEvent();
    const isEqual = card.classList[1] == event.currentTarget.classList[1];
    if (isEqual) {
        $(card).off("click");
        $(event.currentTarget).off("click");
        return;
    }
    $(card).removeClass("flip");
    $(event.currentTarget).removeClass("flip");
}