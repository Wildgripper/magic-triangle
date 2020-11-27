function array(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = 1;
    }

    return arr;
}

function triangle(n) {

    if (n >= 2 && n <= 100) {

        var arr = [];
        for (var i = 0; i < n; i++) {
            arr[i] = array(i + 1);
        }

        for (var i = 2; i < n; i++) {
            for (var j = 1; j < i; j++) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }

        }

        console.log(arr);
        return arr;
    } else {
        console.log('Please enter parameter in range [2-100]');
    }

}

triangle(5);




