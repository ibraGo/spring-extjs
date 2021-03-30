Ext.require(['Ext.data.*', 'Ext.grid.*']);

Ext.define('Stadium', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'int',
            useNull: true
        }, {
            name: 'capacity',
            type: 'int'
        }, 'name', 'address'],
    validations: [{
            type: 'length',
            field: 'name',
            min: 1
        }]
});

Ext.onReady(function() {

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Stadium',
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

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
                        clicksToEdit: 2
                    });

    var grid = Ext.create('Ext.grid.Panel', {
        renderTo: document.body,
        plugins: [ rowEditing ],
        width: 400,
        height: 300,
        frame: true,
        title: 'Stadiums',
        store: store,
        columns: [{
                text: 'ID',
                width: 40,
                dataIndex: 'id'
            }, {
                text: 'Name',
                flex: 1,
                dataIndex: 'name',
                field: {
                    xtype: 'textfield'
                }
            }, {
                 text: 'Capacity',
                 flex: 1,
                 filter:true,
                 dataIndex: 'capacity',
                 field: {
                     xtype: 'textfield'
                 }
             }, {
                text: 'Address',
                flex: 1,
                sortable: false,
                dataIndex: 'address',
                field: {
                    xtype: 'textfield'
                }
            }
            ],
        dockedItems: [{
                xtype: 'toolbar',
                items: [{
                        text: 'Add',
                        iconCls: 'icon-add',
                        handler: function() {
                            // empty record
                            store.insert(0, new Stadium());
                            rowEditing.startEdit(0, 0);
                        }
                    }, '-', {
                        text: 'Delete',
                        iconCls: 'icon-delete',
                        handler: function() {
                            var selection = grid.getView().getSelectionModel().getSelection()[0];
                            if (selection) {
                                store.remove(selection);
                            }
                        }
                    }]
            }]
    });
});