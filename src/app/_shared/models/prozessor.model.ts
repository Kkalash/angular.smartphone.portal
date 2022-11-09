export class Prozessor {
  public id: number;
  public hersteller: string;
  public name: string;
  public serie: string;
  public bauart: string;
  public architektur: string;

  constructor(item: Prozessor) {
    this.id = item.id;
    this.hersteller = item.hersteller;
    this.name = item.name;
    this.serie = item.serie;
    this.bauart = item.bauart;
    this.architektur = item.architektur;
  }
}
