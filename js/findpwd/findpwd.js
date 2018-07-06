$(function(){
    $("#getVesCode").on('click', function () {
        var $this = $(this)
        timer($this);
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
    $("#findpwdSub").on('click',function(){
        console.log("找回密码");
        // $.ajax({
        //     url: '',
        //     type: '',
        //     data: {

        //     },
        //     success: function(mes){
        //         if(mes.status == 'SUCCESS'){

        //         }
        //     }
        // })
    })
})