import { Prozessor } from '../interfaces/prozessor.interface';
import { Kommentar } from './kommentar.model';
import { SmartphoneCard } from './smartphone-card.model';

export class SmartphoneDetails extends SmartphoneCard {
  public aufloesung: string;
  public gewicht: string;
  public beschreibung: string;
  public prozessor: Prozessor;
  public kommentare: Kommentar[];

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
    this.kommentare = item.kommentare.map((k) => new Kommentar(k));
  }
}
