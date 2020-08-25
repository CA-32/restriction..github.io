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
                interactive: false,
                title: '<img src="styles/legend/lienretourca32_1.png" /> lien retour ca32'
            });
var format_tourseauSytemeNeste_2 = new ol.format.GeoJSON();
var features_tourseauSytemeNeste_2 = format_tourseauSytemeNeste_2.readFeatures(json_tourseauSytemeNeste_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourseauSytemeNeste_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourseauSytemeNeste_2.addFeatures(features_tourseauSytemeNeste_2);
var lyr_tourseauSytemeNeste_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tourseauSytemeNeste_2, 
                style: style_tourseauSytemeNeste_2,
                interactive: false,
    title: 'tourseauSytemeNeste<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_0.png" /> A<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_1.png" /> B<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_2.png" /> C<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_3.png" /> D<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_4.png" /> E<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_5.png" /> F<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_6.png" /> G<br />\
    <img src="styles/legend/tourseauSytemeNeste_2_7.png" /> <br />'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_lienretourca32_1.setVisible(true);lyr_tourseauSytemeNeste_2.setVisible(true);lyr_Dpartements_3.setVisible(true);lyr_territoireOUGC_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lienretourca32_1,lyr_tourseauSytemeNeste_2,lyr_Dpartements_3,lyr_territoireOUGC_4];
lyr_lienretourca32_1.set('fieldAliases', {'Retour': 'Retour', });
lyr_tourseauSytemeNeste_2.set('fieldAliases', {'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'DEPART': 'DEPART', 'Secto2017': 'Secto2017', });
lyr_Dpartements_3.set('fieldAliases', {'NOM_DEPT': 'NOM_DEPT', 'INSEE_DEPT': 'INSEE_DEPT', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'NOM_REGION': 'NOM_REGION', 'INSEE_REG': 'INSEE_REG', });
lyr_territoireOUGC_4.set('fieldAliases', {'CODE_ZONE': 'CODE_ZONE', 'CODE_UG': 'CODE_UG', 'LIBELLé': 'LIBELLé', 'LIBELLé0': 'LIBELLé0', '_OBJECT': '_OBJECT', });
lyr_lienretourca32_1.set('fieldImages', {'Retour': '', });
lyr_tourseauSytemeNeste_2.set('fieldImages', {'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'DEPART': 'TextEdit', 'Secto2017': 'TextEdit', });
lyr_Dpartements_3.set('fieldImages', {'NOM_DEPT': '', 'INSEE_DEPT': '', 'SUPERFICIE': '', 'POPULATION': '', 'NOM_REGION': '', 'INSEE_REG': '', });
lyr_territoireOUGC_4.set('fieldImages', {'CODE_ZONE': 'TextEdit', 'CODE_UG': 'TextEdit', 'LIBELLé': 'TextEdit', 'LIBELLé0': 'TextEdit', '_OBJECT': 'TextEdit', });
lyr_lienretourca32_1.set('fieldLabels', {'Retour': 'no label', });
lyr_tourseauSytemeNeste_2.set('fieldLabels', {'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'DEPART': 'no label', 'Secto2017': 'no label', });
lyr_Dpartements_3.set('fieldLabels', {'NOM_DEPT': 'no label', 'INSEE_DEPT': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'NOM_REGION': 'no label', 'INSEE_REG': 'no label', });
lyr_territoireOUGC_4.set('fieldLabels', {'CODE_ZONE': 'no label', 'CODE_UG': 'no label', 'LIBELLé': 'no label', 'LIBELLé0': 'no label', '_OBJECT': 'no label', });
lyr_territoireOUGC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});