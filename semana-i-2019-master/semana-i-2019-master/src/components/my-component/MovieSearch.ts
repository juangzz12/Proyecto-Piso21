import {CarbonLDP} from "carbonldp";

export class MovieService {

  private static carbonldp: CarbonLDP = new CarbonLDP("https://data-itesm.lab.base22.com/");

  static  async getMoviesByKeywords(keywordID: string): Promise<any> {
    const rawResults = await this.carbonldp.documents.$get<any>('keywords/90/');

    return rawResults;
  }

  static async getKeyword(): Promise<any> {
    const rawResutls = await this.carbonldp.documents.$getMembers<any>('keyword/');
    return rawResutls;
  }

}
