export class MenuItem {
    dbId?: string;
    label?: string;
    icon?: string;
    link?: string;
    is_external?: boolean;
    items?: MenuItem[] = [];
    order?: number;
    parent_id: string
}
