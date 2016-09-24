"use strict";
var meatDelay = function() {

	// Variables
	var delay = 5000;
	if (document.querySelector('#send'))
		var button = document.querySelector('#send');
	else
		alert("It's looks like you aren't on Meatspace so It's not gonna works. Sorry not sorry bro ! ;)");

	// Functions
	function init() {
		_makeTimer();
		_addStyle();
		_bindEvents()
	}

	function _addStyle() {
		var headHTML = document.getElementsByTagName('head')[0].innerHTML;
		headHTML    += '<link type="text/css" rel="stylesheet" href="https://meatspace.fr/delay/delay.css">';
		document.getElementsByTagName('head')[0].innerHTML = headHTML;
	}

	function _makeTimer() {
		// Create overlay
		var meatOverlay = document.createElement("div");
		meatOverlay.classList.add("meatDelay-overlay");
		meatOverlay.classList.add("active");
		document.body.appendChild(meatOverlay);
		// Create content box
		var meatBox = document.createElement("div");
		meatBox.classList.add("meatDelay-box");
		document.body.appendChild(meatBox);
		// Create label
		var meatLabel = document.createElement("label");
		meatLabel.innerHTML = "Delay (in seconds):";
		meatBox.appendChild(meatLabel);
		// Create input
		var meatNumber = document.createElement("input");
		meatNumber.type = "number";
		meatNumber.setAttribute("value", "5");
		meatNumber.setAttribute("required", "");
		meatBox.appendChild(meatNumber);
		// Create button
		var meatBtn = document.createElement("button");
		meatBtn.innerHTML = "Here we go!";
		meatBox.appendChild(meatBtn);
	}

	// Remove Timer
	function _removeTimer() {
		var meatOverlay = document.querySelector(".meatDelay-overlay");
		var meatBox = document.querySelector(".meatDelay-box");
		meatOverlay.parentNode.removeChild(meatOverlay);
		meatBox.parentNode.removeChild(meatBox);
	}

	//Delay factory
	function _makeDelay() {
		var delay = document.querySelector(".meatDelay-box input");
		var delayBtn = document.querySelector(".meatDelay-box button");
		console.log(typeof delay.value);
		if (delay.value != "0") {
			var delayValue = parseInt(delay.value);
		} else {
			var delayValue = 5000;
		}
		// IT'S THE FINAL COUNTDOWN !
		var counter = delayValue;
		var countdown;
		countdown = setInterval(function() {
		    if(counter < 1) {
		        console.log("fini");
				button.click();
				clearInterval(countdown);
				_removeTimer();
		    } else {
				counter--;
		        delayBtn.innerHTML = (counter.toString());
		    }
		}, 1000);
	}

	// Bind events
	function _bindEvents() {
		var meatBtn = document.querySelector(".meatDelay-box button");
		meatBtn.addEventListener("click", function() {
			_makeDelay();
		});

		var meatOverlay = document.querySelector(".meatDelay-overlay");
		meatOverlay.addEventListener("click", function() {
			_removeTimer();
		});

	}

	return {
		init: init
	}
}();
meatDelay.init();
