/*富文本编辑*/

$(function () {
    $('.layout-menu-left').css('height', $('.layout-right').innerHeight());
    /*轮播滑动*/
    if($(".swiper-container").length>0){
        var swiper = new Swiper('.swiper-container',{
            autoplay:10000,
            loop:true,
            loopedSlides:3,
            spaceBetween:10,
            centeredSlides:true,
            slidesPerView : 'auto',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
    }
    /*富文本编辑*/
    if($("#text-content").length>0){
        var $preview, editor, mobileToolbar, toolbar;
        Simditor.locale = 'zh-CN';
        toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', '|', 'ol', 'ul', 'blockquote', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
        mobileToolbar = ["bold", "underline", "strikethrough", "color", "ul", "ol"];
        editor = new Simditor({
            textarea: $('#text-content'),
            placeholder: '这里输入文字...',
            toolbar: toolbar,
            imageButton:'upload',
            defaultImage :null,//编辑器插入图片时使用的默认图片
            upload : {
                url : 'ImgUpload.action', //文件上传的接口地址
                params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
                fileKey: 'fileDataFileName', //服务器端获取文件数据的参数名
                connectionCount: 3,
                leaveConfirm: '正在上传文件'
            }
        });
    }

})


