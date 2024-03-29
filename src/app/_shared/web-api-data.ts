import { PreisType } from './enums/preis-type.enum';
import { Hersteller } from './interfaces/hersteller.interface';
import { PreisKategory } from './interfaces/preis-kategory.interface';
import { Prozessor } from './interfaces/prozessor.interface';
import { SmartphoneDetails } from './models/smartphone-details.model';

export class WebApiData {
  public static hersteller: Hersteller[] = [
    {
      id: 1,
      name: 'Sony',
      telefonnummer: '123456',
      email: 'max-mustermann@mustermann.de',
    },
    {
      id: 2,
      name: 'Samsung',
      telefonnummer: '123456',
      email: 'max-mustermann@mustermann.de',
    },
    {
      id: 3,
      name: 'Hawawi',
      telefonnummer: '123456',
      email: 'max-mustermann@mustermann.de',
    },
    {
      id: 4,
      name: 'Apple',
      telefonnummer: '123456',
      email: 'max-mustermann@mustermann.de',
    },
  ];

  public static preisKategorien: PreisKategory[] = [
    {
      id: 1,
      type: PreisType.Einsteigermodell,
    },
    {
      id: 2,
      type: PreisType.Normal,
    },
    {
      id: 3,
      type: PreisType.HighEndModell,
    },
  ];

  public static prozessoren: Prozessor[] = [
    {
      id: 1,
      hersteller: 'Exynos',
      name: '2200',
      serie: 'SSE9925',
      bauart: 'Octa-Core',
      architektur: '64-bit',
    },
    {
      id: 2,
      hersteller: '	Qualcomm®',
      name: 'Snapdragon 8+ Gen 1',
      serie: 'SM8475',
      bauart: 'Octa-Core',
      architektur: '64-bit',
    },
    {
      id: 3,
      hersteller: 'Qualcomm®',
      name: '	Snapdragon750G 5G',
      serie: null,
      bauart: 'Octa-Core',
      architektur: '64-bit',
    },
    {
      id: 4,
      hersteller: 'Apple',
      name: '	A16 Bionic Chip',
      serie: null,
      bauart: '',
      architektur: '',
    },
    {
      id: 5,
      hersteller: 'Apple',
      name: '	A15',
      serie: null,
      bauart: 'Hexa-Core',
      architektur: '',
    },
  ];

