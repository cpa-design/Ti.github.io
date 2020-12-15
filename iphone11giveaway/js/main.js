$(document).ready(function() {

    // Domain Subfolder Name
    var $subfolder_name = 'iphone11giveaway';

	// Dynamic Countdown Date
	var myDate=new Date();
    myDate.setDate(myDate.getDate()+1);
	month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    var dt = myDate.getFullYear() + '/' + month + '/' + myDate.getDate() ;
	// Countdown Date | Format: year/month/day | Example: '2017/12/31' or dt for dynamic.
	var $countdown_date = dt;
	
	// Reward Name
	var $reward_1 = 'Samsung S10+';
	
	// Reward Color Names
	var $color_1 = 'White';
	var $color_2 = 'Black';
	
	// Capacity Names
	var $capacity_1 = '128<span class="small">GB</span>';
	var $capacity_2 = '512<span class="small">GB</span>';
	
	// Console Messages
	var $console_message_1 = 'Processing Application Form...';
	var $console_message_2 = 'Checking Previous Entries...';
	var $console_message_3 = '<span class="console-msg-success">No Previous Entries Found</span>';
	var $console_message_4 = 'Applying you for';
	var $console_message_5 = '<span class="console-msg-success">Succesfully Applied</span>';
	var $console_message_6 = 'Performing Automatic Human Verification...';
	var $console_message_7 = '<span class="console-msg-error">Automatic Human Verification Failed</span>';
	var $console_message_8 = 'Manual Human Verification Required';
	
	
	// jQuery Functions
	$('#draw-countdown').countdown($countdown_date, function(event) {
		$(this).html(event.strftime('%Ih %Mm %Ss'));
	});
	$('#draw-countdown-header').countdown($countdown_date, function(event) {
		$(this).html(event.strftime('%Ih %Mm %Ss'));
	});


    $(".popup-contact").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					$("#popup-contact-close").click(function() {	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-pp").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					if ($(window).width() > 480) {
					  $('#privacy-policy .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}					
					$("#popup-privacy-policy-close").click(function() {
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});
	$(".popup-tos").click(function() {
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service-inner-wrapper').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});	
					if ($(window).width() > 480) {
						$('#terms-of-service .tos-pp-content-wrapper').perfectScrollbar({wheelSpeed: 3});
					}	
					$("#popup-terms-of-service-close").click(function() {	
						$.magnificPopup.close();
					});
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
				}
			}
		});	
	});

});
