$(document).ready(function(){
    // $('#release').mouseenter(function(){
    //     $('.release-label').hide();
    //     $('.lang-selector').show();
    // }).mouseleave(function(){
    //     $('.lang-selector').hide();
    //     $('.release-label').show();
    // });

    $('#release').click(function(){
        $('.release_img.en').hide();
        $('.release_box').show();
        $('.release_img.pt').show();
        $('body').addClass('noscroll');
        ga('send', 'event', 'link', 'click', 'release-pt');
    });

    // $('#release-pt').click(function(){
    //     $('.release_img.en').hide();
    //     $('.release_box').show();
    //     $('.release_img.pt').show();
    //     $('body').addClass('noscroll');
    //     ga('send', 'event', 'link', 'click', 'release-pt');
    // });
    // $('#release-en').click(function(){
    //     $('.release_img.pt').hide();
    //     $('.release_box').show();
    //     $('.release_img.en').show();
    //     $('body').addClass('noscroll');
    //     ga('send', 'event', 'link', 'click', 'release-en');
    // });
    $('.release_box').click(function(){
        $('.release_box').hide();
        $('.release_img').hide();
        $('body').removeClass('noscroll');
        ga('send', 'event', 'link', 'click', 'release-close');
    });
});
