$(".card-wrap").on("click", (event) => {
    $(event.currentTarget).toggleClass("flip");
});
$(function() {
    randomCardImages();
});
function randomCardImages(){
    const classCardOne = "card-image-cc803b57be7d55444ae6f763d256ef6a4fda5deb";
    const classCardTwo = "card-image-a684248598a590e37dd16686c8022b880a9a63d9";
    const classCardThree = "card-image-a2f7fcb5afeb7983ffbb6ce3d1a7e91edf321350";
    const classCardFour = "card-image-827aa9268a9231cb0d5425a1616beb259352e703";

    const arrClass = [classCardOne, classCardTwo, classCardThree, classCardFour, classCardOne, classCardTwo, classCardThree, classCardFour];

    for (let i = 0; i < 8; i++) {
        let chosenClass = Math.floor(Math.random() * arrClass.length);
        $('.card-back').eq(i).addClass(arrClass[chosenClass]);
        arrClass.splice(chosenClass, 1);
    }
}