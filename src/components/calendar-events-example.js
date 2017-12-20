const myEvent = {
  id: 1,
  external_id: "11878",
  address_business_name: "Apropo Studio",
  address_street_1: "43 West 24th Street",
  address_street_2: "4th Floor",
  slug: "apropo-studio-sample-sale-october-2017",
  address_city: "New York",
  address_zip: "10010",
  event_name_en: "Apropo Studio Sample Sale",
  start_date: "2017-10-23 10:00:00",
  end_date: "2017-12-13 17:00:00",
  summary:
    "There'll be up to 60% off retail prices on men's and women's ready to wear plus homeware at this sample sale from Apropo Studio - featuring Avant Toi, AS65, Bazar Deluxe, Lost In Me, Gilda Midani, Faliero Sarti, Sanchita, Private 0204, Italia Indepen...",
  is_hot: "0",
  created_at: "2017-12-12T15:57:28.567Z",
  updated_at: "2017-12-15T19:02:02.515Z",
  event_hero_url: "https://d3e5kk0afz85hq.cloudfront.net/47092-preview.jpg"
};

export default [
  {
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1)
  },
  {
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10)
  },

  {
    title: "DTS STARTS",
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0)
  },

  {
    title: "Some Event",
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0)
  },
  {
    title: "Conference",
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: "Big conference for important people"
  },
  {
    title: "Meeting",
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    title: "Lunch",
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch"
  },
  {
    title: "Meeting",
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0)
  },
  {
    title: "Happy Hour",
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    title: "Dinner",
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0)
  },
  {
    title: "Birthday Party",
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0)
  },
  {
    title: "Birthday Party 2",
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0)
  },
  {
    title: "Birthday Party 3",
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0)
  },
  {
    title: "Late Night Event",
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0)
  },
  {
    title: "Multi-day Event",
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0)
  }
];
