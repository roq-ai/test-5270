import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MembershipInterface {
  id?: string;
  joined_at: any;
  left_at?: any;
  role: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface MembershipGetQueryInterface extends GetQueryInterface {
  id?: string;
  role?: string;
  user_id?: string;
  organization_id?: string;
}
