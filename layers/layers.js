var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });var format_KantorCamat_1 = new ol.format.GeoJSON();
var features_KantorCamat_1 = format_KantorCamat_1.readFeatures(json_KantorCamat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorCamat_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KantorCamat_1.addFeatures(features_KantorCamat_1);var lyr_KantorCamat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorCamat_1, 
                style: style_KantorCamat_1,
                title: '<img src="styles/legend/KantorCamat_1.png" /> KantorCamat'
            });var format_PUSKESMAS_2 = new ol.format.GeoJSON();
var features_PUSKESMAS_2 = format_PUSKESMAS_2.readFeatures(json_PUSKESMAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PUSKESMAS_2.addFeatures(features_PUSKESMAS_2);var lyr_PUSKESMAS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_2, 
                style: style_PUSKESMAS_2,
                title: '<img src="styles/legend/PUSKESMAS_2.png" /> PUSKESMAS'
            });var format_SMA_3 = new ol.format.GeoJSON();
var features_SMA_3 = format_SMA_3.readFeatures(json_SMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SMA_3.addFeatures(features_SMA_3);var lyr_SMA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMA_3, 
                style: style_SMA_3,
                title: '<img src="styles/legend/SMA_3.png" /> SMA'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_KantorCamat_1.setVisible(true);lyr_PUSKESMAS_2.setVisible(true);lyr_SMA_3.setVisible(true);
var layersList = [baseLayer,lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_KantorCamat_1,lyr_PUSKESMAS_2,lyr_SMA_3];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KantorCamat_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jalan': 'Jalan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'lat': 'lat', 'long': 'long', 'Name': 'Name', });
lyr_PUSKESMAS_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Buka Pukul': 'Buka Pukul', 'lat': 'lat', 'long': 'long', 'gambar': 'gambar', });
lyr_SMA_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jalan': 'Jalan', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Buka Pukul': 'Buka Pukul', 'Nomor Telepon': 'Nomor Telepon', 'lat': 'lat', 'long': 'long', 'gambar': 'gambar', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KantorCamat_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Name': 'Photo', });
lyr_PUSKESMAS_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Buka Pukul': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'gambar': 'Photo', });
lyr_SMA_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Buka Pukul': 'TextEdit', 'Nomor Telepon': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'gambar': 'Photo', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KantorCamat_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jalan': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', 'lat': 'no label', 'long': 'no label', 'Name': 'no label', });
lyr_PUSKESMAS_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', 'Buka Pukul': 'no label', 'lat': 'no label', 'long': 'no label', 'gambar': 'no label', });
lyr_SMA_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jalan': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Kabupaten': 'no label', 'Provinsi': 'no label', 'Buka Pukul': 'no label', 'Nomor Telepon': 'no label', 'lat': 'no label', 'long': 'no label', 'gambar': 'no label', });
lyr_SMA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});