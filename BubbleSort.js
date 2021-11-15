function bubbleSort( list ){
    for (let i = 0; i < list.length; i++ ){
        for (let j = i+1; j < list.length; j++ ){
                if (list[i] > list[j]){
                    aux = list[i]
                    list[i] = list[j]
                    list[j] = aux
                }
            }
        }
    return list
}

result = bubbleSort( [10,5,6,1,8,2,3,4,7,9] );
console.log( result );
