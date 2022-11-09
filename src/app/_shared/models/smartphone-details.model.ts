import { Prozessor } from './prozessor.model';
import { SmartphoneCard } from './smartphone-card.model';

export class SmartphoneDetails extends SmartphoneCard {
  public aufloesung: string;
  public gewicht: string;
  public beschreibung: string;
  public prozessor: Prozessor;

  constructor(item: SmartphoneDetails) {
    super({
      id: item.id,
      name: item.name,
      bildschirmgrosse: item.bildschirmgrosse,
      ranking: item.ranking,
      bilder: item.bilder,
      preisKategory: item.preisKategory,
      hersteller: item.hersteller,
    } as SmartphoneCard);

    this.aufloesung = item.aufloesung;
    this.gewicht = item.gewicht;
    this.beschreibung = item.beschreibung;
    this.prozessor = item.prozessor;
  }
}
