import { KommentarAntwort } from './kommentar-antwort.model';

export class Kommentar {
  public id: string;
  public smartphoneId: string;
  public nameAnzeige: string;
  public titel: string;
  public text: string;
  public erfassungAm: Date;
  public bewertung: number;
  public antowrten: KommentarAntwort[];

  constructor(item: Kommentar) {
    this.id = item.id;
    this.smartphoneId = item.smartphoneId;
    this.nameAnzeige = item.nameAnzeige;
    this.titel = item.titel;
    this.text = item.text;
    this.erfassungAm = new Date(item.erfassungAm);
    this.bewertung = item.bewertung;
    this.antowrten = item.antowrten.map((a) => new KommentarAntwort(a));
  }
}
