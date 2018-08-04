Ext.define('MLOC.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'ip'
    ],

    data: { items: [
        { name: 'Jean Luc', ip: "192.168.0.1"},
        { name: 'Worf',     ip: "192.168.0.2"},
        { name: 'Deanna',   ip: "192.168.0.3"},
        { name: 'Data',     ip: "192.168.0.4"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
