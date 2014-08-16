// formats back-end data so its a nice-looking object
function formatData(rawData) {
    var nrow = rawData.tf.length;
    var ncol = rawData.tf[0].c.length;
    var niceData = [];
    for (var i = 1; i < nrow; i++) {
        var newObj = {};
        for (var j = 0; j < ncol; j++) {
            var colName = rawData.tf[0].c[j].v;
            newObj[colName] = rawData.tf[i].c[j].v;
        }
        niceData.push(newObj);
    }
    return niceData;
}