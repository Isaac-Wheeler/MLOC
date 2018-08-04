Ext.define('MLOC.view.home.action', {
  extend: 'Ext.Container',
  xtype: 'homeAction',

  height: 600,

  layout: {
    type: 'table',
    columns: 4,
  },

  title: 'Actions',

  items: [{
      title: 'apt-get install',
      xtype: 'form',
      name: 'apt-get-install',
      colspan: 4,
      layout: 'column',
      items: [{
        xtype: 'textfield',
        name: 'value',
        fieldLabel: 'apt-get install',
      }, {
        xtype: 'tbfill'
      }, {
        xtype: 'button',
        text: 'Run',
      }]
    }, {
      title: 'Add Machine',
      xtype: 'form',
      name: 'add-machine',
      colspan: 4,
      layout: 'column',
      items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Machine Name',
      }, {
        xtype: 'textfield',
        name: 'ip',
        fieldLabel: 'Machine IP',
      }, {
        xtype: 'button',
        text: 'add',
      }]
    }, {
      title: 'Add Machine User',
      xtype: 'form',
      name: 'add-machine-user',
      colspan: 4,
      layout: 'column',
      items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'User Name',
      }, {
        xtype: 'button',
        text: 'add',
      }]
    }, {
      title: 'Run Command',
      xtype: 'form',
      name: 'run-command',
      colspan: 4,
      layout: 'column',
      items: [{
        xtype: 'textfield',
        name: 'command',
        fieldLabel: 'Command',
      }, {
        xtype: 'button',
        text: 'Run',
      }]
    }

  ],

});
