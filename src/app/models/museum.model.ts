export class MuseumOverview {
  /**
   * Constructor of MuseumOverview.
   * @param label - The museum title.
   * @param museum - The museum URL to extract all the data from.
   * @param rooms - The rooms of the Museum.
   */
  constructor(
    public label: string,
    public museum: string,
    public rooms: string[],
  ) { }
}