  public static smartphons: SmartphoneDetails[] = [
    {
      id: '1',
      name: 'Galaxy S22 Ultra Smartphone',
      preis: 1422.58,
      bildschirmgrosse: '6,8',
      aufloesung: 'QHD+',
      gewicht: '228 g',
      beschreibung: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
      prozessor: WebApiData.prozessoren[0],
      ranking: 4.5,
      bewerteranzahl: 42,
      bilder: [
        'https://i.otto.de/i/otto/9a9eebbb-094b-58b3-b803-83c92be9d88b?w=1609&h=2500',
        'https://i.otto.de/i/otto/1a5c79b7-02cb-5a1a-a5c9-748cb7cbe06c?h=520&w=551&sm=clamp',
        'https://i.otto.de/i/otto/64dfc01a-80da-561e-8f7c-bea830ed99be?h=520&w=551&sm=clamp',
        'https://i.otto.de/i/otto/3e93dce7-fd27-5c21-bfe8-5340b9b249cf?w=1610&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[1],
      kommentare: [
        {
          id: '1',
          smartphoneId: '1',
          nameAnzeige: 'Sonja T',
          titel: 'Absolute empfehlenswert!',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 9, 21),
          bewertung: 5,
          antowrten: [
            {
              kommentarId: '1',
              nameAnzeige: 'Sven',
              text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
              erfassungAm: new Date(2022, 9, 22),
            },
            {
              kommentarId: '1',
              nameAnzeige: 'Sam',
              text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
              erfassungAm: new Date(2022, 9, 22),
            },
          ],
        },
        {
          id: '2',
          smartphoneId: '1',
          nameAnzeige: 'Peter',
          titel: 'Unzufrieden',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 8, 12),
          bewertung: 1,
          antowrten: [],
        },
        {
          id: '3',
          smartphoneId: '1',
          nameAnzeige: 'Sam',
          titel: 'Nicht schlecht',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 4, 25),
          bewertung: 3,
          antowrten: [],
        },
      ],
    },
    {
      id: '2',
      name: 'Galaxy Z Flip4 Smartphone',
      preis: 1099.0,
      bildschirmgrosse: '6,7',
      aufloesung: 'FHD+',
      gewicht: '187 g',
      beschreibung: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
      prozessor: WebApiData.prozessoren[1],
      ranking: 2.0,
      bewerteranzahl: 10,
      bilder: [
        'https://i.otto.de/i/otto/6bc135d5-5790-51e6-bc2c-ab30b7122bbe?w=2060&h=2381',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[1],
      kommentare: [
        {
          id: '4',
          smartphoneId: '2',
          nameAnzeige: 'Sonja T',
          titel: 'Absolute empfehlenswert!',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 9, 21),
          bewertung: 5,
          antowrten: [],
        },
        {
          id: '5',
          smartphoneId: '2',
          nameAnzeige: 'Peter',
          titel: 'Unzufrieden',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 8, 12),
          bewertung: 1,
          antowrten: [],
        },
        {
          id: '6',
          smartphoneId: '2',
          nameAnzeige: 'Sam',
          titel: 'Nicht schlecht',
          text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
          erfassungAm: new Date(2022, 4, 25),
          bewertung: 3,
          antowrten: [],
        },
      ],
    },
    {
      id: '3',
      name: 'Galaxy Z Fold4 Smartphone',
      preis: 1349.21,
      bildschirmgrosse: '7,6',
      aufloesung: 'QXGA+',
      gewicht: '263 g',
      beschreibung: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
      prozessor: WebApiData.prozessoren[1],
      ranking: 3.5,
      bewerteranzahl: 20,
      bilder: [
        'https://i.otto.de/i/otto/a3a99192-fd97-5084-a88a-1ada8463dd4f?w=2104&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[1],
      kommentare: [],
    },
    {
      id: '4',
      name: 'Galaxy M23 5G Smartphone',
      preis: 392.24,
      bildschirmgrosse: '6,6',
      aufloesung: 'FHD+',
      gewicht: '198 g',
      beschreibung: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
      prozessor: WebApiData.prozessoren[2],
      ranking: 5.0,
      bewerteranzahl: 50,
      bilder: [
        'https://i.otto.de/i/otto/b4abc8c1-4a3e-5c8d-acde-3563ccf5d26c?w=1163&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[0],
      hersteller: WebApiData.hersteller[1],
      kommentare: [],
    },
    {
      id: '5',
      name: 'Apple iPhone 14 Pro ',
      preis: 1299.0,
      bildschirmgrosse: '6,1',
      aufloesung: '	Super Retina XDR',
      gewicht: '206 g',
      beschreibung: `iPhone 14 Pro. Nimm mit der 48 MP Hauptkamera unglaubliche Details auf. Mit der
         Dynamic Island und dem Always‑On Display erlebst du das iPhone auf ganz neue Art.
         Und die Unfallerkennung, ein neues Sicherheitsfeature, ruft Hilfe, wenn du es nicht kannst.`,
      prozessor: WebApiData.prozessoren[4],
      ranking: 5.0,
      bewerteranzahl: 145,
      bilder: [
        'https://i.otto.de/i/otto/3d815607-e213-5229-926f-ce5d82d5015a?w=2036&h=2500',
        'https://i.otto.de/i/otto/c0e210b0-ff04-583f-b31f-68e0ee6aecd0?w=1236&h=2500',
        'https://i.otto.de/i/otto/13365bb9-b0cc-5b41-bb87-3230ea11a8e8?w=892&h=2500',
        'https://i.otto.de/i/otto/113ac58d-2dec-5285-903f-7d1cef1b0348?w=2483&h=2500',
        'https://i.otto.de/i/otto/0b2875d3-6ba3-558f-b09a-992d9a108110?w=2128&h=2500',
        'https://i.otto.de/i/otto/a5a4a7d0-392f-5c26-bb42-bc2937040684?w=2500&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[3],
      kommentare: [],
    },
    {
      id: '6',
      name: 'Apple iPhone 14 Pro Max',
      preis: 1449.0,
      bildschirmgrosse: '6,7',
      aufloesung: 'Super Retina XDR',
      gewicht: '240 g',
      beschreibung: `Das iPhone 14 Pro Max. Nimm mit der 48 MP Hauptkamera unglaubliche Details auf. Mit der
        Dynamic Island und dem Always‑On Display erlebst du das iPhone auf ganz neue Art. Und die
        Unfallerkennung, ein neues Sicherheitsfeature, ruft Hilfe, wenn du es nicht kannst.`,
      prozessor: WebApiData.prozessoren[4],
      ranking: 4.5,
      bewerteranzahl: 99,
      bilder: [
        'https://i.otto.de/i/otto/d55c0002-0697-5e1a-addd-d4464209cf8b?w=2018&h=2500',
        'https://i.otto.de/i/otto/5dc71111-513b-59c5-a4ae-84f1a89ff3ff?w=1224&h=2500',
        'https://i.otto.de/i/otto/0fbd98d0-9eb4-5633-a729-1fc04c4003df?w=876&h=2500',
        'https://i.otto.de/i/otto/b001dc01-3f48-55d1-ab53-0e7adb94fa20?w=2483&h=2500',
        'https://i.otto.de/i/otto/f8aa6852-1dd1-5196-b289-676dc54ddb6d?w=2128&h=2500',
        'https://i.otto.de/i/otto/f194855f-529d-5bf4-aa69-6b4a52656967?w=2500&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[3],
      kommentare: [],
    },
    {
      id: '7',
      name: 'Apple iPhone 13',
      preis: 896.9,
      bildschirmgrosse: '6,1',
      aufloesung: 'Super Retina XDR',
      gewicht: '173 g',
      beschreibung: `iPhone13.Das fortschrittlichste Zwei-Kamera-System, das es je auf einem iPhone gab. Superschneller
         A15Bionic Chip.Ein großer Sprung bei der Batterielaufzeit.Robustes Design.Superschnelles 5G.
         Und ein helleres Super Retina XDR Display.`,
      prozessor: WebApiData.prozessoren[4],
      ranking: 5.0,
      bewerteranzahl: 422,
      bilder: [
        'https://i.otto.de/i/otto/56fb0b1e-f2b6-5f30-97c9-8dfecb476494?w=1845&h=2500',
        'https://i.otto.de/i/otto/37d253b6-0d78-52c2-904e-26248f3c0b40?w=1284&h=2500',
        'https://i.otto.de/i/otto/ba886d12-ef14-56c6-a083-d2dc38f211d6?w=2385&h=2500',
        'https://i.otto.de/i/otto/a34bc1f3-91c7-5729-a945-2568c5f171c6?w=2500&h=2500',
        'https://i.otto.de/i/otto/b682968b-b235-59e3-87b5-bfe768ec20a8?w=2500&h=2500',
        'https://i.otto.de/i/otto/7689f623-3654-5194-b725-c1ab3dce5140?w=2500&h=2500',
        'https://i.otto.de/i/otto/83bffae6-96bf-5d20-8774-b7aedebd6b44?w=2500&h=2500',
      ],
      preisKategory: WebApiData.preisKategorien[2],
      hersteller: WebApiData.hersteller[3],
      kommentare: [],
    },
  ];
}
