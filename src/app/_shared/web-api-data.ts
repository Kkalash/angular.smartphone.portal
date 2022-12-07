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
    },
  ];
}
