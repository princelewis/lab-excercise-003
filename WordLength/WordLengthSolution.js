function wordLength(arr) {
    var length = [];
    var word = [];
    var myMap = new Map();
    for (var i of arr) {
        myMap.set(i.toLowerCase(),i.length);
    }
    return myMap;
}

module.exports = wordLength;