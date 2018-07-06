$(function(){
    $("#getVesCode").on('click',function(){
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