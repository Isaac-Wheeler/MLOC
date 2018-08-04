Ext.define('MLOC.view.home.home', {
    extend: 'Ext.tab.Panel',
    xtype: 'homeView',

    layout:{
      type: 'table',
      columns: 1,
    },

    items:[
      {
          xtype: 'mainlist'
      },
      {
        xtype: 'homeAction'
      }
    ],

  });
