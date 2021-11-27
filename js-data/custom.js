$(document).ready(
    $("#generate").click(function () {
        var Img = $("#img")[0].files[0].name;
        $("#newname").html($("#name").val());
        $("#newimg").html('<img src="img/'+ Img +'" style="width:100%;" class="myImg">');
        $("#newemail").html($("#email").val());
        $("#newfacebook").html($("#facebook").val());
        $("#newlinkdin").html($("#linkdin").val());
        $("#newphone").html($("#phone").val());
        $("#newaddres").html($("#addres").val());
        $("#newdateofbairth").html($("#dateofbairth").val());
        $("#newplaesofbairth").html($("#plaesofbairth").val());
        $("#newnationlete").html($("#nationlete").val());
        $("#newwork").html($("#work").val());
        $("#neweduction").html($("#eduction").val());
        $("#newskills").html($("#skills").val());
        $("#newhoppies").html($("#hoppies").val());
        $("#newtype").html($("#type").val());
        $("#newtype2").html($("#type2").val());
        $("#newunknown").html($("#unknown").val());
        $("#newnothing").html($("#nothing").val());
        $("#newtype3").html($("#type3").val());
        $("#newtype4").html($("#type4").val());
        $("#newtype5").html($("#type5").val());
        $("#newtype6").html($("#type6").val());
  
  
  
        var checkede = [];
        var inpute = document.getElementsByClassName('my-chick');
        for (var i = 0; i < inpute.length; i++) {
            if (inpute[i].checked) {
                checkede.push(inpute[i].value);
            }
        }
        console.log(checkede);
  
        for (let index = 0; index < checkede.length; index++) {
            $('#mygender').append('<li style="list-style-type: none;">' + checkede[index] + '</li>');
        }






        var checkede = [];
        var inpute = document.getElementsByClassName('my-data');
        for (var i = 0; i < inpute.length; i++) {
            if (inpute[i].checked) {
                checkede.push(inpute[i].value);
            }
        }
        console.log(checkede);
  
        for (let index = 0; index < checkede.length; index++) {
            $('#mydata').append('<li style="list-style-type: none;">' + checkede[index] + '</li>');
        }





        var checkede = [];
        var inpute = document.getElementsByClassName('my-data2');
        for (var i = 0; i < inpute.length; i++) {
            if (inpute[i].checked) {
                checkede.push(inpute[i].value);
            }
        }
        console.log(checkede);
  
        for (let index = 0; index < checkede.length; index++) {
            $('#mydata2').append('<li style="list-style-type: none;">' + checkede[index] + '</li>');
        }




        var checkede = [];
        var inpute = document.getElementsByClassName('my-data3');
        for (var i = 0; i < inpute.length; i++) {
            if (inpute[i].checked) {
                checkede.push(inpute[i].value);
            }
        }
        console.log(checkede);
  
        for (let index = 0; index < checkede.length; index++) {
            $('#mydata3').append('<li style="list-style-type: none;">' + checkede[index] + '</li>');
        }




        var checkede = [];
        var inpute = document.getElementsByClassName('my-data4');
        for (var i = 0; i < inpute.length; i++) {
            if (inpute[i].checked) {
                checkede.push(inpute[i].value);
            }
        }
        console.log(checkede);
  
        for (let index = 0; index < checkede.length; index++) {
            $('#mydata4').append('<li style="list-style-type: none;">' + checkede[index] + '</li>');
        }
  
    })
  );
  
  