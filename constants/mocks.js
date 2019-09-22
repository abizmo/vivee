const user = {
  EMAIL: "psilva.ericka@gmail.com",
  PASSWORD: "viveeConceptArt"
};

const places = [
  {
    id: 1,
    title: "Green Leaf Supermarket",
    kind: "grocery",
    rating: 4,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    operatingTime: [
      {
        days: "Monday - Friday",
        time: "8:00 AM to 18:00 PM"
      },
      {
        days: "Saturday",
        time: "8:00 AM to 17:00 PM"
      },
      {
        days: "Sunday",
        time: "8:00 AM to 12:00 PM"
      }
    ],
    location: {
      lat: 0,
      lon: 0
    }
  },
  {
    id: 2,
    title: "Green Table Restaurant",
    kind: "restaurant",
    rating: 3,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    operatingTime: [
      {
        days: "Tuesday - Friday",
        time: "12:00 PM to 11:00 PM"
      },
      {
        days: "Saturday",
        time: "12:00 PM to 1:00 AM"
      },
      {
        days: "Sunday",
        time: "12:00 PM to 16:00 PM"
      }
    ],
    location: {
      lat: 0,
      lon: 0
    }
  }
];

const notifications = [
  {
    id: 1,
    place: "Green Leaf Supermarket",
    text: "Only for today! Every vegetables are for half of the price!",
    read: false
  },
  {
    id: 1,
    place: "Green Table Restaurant",
    text: "Only for today! Every vegetables are for half of the price!",
    read: false
  },
  {
    id: 1,
    place: "Green Leaf Supermarket",
    text: "Only for today! Every vegetables are for half of the price!",
    read: true
  }
];

export { user, places, notifications };
