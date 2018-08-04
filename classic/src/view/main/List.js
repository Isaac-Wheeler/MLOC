/**
 * This view is an example list of people.
 */
Ext.define('MLOC.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MLOC.store.Personnel'
    ],

    title: 'IP\'s',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'IP', dataIndex: 'ip', flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
