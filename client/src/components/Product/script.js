import $ from 'jquery';

export function bidBoxWork(sessionID, bidValue) {
    
    $(document).ready(function() {

        var interval;
        initTimer();

        $("#bid-now-btn").on("click", function() {
            
            var input = $("#bid-value");
            var sessionID = input.data("session");
            var bidValue = input.val(); 
            $.ajax(
                {
                    url: '/bid/updateAuctionSession/'+sessionID+'/'+bidValue,
                    method: 'PUT',
                    success: function(data) {
                        clearInterval(interval);
                        $(".deals_timer_box").data("target-time", data.bidTime);
                        initTimer();
                        const timer = data.bidTime;
                        const str = timer.split(":");
                        $(".deals_timer_hr").text(str[0]);
                        $(".deals_timer_min").text(str[1]);
                        $(".deals_timer_sec").text(str[2]);
                        $("#current-price").text(data.currentPrice);
                        $("#bid-value").val(data.currentPrice);
                        $("#bid-value").data("min", data.currentPrice);
                        //console.log(data.bidTime);
                    }
                }
            );
        })

        $("[data-value]").on("click", function() {
            var value = $(this).data("value");
            var input = $("#bid-value");
            var step = Number(input.data("step"));
            var min = Number(input.data("min"));
            var val = Number(input.val());

            val = value * step + val;

            if (val < min) {
                val = min;
            }
            input.val(val);
        });
        
        
        function initTimer() {
            if($('.bestsellers_item').length)
            {
                var timers = $('.bestsellers_item');
                timers.each(function()
                {
                    var timer = $(this);
                    
                    var target = timer.find('.deals_timer_box');
    
                    var targetTime = target.data('target-time');
                    
                    // variables for time units
                    var hours, minutes, seconds;
        
                    var h = timer.find('.deals_timer_hr');
                    var m = timer.find('.deals_timer_min');
                    var s = timer.find('.deals_timer_sec');							
    
                    
    
                    interval = setInterval(function ()
                    {					
                        var str = targetTime.split(':');
                        
                        //
                        hours = parseInt(str[0], 10);
                        minutes = parseInt(str[1], 10);
                        seconds = parseInt(str[2], 10);
                        
                        //
                        if (seconds > 0) {
                            seconds--;
                        }					
    
                        //
                        if (hours === 0 && minutes === 0 && seconds === 0) {
                            clearInterval(interval);
                            timer.remove();
                            $("#end").text("Đã kết thúc");
                        }
    
                        if (seconds === 0 && minutes > 0) {
                            seconds = 59;
                            minutes--;
                        }
                        if (minutes === 0 && hours > 0) {
                            minutes = 59;
                            hours--;
                        }
    
                        if (seconds < 10) {
                            seconds = '0' + seconds;
                        }
                        if (minutes < 10) {
                            minutes = '0' + minutes;
                        }
                        if (hours < 10) {
                            hours = '0' + hours;
                        }					
                        
                        // display results
                        h.text(hours);
                        m.text(minutes);
                        s.text(seconds); 
                        
                        targetTime = `${hours+':'+minutes+':'+seconds}`;
                        //target.data('target-time', targetTime);
                    }, 1000);
                });	
            }
        }

        // var interval = setInterval(function(){            
        //     if ($('.bestsellers_item').length != 1) {
        //         $("#end").text("Đã kết thúc");
        //         clearInterval(interval);
        //     }
        // }, 1000);        
    });    
}