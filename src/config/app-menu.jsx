const Menu = [
  // { path: '/', icon: 'fa fa-sitemap', title: 'Home' },
  { path: 'system', icon: 'fa fa-gear', title: '系統管理與設定',
    children: [
      { path: 'system/roleClass', title: '角色階層管理' },
    ]
  },
  { path: 'manage', icon: 'fa fa-sitemap', title: '單位與人員管理',
    children: [
      { path: 'manage/employeeList', title: '人員管理' },
    ]
  },
  /*
  { path: '/menu', icon: 'fa fa-align-left', title: 'Menu Level',
    children: [
      { path: '/menu/menu-1-1', title: 'Menu 1.1',
        children: [
          { path: '/menu/menu-1-1/menu-2-1', title: 'Menu 2.1',
            children: [
              { path: '/menu/menu-1-1/menu-2-1/menu-3-1', title: 'Menu 3.1' },
              { path: '/menu/menu-1-1/menu-2-1/menu-3-2', title: 'Menu 3.2' }
            ]
          },
          { path: '/menu/menu-1-1/menu-2-2', title: 'Menu 2.2' },
          { path: '/menu/menu-1-1/menu-2-3', title: 'Menu 2.3' },
        ]
      },
      { path: '/menu/menu-1-2', title: 'Menu 1.2' },
      { path: '/menu/menu-1-3', title: 'Menu 1.3' },
    ]
  }
  */
]

export default Menu;