Ext.define('Stadium.model.Stadium', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
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