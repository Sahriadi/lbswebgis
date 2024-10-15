var wms_layers = [];


        var lyr_GoogleStreet_0 = new ol.layer.Tile({
            'title': 'Google Street',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Dusun_1 = new ol.format.GeoJSON();
var features_Dusun_1 = format_Dusun_1.readFeatures(json_Dusun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dusun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_1.addFeatures(features_Dusun_1);
var lyr_Dusun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_1, 
                style: style_Dusun_1,
                popuplayertitle: "Dusun",
                interactive: true,
    title: 'Dusun<br />\
    <img src="styles/legend/Dusun_1_0.png" /> Tatar Tengah Tengah<br />\
    <img src="styles/legend/Dusun_1_1.png" /> Repok Tatar<br />\
    <img src="styles/legend/Dusun_1_2.png" /> Repok Kantar<br />\
    <img src="styles/legend/Dusun_1_3.png" /> Pesongan Jukung Utara<br />\
    <img src="styles/legend/Dusun_1_4.png" /> Pesorongan Jukung Selatan<br />\
    <img src="styles/legend/Dusun_1_5.png" /> Lebah Munte Barat<br />\
    <img src="styles/legend/Dusun_1_6.png" /> Lebah Sempage Utara<br />\
    <img src="styles/legend/Dusun_1_7.png" /> Lebah Sempage Utara<br />\
    <img src="styles/legend/Dusun_1_8.png" /> Lebah Sempage Selatan<br />\
    <img src="styles/legend/Dusun_1_9.png" /> Lebah Munte<br />\
    <img src="styles/legend/Dusun_1_10.png" /> Kawasan Hutan<br />\
    <img src="styles/legend/Dusun_1_11.png" /> <br />'
        });
var format_Poly_Hutan_Desa_2 = new ol.format.GeoJSON();
var features_Poly_Hutan_Desa_2 = format_Poly_Hutan_Desa_2.readFeatures(json_Poly_Hutan_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poly_Hutan_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poly_Hutan_Desa_2.addFeatures(features_Poly_Hutan_Desa_2);
var lyr_Poly_Hutan_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poly_Hutan_Desa_2, 
                style: style_Poly_Hutan_Desa_2,
                popuplayertitle: "Poly_Hutan_Desa",
                interactive: true,
                title: '<img src="styles/legend/Poly_Hutan_Desa_2.png" /> Poly_Hutan_Desa'
            });

lyr_GoogleStreet_0.setVisible(true);lyr_Dusun_1.setVisible(true);lyr_Poly_Hutan_Desa_2.setVisible(true);
var layersList = [lyr_GoogleStreet_0,lyr_Dusun_1,lyr_Poly_Hutan_Desa_2];
lyr_Dusun_1.set('fieldAliases', {'id': 'id', 'Nama Dusun': 'Nama Dusun', 'Luas': 'Luas', 'Jumlah KK': 'Jumlah KK', 'Penduduk': 'Penduduk', });
lyr_Poly_Hutan_Desa_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE': 'KODE', 'KTH_IZIN': 'KTH_IZIN', 'RESORT': 'RESORT', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'NO': 'NO', 'KETUA_KELO': 'KETUA_KELO', 'LUAS': 'LUAS', 'KELOMPOK_H': 'KELOMPOK_H', 'Izin': 'Izin', });
lyr_Dusun_1.set('fieldImages', {'id': 'TextEdit', 'Nama Dusun': 'TextEdit', 'Luas': 'TextEdit', 'Jumlah KK': '', 'Penduduk': '', });
lyr_Poly_Hutan_Desa_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'KODE': 'TextEdit', 'KTH_IZIN': 'TextEdit', 'RESORT': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'NO': 'TextEdit', 'KETUA_KELO': 'TextEdit', 'LUAS': 'TextEdit', 'KELOMPOK_H': 'TextEdit', 'Izin': 'TextEdit', });
lyr_Dusun_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Jumlah KK': 'inline label - visible with data', 'Penduduk': 'inline label - visible with data', });
lyr_Poly_Hutan_Desa_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'KODE': 'inline label - visible with data', 'KTH_IZIN': 'inline label - visible with data', 'RESORT': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'NO': 'inline label - visible with data', 'KETUA_KELO': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'KELOMPOK_H': 'inline label - visible with data', 'Izin': 'inline label - visible with data', });
lyr_Poly_Hutan_Desa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
