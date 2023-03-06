export const initialState = [
  {
    id: '214',
    name: 'Kings Resort',
    depatureTime: '18:30',
    arrivalTime: '06:15',
    fare: '4000',
    photo: 'https://thumbs.dreamstime.com/b/hotel-10732347.jpg',
    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
    // photo: ['https://thumbs.dreamstime.com/b/hotel-10732347.jpg'],
  },
  {
    id: '102',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-djvwAmt438WjtUnPusmHgoyowQQbU8NNB1bSrgI&s',
    name: 'Mayfair Hotel',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '3000',
    boardingPoints: ['Koyembedu', 'Ashok Pillar', 'Guindy', 'Tambaram'],
    droppingPoints: ['Salem', 'Erode', 'Erode ByPass'],
    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
  },
  {
    id: '786',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvg09NKGLi-21JQBtQfgk_TFnXzMuxjwK7l79962s4bbqYUztps3_uklm91lzUXB-e1XA&usqp=CAU',
    name: 'Crown Towers',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '2000',
    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
  },
  {
    id: '618',
    photo:
      'https://media.istockphoto.com/id/1344386618/photo/close-up-of-black-luggage-and-surgical-mask.jpg?b=1&s=170667a&w=0&k=20&c=BBc5MGHi_xAgxeDKubQe1BDelmYh2LdldCWeN_MTTeU=',
    name: 'The Grace Hotel',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1300',
    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
  },
  {
    id: '188',
    photo:
      'https://media.gettyimages.com/id/1077111606/photo/luxury-five-stars-hotels-lobby.jpg?s=612x612&w=gi&k=20&c=7XD7nX7GdwVlpEe4n0wwHKiq-tOPQTLBFdkrAK3pnfs=',
    name: 'The Lucky Hotel',
    depatureTime: '22:30',
    arrivalTime: '08:15',
    fare: '1500',

    seats: [
      { no: '1', isBooked: false },
      { no: '2', isBooked: true },
      { no: '3', isBooked: false },
      { no: '4', isBooked: false },
      { no: '5', isBooked: false },
      { no: '6', isBooked: true },
      { no: '7', isBooked: false },
      { no: '8', isBooked: true },
      { no: '9', isBooked: false },
      { no: '10', isBooked: true },
    ],
  },
];
export default (state = initialState, action) => {
  return state;
};
