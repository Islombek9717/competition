const arr =[4,4,3]
const arr2 =[2,2,3]

function sum(r1, r2) {  
    var res =[0, 0]
    for (let i = 0; i < r1.length; i++) {
        if (r1[i] > r2[i]) {
            res[0] ++
        }
         if (r1[i] < r2[i]) {
            res[1] ++
        }
    }
    return res
}



console.log(sum(arr, arr2));