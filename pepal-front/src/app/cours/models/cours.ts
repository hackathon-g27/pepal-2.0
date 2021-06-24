import {User} from '../../shared/models/user';
import {Classe} from '../../shared/models/classe';

export interface Cours {
  id?: string;
  label?: string;
  from?: Date;
  to?: Date;
  intervenant?: User;
  classe?: Classe;
  salle?: string;
}
