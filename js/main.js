$(function(){
    $("button").click(function(e){
        e.preventDefault();
        var userObj={};
        var flag =0;
        var ips=$(':input').serializeArray();
        alert(JSON.stringify(ips));
        jQuery.each(ips,function(i,ip){
            if(ip.value == "") {
                alert(ip.name + " invalid!!");
            }
            else if(ip.value != "") {
                if((ip.name == 'fname') && (ip.value[0]>=0 && ip.value[0]<=9)){
                    alert("First Name should start with charatcter");
                }
                else if((ip.name == 'mname') && (ip.value[0]>=0 && ip.value[0]<=9)){
                    alert("Middle Name should start with charatcter");
                }
                else if((ip.name == 'lname') && (ip.value[0]>=0 && ip.value[0]<=9)){
                    alert("Last Name should start with charatcter");
                }
                else if((ip.name == 'password') && ((ip.value.length<=6))) {
                     alert("in password");
                     flag=1;
                     $("#password").trigger('reset');
                }
                else{
                    userObj[ip.name] = ip.value;
                }
            }
        });
        if(JSON.stringify(userObj) != '{}' && flag === 0){
            $("#usersInfo").append('<tr><td>'+userObj.fname+'</td>'+
       '<td>'+userObj.mname+'</td>'+
       '<td>'+userObj.lname+'</td>'+
       '<td>'+userObj.email+'</td>'+
       '<td>'+userObj.gender+'</td>'+
       '<td>'+userObj.hobbies+'</td>'+
       '<td>'+userObj.password+'</td></tr>');
   }
    });

});