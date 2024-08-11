$(document).ready(function(){
	/* Top Navi */

	$(".menuBtn").on("click", function(e){
		$this = $(this);

		if(!$this.hasClass("is-active")) {
			$this.addClass("is-active");
			$this.parent(".options").find(".navi").stop().slideDown();
			$("body").addClass("naviOpen");
			$('html, body').stop().animate({
				scrollTop: $("body").offset().top
			}, 300);
		} else {
			$this.removeClass("is-active");
			$this.parent(".options").find(".navi").stop().slideUp();
			$("body").removeClass("naviOpen");
		}

		e.preventDefault();
	});

	$("#header .options .navi ul li a").on("click", function(e){
		$this.removeClass("is-active");
		$this.parent(".options").find(".navi").stop().slideUp();
		$("body").removeClass("naviOpen");
	});

	/* Scroll To */

	$("[data-scrollto]").on("click", function(e){
		var sectionId = $(this).data("scrollto");
		
		$('html, body').stop().animate({
			scrollTop: $("#" + sectionId).offset().top
		}, 1000);
		
		e.preventDefault();		
	});

	/* Tabs */

	$(".tabs li a").on("click", function(e){
		var i = $(this).parent().index();

		if (i==1) {
			$(this).parents(".tabs").addClass("active");
			$("#content .supporters").addClass("active");
			$("#content .details").removeClass("active");
		} else {
			$(this).parents(".tabs").removeClass("active");
			$("#content .supporters").removeClass("active");
			$("#content .details").addClass("active");
		}

		e.preventDefault();
	});

	$(".tabs li.active a").click();
		
	/* Widgets Styling */

	var fonts = "@font-face{font-family:'Outfit';src:url(fonts/subset-Outfit-Regular.eot);src:url('fonts/subset-Outfit-Regular.eot?#iefix') format('embedded-opentype'),url(fonts/subset-Outfit-Regular.woff2) format('woff2'),url(fonts/subset-Outfit-Regular.woff) format('woff'),url(fonts/subset-Outfit-Regular.ttf) format('truetype'),url('fonts/subset-Outfit-Regular.svg#Outfit-Regular') format('svg');font-weight:400;font-style:normal}@font-face{font-family:'Outfit';src:url(fonts/subset-Outfit-Medium.eot);src:url('fonts/subset-Outfit-Medium.eot?#iefix') format('embedded-opentype'),url(fonts/subset-Outfit-Medium.woff2) format('woff2'),url(fonts/subset-Outfit-Medium.woff) format('woff'),url(fonts/subset-Outfit-Medium.ttf) format('truetype'),url('fonts/subset-Outfit-Medium.svg#Outfit-Medium') format('svg');font-weight:500;font-style:normal}@font-face{font-family:'Outfit';src:url(fonts/subset-Outfit-Bold.eot);src:url('fonts/subset-Outfit-Bold.eot?#iefix') format('embedded-opentype'),url(fonts/subset-Outfit-Bold.woff2) format('woff2'),url(fonts/subset-Outfit-Bold.woff) format('woff'),url(fonts/subset-Outfit-Bold.ttf) format('truetype'),url('fonts/subset-Outfit-Bold.svg#Outfit-Bold') format('svg');font-weight:700;font-style:normal}"

	/* Donate Meter */

	var addCssToDonateMeter = function() {
		$contents = $('.donateMeter iframe').contents();
				
		if ($contents.find("html") != undefined) {

			if ($contents.find(".customStyles").length < 1){

				var s = "";
				
				s+= "<style class='customStyles'>";
				s+= fonts;
				s+= "* {font-family: 'Outfit', Arial, sans-serif; color: #274869 !important}";
				s+= ".raised {float: left;  font-size: 24px; font-weight: bold;}";
				s+= ".required {float: right; margin-top: 7px; font-size: 16px; opacity: 1 !important; font-weight: 400}";
				s+= ".required strong {font-weight: 400}";
				s+= ".bar {margin: 3px 0; height: 8px; background: #DCE1E5 !important; border: none !important; overflow: visible}";
				s+= ".bar .percentage {display: none}";
				s+= ".bar .indicator {background: linear-gradient(90.02deg, #0176E7 -0.64%, #379DFF 99.98%) !important; border-radius: 30px;}";
				s+= "</style>";
								
				$contents.find("head").append(s);
			}
		}
	};

	setInterval(addCssToDonateMeter, 500);

	/* Donate Box */

	var addCssToDonateBox = function() {
		$contents = $('.donateBox iframe').contents();
			
		if ($contents.find("html") != undefined) {

			if ($contents.find(".customStyles").length < 1){

				var tributeLabel = $contents.find("[data-qa=tribute-label]");	
				
				if (tributeLabel != undefined) {
					tributeLabel.html("Give in honor or in memory");
				}

				var donateBtn = $contents.find(".donate-btn span:last-child");	
				
				if (donateBtn != undefined) {
					donateBtn.html("Donate and Support");
				}

				var s = "";
				
				s+= "<style class='customStyles'>";
				s+= fonts;
				s+= "*, input, button {font-family: 'Outfit', Arial, sans-serif; color: currentColor !important}";
				s+= "body>div {padding: 0 !important;}";
				s+= "body>div>form {padding: 19px 0 0 !important;  background: none !important }";
				s+= ".amount-label {display: none}";
				s+= ".frequency {margin-bottom: 20px}";
				s+= ".frequency .frequency-cell:first-child {padding-right: 8px}";
				s+= ".frequency .frequency-cell:last-child {padding-left: 8px}";
				s+= ".frequency-label {background-color: #eceef0; border: 2px solid #eceef0 !important; color: #274869 !important; border-radius: 8px!important}";
				s+= ".frequency-label .text-truncate {color: #274869 !important}";
				s+= ".frequency-label-body {line-height: 44px !important; font-weight: 500}";
				s+= ".frequency-label.active .frequency-label-body {font-weight: bold}";
				s+= ".frequency-label.active {box-shadow: none; background: none !important; border-color: #274869 !important;}";
				s+= ".frequency-label.active .frequency-heart-icon svg {fill: #fff !important;}";
				s+= ".frequency-heart-icon svg {fill: #FF4D01 !important;}";
				s+= ".amount-options {margin-top: -16px; margin-left: -16px}";
				s+= ".amount-option {padding-left: 16px; padding-top: 16px}";
				s+= ".amount-option-btn {color: #274869 !important; background: #eceef0 !important; backdrop-filter: blur(6px); border: 2px solid #eceef0 !important; border-radius: 8px !important; font-weight: 500; line-height: 36px !important; opacity: 1 !important}";
				s+= ".amount-option-btn.active {font-weight: bold; background-color: #fff !important; border-color: #274869 !important}";
				s+= ".amount-option-btn:hover span { background: rgba(255, 255, 255, 0.1) !important}";
				s+= ".amount-label~.mb-4 {margin-bottom: 16px !important}";
				s+= ".group-price-control-border {background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(6px); border: 1px solid currentColor !important}";
				s+= ".price-control {font-family: 'Outfit', Arial, sans-serif; font-size: 16px; font-weight: 500; height: 40px}";
				s+= ".price-symbol {font-size: 16px; font-weight: 500;}";
				s+= ".currency-select-label {font-weight: bold; color: currentColor}";
				s+= ".currency-select-label svg path {fill: currentColor}";
				s+= ".amount {margin-bottom: 10px;}";
				s+= ".amount~.px-3 {margin-top: 0; line-height: 13px; color: currentColor; font-size: 12px !important; padding: 0; margin-bottom: 10px !important}";
				s+= "[data-qa=tribute-label] {color: #274869 !important; font-size: 12px; font-weight: 500}";
				s+= "[qa=donation-form-tribute-label] {user-select: none;font-size: 12px; position: relative; padding-left: 19px; margin-left: -30px;}";
				s+= "[qa=donation-form-tribute-label]:after {content: ''; position: absolute; left: 0; top: 0; width: 12px; height: 12px; border: 1px solid currentColor; border-radius: 2px}";
				s+= "[qa=donation-form-tribute-label].active:before {content: ''; position: absolute; left: 2px; top: 2px; width: 8px;height: 8px; background: currentColor }";
				s+= ".control-next-focus-shadow-el svg {display: none}";
				s+= ".tribute-input {background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(6px); font-size: 14px; font-weight: normal; color: #333 !important; border: 1px solid #333 !important }";
				s+= ".tribute-input:focus { background: rgba(255, 255, 255, 0.1) }";
				s+= ".tribute-input::placeholder {color: #333 !important; opacity: 1 !important}";
				s+= ".tribute-input-control {margin-top: -3px}";
				s+= ".tribute-input-focus {border-color: #333 !important}";
				s+= ".link {float: left; margin-right: 25px;}";
				s+= ".group-goal-link-text-decor, .link-bordered {padding: 0}";
				s+= "[qa=comment-link] {padding: 0; font-size: 12px; margin-top: -2px; position: relative}";
				s+= "[qa=comment-link] .link-border {bottom: 2px}";
				s+= "[qa=comment-link]:after {content: '|'; position: absolute; left: -14px; top: 0; }";
				s+= ".donate-btn {height: 64px; border-radius: 8px !important; margin-top: -9px; padding-top: 7px; padding-bottom: 7px; background: #0176E7 !important; transition: background-color 0.3s, box-shadow 0.3s}";
				s+= ".donate-btn:hover {background: #3284f7 !important; box-shadow: 0px 0px 8px rgba(252, 236, 144, 0.5);}";
				s+= ".donate-btn span {color: #fff !important; font-size: 16px; font-weight: bold;}";
				s+= ".donate-btn .donate-btn-hover-overlay {display: none}";
				s+= ".group-goal-2-lines-text {margin-left: -16px; margin-bottom: 20px}";
				s+= ".control-goal {line-height: normal !important}";
				s+= "form {border: 0 !important}";
				s+= ".tribute-fake-popover { margin-top: 5px !important; border: 0; background-color: #fff; color: #333 !important; box-shadow: none }";
				s+= ".tribute-fake-popover:before { display: none }";
				s+= "select option { color: #333333 !important }";
				s+= "select option:checked { color: #179A38 !important; font-weight: bold }";
				s+= ".group-price-control.focus { background-color: rgba(255, 255, 255, 0.1) !important }";
				s+= ".d-inline-flex.font-size-14.line-height-24.cursor-pointer {margin-left: -16px;}";
				s+= "@media only screen and (max-width : 450px) {.amount-option {width: 100%}}";
				
				s+= "</style>";
								
				$contents.find("head").append(s);
			}

			try {
				if (!$._data($contents.find("[qa=donation-form-tribute-label]")[0], 'events')) {

					$contents.find("[qa=donation-form-tribute-label]").on("click", function(e){
						$(this).toggleClass("active");
					});	
	
				}
			} catch(e){}
		}
	};

	setInterval(addCssToDonateBox, 500);

	/* Participants */

	var addCssToParticipants = function() {
		$contents = $('.participants iframe').contents();
				
		if ($contents.find("html") != undefined) {

			if ($contents.find(".customStyles").length < 1){

				var s = "";
				
				s+= "<style class='customStyles'>";

				s+= fonts;
				s+= "* {font-family: 'Outfit', Arial, sans-serif; color: #333333}";
				s+= "body>div {padding: 0 !important}";
				s+= ".items-top-shadow, .items-bottom-shadow {display: none}";
				s+= "h2.title {display: none}";
				s+= ".wrapper {padding: 0; background: none !important}";
				s+= ".items {padding: 0; max-height: 945px !important}";
				s+= ".items .item {margin: 0; padding: 23px 40px; border-bottom: 1px solid rgba(220, 225, 229, 0.5) !important}";
				s+= ".items .item:last-child {border-bottom: none !important}";
				s+= "[data-qa=recent-donations-name] {font-weight: 700; color: #274869;}";
				s+= "[data-qa=recent-donations-donated-amount]:before {content: 'has '; display: inline}";
				s+= "[data-qa=recent-donations-donated-amount] {font-weight: normal; font-size: 16px; color: #333333}";
				s+= "[data-qa=recent-donations-donated-amount] strong {font-weight: bold; color: #0176E7}";
				s+= ".item-location-place strong {font-weight: 500; font-size: 12px; color: #333333}";
				s+= ".item-date {margin-top: 5px; font-size: 12px; font-weight: 500; color: #333333; opacity: 1}";
				s+= ".item-info {margin-bottom: 10px;}";
				s+= "@media only screen and (max-width : 470px) {.items .item {padding: 23px 20px}}";
				
				s+= "</style>";
								
				$contents.find("head").append(s);
			}
		}
	};

	setInterval(addCssToParticipants, 500);

	/* Fit Widgets */

	function fitWidgets() {
		$('.donateBox iframe, .participants iframe').css({'min-width': '100%'})
	}

	setInterval(fitWidgets, 1)
	

	/* Top Bar */

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 596) {
			$("body").addClass("scrolling");
		} else {
			$("body").removeClass("scrolling");
		}

	});
	
	$(window).scroll();

});



