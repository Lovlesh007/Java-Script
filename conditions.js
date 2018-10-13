// if Hour is between 6am to 12pm print : Good morning Buddy!
//else if hour is between 12pm to 6 pm print GooD Evening Buddy!
//otherwise print Good night Buddy!
// here we assume that time is in Hour

let time= 20;
if(time >= 6 && time < 12){
    console.log("Good morning Buddy");
}
else if(time >= 12 && time < 18)
{
    console.log("Good evening Buddy");

}
else
console.log("Good Night Buddy");

