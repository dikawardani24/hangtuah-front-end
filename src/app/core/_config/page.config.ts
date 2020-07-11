export class PageConfig {
  public defaults: any = {
    dashboard: {
      page: {
        title: 'Dashboard',
        desc: 'Latest updates and statistic charts'
      },
    },
    pusat: {
      page: {
        title: 'Data Sekolah di Pusat',
        desc: 'Data sekolah yang dikelola pusat Hang Tuah di seluruh Indonesia'
      },
    },
    'my-page': {
      page: {
        title: 'Data Sekolah di Cabang',
        desc: 'Data sekolah yang dikelola cabang Hang Tuah di seluruh Indonesia'
      },
    },
    perwakilan: {
      page: {
        title: 'Data Sekolah di Perwakilan',
        desc: 'Data sekolah yang dikelola perwakilan Hang Tuah di seluruh Indonesia'
      },
    },
    schools: {
      page: {
        title: 'Daftar Sekolah',
        desc: 'Data Sekolah Hang Tuah'
      },
    },
    profile: {
      page: {title: 'User Profile', desc: ''}
    },
    error: {
      404: {
        page: {title: '404 Not Found', desc: '', subheader: false}
      },
      403: {
        page: {title: '403 Access Forbidden', desc: '', subheader: false}
      }
    }
  };

  public get configs(): any {
    return this.defaults;
  }
}
