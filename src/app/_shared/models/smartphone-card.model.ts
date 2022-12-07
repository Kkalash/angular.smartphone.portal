import { Hersteller } from '../interfaces/hersteller.interface';
import { PreisKategory } from '../interfaces/preis-kategory.interface';

export class SmartphoneCard {
  public id: string;
  public name: string;
  public preis: number;
  public bildschirmgrosse: string;
  public ranking: number;
  public bewerteranzahl: number;
  public bilder: string[];
  public preisKategory: PreisKategory;
  public hersteller: Hersteller;

  constructor(item: SmartphoneCard) {
    this.id = item.id;
    this.name = item.name;
    this.preis = item.preis;
    this.bildschirmgrosse = item.bildschirmgrosse;
    this.ranking = item.ranking;
    this.bewerteranzahl = item.bewerteranzahl;
    this.bilder = item.bilder;
    this.preisKategory = item.preisKategory;
    this.hersteller = item.hersteller;
  }
}
