var arr = [10, 20, 30];

arr.map(function(item) {
    return item * 10;
})

arr.filter(function(item) {
    if (item == 10) {
        return true;
    }
})

var arr = [10, 20, 30];

var newArr = [];
arr.forEach(function(item) {
    newArr.push(item);
});

var newArr = [];
arr.forEach(function(item) {
    if (item == 10) {
        newArr.push(item);
    }
});
