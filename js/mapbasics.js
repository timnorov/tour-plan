ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [7.890703, 98.294772],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects       
        .add(new ymaps.Placemark([7.890703, 98.294772], {
            balloonContent: 'DoubleTree by Hilton Phuket Banthai Resort',
            iconCaption: 'DoubleTree by Hilton'
        }, {
            preset: 'islands#blueHotelIcon'
        }));
}