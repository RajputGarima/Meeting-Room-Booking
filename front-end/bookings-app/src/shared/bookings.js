export const bookings = [
    {
        booking_id: 0,
        room_id: 10,
        user: '',                               // id 
        start_time: new Date(),                 // tentative
        end_time: new Date(),                   // 
        equipments: [ {'equip_id': 'qty' },  ], //array of object storing euip id and quantity of it
        refreshments: [ { } ],                  //same like euipments 
        layout: layout_id,  
        price: 0,                              
        paymentMode: ''
    }
]