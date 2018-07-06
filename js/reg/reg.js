$(function(){
    $("#getVesCode").on('click',function(){
        var $this = $(this);
        $('body').children(".errText").remove();
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('input[name=phone]').val()))){
            $('input[name=phone]').focus();
            var i = `<div class="errText">
                        <img class="errImg" src="./images/reg_icon/false.png" alt="失败" />
                        <p>手机号格式不正确</p>
                    </div>`;
            $('body').append(i);
            $(".errText").css({
                "left": ((document.body.clientWidth - $(".errText").width()) / 2),
                "top": ((document.body.clientHeight - $(".errText").height()) / 2)
            });
            $(".errText").fadeIn();
            setTimeout(function(){
                $(".errText").fadeOut();
            },1000);
            return
        }else{
            timer($this);
        }
        // $.ajax({
        //     url: '',
        //     type: '',
        //     data: {

        //     },
        //     success: function(mes){
        //         if(mes.status == 'SUCCESS'){
        //             time()
        //         }
        //     }
        // })
    })
    $("#regSub").on('click',function(){
        console.log("注册");
        // $.ajax({
        //     url: '',
        //     type: '',
        //     data: {

        //     },
        //     success: function (mes) {
        //         if (mes.status == 'SUCCESS') {

        //         }
        //     }
        // })
    })
})