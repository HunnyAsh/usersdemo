$(function(){
    var userObj={};
    $("input").on('change',validateInput);
    function validateInput(){
        switch(this.name) {
            case  "fname" :
                        if(checkValidity(this)){
                                userObj[this.name] = this.value;
                        }
                        else {
                            userObj[this.name] = "";
                        }
                        break;

            case "mname" : if(checkValidity(this)){
                            userObj[this.name] = this.value;
                        }
                        else {
                            userObj[this.name] = "";
                        }
                        break;

            case "lname" : if(checkValidity(this)){
                            userObj[this.name] = this.value;
                            }
                        else{
                            userObj[this.name] = "";
                        }
                        break;
            case "email" : if(isEmail(this)){
                            userObj[this.name] = this.value;
                        }
                        else {
                            userObj[this.name] = "";
                        }
                        break;
            case "password" : if(checkPassword(this)){
                                userObj[this.name] = this.value;
            }
                        else {
                            userObj[this.name] = "";
                        }
                        break;
            case "gender" : if (this.checked) {
                            userObj[this.name] = this.value;
                            $('.enableOnInput').prop('disabled', false);
                        }
                        else {
                            userObj[this.name]="";
                        }
                        break;
        }
    }

    $("select").change(function(){
        var selectedCity = $(this).children("option:selected").val();
        alert(selectedCity);
        if(selectedCity){
            userObj[this.name]=selectedCity;
        }
    });
    $("textarea").change(function(){
        var txt = $("textarea#hobbies").val();
        userObj[this.name] = this.value;
    })
    function checkValidity(tag){
        if(tag.value[0] >=0 && tag.value[0]<=9) {
            $(tag).siblings().closest("span.error").addClass("error_show");
            $(tag).siblings().closest("span.error").removeClass("error");
            return false;
        }else{
            $(tag).siblings().closest("span.error_show").addClass("error");
            $(tag).siblings().closest("span.error_show").removeClass("error_show");
            return true;
        }
    }
    function isEmail(tag) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        alert("in regex");
        alert(regex.test(tag.value));
        if(regex.test(tag.value)) {
            $(tag).siblings().closest("span.error_show").addClass("error");
            $(tag).siblings().closest("span.error_show").removeClass("error_show");
            return true;
        }
        else {
            $(tag).siblings().closest("span.error").addClass("error_show");
            $(tag).siblings().closest("span.error").removeClass("error");
            return false;
        }
      }
      function checkPassword(tag) {
          if(tag.value.length>=6){
            $(tag).siblings().closest("span.error_show").addClass("error");
            $(tag).siblings().closest("span.error_show").removeClass("error_show");
            return true;
          }
          else{
            $(tag).siblings().closest("span.error").addClass("error_show");
            $(tag).siblings().closest("span.error").removeClass("error");
            return false;
          }
      }
      $("#submit").click(function(e){
          e.preventDefault();
          var dirty = jQuery("#usersInfo").val().trim();
          var cleaned = removeDuplicates(dirty);
          console.log(cleaned);
          $("#usersInfo").append('<tr><td>'+userObj.fname+'</td><td>'+userObj.mname+'</td>'+
          '<td>'+userObj.lname+'</td>'+
          '<td>'+userObj.email+'</td><td>'+userObj.gender+'</td><td>'+userObj.city+'</td><td>'+userObj.hobbies+'</td></td></tr>')
      })
});