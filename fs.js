const _ = require('lodash');
fs = require('fs');

fs.readFile('temp.csv', function(err, data) {
    if(err) throw err;
    const arr = data.toString().split("\n");

    let type = false;
    const result = {}

    for(str in arr) {
        if (type) {
            // ""assignProperties"", ""options"": {
            const [, transformationName] = arr[str].match(/\"\"(\w+)\"\".*/)
            
            // This key is not in the object
            if (!_.has(result, transformationName)) {
                result[transformationName] = 1
            } else {
                result[transformationName] += 1
            }
        }

        // {""type"":
        if (arr[str].match(/{""type"":/)) {
            type = true;
        } else {
            type= false;
        }
    }

    // Converting object to array
    let entries = Object.entries(result);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (i in sorted) {
        console.log(Number(i) + 1, sorted[i][0], sorted[i][1])
    }

    // 1 name1 387
    // 2 name2 125
    // 3 name3 100
});
