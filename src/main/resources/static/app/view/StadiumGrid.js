Ext.define('Stadium.view.StadiumGrid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.stadiumgrid',
    id: 'stadiumGrid',
    renderTo: document.body,
    plugins: [ Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2
                })],
    width: '100%',
    height: 300,
    frame: true,
    title: 'Stadiums',
    store: 'Stadiums',
    initComponent: function() {

        this.columns = [
            {
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
                    xtype: 'numberfield'
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
        ];

        this.callParent(arguments);
    },

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add',
            itemId: 'btn-create',
            iconCls: 'icon-add'
        }, '-', {
            text: 'Delete',
            itemId: 'btn-delete',
            iconCls: 'icon-delete'
        }, '-', {
            text: 'Load',
            itemId: 'btn-load',
            iconCls: 'icon-load'
        }]
    }]
});
