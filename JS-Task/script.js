function findIndex(text){
    let a={};
    for (let i = 0; i < text.length; i++) {
        a[text[i]]= a[text[i]] ? a[text[i]] + 1 : 1 ;    
         
    }
    let count={}
    for (let i = 0; i < text.length; i++) {
        if (!count[text[i]]){
            console.log(text[i]+': '+ a[text[i]]);
            count[text[i]]=true
        }
    }
}
let text='hello world'
findIndex(text)


function findMedian(arr){
    arr.sort((a,b)=> a-b)
    if(arr.length%2){
        return arr[Math.floor(arr.length/2)]
    }else{
        return arr[arr.length/2 -1] + ',' + arr[arr.length/2]
    }
}

console.log(findMedian([1,2,3,5,7,1,15,17,19,8,9]));
console.log(findMedian([1,2,4,6,5,8]));