Ext.define('Stadium.controller.Stadiums', {
    extend: 'Ext.app.Controller',
    stores: ['Stadiums'],
    models: ['Stadium'],
    views: ['StadiumGrid'],
    refs: [{
        ref: 'stadiumGrid',
        selector: 'viewport stadiumgrid'
    }],
    init: function () {

        this.control({

            'viewport > stadiumgrid button[itemId=btn-create]':
                {
                    click: this.onCreateClick
                },
            'viewport > stadiumgrid button[itemId=btn-load]':
                {
                    click: this.onLoadClick
                },
            'viewport > stadiumgrid button[itemId=btn-delete]':
                {
                    click: this.onDeleteClick
                }
        });
    },

    onCreateClick: function () {
        var stadiumStore = this.getStadiumGrid().getStore();
        stadiumStore.insert(0, Ext.create('Stadium.model.Stadium'));
        this.getStadiumGrid().editingPlugin.startEdit(0, 0);
    },

    onDeleteClick: function () {
        var stadiumStore = this.getStadiumGrid().getStore();
        var selection = this.getStadiumGrid().getSelectionModel().getSelection()[0];
        if (selection) {
            stadiumStore.remove(selection);
        }else{
            Ext.Msg.alert('Status', 'Please select at least one record to delete!');
        }
    },

    onLoadClick: function () {
        var stadiumStore = this.getStadiumGrid().getStore();
        stadiumStore.load();
    },
});