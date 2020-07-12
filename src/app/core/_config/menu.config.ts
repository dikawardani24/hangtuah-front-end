export class MenuConfig {
  public defaults: any = {
    header: {
      self: {},
      items: [
        {
          title: 'Dashboards',
          root: true,
          alignment: 'left',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
        },
        {
          title: 'Struktur Organisasi',
          root: true,
          alignment: 'left',
          page: '/pusat',
        },
      ]
    },
    aside: {
      self: {},
      items: [
        {
          title: 'Dashboard',
          root: true,
          icon: 'flaticon2-architecture-and-city',
          page: '/dashboard',
          translate: 'MENU.DASHBOARD',
          bullet: 'dot',
        },
        {section: 'Struktur Organisai'},
        {
          title: 'Pusat',
          root: true,
          desc: 'Some my description',
          icon: 'flaticon-line-graph',
          page: '/pusat'
        },
        {
          title: 'Cabang',
          root: true,
          desc: 'Some my description',
          icon: 'flaticon-line-graph',
          page: '/cabang'
        },
        {
          title: 'Perwakilan',
          root: true,
          desc: 'Some my description',
          icon: 'flaticon-line-graph',
          page: '/perwakilan'
        },
      ]
    },
  };

  public get configs(): any {
    return this.defaults;
  }
}
