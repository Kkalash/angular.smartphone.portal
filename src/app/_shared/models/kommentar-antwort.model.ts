export class KommentarAntwort {
  public kommentarId: string;
  public nameAnzeige: string;
  public text: string;
  public erfassungAm: Date;

  constructor(item: KommentarAntwort) {
    this.kommentarId = item.kommentarId;
    this.nameAnzeige = item.nameAnzeige;
    this.text = item.text;
    this.erfassungAm = new Date(item.erfassungAm);
  }
}
