export class Formatter {
  static formatDate(value: Date ): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("es-ES", options).format();
  }
}