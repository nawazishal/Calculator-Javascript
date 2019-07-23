function clean(){
  var input=document.getElementById('input').value='';
}
insert=(num)=>{
  var input=document.getElementById('input');
   if(num === '=')
   {
     input.value=eval(input.value)
   }
   else
      input.value=input.value+num;
}

