let arr=[1,2,3,4];
//var num=arr[1];

function checkprime(arr2)
{
    var num=arr2[1];

     var flag=0;

for(i=1;i<=num; i++)
{
    if(num%i==0)
    {
        
flag=flag+1;
    }}
    return flag;
}
result= checkprime(arr);


    if(result==2)
    {
        console.log(arr[1]+ " is a prime number")
    }
    else{
        console.log(arr[1]+" is not a prime number")
    }


    //to find frequent item of an array

    var arr2=[ 2,5,9,9,8,1]
    //console.log(arr2.length);

    function FreqArray(arr2)
    {
        var freqcount=1;
        var maxfreq=1;
        var mostfreqitem;

for(i=0; i<=arr2.length-1; i++)
{
    for(j=i+1;j<=arr2.length-1; j++  )

{
    if(arr2[i]==arr2[j])
    {
freqcount=freqcount+1;

    }
}
    if(freqcount> maxfreq)
    {
    maxfreq=freqcount;
    mostfreqitem= arr2[i];
    }
    /*else if(freqcount== maxfreq)
    {
        mostfreqitem= "more than one  most frequent item";  
    }*/

}

return mostfreqitem;

}MostFreqItem= FreqArray(arr2)
console.log(MostFreqItem);

//for loop from0-15, check odd or even

for(i=0; i<=15; i++)
{
    if(i==0)
    {
        console.log(" zero is even");
    }
    else if (i%2==0)
    {
        console.log(i+" is even");
    }
    else{
        console.log(i+ "  is odd");
    }
}

    // sum of squeres

    let sumarray=[1,5,6,3];
    let sum=0;
    for( k=0; k<sumarray.length;k++)
    {
        sum=sum+(sumarray[k]*sumarray[k])
    }
console.log(sum);
