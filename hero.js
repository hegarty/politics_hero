(function()
{

    var init_slick = function()
    {
        var resolution_medium = 875;
        var resolution_small = 700;
        
        var w = $('#politics_hero').innerWidth();

        if(w > resolution_medium && $('#politics_hero').hasClass('slick-initialized'))
        {
             $('#politics_hero').slick('destroy');
        }

        if(w <= resolution_medium && !$('#politics_hero').hasClass('slick-initialized'))
        {
            console.log('Init Slick'); 
            
            $('#politics_hero').slick(
            {
                slidesToScroll:2,
                slidesToShow:2,
                dots: true,
                responsive: [
                {
                    breakpoint: resolution_medium,
                    settings:
                    {
                        infinite: true,
                        slidesToShow:2,
                        slidesToScroll:2,
                        dots: true,
                    }
                },
                {
                    breakpoint: resolution_small,
                    settings:
                    {
                        infinite: true,
                        slidesToShow:1,
                        slidesToScroll:1,
                        dots: true,
                    }
                }
                ]
            });
        }
    }
    $(window).resize(function(){init_slick();});

    init_slick();
})();

