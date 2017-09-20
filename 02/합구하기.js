// var num=0;
// var total=0;
//
//
// function adding(){
//
// num=prompt("숫자를 입력하시오.")
//
// if (num === null){
//
// alert("숫자들의 총 합은 "+total+"입니다.");
// break;
// }
// else{
//   total+=num
// }
//
// }
// return total;
// }
//
// adding();

//
// function adding(){
//
// for(num=0;num===null;num+){
// var num=prompt('값을 써봐');
// if(num === null){
// alert("숫자들의 총 합은 "+total+"입니다.");
// false;
// }else{
// total=total+num;
// }
// }
// return(total);
// }
// adding();


// function adding(){
// var num, total=0;
//
// for(var end=true; end ===true;){
//
// var num = prompt("숫자를 써봐!");
// if(num ===null){
// alert("합은 "+ total+"입니다!");
// end=false;
// }else{
//   total=toal+num;
// }
// }
// }
//

// adding();
// // var num=0;
// // var total=0;
// // function adding(){
// //for(end=false;end===false;){
// num= prompt("숫자써!!");
// ////if (num===null) {
// alert("합은 "+total+"입니다.");
// //end=true;
// // }else{
// //
// // total=total+num;
// //
// // }
// // }
// adding();

// function add(){
// var num,total=0;
// for(){
//
// num=prompt("숫자써!")
// if(num===null){
// alert(total);
// false;
// }
// }else{
//     total += parseInt(num);
// }
// }
//
// add();



var sum = 0;

setInterval(function () {//setInterval은 함수가 반복하도록 하는 모듈이다.
a =  parseInt(prompt('숫자를 써보자!!'));
  if(a){
    sum = sum + a;
  }else{
    alert(sum);
  }
}, 10);//여기서 10은 parseInt가 0.01초에 한번씩 나오도록 하는 것이다. 1000이 1초다.
