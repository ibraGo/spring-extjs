Ext.define('Stadium.store.Stadiums', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    model: 'Stadium.model.Stadium',
    listeners: {
        write: function(store, operation, eOpts) {
            if (operation.action === 'create' && operation.complete) {
                store.load();
            }
        }
    },
    proxy: {
        type: 'rest',
        url: 'stadiums',
        headers: {
            'Content-Type': 'application/json'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        },
        api: {
            create: 'stadiums/create/',
            read: '',
            update: 'stadiums/edit/',
            destroy: 'stadiums/delete/'
        }
    }

});