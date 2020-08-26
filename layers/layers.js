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
var format_lienretourca32_1 = new ol.format.GeoJSON();
var features_lienretourca32_1 = format_lienretourca32_1.readFeatures(json_lienretourca32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lienretourca32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lienretourca32_1.addFeatures(features_lienretourca32_1);
var lyr_lienretourca32_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lienretourca32_1, 
                style: style_lienretourca32_1,
                interactive: true,
                title: '<img src="styles/legend/lienretourca32_1.png" /> lien retour ca32'
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
var format_Dpartements_3 = new ol.format.GeoJSON();
var features_Dpartements_3 = format_Dpartements_3.readFeatures(json_Dpartements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_3.addFeatures(features_Dpartements_3);
var lyr_Dpartements_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartements_3, 
                style: style_Dpartements_3,
                interactive: false,
                title: '<img src="styles/legend/Dpartements_3.png" /> Départements'
            });
var format_territoireOUGC_4 = new ol.format.GeoJSON();
var features_territoireOUGC_4 = format_territoireOUGC_4.readFeatures(json_territoireOUGC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_territoireOUGC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_territoireOUGC_4.addFeatures(features_territoireOUGC_4);
var lyr_territoireOUGC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_territoireOUGC_4, 
                style: style_territoireOUGC_4,
                interactive: false,
                title: '<img src="styles/legend/territoireOUGC_4.png" /> territoire OUGC'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_lienretourca32_1.setVisible(true);lyr_secteursNeste_2.setVisible(true);lyr_Dpartements_3.setVisible(true);lyr_territoireOUGC_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lienretourca32_1,lyr_secteursNeste_2,lyr_Dpartements_3,lyr_territoireOUGC_4];
lyr_lienretourca32_1.set('fieldAliases', {'Retour': 'Retour', });
lyr_secteursNeste_2.set('fieldAliases', {'secteurs': 'secteurs', '1j/sem': '1j/sem', '2j/sem': '2j/sem', '3,5j/sem': '3,5j/sem', });
lyr_Dpartements_3.set('fieldAliases', {'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_territoireOUGC_4.set('fieldAliases', {'CODE_ZONE': 'CODE_ZONE', 'CODE_UG': 'CODE_UG', 'LIBELLé': 'LIBELLé', 'LIBELLé0': 'LIBELLé0', '_OBJECT': '_OBJECT', });
lyr_lienretourca32_1.set('fieldImages', {'Retour': '', });
lyr_secteursNeste_2.set('fieldImages', {'secteurs': 'TextEdit', '1j/sem': 'TextEdit', '2j/sem': 'TextEdit', '3,5j/sem': 'TextEdit', });
lyr_Dpartements_3.set('fieldImages', {'NOM_DEPT': '', 'INSEE_DEPT': '', 'SUPERFICIE': '', 'POPULATION': '', 'NOM_REGION': '', 'INSEE_REG': '', });
lyr_territoireOUGC_4.set('fieldImages', {'CODE_ZONE': 'TextEdit', 'CODE_UG': 'TextEdit', 'LIBELLé': 'TextEdit', 'LIBELLé0': 'TextEdit', '_OBJECT': 'TextEdit', });
lyr_lienretourca32_1.set('fieldLabels', {'Retour': 'no label', });
lyr_secteursNeste_2.set('fieldLabels', {'secteurs': 'header label', '1j/sem': 'header label', '2j/sem': 'header label', '3,5j/sem': 'header label', });
lyr_Dpartements_3.set('fieldLabels', {'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_territoireOUGC_4.set('fieldLabels', {'CODE_ZONE': 'no label', 'CODE_UG': 'no label', 'LIBELLé': 'no label', 'LIBELLé0': 'no label', '_OBJECT': 'no label', });
lyr_territoireOUGC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});