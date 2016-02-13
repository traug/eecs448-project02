/**
 * Timer.js
 * 
 * Creates an instance of Timer.
 *
 * @constructor
 * @param {number} pHours The current number of hours.
 * @param {number} pMin The current number of minutes.
 * @param {number} pSec The current number of seconds.
 * @param {number} pFormat The format of the clock (12/24 hours).
 */
var Timer = function(pHours, pMin, pSec, pFormat){
	//private data
	var hour = pHours;
	var min = pMin;
	var sec = pSec;
	var format = pFormat;
	var sec_total = 0; //Default clock starts at 0:00
	var meridiem = "AM"; //whether the clock is in am/pm on 12h format.

	//methods---------------------------------------------------------
	/**
	 * calculates the hours, minutes, and seconds
	 * increments the time
	 * makes the clock at 24:00
	 */
	 
	this.addTime = function() {
		var h_remainder = sec_total%(60*60); //remainder seconds after dividing to get hours from sec_total
		var m_remainder = h_remainder%(60); //remainder seconds after dividing to get mins
	 
		hour = (sec_total - h_remainder)/(60*60); //Get whole number of hours
		min = (h_remainder-m_remainder)/60; //Get whole number of minutes
		sec = m_remainder; //Get seconds
		
		//time increment logic
		if(sec_total < 86400 -1) // make clock restart at 24:00 hr -- instead of displaying 24:00 show 0:00
	 	{
	 		sec_total += 1; //Increase time by 1 sec
	 	}
	 	else 
	 		sec_total = 0;
	}
	/**
	 * calculates total seconds before addTime() resets it to 0 before the first time increment
	 */
	this.init = function(){
		
		sec_total = hour*(60*60) + min*(60) + sec;
	}
	/**
	 * sets the time
	 * @param {number} pHour. The number of hours.
	 * 1-12 are the accepted values for 12 hour mode
	 * 0-23 are accepted values for 24 hour mode. 
	 * 
	 * @param {number} pMin. The number of minutes. 
	 * 0-59 are accepted values. 
	 * 
	 * @param {number} pSec. The number of seconds.
	 * 0-59 are accepted values. 
	 * 
	 */
	this.setTime = function(pHour, pMin, pSec) {
		hour = pHour;
		min = pMin;
		sec = pSec;

		//calculate the total seconds
	 	sec_total = sec*1 +min*60+hour*60*60; //Turn time user entered into total seconds
	}
	
	/**
	 * puts the hour, min, sec, and meridiem data into an array for processing in
	 * the display object. 
	 * 
	 * @return {Array} [hour, min, sec, meridiem].
	 * the values for hour, min, sec, and meridiem. 
	 * 
	 */ 
	this.getTime = function(){
		
		return [hour, min, sec, meridiem]
	}
	/** 
	 * sets the format. 
	 * @param {number} pFormat. Sets the format to either 12 or 24 hour. 
	 * 12 and 24 are the accepted values.
	 */
	this.setFormat = function(pFormat){
		format = pFormat;

		//meridiem will not show in concatonated time string if in 24 hour format.
		if(format == 24){
			meridiem = "";
		}
		//TODO
		//re-calculate the output time?
	}
	/**
	 * @return {number} format. the format of the clock for i and display to use.
	 * 
	 */ 
	this.getFormat = function(){
	
		return format; 
	}

	/**
	 * sets the Meridiem. 
	 * 
	 * @param {String} pMeridiem. AM or PM for 12-hour format, or none for 24 Hour format.
	 * 
	 */ 
	this.setMeridiem = function(pMeridiem)
	{
		meridiem = pMeridiem; 
	}
	
	/**
	 * @return {string} meridiem. AM or PM for 12-hour format, or none for 24 Hour format.
	 */ 
	this.getMeridiem = function()
	{
		return meridiem;
	
	}
	
};

