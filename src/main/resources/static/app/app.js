Ext.application({
    requires: ['Ext.container.Viewport' ],
    name : 'Stadium',

    controllers : ['Stadiums'],
    models: ['Stadium'],
    stores: ['Stadiums'],

    launch: function () {

        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'stadiumgrid'
                }
            ]
        });
    }
});