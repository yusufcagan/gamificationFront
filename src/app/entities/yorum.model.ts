import * as dayjs from "dayjs";
import { IForm } from "./form.model";
import { IUser } from "./user.model";

export interface IYorum {
    id?: number;
    yazi?: string | null;
    date?: dayjs.Dayjs | null;
    userYorum?: IUser | null;
    formYorum?: IForm | null;
  }
  
  export class Yorum implements IYorum {
    constructor(
      public id?: number,
      public yazi?: string | null,
      public date?: dayjs.Dayjs | null,
      public userYorum?: IUser | null,
      public formYorum?: IForm | null
    ) {}
  }
  
  export function getYorumIdentifier(yorum: IYorum): number | undefined {
    return yorum.id;
  }
  