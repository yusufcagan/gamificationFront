import { Account } from "./account.model";
import { IKayit } from "./kayit.model";
import { IRozet } from "./rozet.model";
import { IUser } from "./user.model";

export interface IOgrenci {
    id?: number;
    level?: number | null;
    aciklama?: string | null;
    toplamPuan?: number | null;
    studentUser?: IUser | null;
    kayitlar2s?: IKayit[] | null;
    rozetlers?: IRozet[] | null;
  }
  
  export class Ogrenci implements IOgrenci {
    constructor(
      public id?: number,
      public level?: number | null,
      public aciklama?: string | null,
      public toplamPuan?: number | null,
      public studentUser?: Account | null,
      public kayitlar2s?: IKayit[] | null,
      public rozetlers?: IRozet[] | null
    ) {}
  }
  
  export function getOgrenciIdentifier(ogrenci: IOgrenci): number | undefined {
    return ogrenci.id;
  }
  