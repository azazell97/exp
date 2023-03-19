//выбрал все объекты под классом
const cards = document.querySelectorAll(".cards")
//дал понятие предидущей карты
let activeCardPreviuce;
//задал классу единое значение
const activeClass = "cards-active"
//задал функции всем доп классам
const mapCard = (card, index) => {
    //функция нажатия для  карт
    card.onclick = function () {
        //если текущая карта находиться открытой
        if (card.classList.contains(activeClass)) {
            //тут ее закрываем 
            card.classList.remove(activeClass)
            //и даем статус неизвестного
            activeCardPreviuce = undefined

        }
        //или
        else
         {
            //проверяет какая предидущая карта открыта или нет    //если предидущая карта открыта закрывает
        if (cards[activeCardPreviuce]) cards[activeCardPreviuce].classList.remove(activeClass)
            //а на следующую открывает
            card.classList.add(activeClass)
            activeCardPreviuce = index
            
        }
        
        // console.log(activeCardPreviuce);
    }
}
//включает во все объекты доп класс
cards.forEach(mapCard)

