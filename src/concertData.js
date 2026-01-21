import { v4 as uuidv4 } from 'uuid';

export const ConcertsList = {
  de: [
    // {
    //   id: uuidv4(),
    //   date: 'Sa, 15. März 2025',
    //   time: '18:00',
    //   concertTitle: 'Die Kraft der Kultur',
    //   adressTitle: 'Gemeindezentrum St. Johannes',
    //   address: 'Augsburgerstr. 36A, 93051 Regensburg',
    //   addressLink: 'https://maps.app.goo.gl/iKQkSYv1SyaHQ9Ch8',
    //   ticket: '',
    //   dauer: '1 St.',
    //   eventLink: '',
    //   participants:
    //     'Svitlana Mykhailenko (Poesieauswahl, Übersetzung), Olena Vasylenko (Klavier), Nataliia Hrabarska (Mezzosopran, Bandura), Demian Matushevski (Bassbariton)',
    //   details:
    //     'Ein Abend mit Musik, Liedern und Poesie aus der Ukraine mit ukrainischen Künstler:innen des Staatstheaters Nürnberg, des Staatstheaters Regensburg und der Kirchenmusikerin von St. Paul, Odesa. Anschließend ukrainischer Imbiss und Begegnung mit den Gästen.',
    //   eventbrite: '',
    // },
    {
      id: uuidv4(),
      date: 'So, 25. Januar 2026',
      time: '13:30',
      concertTitle: 'Ukrainische Traditionelle Weihnachtslieder',
      adressTitle: 'Heilige Familie Kirche',
      address: 'Eichstätter Pl.,1',
      addressLink: 'https://maps.app.goo.gl/nHs9e3ppoLyhqLYp8?g_st=ic',
      ticket: 'Spenden',
      dauer: 'ca. 30 Min',
      eventLink: '',
      participants:
        'D. Grabovska (Dirigentin), T. Manoilenko, N. Hrabarska, A. Bychkova, D. Trenichev, P. Arroyo, Y. Petronelli, G. Harutyunyan, M. Grabovskyi (Perkussion), O. Zub (Moderator)',
      details: '',
      eventbrite: '',
    },
    {
      id: uuidv4(),
      date: ' So, 22. März 2026',
      time: '15:00',
      concertTitle: 'Ukrainischer Lebensmut',
      adressTitle: 'Zeltnerschloß',
      address: 'Gleißhammerstraße 2, 90480 Nürnberg',
      addressLink:
        'https://maps.app.goo.gl/qDDefTVPo7xYeJJ26?g_st=com.google.maps.preview.copy',
      // ticket: 'ab 10 Euro Spenden',
      dauer: '1 St. 30 Min',
      eventLink: '',
      participants: '',
      details:
        'Ein besonderes Konzert zu Ehren von Taras Schewtschenko (1814–1861) – Dichter, Maler und Symbol des Freiheitskampfes. Erleben Sie ukrainische Musik und Poesie mit Bandura, Violine, Klavier und Sänger:innen. ',
      eventbrite: '',
    },
    {
      id: uuidv4(),
      date: ' Sa, 4. Juli 2026',
      time: '18:00',
      concertTitle: 'Blume der Hoffnung',
      adressTitle: 'Zeltnerschloß',
      address: 'Gleißhammerstraße 2, 90480 Nürnberg',
      addressLink:
        'https://maps.app.goo.gl/qDDefTVPo7xYeJJ26?g_st=com.google.maps.preview.copy',
      ticket: 'ab 10 Euro Spenden',
      dauer: '2 St.',
      eventLink: '',
      participants: '',
      details:
        'Wir laden Sie herzlich ein, ukrainische Musik unter freiem Himmel zu genießen.Diesen Abend widmen wir dem Komponisten Wolodymyr Iwasiuk. Ein stimmungsvolles Programm mit klassischen Stimmen, dem Kinderchor, den Bandura, der Violine, der Gitarre, dem Klavier im Innenhof des beliebten Kulturladen Zeltnerschloss erwartet Sie. Die Gäste haben die Möglichkeit, eigene Fragen an die Schwester des Komponisten Dr. Oksana Iwasiuk zu stellen. Das Projekt "Ukrainischer Lebensmut" fördert mit dem Erlös der Veranstaltung Hilfsprojekte in der Ukraine.',
      eventbrite:
        'https://www.eventbrite.com/e/blume-der-hoffnung-tickets-1981141263851?aff=oddtdtcreator',
    },
  ],
  ukr: [
    // {
    //   id: uuidv4(),
    //   date: 'Sa, 15. März 2025',
    //   time: '18:00',
    //   concertTitle: 'Die Kraft der Kultur',
    //   adressTitle: 'Gemeindezentrum St. Johannes',
    //   address: 'Augsburgerstr. 36A, 93051 Regensburg',
    //   addressLink: 'https://maps.app.goo.gl/iKQkSYv1SyaHQ9Ch8',
    //   ticket: '',
    //   dauer: '1 St.',
    //   eventLink: '',
    //   participants:
    //     'Світлана Михайленко (вибір поезії, переклад), Олена Василенко (фортепіано), Наталія Грабарська (мецо-сопрано, бандура), Дем’ян Матушевський (бас-баритон)',
    //   details:
    //     'Вечір музики, пісень і поезії з України за участі українських артистів Державного театру Нюрнберга, Державного театру Регенсбурга та музикантки з церкви Святого Павла, Одеса. Після цього — українські частування та зустріч із гостями.',
    //   eventbrite: '',
    // },
    {
      id: uuidv4(),
      date: 'Нд, 25 січня 2026',
      time: '13:30',
      concertTitle: 'Різдвяні та новорічні колядки',
      adressTitle: 'Heilige Familie Kirche',
      address: 'Eichstätter Pl.,1',
      addressLink: 'https://maps.app.goo.gl/nHs9e3ppoLyhqLYp8?g_st=ic',
      ticket: 'Донати',
      dauer: '30 хв',
      eventLink: '',
      participants:
        'Д. Грабовська (диригент), Т. Манойленко, Н. Грабарська, А. Бичкова, Д. Тренічев, Р. Арройо, Є. Петронеллі, Г. Харатюнян, М. Грабовський (ударні), O. Зуб (ведучій)',
      details: '',
      eventbrite: '',
    },
    {
      id: uuidv4(),
      date: 'Вс,22 березня 2026',
      time: '15:00',
      concertTitle: 'Ukrainischer Lebensmut',
      adressTitle: 'Zeltnerschloß',
      address: 'Gleißhammerstraße 2, 90480 Nürnberg',
      addressLink:
        'https://maps.app.goo.gl/qDDefTVPo7xYeJJ26?g_st=com.google.maps.preview.copy',
      ticket: '',
      dauer: '1,5 години',
      eventLink: '',
      participants: '',
      details:
        'Концерт присвячений творчості видатного українського поета Тараса Шевченка (1814–1861)',
      eventbrite: '',
    },
    {
      id: uuidv4(),
      date: ' Cб, 4 липня 2026',
      time: '18:00',
      concertTitle: 'Квітка надії',
      adressTitle: 'Zeltnerschloß',
      address: 'Gleißhammerstraße 2, 90480 Nürnberg',
      addressLink:
        'https://maps.app.goo.gl/qDDefTVPo7xYeJJ26?g_st=com.google.maps.preview.copy',
      ticket: 'Донати від 10 євро',
      dauer: '2 St.',
      eventLink: '',
      participants: '',
      details:
        'Ми щиро запрошуємо вас насолодитися українською музикою просто неба.Цей вечір присвячено композитору Володимиру Івасюку.На вас чекає натхненна програма з класичними голосами, дитячим хором, бандурою, скрипкою, гітарою та фортепіано у внутрішньому дворі популярного культурного центру Kulturladen Zeltnerschloss. Гості матимуть можливість поставити свої запитання спеціальній гості - сестрі композитора — Оксані Івасюк. Проєкт «Ukrainischer Lebensmut» спрямовує виручені кошти від заходу на підтримку благодійних ініціатив в Україні.',
      eventbrite:
        'https://www.eventbrite.com/e/blume-der-hoffnung-tickets-1981141263851?aff=oddtdtcreator',
    },
  ],
};
