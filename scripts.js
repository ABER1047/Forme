//absolute value
function abs(value)
{
return Math.abs(value);
}

//cosine
function cos(rad)
{
return Math.cos(rad);
}

//sine
function sin(rad)
{
return Math.sin(rad);
}

//tangent
function tan(rad)
{
return Math.tan(rad);
}

//tangent
function atan(rad)
{
return Math.atan(rad);
}

//cosine
function acosh(rad)
{
return Math.acosh(rad);
}

//sine
function asin(rad)
{
return Math.asin(rad);
}

//tangent
function acos(rad)
{
return Math.acos(rad);
}

//sqrt
function sqrt(value)
{
return Math.sqrt(value);
}

//sign
function sign(value)
{
return Math.sign(value);
}

//round
function round(value)
{
return Math.round(value)
}

//floor
function floor(value)
{
return Math.floor(value);
}

//power
function power(base,exponent)
{
return Math.pow(base,exponent);
}


/**You supply the low value for the range as well as the high value, and the function will return a random integer value within (and including) the given range
@param range_1
@param range_2
@returns a random integer value within (and including) the given range
**/
function irandom_range(range_1,range_2)
{
return Math.floor(Math.random()*range_2 | range_1);
}

/**You can get distance from point to point
@param x1
@param y1
@param x2
@param y2
@returns distance value
**/
function point_distance(x1,y1,x2,y2)
{
return sqrt(power(x1 - x2,2) + power(y1 - y2,2));
}


/**You can get direction(angle) from point to point
@param x1
@param y1
@param x2
@param y2
@returns direction(angle)
**/
function point_direction(x1,y1,x2,y2)
{
return Math.atan2(y2 - y1, x2 - x1);
}


/**You can get -1 or 1 value by 50% chance
@returns return -1 or 1 randomly
**/
function irandom_return()
{
var random_value______ = Math.floor(Math.random()*100 | 1);

    if (random_value______ <= 50)
    {
    return 1;
    }
    else
    {
    return -1;
    }
}


/**it chooses the values from above parameters and returns it
@param val0
@param val1
@param val...
@param max_val
@returns return choosed values randomly
**/
function choose(val0, /*val1, val2, …, max_val*/)
{
var random_choosed__ = irandom_range(0,arguments.length);
//console.log(arguments[random_choosed__]);
return arguments[random_choosed__];
}

/**checking that these two circle met
@param x1
@param y1
@param x2
@param y2
@param rad1
@param rad2
@returns This function returns "true" when two circles(collision mask) met
**/
function place_meeting_circle(x1,y1,x2,y2,rad1,rad2)
{
    if (sqrt(power(x1 - x2,2) + power(y1 - y2,2)) <= rad1+rad2)
    {
    return true;
    }
    else
    {
    return false;
    }
}

/**checking that a point met a cirle
@param x1
@param y1
@param x2
@param y2
@param rad
@returns This function returns "true" when a point met or be inside a circle
**/
function place_meeting_point(x1,y1,x2,y2,rad)
{
    if (sqrt(power(x1 - x2,2) + power(y1 - y2,2)) <= rad)
    {
    return true;
    }
    else
    {
    return false;
    }
}



/**sign without_zero
@param value
@returns corrected value
**/
function sign_without(value)
{
var _____var = Math.sign(value);
    if (_____var == 0)
    {
    _____var = choose(-1,1);
    }

return Math.sign(value);
}



/**You can limit the value of range of numbers
@param value
@param min
@param max
@returns corrected value
**/
function correct_value(value,min,max)
{
var corrected_value__ = value;
    if (value < min)
    {
    corrected_value__ = min;
    }
    
    if (value > max)
    {
    corrected_value__ = max;
    }
return corrected_value__;
}


