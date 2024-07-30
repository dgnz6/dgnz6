//// apps.fi script
//// apps.zedign.com/apps_common/script.js
/////////  vars 
if (typeof siteSection == "undefined") {
	siteSection = "main";
}
thsBlg_dyn_catcher = "apps.zedign.com/apps_common/c/";
//////////////// FUNCS ////////////////
function detectmob() {
	if (window.innerWidth <= 768) {
		return true;
	} else {
		return false;
	}
}

function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal);  // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}
///////////////////////// /FUNCS
// 
// 
//////////////////// EXEC /////////////////
if (siteSection == "main") {
	////////////// <GDBSFRM 1/2 :: LINK> //////////////////////// 
	// v1 
	// req detectmob(), viewport(), ga_evCatVal(), JQ 
	// -------------- VARS TO CHANGE -------------
	var gdbsfrm_url = 'https://' + thsBlg_dyn_catcher + '?s=fdbk';
	var clc_elem = '#fdbk'; // string of onclick elem for jq obj e.g. '#abc' or '.abc'
	var scrolling = "yes"; // 'yes'|'no'
	var gaCat = 'fdbk'; // ga categ for ga_evCatVal
	var gaVal = 'inf_fdbkBtn: ' + ''; // ga val for ga_evCatVal
	// / -------------- VARS TO CHANGE -------------
	// create fdbk link for GDBSFRM
	$('body').append('<div id="fdbk" style="box-shadow: 0 0 5px #555555;opacity:0.75;background-color: #286090; bottom: 20px; font: 12px/1em sans-serif; padding: 5px 10px; position: fixed; right: 20px;z-index:999;/* z-index for mappages */"><a id="fdbk_btn" style="color:#fff;display:block;height:100%;width:100%;cursor:pointer">Feedback</a></div>');
	// 
	function fdbk_openClose() {
		if (document.getElementById('fdbk_window')) {
			$('.fdbk_window').remove();
		} else {
			var dimn = (detectmob()) ? 80 : 70;
			$('body').append(
				'<div id="fdbk_window" class="fdbk_window" style="width:' + viewport(dimn, 'vw') + 'px;height:' + viewport(dimn, 'vh') + 'px;background-color:#aaa;position:fixed;left:50%;top:50%;margin-top:-' + (viewport(dimn, 'vh') / 2) + 'px;margin-left:-' + (viewport(dimn, 'vw') / 2) + 'px;outline:solid 3px #aaa;box-shadow:0 0 10px #000;z-index:2147483647" >' +
				'<div style="width:20px;height:20px;position:absolute;right:0;color:white;cursor:pointer;" id="fdbk_close"> <img style="width:100%;height:100%" src="data:image/png;base64,R0lGODlhDgANAIAAAP///6CgpCH5BAAAAAAALAAAAAAOAA0AAAIfjI8Jy73mIoAzNErrs/se72Qdg4BjhnGnKo3tlsRGAQA7"/> </div>' +
				'<iframe style="height:100%;width:100%;display:block;background:white;" src="' + gdbsfrm_url + '" scrolling="' + scrolling + '" frameborder="0" border="0" ></iframe>' +
				'<div>'
			);
			$("#fdbk_close").on('click', function() {
				$('.fdbk_window').remove();
				$('.fdbk_window').hide();
			});
		}
	}
	$(clc_elem).on('click', function() {
		// ga_evCatVal(gaCat, gaVal);
		fdbk_openClose();
		// console.log('tada');
	});
	////////////// </GDBSFRM 1/2 :: LINK> //////////////////////// 
	// 
}
/////////////////  DYN_CATCHER  ///////////////////
if (siteSection == "dyn_catcher") {
	//////////////////////  FDBK ////////////////////////
	if (qs.get("s") == "fdbk") {
		$('body').prepend('<div id="crecdiv"></div>');
		// 
		// 
		////////////// <GDBSFRM 2/2 :: FORM> //////////////////////// 
		// v1
		// req: ga_evCatVal(), JQ
		// 
		// / -------------- VARS TO CHANGE -------------
		///
		var gd_id = '1FAIpQLSeYmQaP4QVxDck7zDSzjnQQI-UyxB2I1XbJonLecCqhMGhugQ';
		var div_id = 'crecdiv'; // receiving div, eg 'crecdiv' for /c/
		var require_bootstrap = "yes"; // "yes"|"no"; if bootstrap not already available.
		var form_headline = '<div style="font-size:20px;line-height:2.5em;"> <!-- <img style="height:1em;display:inline-block;vertical-align:middle;" src="" /> --> Send us a message! </div> ';
		var thankyou_headline = '<h2>Thank You!</h2> <h3>Your message has been sent.</h3>';
		var form_elements = '' + // bs form markup
			// 
			'<div class="form-group">' +
			'	<label>Your Message</label> <textarea required pattern=".{10,}" title="Message" class="form-control" autocomplete="off" name="entry.1834587574"  id="entry_1834587574"></textarea>' +
			'</div>' +
			//
			' <div class="form-group">' +
			'	<label>Your Name</label> <input required pattern=".{3,}" title="Name" class="form-control" type="text" name="entry.440212386" value="" id="entry_440212386"/>' +
			'</div>' +
			// 
			'<div class="form-group">' +
			'	<label>Your Email</label> <input pattern=".{3,}" title="Email" class="form-control" type="text" name="entry.1129372400" value="" id="entry_1129372400"/>' +
			'</div>' +
			'';
		// 
		function valdfdbk() { // use this genric valdfdbk(), or cstmize it accrdngly
			$("#fdbk").css({
				'display': 'none'
			});
			setTimeout(
				function() {
					$("#" + div_id).append('<div class="container">' + thankyou_headline + '</div>');
				}, 1000);
			return true;
		}
		// / -------------- VARS TO CHANGE -------------
		// 
		//  
		var a = require_bootstrap == "yes" ? '<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>' : '';
		document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", a);
		// 
		function GDBSForm() {
			// 
			$("#" + div_id).html(
				'<iframe name="fdbk_hidden_iframe" id="fdbk_hidden_iframe" style="display:none;" onload=""></iframe>' +
				'<div class="container" id="fdbk" style="margin-bottom:10px">' +
				form_headline +
				// 
				// 
				'\x3C\x66\x6F\x72\x6D\x20\x61\x63\x74\x69\x6F\x6E\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F' +
				gd_id +
				'/formResponse" method="post" ' +
				' onSubmit="return valdfdbk()" ' +
				' role="form" name="fdbk_frm_name" id="fdbk_frm_id" target="fdbk_hidden_iframe" >' +
				form_elements +
				'	<input class="btn btn-default" type="submit" name="submit" value="Submit"/>' +
				'</form>' +
				'</div>' +
				''
			);
		}
		if (require_bootstrap == "yes") {
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js")
				.done(function(script, textStatus) {
					GDBSForm();
				})
				.fail(function(jqxhr, settings, exception) {
					// $("div.log").text("Triggered ajaxError handler.");
				});
		} else {
			GDBSForm();
		}
		////////////// </GDBSFRM 2/2 :: FORM> //////////////////////// 
		//
		//
		//
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
//