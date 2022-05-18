let ar=[11,24,44,2,1,6,5];

const shuffle=(ar)=>{
for(let i=0;i<ar.length;i+=2){
    if(i>0 && (ar[i-1]<ar[i])){
    swap(ar,i-1,i);
    }
    if(i<ar.length-1 && (ar[i]>ar[i+1])){
    swap(ar,i,i+1);
    }
  
}
return ar;
}

const swap=(ar,x,y)=>{
    let temp=ar[x];
    ar[x]=ar[y];
    ar[y]=temp;
}
let ans=shuffle(ar);
console.log(ans);