/**merge color
@param color1
@param color2
@param amount
@param debug_mode (Empty allowed)
@returns merged color value
**/
function merge_color(color_value1, color_value2, amount/*, debug_mode*/)
{
debug_mode = debug_mode || 0;

    if (amount > 1)
    {
    amount = 1;
    }
    
    if (amount < 0)
    {
    amount = 0;
    }

    var length_color1 = color_value1.length;
    var length_color2 = color_value2.length;
    if (length_color1 == 4)
    {
        for(var i = 1; i <= 4; i++)
        {
        color_value1 += color_value1[i]+color_value1[i];
        }
    }
    else
    {
    color_value1 = color_value1.substring(1);
    }
    
    if (length_color2 == 4)
    {
        for(var i = 1; i <= 4; i++)
        {
        color_value2 += color_value2[i]+color_value2[i];
        }
    }
    else
    {
    color_value2 = color_value2.substring(1);
    }


color_value1 = [parseInt(color_value1[0] + color_value1[1], 16), parseInt(color_value1[2] + color_value1[3], 16), parseInt(color_value1[4] + color_value1[5], 16)];
color_value2 = [parseInt(color_value2[0] + color_value2[1], 16), parseInt(color_value2[2] + color_value2[3], 16), parseInt(color_value2[4] + color_value2[5], 16)];

var total_color = [(1 - amount) * color_value1[0] + amount * color_value2[0], (1 - amount) * color_value1[1] + amount * color_value2[1], (1 - amount) * color_value1[2] + amount * color_value2[2]];
total_color = "#" + int_to_hex(total_color[0]) + int_to_hex(total_color[1]) + int_to_hex(total_color[2]);



if (debug_mode == 1)
{
//color output to canvas
var canvas_ = document.createElement("canvas");
var ctx = canvas_.getContext("2d");
canvas_.width = 128;
canvas_.height = 128;
document.body.appendChild(canvas_);

ctx.fillStyle = total_color;
ctx.fillRect(0, 0, 128, 128);
}


return total_color;
}

function int_to_hex(num)
{
var hex = Math.round(num).toString(16);
    if (hex.length == 1)
    {
    hex = '0' + hex;
    }
return hex;
}





/**same as console.log function 
@param value
@returns true
**/
function debug_log(value)
{
console.log(value);
return true;
}



/**set_value_case(value,min,max,inner)
@param value
@param min
@param max
@param inner (true or false)
@returns specific value by dividing the case where the value is within the range of the condition and the case where it is not
**/
function set_value_case(argument0,argument1,argument2,argument3)
{
var return_value__ = argument0;

	if (argument3 == true) //inner
	{
		if (argument0 < argument1)
		{
		return_value__ = argument1;
		}
		
		if (argument0 > argument2)
		{
		return_value__ = argument2;
		}
	}
	else
	{
		if (argument0 > argument1 && argument0 < argument2)
		{
		return_value__ = argument0;
		}
	}
return return_value__;
}



/**preload images
@param file_directory
@param type file type (png, gif, jpg...)
@param image_name1
@param image_name...
@returns true
**/
function preload_images(file_directory, type, image_name1/*, image_name...*/)
{
    for(var _i_ = 2; _i_ <= arguments.length; _i_++)
    {
    var __preloaded_imgs__ = document.createElement("img");
    __preloaded_imgs__.src = file_directory+"/"+arguments[_i_]+"."+type;
    __preloaded_imgs__.style.width = "0px";
    __preloaded_imgs__.style.position = "fixed";
    __preloaded_imgs__.style.top = "0px";
    __preloaded_imgs__.style.left = "0px";
    $("input").after(__preloaded_imgs__);
    
    setTimeout(del_preloaded_imgs_ele,10000,__preloaded_imgs__);
    }

return true;
}

function del_preloaded_imgs_ele(__target_img__)
{
__target_img__.remove();
}

/**get remaining audio/video time
@param audio
@returns remaining time
**/
function get_remaining_time(audio)
{
var duration = parseInt(audio.duration),
currentTime = parseInt(audio.currentTime);
return (duration - currentTime);
}


/**get current audio/video time
@param audio
@returns current time
**/
function get_current_time(audio)
{
return parseInt(audio.currentTime);
}


/**converts seconds to clock time
@param seconds
@returns clock time
**/
function reconstruction_time_sec(seconds)
{
var cal_min = Math.floor(seconds/60);
var cal_h = Math.floor(seconds/3600);
var total_mes = "";
    if (cal_h != 0)
    {
    total_mes = cal_h+":";
    }
    
    if (cal_min >= 10)
    {
    total_mes = total_mes+cal_min+":";
    }
    else
    {
    total_mes = total_mes+"0"+cal_min+":";
    }
    
    if (seconds >= 10)
    {
    total_mes = total_mes+seconds;
    }
    else
    {
    total_mes = total_mes+"0"+seconds;
    }

return total_mes;
}


/**converts minutes to seconds
@param minutes
@returns seconds
**/
function convert_min_to_sec(minutes)
{
return minutes*60;
}

/**converts hours to minutes
@param hours
@returns minutes
**/
function convert_hour_to_min(hours)
{
return hours*60;
}


/**converts hours to seconds
@param hours
@returns seconds
**/
function convert_hour_to_sec(hours)
{
return hours*3600;
}