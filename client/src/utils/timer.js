import $ from 'jquery';

export function timer() {
	$(document).ready(function() {
		//console.log($('.deals_timer_box').length);
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

				

				var interval = setInterval(function ()
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

				}, 1000);
			});	
		}	
		
	});
}