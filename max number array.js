function maxNumber(arr){
    let newArr = [];
    for ( let i=0; i < arr.length; i ++){
        let currNum = arr[i];
        let isTop = true;
        for ( j = i+1; j < arr.length; j ++){
            let rightNum = arr[j];
            if ( currNum <= rightNum){
                isTop = false;
                break;
            }
        }
        if ( isTop){
            newArr.push(currNum);
        }
    }
    console.log(newArr.join(' '));

}
maxNumber([1,4,3,2]);
maxNumber([14,24,3,19,15,17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);