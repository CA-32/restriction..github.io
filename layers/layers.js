var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_communeSN_1 = new ol.format.GeoJSON();
var features_communeSN_1 = format_communeSN_1.readFeatures(json_communeSN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communeSN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communeSN_1.addFeatures(features_communeSN_1);
var lyr_communeSN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communeSN_1, 
                style: style_communeSN_1,
                interactive: false,
                title: 'commune SN'
            });
var format_secteursNeste_2 = new ol.format.GeoJSON();
var features_secteursNeste_2 = format_secteursNeste_2.readFeatures(json_secteursNeste_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteursNeste_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteursNeste_2.addFeatures(features_secteursNeste_2);
var lyr_secteursNeste_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secteursNeste_2, 
                style: style_secteursNeste_2,
                interactive: true,
    title: 'secteursNeste<br />\
    <img src="styles/legend/secteursNeste_2_0.png" /> A<br />\
    <img src="styles/legend/secteursNeste_2_1.png" /> B<br />\
    <img src="styles/legend/secteursNeste_2_2.png" /> C<br />\
    <img src="styles/legend/secteursNeste_2_3.png" /> D<br />\
    <img src="styles/legend/secteursNeste_2_4.png" /> E<br />\
    <img src="styles/legend/secteursNeste_2_5.png" /> F<br />\
    <img src="styles/legend/secteursNeste_2_6.png" /> G<br />\
    <img src="styles/legend/secteursNeste_2_7.png" /> <br />'
        });
var format_centroidezoneTENeste_3 = new ol.format.GeoJSON();
var features_centroidezoneTENeste_3 = format_centroidezoneTENeste_3.readFeatures(json_centroidezoneTENeste_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroidezoneTENeste_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroidezoneTENeste_3.addFeatures(features_centroidezoneTENeste_3);
var lyr_centroidezoneTENeste_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroidezoneTENeste_3, 
                style: style_centroidezoneTENeste_3,
                interactive: false,
                title: 'centroide zone TE Neste'
            });
var format_Dpartements_4 = new ol.format.GeoJSON();
var features_Dpartements_4 = format_Dpartements_4.readFeatures(json_Dpartements_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartements_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_4.addFeatures(features_Dpartements_4);
var lyr_Dpartements_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartements_4, 
                style: style_Dpartements_4,
                interactive: false,
                title: '<img src="styles/legend/Dpartements_4.png" /> Départements'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_communeSN_1.setVisible(true);lyr_secteursNeste_2.setVisible(true);lyr_centroidezoneTENeste_3.setVisible(true);lyr_Dpartements_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_communeSN_1,lyr_secteursNeste_2,lyr_centroidezoneTENeste_3,lyr_Dpartements_4];
lyr_communeSN_1.set('fieldAliases', {'ID_BDCARTO': 'ID_BDCARTO', 'NOM_COMM': 'NOM_COMM', 'INSEE_COMM': 'INSEE_COMM', 'STATUT': 'STATUT', 'X_COMMUNE': 'X_COMMUNE', 'Y_COMMUNE': 'Y_COMMUNE', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_CANT': 'INSEE_CANT', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', 'arrondi': 'arrondi', });
lyr_secteursNeste_2.set('fieldAliases', {'secteurs': 'secteurs', 'Secteurs_1': 'Secteurs_1', '1J/sem': '1J/sem', '2J/sem': '2J/sem', '3,5J/sem': '3,5J/sem', });
lyr_centroidezoneTENeste_3.set('fieldAliases', {'id': 'id', 'Centroide': 'Centroide', });
lyr_Dpartements_4.set('fieldAliases', {'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_communeSN_1.set('fieldImages', {'ID_BDCARTO': 'TextEdit', 'NOM_COMM': 'TextEdit', 'INSEE_COMM': 'TextEdit', 'STATUT': 'TextEdit', 'X_COMMUNE': 'TextEdit', 'Y_COMMUNE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'INSEE_CANT': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_REG': 'TextEdit', 'arrondi': 'TextEdit', });
lyr_secteursNeste_2.set('fieldImages', {'secteurs': 'TextEdit', 'Secteurs_1': 'TextEdit', '1J/sem': 'TextEdit', '2J/sem': 'TextEdit', '3,5J/sem': 'TextEdit', });
lyr_centroidezoneTENeste_3.set('fieldImages', {'id': 'TextEdit', 'Centroide': 'TextEdit', });
lyr_Dpartements_4.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'INSEE_DEPT': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_communeSN_1.set('fieldLabels', {'ID_BDCARTO': 'no label', 'NOM_COMM': 'no label', 'INSEE_COMM': 'no label', 'STATUT': 'no label', 'X_COMMUNE': 'no label', 'Y_COMMUNE': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'INSEE_CANT': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', 'arrondi': 'no label', });
lyr_secteursNeste_2.set('fieldLabels', {'secteurs': 'header label', 'Secteurs_1': 'no label', '1J/sem': 'header label', '2J/sem': 'header label', '3,5J/sem': 'header label', });
lyr_centroidezoneTENeste_3.set('fieldLabels', {'id': 'no label', 'Centroide': 'no label', });
lyr_Dpartements_4.set('fieldLabels', {'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_Dpartements_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});