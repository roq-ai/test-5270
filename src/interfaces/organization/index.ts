import { ContentInterface } from 'interfaces/content';
import { InvitationInterface } from 'interfaces/invitation';
import { MembershipInterface } from 'interfaces/membership';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content?: ContentInterface[];
  invitation?: InvitationInterface[];
  membership?: MembershipInterface[];
  user?: UserInterface;
  _count?: {
    content?: number;
    invitation?: number;
    membership?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
