/**convert degree to radian
@param deg
@returns rad
**/
function rad(deg)
{
    return (Math.PI/180)*deg;
}


/**convert radian to degree
@param rad
@returns deg
**/
function deg(rad)
{
    return (180/Math.PI)*deg;
}


/**return pi(π)
@returns pi(π)
**/
function pi()
{
    return Math.PI;
}



/**return log10(value)
@returns log10(value)
**/
function log10(value)
{
    return Math.log10(value);
}




/**return log2(value)
@returns log2(value)
**/
function log2(value)
{
    return Math.log2(value);
}



/**return logn(base n,value)
@returns logn(base n,value)
**/
function logn(base,value)
{
    return Math.log10(value)/Math.log10(base);
}





/**cosine
@param rad
@returns cos value
**/
function cos(rad)
{
    return Math.cos(rad);
}

/**arccosineh
@param rad
@returns arccosineh value
**/
function acosh(rad)
{
    return Math.acosh(rad);
}

/**arccosine
@param rad
@returns arccosine value
**/
function acos(rad)
{
    return Math.acos(rad);
}

/**arccosine
@param rad
@returns arccosine value
**/
function arccos(rad)
{
    return Math.acos(rad);
}




/**sine
@param rad
@returns sine value
**/
function sin(rad)
{
    return Math.sin(rad);
}

/**arcsine
@param rad
@returns arcsine value
**/
function asin(rad)
{
    return Math.asin(rad);
}

/**arcsine
@param rad
@returns arcsine value
**/
function arcsin(rad)
{
    return Math.asin(rad);
}

/**arcsineh
@param rad
@returns arcsineh value
**/
function asinh(rad)
{
    return Math.asinh(rad);
}




/**tangent
@param rad
@returns tangent value
**/
function tan(rad)
{
    return Math.tan(rad);
}

/**arctangenth
@param rad
@returns arctangenth value
**/
function atanh(rad)
{
    return Math.atanh(rad);
}

/**arctangent2
@param rad
@returns arctangent2 value
**/
function atan2(rad)
{
    return Math.atan2(rad);
}

/**arctangent
@param rad
@returns arctangent value
**/
function atan(rad)
{
    return Math.atan(rad);
}

/**arctangent
@param rad
@returns arctangent value
**/
function arctan(rad)
{
    return Math.atan(rad);
}





/**square root
@param value
@returns square root value
**/
function sqrt(value)
{
    return Math.sqrt(value);
}

/**sign
@param value
@returns sign value
**/
function sign(value)
{
    return Math.sign(value);
}

/**round
@param value
@returns round value
**/
function round(value)
{
    return Math.round(value)
}

/**floor
@param value
@returns floor value
**/
function floor(value)
{
    return Math.floor(value);
}

/**power
@param value
@returns power value
**/
function power(base,exponent)
{
    return Math.pow(base,exponent);
}

/**power
@param value
@returns power value
**/
function pow(base,exponent)
{
    return Math.pow(base,exponent);
}

/**absolute value
@param value
@returns absolute value
**/
function abs(value)
{
    return Math.abs(value);
}


/**You supply the low value for the range as well as the high value, and the function will return a random integer value within (and including) the given range
@param range_1
@param range_2
@returns a random integer value within (and including) the given range
**/
function irandom_range(range_1,range_2)
{
    var min = Math.ceil(Math.min(range_1, range_2));
    var max = Math.floor(Math.max(range_1, range_2));
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
@returns imageElementsArray
**/
function preload_images(file_directory, type, image_name1/*, image_name...*/)
{
    var imgs_obj = [];
    for(var _i_ = 2; _i_ < arguments.length; _i_++)
    {
        if (arguments[_i_] != undefined)
        {
            imgs_obj[_i_] = document.createElement("img");
            imgs_obj[_i_].src = file_directory+"/"+arguments[_i_]+"."+type;
            //__preloaded_imgs__.style.width = "0px";
            imgs_obj[_i_].style.position = "fixed";
            imgs_obj[_i_].style.display = "block";
            imgs_obj[_i_].style.opacity = 0;
            $("input").after(imgs_obj[_i_]);
        }
    }

    console.log("images are preloaded");
    return imgs_obj;
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
function convert_sec_to_clocktime(seconds)
{
    var cal_h = Math.floor(seconds/3600);
    var cal_min = Math.floor(seconds/60)-cal_h*60;
    var displayed_seconds = seconds-cal_min*60
    var total_mes = "";
    if (cal_h != 0)
    {
        total_mes = cal_h+":";
    }
    
    if (cal_min >= 10)
    {
        total_mes = total_mes+(cal_min)+":";
    }
    else
    {
        total_mes = total_mes+"0"+(cal_min)+":";
    }
    
    if (displayed_seconds >= 10)
    {
        total_mes = total_mes+(displayed_seconds);
    }
    else
    {
        total_mes = total_mes+"0"+(displayed_seconds);
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




/**You can get the directory of file
@param input
@returns directory
**/
function get_file_directory(input)
{
    for(var i = 0; i < input.originalEvent.srcElement.files.length; i++) 
    {
        var file = input.originalEvent.srcElement.files[i];
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() 
    {
        return reader.result;
    }
    console.log("file"+reader.result);
}



/**This function returns the direction of a vector formed by the specified components [x1,y1], [x2,y2], [x3,y3]
@param x1
@param y1
@param x2
@param y2
@param x3
@param y3
@returns rad
**/
function point_direction2(x1,y1,x2,y2,x3,y3)
{
    var _c_ = Math.pow(x2-x1,2)+Math.pow(y2-y1,2);
    var _a_ = Math.pow(x3-x1,2)+Math.pow(y3-y1,2);
    var _b_ = Math.pow(x3-x2,2)+Math.pow(y2-y3,2);
    _cosA_value_ = (_b_+_c_-_a_)/(2*Math.sqrt(_b_)*Math.sqrt(_c_));
    return Math.acos(_cosA_value_);
}



/**This function returns Permutation value (nPr)
@param n
@param r
@returns Permutation value
**/
function permutation(x1,x2)
{
    var return_value__ = x1;
    for(var _i_ = 1; _i_ < x2; _i_++)
    {
        return_value__ *= x1-_i_;
    }

    return return_value__;
}




/**This function returns Combination value (nCr)
@param n
@param r
@returns Combination value
**/
function combination(x1,x2)
{
    //optimizing
    if (x1*0.5 < x2)
    {
        x2 = x1-x2;
    }
    return permutation(x1,2)/permutation(x2,2);
}




/**This fucntion returns factorial value (n!)
@param n
@returns factorial value
**/
function factorial(n)
{
    var return_value__ = n;
    for(var i = n-1; i > 1; i--)
    {
        return_value__ *= i
    }
    return return_value__;
}




/**lengthdir_x
@param len
@param dir
@returns lengthdir_x value
**/
function lengthdir_x(len,dir)
{
    return len*Math.cos(dir)
}


/**lengthdir_y
@param len
@param dir
@returns lengthdir_y value
**/
function lengthdir_y(len,dir)
{
    return len*Math.sin(dir)
}



/**This function returns distance (vector) value of point which is on third dimension
@param x1
@param y1
@param z1
@param x2
@param y2
@param z2
@returns point distance 3d value
**/
function point_distance_3d(x1,y1,z1,x2,y2,z2)
{
    //hypotenuse - 1
    var hypo_1 = point_distance(x1,y1,x2,y2);

    //hypotenuse - 2
    return sqrt(power(hypo_1,2) + power(z1 - z2,2));
}






/**This function corrects degree value when it is over than 360 degree or negative degree into positive 0~360 degree
@param deg
@returns correted degree value
**/
function correct_deg(deg)
{
    while(deg >= 0)
    {
        deg += 360;
    }
    
    while(deg < 360)
    {
        deg -= 360;
    }
    return deg;
}


/**This function corrects radian value when it is over than 360 degree or negative degree into positive 0~360 degree
@param rad
@returns correted rad value
**/
function correct_rad(rad)
{
    var full_circle = Math.pi*2;
    while(deg >= 0)
    {
        deg += full_circle;
    }
    
    while(deg < full_circle)
    {
        deg -= full_circle;
    }
    return deg;
}





/**This function returns averaged value
@param val0
@param val1
@param val...
@param max_val
@returns return averaged value
**/
function average(val0, /*val1, val2, …, max_val*/)
{
    var num_ = 0;
    var argument_length = arguments.length;
    for(var i = 0; i < argument_length; i++)
    {
        num_ += arguments[i];
    }
    return num_/argument_length;
}





/**This function returns sum of arithmetic sequence
@param firstTerm
@param lastTerm
@param sequence_length
@returns return sum of arithmetic sequence
**/
function arithmetic_seq(firstTerm,lastTerm,n)
{
    return n*(firstTerm+lastTerm)*0.5;
}



/**This function returns sum of geometric sequence
@param firstTerm
@param commonRatio
@param sequence_length
@returns return sum of geometric sequence
**/
function geometric_seq(firstTerm,commonRatio,n)
{
    return firstTerm*(Math.pow(commonRatio,sequence_length)-1)/(commonRatio-1);
}




/**This function returns sum of infinite geometric sequence
@param firstTerm
@param commonRatio
@returns return sum of infinite geometric sequence
**/
function inf_geometric_seq(firstTerm,commonRatio)
{
    return firstTerm/(1-commonRatio);
}




/**This function chooses highest number and returns it
@param val0
@param val1
@param val...
@param max_val
@returns returns highest number
**/
function highest_num(val0, /*val1, val2, …, max_val*/)
{
    var highest_num = arguments[0]
    for (var i = 1; i < arguments.length; i++) 
    { 
        if (highest_num < arguments[i])
        {
            highest_num = arguments[i];
        }
    }
    return highest_num;
}





/**This function chooses highest number from array and returns it
@param array
@returns returns highest number
**/
function highest_num_array(array)
{
    var highest_num = array[0]
    for (var i = 1; i < array.length; i++) 
    { 
        if (highest_num < array[i])
        {
            highest_num = array[i];
        }
    }
    return highest_num;
}




/**This function returns arranged array
@param val0
@param val1
@param val...
@param max_val
@returns return arranged array
**/
function arrange_value(val0, /*val1, val2, …, max_val*/)
{
    for (var i = 1; i < arguments.length; i++) 
    { 
        var value = arguments[i]; 

        for (var j = i-1; j >= 0 && arguments[j] > value; j--) 
        {
            arguments[j+1] = arguments[j];
        }
        arguments[j+1] = value;
    }
    return arguments;
}



/**This function returns arranged array
@param array
@returns return arranged array
**/
function arrange_array(array)
{
    for (var i = 1; i < array.length; i++) 
    { 
        var value = array[i]; 

        for (var j = i-1; j >= 0 && array[j] > value; j--) 
        {
            array[j+1] = array[j];
        }
        array[j+1] = value;
    }
    return array;
}



/**This function returns arranged text array
@param text_array
@returns return arranged text array
**/
function arrange_text(text_array)
{
    var max_length = text_array[0].length;
    for(var i = 0; i < text_array.length; i++)
    {
        if (max_length < text_array[i])
        {
            max_length = text_array[i];
        }
    }
    
    for(var k = 0; k < max_length; k++)
    {
        for (var i = 1; i < text_array.length; i++) 
        { 
            var saved_value_real = text_array[i];
            var value = saved_value_real.charCodeAt(k);

            for (var j = i-1; j >= 0 && text_array[j].charCodeAt(k) > value; j--) 
            {
                text_array[j+1] = text_array[j];
            }
            text_array[j+1] = saved_value_real;
        }
    }
    return text_array;
}






/**This function returns randomized array
@param array
@returns returns randomized array
**/
function randomize_array(array)
{
    var temp_array = [];
    var array_length = array.length;
    for(var i = array_length; i > 0; i--)
    {
        var ramdom_selection = irandom_range(0,i);
        temp_array[i] = array[ramdom_selection];
        for(var ii = ramdom_selection; ii < array_length-1; ii++)
        {
            array[ii] = array[ii+1];
        }
    }
    
    return temp_array;
}




/**This function returns inclination, y-intercept and function of line with two points of line
@param x1
@param y1
@param x2
@param y2
@returns returns randomized array
**/
function get_line_function(x1,y1,x2,y2)
{
    var temp_array = [];
    var inclination = (y2-y1)/(x2-x1);
    temp_array[0] = inclination;
    temp_array[1] = y1-inclination*x1;
    temp_array[2] = "y="+inclination+"x+"+temp_array[1];
    return temp_array;
}




/**This function returns distance of point to line (The point do not have to have a position on only line)
@param x1(point of line)
@param y1(point of line)
@param x2(point of line)
@param y2(point of line)
@param x3(point)
@param y3(point)
@returns returns randomized array
**/
function point_to_line_distance(x1,y1,x2,y2,x3,y3)
{
    var inclination = (y2-y1)/(x2-x1);
    return Math.abs(inclination*(x3-x1)+y1-y3)/Math.sqrt(Math.pow(inclination,2)+1);
}



/**
 * Returns the velocity vector [vx, vy] for a given direction and speed.
 * The direction should be in radians.
 *
 * @param {number} dir - The direction in radians (0 is right, PI/2 is up, etc.).
 * @param {number} speed - The speed (magnitude of the velocity vector).
 * @returns {Array<number>} An array [vx, vy] where vx and vy are the velocity components.
 *
 * Usage example:
 *   var dir = Math.PI / 4; // 45 degrees in radians
 *   var speed = 0.05;
 *   var [vx, vy] = get_speed_by_direction(dir, speed);
 */
function get_speed_by_direction(dir, speed)
{
    var vx = Math.cos(dir) * speed;
    var vy = Math.sin(dir) * speed;
    return [vx, vy];
}




/**This function returns current region country
@returns returns current region country
**/
function get_country() 
{
	var countries = {
		AD: "Andorra",
		AE: "United Arab Emirates",
		AF: "Afghanistan",
		AG: "Antigua and Barbuda",
		AI: "Anguilla",
		AL: "Albania",
		AM: "Armenia",
		AO: "Angola",
		AQ: "Antarctica",
		AR: "Argentina",
		AS: "American Samoa",
		AT: "Austria",
		AU: "Australia",
		AW: "Aruba",
		AX: "Åland Islands",
		AZ: "Azerbaijan",
		BA: "Bosnia and Herzegovina",
		BB: "Barbados",
		BD: "Bangladesh",
		BE: "Belgium",
		BF: "Burkina Faso",
		BG: "Bulgaria",
		BH: "Bahrain",
		BI: "Burundi",
		BJ: "Benin",
		BL: "Saint Barthélemy",
		BM: "Bermuda",
		BN: "Brunei",
		BO: "Bolivia",
		BQ: "Caribbean Netherlands",
		BR: "Brazil",
		BS: "Bahamas",
		BT: "Bhutan",
		BV: "Bouvet Island",
		BW: "Botswana",
		BY: "Belarus",
		BZ: "Belize",
		CA: "Canada",
		CC: "Cocos Islands",
		CD: "Democratic Republic of the Congo",
		CF: "Central African Republic",
		CG: "Republic of the Congo",
		CH: "Switzerland",
		CI: "Ivory Coast",
		CK: "Cook Islands",
		CL: "Chile",
		CM: "Cameroon",
		CN: "China",
		CO: "Colombia",
		CR: "Costa Rica",
		CU: "Cuba",
		CV: "Cabo Verde",
		CW: "Curaçao",
		CX: "Christmas Island",
		CY: "Cyprus",
		CZ: "Czechia",
		DE: "Germany",
		DJ: "Djibouti",
		DK: "Denmark",
		DM: "Dominica",
		DO: "Dominican Republic",
		DZ: "Algeria",
		EC: "Ecuador",
		EE: "Estonia",
		EG: "Egypt",
		EH: "Western Sahara",
		ER: "Eritrea",
		ES: "Spain",
		ET: "Ethiopia",
		FI: "Finland",
		FJ: "Fiji",
		FK: "Falkland Islands",
		FM: "Micronesia",
		FO: "Faroe Islands",
		FR: "France",
		GA: "Gabon",
		GB: "United Kingdom",
		GD: "Grenada",
		GE: "Georgia",
		GF: "French Guiana",
		GG: "Guernsey",
		GH: "Ghana",
		GI: "Gibraltar",
		GL: "Greenland",
		GM: "Gambia",
		GN: "Guinea",
		GP: "Guadeloupe",
		GQ: "Equatorial Guinea",
		GR: "Greece",
		GS: "South Georgia and the South Sandwich Islands",
		GT: "Guatemala",
		GU: "Guam",
		GW: "Guinea-Bissau",
		GY: "Guyana",
		HK: "Hong Kong",
		HM: "Heard Island and McDonald Islands",
		HN: "Honduras",
		HR: "Croatia",
		HT: "Haiti",
		HU: "Hungary",
		ID: "Indonesia",
		IE: "Ireland",
		IL: "Israel",
		IM: "Isle of Man",
		IN: "India",
		IO: "British Indian Ocean Territory",
		IQ: "Iraq",
		IR: "Iran",
		IS: "Iceland",
		IT: "Italy",
		JE: "Jersey",
		JM: "Jamaica",
		JO: "Jordan",
		JP: "Japan",
		KE: "Kenya",
		KG: "Kyrgyzstan",
		KH: "Cambodia",
		KI: "Kiribati",
		KM: "Comoros",
		KN: "Saint Kitts and Nevis",
		KP: "North Korea",
		KR: "South Korea",
		KW: "Kuwait",
		KY: "Cayman Islands",
		KZ: "Kazakhstan",
		LA: "Laos",
		LB: "Lebanon",
		LC: "Saint Lucia",
		LI: "Liechtenstein",
		LK: "Sri Lanka",
		LR: "Liberia",
		LS: "Lesotho",
		LT: "Lithuania",
		LU: "Luxembourg",
		LV: "Latvia",
		LY: "Libya",
		MA: "Morocco",
		MC: "Monaco",
		MD: "Moldova",
		ME: "Montenegro",
		MF: "Saint Martin",
		MG: "Madagascar",
		MH: "Marshall Islands",
		MK: "North Macedonia",
		ML: "Mali",
		MM: "Myanmar",
		MN: "Mongolia",
		MO: "Macao",
		MP: "Northern Mariana Islands",
		MQ: "Martinique",
		MR: "Mauritania",
		MS: "Montserrat",
		MT: "Malta",
		MU: "Mauritius",
		MV: "Maldives",
		MW: "Malawi",
		MX: "Mexico",
		MY: "Malaysia",
		MZ: "Mozambique",
		NA: "Namibia",
		NC: "New Caledonia",
		NE: "Niger",
		NF: "Norfolk Island",
		NG: "Nigeria",
		NI: "Nicaragua",
		NL: "Netherlands",
		NO: "Norway",
		NP: "Nepal",
		NR: "Nauru",
		NU: "Niue",
		NZ: "New Zealand",
		OM: "Oman",
		PA: "Panama",
		PE: "Peru",
		PF: "French Polynesia",
		PG: "Papua New Guinea",
		PH: "Philippines",
		PK: "Pakistan",
		PL: "Poland",
		PM: "Saint Pierre and Miquelon",
		PN: "Pitcairn",
		PR: "Puerto Rico",
		PS: "Palestine",
		PT: "Portugal",
		PW: "Palau",
		PY: "Paraguay",
		QA: "Qatar",
		RE: "Réunion",
		RO: "Romania",
		RS: "Serbia",
		RU: "Russia",
		RW: "Rwanda",
		SA: "Saudi Arabia",
		SB: "Solomon Islands",
		SC: "Seychelles",
		SD: "Sudan",
		SE: "Sweden",
		SG: "Singapore",
		SH: "Saint Helena, Ascension and Tristan da Cunha",
		SI: "Slovenia",
		SJ: "Svalbard and Jan Mayen",
		SK: "Slovakia",
		SL: "Sierra Leone",
		SM: "San Marino",
		SN: "Senegal",
		SO: "Somalia",
		SR: "Suriname",
		SS: "South Sudan",
		ST: "Sao Tome and Principe",
		SV: "El Salvador",
		SX: "Sint Maarten",
		SY: "Syria",
		SZ: "Eswatini",
		TC: "Turks and Caicos Islands",
		TD: "Chad",
		TF: "French Southern Territories",
		TG: "Togo",
		TH: "Thailand",
		TJ: "Tajikistan",
		TK: "Tokelau",
		TL: "Timor-Leste",
		TM: "Turkmenistan",
		TN: "Tunisia",
		TO: "Tonga",
		TR: "Turkey",
		TT: "Trinidad and Tobago",
		TV: "Tuvalu",
		TW: "Taiwan",
		TZ: "Tanzania",
		UA: "Ukraine",
		UG: "Uganda",
		UM: "United States Minor Outlying Islands",
		US: "United States of America",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VA: "Holy See",
		VC: "Saint Vincent and the Grenadines",
		VE: "Venezuela",
		VG: "Virgin Islands (UK)",
		VI: "Virgin Islands (US)",
		VN: "Vietnam",
		VU: "Vanuatu",
		WF: "Wallis and Futuna",
		WS: "Samoa",
		YE: "Yemen",
		YT: "Mayotte",
		ZA: "South Africa",
		ZM: "Zambia",
		ZW: "Zimbabwe"
	};
	var timezones = {
		"Africa/Abidjan": {
			u: 0,
			c: ["CI", "BF", "GH", "GM", "GN", "ML", "MR", "SH", "SL", "SN", "TG"]
		},
		"Africa/Accra": {
			a: "Africa/Abidjan",
			c: ["GH"],
			r: 1
		},
		"Africa/Addis_Ababa": {
			a: "Africa/Nairobi",
			c: ["ET"],
			r: 1
		},
		"Africa/Algiers": {
			u: 60,
			c: ["DZ"]
		},
		"Africa/Asmara": {
			a: "Africa/Nairobi",
			c: ["ER"],
			r: 1
		},
		"Africa/Asmera": {
			a: "Africa/Nairobi",
			c: ["ER"],
			r: 1
		},
		"Africa/Bamako": {
			a: "Africa/Abidjan",
			c: ["ML"],
			r: 1
		},
		"Africa/Bangui": {
			a: "Africa/Lagos",
			c: ["CF"],
			r: 1
		},
		"Africa/Banjul": {
			a: "Africa/Abidjan",
			c: ["GM"],
			r: 1
		},
		"Africa/Bissau": {
			u: 0,
			c: ["GW"]
		},
		"Africa/Blantyre": {
			a: "Africa/Maputo",
			c: ["MW"],
			r: 1
		},
		"Africa/Brazzaville": {
			a: "Africa/Lagos",
			c: ["CG"],
			r: 1
		},
		"Africa/Bujumbura": {
			a: "Africa/Maputo",
			c: ["BI"],
			r: 1
		},
		"Africa/Cairo": {
			u: 120,
			c: ["EG"]
		},
		"Africa/Casablanca": {
			u: 60,
			d: 0,
			c: ["MA"]
		},
		"Africa/Ceuta": {
			u: 60,
			d: 120,
			c: ["ES"]
		},
		"Africa/Conakry": {
			a: "Africa/Abidjan",
			c: ["GN"],
			r: 1
		},
		"Africa/Dakar": {
			a: "Africa/Abidjan",
			c: ["SN"],
			r: 1
		},
		"Africa/Dar_es_Salaam": {
			a: "Africa/Nairobi",
			c: ["TZ"],
			r: 1
		},
		"Africa/Djibouti": {
			a: "Africa/Nairobi",
			c: ["DJ"],
			r: 1
		},
		"Africa/Douala": {
			a: "Africa/Lagos",
			c: ["CM"],
			r: 1
		},
		"Africa/El_Aaiun": {
			u: 60,
			d: 0,
			c: ["EH"]
		},
		"Africa/Freetown": {
			a: "Africa/Abidjan",
			c: ["SL"],
			r: 1
		},
		"Africa/Gaborone": {
			a: "Africa/Maputo",
			c: ["BW"],
			r: 1
		},
		"Africa/Harare": {
			a: "Africa/Maputo",
			c: ["ZW"],
			r: 1
		},
		"Africa/Johannesburg": {
			u: 120,
			c: ["ZA", "LS", "SZ"]
		},
		"Africa/Juba": {
			u: 120,
			c: ["SS"]
		},
		"Africa/Kampala": {
			a: "Africa/Nairobi",
			c: ["UG"],
			r: 1
		},
		"Africa/Khartoum": {
			u: 120,
			c: ["SD"]
		},
		"Africa/Kigali": {
			a: "Africa/Maputo",
			c: ["RW"],
			r: 1
		},
		"Africa/Kinshasa": {
			a: "Africa/Lagos",
			c: ["CD"],
			r: 1
		},
		"Africa/Lagos": {
			u: 60,
			c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"]
		},
		"Africa/Libreville": {
			a: "Africa/Lagos",
			c: ["GA"],
			r: 1
		},
		"Africa/Lome": {
			a: "Africa/Abidjan",
			c: ["TG"],
			r: 1
		},
		"Africa/Luanda": {
			a: "Africa/Lagos",
			c: ["AO"],
			r: 1
		},
		"Africa/Lubumbashi": {
			a: "Africa/Maputo",
			c: ["CD"],
			r: 1
		},
		"Africa/Lusaka": {
			a: "Africa/Maputo",
			c: ["ZM"],
			r: 1
		},
		"Africa/Malabo": {
			a: "Africa/Lagos",
			c: ["GQ"],
			r: 1
		},
		"Africa/Maputo": {
			u: 120,
			c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"]
		},
		"Africa/Maseru": {
			a: "Africa/Johannesburg",
			c: ["LS"],
			r: 1
		},
		"Africa/Mbabane": {
			a: "Africa/Johannesburg",
			c: ["SZ"],
			r: 1
		},
		"Africa/Mogadishu": {
			a: "Africa/Nairobi",
			c: ["SO"],
			r: 1
		},
		"Africa/Monrovia": {
			u: 0,
			c: ["LR"]
		},
		"Africa/Nairobi": {
			u: 180,
			c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"]
		},
		"Africa/Ndjamena": {
			u: 60,
			c: ["TD"]
		},
		"Africa/Niamey": {
			a: "Africa/Lagos",
			c: ["NE"],
			r: 1
		},
		"Africa/Nouakchott": {
			a: "Africa/Abidjan",
			c: ["MR"],
			r: 1
		},
		"Africa/Ouagadougou": {
			a: "Africa/Abidjan",
			c: ["BF"],
			r: 1
		},
		"Africa/Porto-Novo": {
			a: "Africa/Lagos",
			c: ["BJ"],
			r: 1
		},
		"Africa/Sao_Tome": {
			u: 0,
			c: ["ST"]
		},
		"Africa/Timbuktu": {
			a: "Africa/Abidjan",
			c: ["ML"],
			r: 1
		},
		"Africa/Tripoli": {
			u: 120,
			c: ["LY"]
		},
		"Africa/Tunis": {
			u: 60,
			c: ["TN"]
		},
		"Africa/Windhoek": {
			u: 120,
			c: ["NA"]
		},
		"America/Adak": {
			u: -600,
			d: -540,
			c: ["US"]
		},
		"America/Anchorage": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/Anguilla": {
			a: "America/Puerto_Rico",
			c: ["AI"],
			r: 1
		},
		"America/Antigua": {
			a: "America/Puerto_Rico",
			c: ["AG"],
			r: 1
		},
		"America/Araguaina": {
			u: -180,
			c: ["BR"]
		},
		"America/Argentina/Buenos_Aires": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Catamarca": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/ComodRivadavia": {
			a: "America/Argentina/Catamarca",
			r: 1
		},
		"America/Argentina/Cordoba": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Jujuy": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/La_Rioja": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Mendoza": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Rio_Gallegos": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Salta": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/San_Juan": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/San_Luis": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Tucuman": {
			u: -180,
			c: ["AR"]
		},
		"America/Argentina/Ushuaia": {
			u: -180,
			c: ["AR"]
		},
		"America/Aruba": {
			a: "America/Puerto_Rico",
			c: ["AW"],
			r: 1
		},
		"America/Asuncion": {
			u: -240,
			d: -180,
			c: ["PY"]
		},
		"America/Atikokan": {
			a: "America/Panama",
			c: ["CA"],
			r: 1
		},
		"America/Atka": {
			a: "America/Adak",
			r: 1
		},
		"America/Bahia": {
			u: -180,
			c: ["BR"]
		},
		"America/Bahia_Banderas": {
			u: -360,
			d: -300,
			c: ["MX"]
		},
		"America/Barbados": {
			u: -240,
			c: ["BB"]
		},
		"America/Belem": {
			u: -180,
			c: ["BR"]
		},
		"America/Belize": {
			u: -360,
			c: ["BZ"]
		},
		"America/Blanc-Sablon": {
			a: "America/Puerto_Rico",
			c: ["CA"],
			r: 1
		},
		"America/Boa_Vista": {
			u: -240,
			c: ["BR"]
		},
		"America/Bogota": {
			u: -300,
			c: ["CO"]
		},
		"America/Boise": {
			u: -420,
			d: -360,
			c: ["US"]
		},
		"America/Buenos_Aires": {
			a: "America/Argentina/Buenos_Aires",
			r: 1
		},
		"America/Cambridge_Bay": {
			u: -420,
			d: -360,
			c: ["CA"]
		},
		"America/Campo_Grande": {
			u: -240,
			c: ["BR"]
		},
		"America/Cancun": {
			u: -300,
			c: ["MX"]
		},
		"America/Caracas": {
			u: -240,
			c: ["VE"]
		},
		"America/Catamarca": {
			a: "America/Argentina/Catamarca",
			r: 1
		},
		"America/Cayenne": {
			u: -180,
			c: ["GF"]
		},
		"America/Cayman": {
			a: "America/Panama",
			c: ["KY"],
			r: 1
		},
		"America/Chicago": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/Chihuahua": {
			u: -420,
			d: -360,
			c: ["MX"]
		},
		"America/Coral_Harbour": {
			a: "America/Panama",
			c: ["CA"],
			r: 1
		},
		"America/Cordoba": {
			a: "America/Argentina/Cordoba",
			r: 1
		},
		"America/Costa_Rica": {
			u: -360,
			c: ["CR"]
		},
		"America/Creston": {
			a: "America/Phoenix",
			c: ["CA"],
			r: 1
		},
		"America/Cuiaba": {
			u: -240,
			c: ["BR"]
		},
		"America/Curacao": {
			a: "America/Puerto_Rico",
			c: ["CW"],
			r: 1
		},
		"America/Danmarkshavn": {
			u: 0,
			c: ["GL"]
		},
		"America/Dawson": {
			u: -420,
			c: ["CA"]
		},
		"America/Dawson_Creek": {
			u: -420,
			c: ["CA"]
		},
		"America/Denver": {
			u: -420,
			d: -360,
			c: ["US"]
		},
		"America/Detroit": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Dominica": {
			a: "America/Puerto_Rico",
			c: ["DM"],
			r: 1
		},
		"America/Edmonton": {
			u: -420,
			d: -360,
			c: ["CA"]
		},
		"America/Eirunepe": {
			u: -300,
			c: ["BR"]
		},
		"America/El_Salvador": {
			u: -360,
			c: ["SV"]
		},
		"America/Ensenada": {
			a: "America/Tijuana",
			r: 1
		},
		"America/Fort_Nelson": {
			u: -420,
			c: ["CA"]
		},
		"America/Fort_Wayne": {
			a: "America/Indiana/Indianapolis",
			r: 1
		},
		"America/Fortaleza": {
			u: -180,
			c: ["BR"]
		},
		"America/Glace_Bay": {
			u: -240,
			d: -180,
			c: ["CA"]
		},
		"America/Godthab": {
			a: "America/Nuuk",
			r: 1
		},
		"America/Goose_Bay": {
			u: -240,
			d: -180,
			c: ["CA"]
		},
		"America/Grand_Turk": {
			u: -300,
			d: -240,
			c: ["TC"]
		},
		"America/Grenada": {
			a: "America/Puerto_Rico",
			c: ["GD"],
			r: 1
		},
		"America/Guadeloupe": {
			a: "America/Puerto_Rico",
			c: ["GP"],
			r: 1
		},
		"America/Guatemala": {
			u: -360,
			c: ["GT"]
		},
		"America/Guayaquil": {
			u: -300,
			c: ["EC"]
		},
		"America/Guyana": {
			u: -240,
			c: ["GY"]
		},
		"America/Halifax": {
			u: -240,
			d: -180,
			c: ["CA"]
		},
		"America/Havana": {
			u: -300,
			d: -240,
			c: ["CU"]
		},
		"America/Hermosillo": {
			u: -420,
			c: ["MX"]
		},
		"America/Indiana/Indianapolis": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indiana/Knox": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/Indiana/Marengo": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indiana/Petersburg": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indiana/Tell_City": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/Indiana/Vevay": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indiana/Vincennes": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indiana/Winamac": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Indianapolis": {
			a: "America/Indiana/Indianapolis",
			r: 1
		},
		"America/Inuvik": {
			u: -420,
			d: -360,
			c: ["CA"]
		},
		"America/Iqaluit": {
			u: -300,
			d: -240,
			c: ["CA"]
		},
		"America/Jamaica": {
			u: -300,
			c: ["JM"]
		},
		"America/Jujuy": {
			a: "America/Argentina/Jujuy",
			r: 1
		},
		"America/Juneau": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/Kentucky/Louisville": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Kentucky/Monticello": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Knox_IN": {
			a: "America/Indiana/Knox",
			r: 1
		},
		"America/Kralendijk": {
			a: "America/Puerto_Rico",
			c: ["BQ"],
			r: 1
		},
		"America/La_Paz": {
			u: -240,
			c: ["BO"]
		},
		"America/Lima": {
			u: -300,
			c: ["PE"]
		},
		"America/Los_Angeles": {
			u: -480,
			d: -420,
			c: ["US"]
		},
		"America/Louisville": {
			a: "America/Kentucky/Louisville",
			r: 1
		},
		"America/Lower_Princes": {
			a: "America/Puerto_Rico",
			c: ["SX"],
			r: 1
		},
		"America/Maceio": {
			u: -180,
			c: ["BR"]
		},
		"America/Managua": {
			u: -360,
			c: ["NI"]
		},
		"America/Manaus": {
			u: -240,
			c: ["BR"]
		},
		"America/Marigot": {
			a: "America/Puerto_Rico",
			c: ["MF"],
			r: 1
		},
		"America/Martinique": {
			u: -240,
			c: ["MQ"]
		},
		"America/Matamoros": {
			u: -360,
			d: -300,
			c: ["MX"]
		},
		"America/Mazatlan": {
			u: -420,
			d: -360,
			c: ["MX"]
		},
		"America/Mendoza": {
			a: "America/Argentina/Mendoza",
			r: 1
		},
		"America/Menominee": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/Merida": {
			u: -360,
			d: -300,
			c: ["MX"]
		},
		"America/Metlakatla": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/Mexico_City": {
			u: -360,
			d: -300,
			c: ["MX"]
		},
		"America/Miquelon": {
			u: -180,
			d: -120,
			c: ["PM"]
		},
		"America/Moncton": {
			u: -240,
			d: -180,
			c: ["CA"]
		},
		"America/Monterrey": {
			u: -360,
			d: -300,
			c: ["MX"]
		},
		"America/Montevideo": {
			u: -180,
			c: ["UY"]
		},
		"America/Montreal": {
			a: "America/Toronto",
			c: ["CA"],
			r: 1
		},
		"America/Montserrat": {
			a: "America/Puerto_Rico",
			c: ["MS"],
			r: 1
		},
		"America/Nassau": {
			a: "America/Toronto",
			c: ["BS"],
			r: 1
		},
		"America/New_York": {
			u: -300,
			d: -240,
			c: ["US"]
		},
		"America/Nipigon": {
			u: -300,
			d: -240,
			c: ["CA"]
		},
		"America/Nome": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/Noronha": {
			u: -120,
			c: ["BR"]
		},
		"America/North_Dakota/Beulah": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/North_Dakota/Center": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/North_Dakota/New_Salem": {
			u: -360,
			d: -300,
			c: ["US"]
		},
		"America/Nuuk": {
			u: -180,
			d: -120,
			c: ["GL"]
		},
		"America/Ojinaga": {
			u: -420,
			d: -360,
			c: ["MX"]
		},
		"America/Panama": {
			u: -300,
			c: ["PA", "CA", "KY"]
		},
		"America/Pangnirtung": {
			u: -300,
			d: -240,
			c: ["CA"]
		},
		"America/Paramaribo": {
			u: -180,
			c: ["SR"]
		},
		"America/Phoenix": {
			u: -420,
			c: ["US", "CA"]
		},
		"America/Port-au-Prince": {
			u: -300,
			d: -240,
			c: ["HT"]
		},
		"America/Port_of_Spain": {
			a: "America/Puerto_Rico",
			c: ["TT"],
			r: 1
		},
		"America/Porto_Acre": {
			a: "America/Rio_Branco",
			r: 1
		},
		"America/Porto_Velho": {
			u: -240,
			c: ["BR"]
		},
		"America/Puerto_Rico": {
			u: -240,
			c: [
				"PR",
				"AG",
				"CA",
				"AI",
				"AW",
				"BL",
				"BQ",
				"CW",
				"DM",
				"GD",
				"GP",
				"KN",
				"LC",
				"MF",
				"MS",
				"SX",
				"TT",
				"VC",
				"VG",
				"VI"
			]
		},
		"America/Punta_Arenas": {
			u: -180,
			c: ["CL"]
		},
		"America/Rainy_River": {
			u: -360,
			d: -300,
			c: ["CA"]
		},
		"America/Rankin_Inlet": {
			u: -360,
			d: -300,
			c: ["CA"]
		},
		"America/Recife": {
			u: -180,
			c: ["BR"]
		},
		"America/Regina": {
			u: -360,
			c: ["CA"]
		},
		"America/Resolute": {
			u: -360,
			d: -300,
			c: ["CA"]
		},
		"America/Rio_Branco": {
			u: -300,
			c: ["BR"]
		},
		"America/Rosario": {
			a: "America/Argentina/Cordoba",
			r: 1
		},
		"America/Santa_Isabel": {
			a: "America/Tijuana",
			r: 1
		},
		"America/Santarem": {
			u: -180,
			c: ["BR"]
		},
		"America/Santiago": {
			u: -240,
			d: -180,
			c: ["CL"]
		},
		"America/Santo_Domingo": {
			u: -240,
			c: ["DO"]
		},
		"America/Sao_Paulo": {
			u: -180,
			c: ["BR"]
		},
		"America/Scoresbysund": {
			u: -60,
			d: 0,
			c: ["GL"]
		},
		"America/Shiprock": {
			a: "America/Denver",
			r: 1
		},
		"America/Sitka": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/St_Barthelemy": {
			a: "America/Puerto_Rico",
			c: ["BL"],
			r: 1
		},
		"America/St_Johns": {
			u: -150,
			d: -90,
			c: ["CA"]
		},
		"America/St_Kitts": {
			a: "America/Puerto_Rico",
			c: ["KN"],
			r: 1
		},
		"America/St_Lucia": {
			a: "America/Puerto_Rico",
			c: ["LC"],
			r: 1
		},
		"America/St_Thomas": {
			a: "America/Puerto_Rico",
			c: ["VI"],
			r: 1
		},
		"America/St_Vincent": {
			a: "America/Puerto_Rico",
			c: ["VC"],
			r: 1
		},
		"America/Swift_Current": {
			u: -360,
			c: ["CA"]
		},
		"America/Tegucigalpa": {
			u: -360,
			c: ["HN"]
		},
		"America/Thule": {
			u: -240,
			d: -180,
			c: ["GL"]
		},
		"America/Thunder_Bay": {
			u: -300,
			d: -240,
			c: ["CA"]
		},
		"America/Tijuana": {
			u: -480,
			d: -420,
			c: ["MX"]
		},
		"America/Toronto": {
			u: -300,
			d: -240,
			c: ["CA", "BS"]
		},
		"America/Tortola": {
			a: "America/Puerto_Rico",
			c: ["VG"],
			r: 1
		},
		"America/Vancouver": {
			u: -480,
			d: -420,
			c: ["CA"]
		},
		"America/Virgin": {
			a: "America/Puerto_Rico",
			c: ["VI"],
			r: 1
		},
		"America/Whitehorse": {
			u: -420,
			c: ["CA"]
		},
		"America/Winnipeg": {
			u: -360,
			d: -300,
			c: ["CA"]
		},
		"America/Yakutat": {
			u: -540,
			d: -480,
			c: ["US"]
		},
		"America/Yellowknife": {
			u: -420,
			d: -360,
			c: ["CA"]
		},
		"Antarctica/Casey": {
			u: 660,
			c: ["AQ"]
		},
		"Antarctica/Davis": {
			u: 420,
			c: ["AQ"]
		},
		"Antarctica/DumontDUrville": {
			a: "Pacific/Port_Moresby",
			c: ["AQ"],
			r: 1
		},
		"Antarctica/Macquarie": {
			u: 600,
			d: 660,
			c: ["AU"]
		},
		"Antarctica/Mawson": {
			u: 300,
			c: ["AQ"]
		},
		"Antarctica/McMurdo": {
			a: "Pacific/Auckland",
			c: ["AQ"],
			r: 1
		},
		"Antarctica/Palmer": {
			u: -180,
			c: ["AQ"]
		},
		"Antarctica/Rothera": {
			u: -180,
			c: ["AQ"]
		},
		"Antarctica/South_Pole": {
			a: "Pacific/Auckland",
			c: ["AQ"],
			r: 1
		},
		"Antarctica/Syowa": {
			a: "Asia/Riyadh",
			c: ["AQ"],
			r: 1
		},
		"Antarctica/Troll": {
			u: 0,
			d: 120,
			c: ["AQ"]
		},
		"Antarctica/Vostok": {
			u: 360,
			c: ["AQ"]
		},
		"Arctic/Longyearbyen": {
			a: "Europe/Oslo",
			c: ["SJ"],
			r: 1
		},
		"Asia/Aden": {
			a: "Asia/Riyadh",
			c: ["YE"],
			r: 1
		},
		"Asia/Almaty": {
			u: 360,
			c: ["KZ"]
		},
		"Asia/Amman": {
			u: 120,
			d: 180,
			c: ["JO"]
		},
		"Asia/Anadyr": {
			u: 720,
			c: ["RU"]
		},
		"Asia/Aqtau": {
			u: 300,
			c: ["KZ"]
		},
		"Asia/Aqtobe": {
			u: 300,
			c: ["KZ"]
		},
		"Asia/Ashgabat": {
			u: 300,
			c: ["TM"]
		},
		"Asia/Ashkhabad": {
			a: "Asia/Ashgabat",
			r: 1
		},
		"Asia/Atyrau": {
			u: 300,
			c: ["KZ"]
		},
		"Asia/Baghdad": {
			u: 180,
			c: ["IQ"]
		},
		"Asia/Bahrain": {
			a: "Asia/Qatar",
			c: ["BH"],
			r: 1
		},
		"Asia/Baku": {
			u: 240,
			c: ["AZ"]
		},
		"Asia/Bangkok": {
			u: 420,
			c: ["TH", "KH", "LA", "VN"]
		},
		"Asia/Barnaul": {
			u: 420,
			c: ["RU"]
		},
		"Asia/Beirut": {
			u: 120,
			d: 180,
			c: ["LB"]
		},
		"Asia/Bishkek": {
			u: 360,
			c: ["KG"]
		},
		"Asia/Brunei": {
			u: 480,
			c: ["BN"]
		},
		"Asia/Calcutta": {
			a: "Asia/Kolkata",
			r: 1
		},
		"Asia/Chita": {
			u: 540,
			c: ["RU"]
		},
		"Asia/Choibalsan": {
			u: 480,
			c: ["MN"]
		},
		"Asia/Chongqing": {
			a: "Asia/Shanghai",
			r: 1
		},
		"Asia/Chungking": {
			a: "Asia/Shanghai",
			r: 1
		},
		"Asia/Colombo": {
			u: 330,
			c: ["LK"]
		},
		"Asia/Dacca": {
			a: "Asia/Dhaka",
			r: 1
		},
		"Asia/Damascus": {
			u: 120,
			d: 180,
			c: ["SY"]
		},
		"Asia/Dhaka": {
			u: 360,
			c: ["BD"]
		},
		"Asia/Dili": {
			u: 540,
			c: ["TL"]
		},
		"Asia/Dubai": {
			u: 240,
			c: ["AE", "OM"]
		},
		"Asia/Dushanbe": {
			u: 300,
			c: ["TJ"]
		},
		"Asia/Famagusta": {
			u: 120,
			d: 180,
			c: ["CY"]
		},
		"Asia/Gaza": {
			u: 120,
			d: 180,
			c: ["PS"]
		},
		"Asia/Harbin": {
			a: "Asia/Shanghai",
			r: 1
		},
		"Asia/Hebron": {
			u: 120,
			d: 180,
			c: ["PS"]
		},
		"Asia/Ho_Chi_Minh": {
			u: 420,
			c: ["VN"]
		},
		"Asia/Hong_Kong": {
			u: 480,
			c: ["HK"]
		},
		"Asia/Hovd": {
			u: 420,
			c: ["MN"]
		},
		"Asia/Irkutsk": {
			u: 480,
			c: ["RU"]
		},
		"Asia/Istanbul": {
			a: "Europe/Istanbul",
			r: 1
		},
		"Asia/Jakarta": {
			u: 420,
			c: ["ID"]
		},
		"Asia/Jayapura": {
			u: 540,
			c: ["ID"]
		},
		"Asia/Jerusalem": {
			u: 120,
			d: 180,
			c: ["IL"]
		},
		"Asia/Kabul": {
			u: 270,
			c: ["AF"]
		},
		"Asia/Kamchatka": {
			u: 720,
			c: ["RU"]
		},
		"Asia/Karachi": {
			u: 300,
			c: ["PK"]
		},
		"Asia/Kashgar": {
			a: "Asia/Urumqi",
			r: 1
		},
		"Asia/Kathmandu": {
			u: 345,
			c: ["NP"]
		},
		"Asia/Katmandu": {
			a: "Asia/Kathmandu",
			r: 1
		},
		"Asia/Khandyga": {
			u: 540,
			c: ["RU"]
		},
		"Asia/Kolkata": {
			u: 330,
			c: ["IN"]
		},
		"Asia/Krasnoyarsk": {
			u: 420,
			c: ["RU"]
		},
		"Asia/Kuala_Lumpur": {
			u: 480,
			c: ["MY"]
		},
		"Asia/Kuching": {
			u: 480,
			c: ["MY"]
		},
		"Asia/Kuwait": {
			a: "Asia/Riyadh",
			c: ["KW"],
			r: 1
		},
		"Asia/Macao": {
			a: "Asia/Macau",
			r: 1
		},
		"Asia/Macau": {
			u: 480,
			c: ["MO"]
		},
		"Asia/Magadan": {
			u: 660,
			c: ["RU"]
		},
		"Asia/Makassar": {
			u: 480,
			c: ["ID"]
		},
		"Asia/Manila": {
			u: 480,
			c: ["PH"]
		},
		"Asia/Muscat": {
			a: "Asia/Dubai",
			c: ["OM"],
			r: 1
		},
		"Asia/Nicosia": {
			u: 120,
			d: 180,
			c: ["CY"]
		},
		"Asia/Novokuznetsk": {
			u: 420,
			c: ["RU"]
		},
		"Asia/Novosibirsk": {
			u: 420,
			c: ["RU"]
		},
		"Asia/Omsk": {
			u: 360,
			c: ["RU"]
		},
		"Asia/Oral": {
			u: 300,
			c: ["KZ"]
		},
		"Asia/Phnom_Penh": {
			a: "Asia/Bangkok",
			c: ["KH"],
			r: 1
		},
		"Asia/Pontianak": {
			u: 420,
			c: ["ID"]
		},
		"Asia/Pyongyang": {
			u: 540,
			c: ["KP"]
		},
		"Asia/Qatar": {
			u: 180,
			c: ["QA", "BH"]
		},
		"Asia/Qostanay": {
			u: 360,
			c: ["KZ"]
		},
		"Asia/Qyzylorda": {
			u: 300,
			c: ["KZ"]
		},
		"Asia/Rangoon": {
			a: "Asia/Yangon",
			r: 1
		},
		"Asia/Riyadh": {
			u: 180,
			c: ["SA", "AQ", "KW", "YE"]
		},
		"Asia/Saigon": {
			a: "Asia/Ho_Chi_Minh",
			r: 1
		},
		"Asia/Sakhalin": {
			u: 660,
			c: ["RU"]
		},
		"Asia/Samarkand": {
			u: 300,
			c: ["UZ"]
		},
		"Asia/Seoul": {
			u: 540,
			c: ["KR"]
		},
		"Asia/Shanghai": {
			u: 480,
			c: ["CN"]
		},
		"Asia/Singapore": {
			u: 480,
			c: ["SG", "MY"]
		},
		"Asia/Srednekolymsk": {
			u: 660,
			c: ["RU"]
		},
		"Asia/Taipei": {
			u: 480,
			c: ["TW"]
		},
		"Asia/Tashkent": {
			u: 300,
			c: ["UZ"]
		},
		"Asia/Tbilisi": {
			u: 240,
			c: ["GE"]
		},
		"Asia/Tehran": {
			u: 210,
			d: 270,
			c: ["IR"]
		},
		"Asia/Tel_Aviv": {
			a: "Asia/Jerusalem",
			r: 1
		},
		"Asia/Thimbu": {
			a: "Asia/Thimphu",
			r: 1
		},
		"Asia/Thimphu": {
			u: 360,
			c: ["BT"]
		},
		"Asia/Tokyo": {
			u: 540,
			c: ["JP"]
		},
		"Asia/Tomsk": {
			u: 420,
			c: ["RU"]
		},
		"Asia/Ujung_Pandang": {
			a: "Asia/Makassar",
			r: 1
		},
		"Asia/Ulaanbaatar": {
			u: 480,
			c: ["MN"]
		},
		"Asia/Ulan_Bator": {
			a: "Asia/Ulaanbaatar",
			r: 1
		},
		"Asia/Urumqi": {
			u: 360,
			c: ["CN"]
		},
		"Asia/Ust-Nera": {
			u: 600,
			c: ["RU"]
		},
		"Asia/Vientiane": {
			a: "Asia/Bangkok",
			c: ["LA"],
			r: 1
		},
		"Asia/Vladivostok": {
			u: 600,
			c: ["RU"]
		},
		"Asia/Yakutsk": {
			u: 540,
			c: ["RU"]
		},
		"Asia/Yangon": {
			u: 390,
			c: ["MM"]
		},
		"Asia/Yekaterinburg": {
			u: 300,
			c: ["RU"]
		},
		"Asia/Yerevan": {
			u: 240,
			c: ["AM"]
		},
		"Atlantic/Azores": {
			u: -60,
			d: 0,
			c: ["PT"]
		},
		"Atlantic/Bermuda": {
			u: -240,
			d: -180,
			c: ["BM"]
		},
		"Atlantic/Canary": {
			u: 0,
			d: 60,
			c: ["ES"]
		},
		"Atlantic/Cape_Verde": {
			u: -60,
			c: ["CV"]
		},
		"Atlantic/Faeroe": {
			a: "Atlantic/Faroe",
			r: 1
		},
		"Atlantic/Faroe": {
			u: 0,
			d: 60,
			c: ["FO"]
		},
		"Atlantic/Jan_Mayen": {
			a: "Europe/Oslo",
			c: ["SJ"],
			r: 1
		},
		"Atlantic/Madeira": {
			u: 0,
			d: 60,
			c: ["PT"]
		},
		"Atlantic/Reykjavik": {
			u: 0,
			c: ["IS"]
		},
		"Atlantic/South_Georgia": {
			u: -120,
			c: ["GS"]
		},
		"Atlantic/St_Helena": {
			a: "Africa/Abidjan",
			c: ["SH"],
			r: 1
		},
		"Atlantic/Stanley": {
			u: -180,
			c: ["FK"]
		},
		"Australia/ACT": {
			a: "Australia/Sydney",
			r: 1
		},
		"Australia/Adelaide": {
			u: 570,
			d: 630,
			c: ["AU"]
		},
		"Australia/Brisbane": {
			u: 600,
			c: ["AU"]
		},
		"Australia/Broken_Hill": {
			u: 570,
			d: 630,
			c: ["AU"]
		},
		"Australia/Canberra": {
			a: "Australia/Sydney",
			r: 1
		},
		"Australia/Currie": {
			a: "Australia/Hobart",
			r: 1
		},
		"Australia/Darwin": {
			u: 570,
			c: ["AU"]
		},
		"Australia/Eucla": {
			u: 525,
			c: ["AU"]
		},
		"Australia/Hobart": {
			u: 600,
			d: 660,
			c: ["AU"]
		},
		"Australia/LHI": {
			a: "Australia/Lord_Howe",
			r: 1
		},
		"Australia/Lindeman": {
			u: 600,
			c: ["AU"]
		},
		"Australia/Lord_Howe": {
			u: 630,
			d: 660,
			c: ["AU"]
		},
		"Australia/Melbourne": {
			u: 600,
			d: 660,
			c: ["AU"]
		},
		"Australia/NSW": {
			a: "Australia/Sydney",
			r: 1
		},
		"Australia/North": {
			a: "Australia/Darwin",
			r: 1
		},
		"Australia/Perth": {
			u: 480,
			c: ["AU"]
		},
		"Australia/Queensland": {
			a: "Australia/Brisbane",
			r: 1
		},
		"Australia/South": {
			a: "Australia/Adelaide",
			r: 1
		},
		"Australia/Sydney": {
			u: 600,
			d: 660,
			c: ["AU"]
		},
		"Australia/Tasmania": {
			a: "Australia/Hobart",
			r: 1
		},
		"Australia/Victoria": {
			a: "Australia/Melbourne",
			r: 1
		},
		"Australia/West": {
			a: "Australia/Perth",
			r: 1
		},
		"Australia/Yancowinna": {
			a: "Australia/Broken_Hill",
			r: 1
		},
		"Brazil/Acre": {
			a: "America/Rio_Branco",
			r: 1
		},
		"Brazil/DeNoronha": {
			a: "America/Noronha",
			r: 1
		},
		"Brazil/East": {
			a: "America/Sao_Paulo",
			r: 1
		},
		"Brazil/West": {
			a: "America/Manaus",
			r: 1
		},
		CET: {
			u: 60,
			d: 120
		},
		CST6CDT: {
			u: -360,
			d: -300
		},
		"Canada/Atlantic": {
			a: "America/Halifax",
			r: 1
		},
		"Canada/Central": {
			a: "America/Winnipeg",
			r: 1
		},
		"Canada/Eastern": {
			a: "America/Toronto",
			c: ["CA"],
			r: 1
		},
		"Canada/Mountain": {
			a: "America/Edmonton",
			r: 1
		},
		"Canada/Newfoundland": {
			a: "America/St_Johns",
			r: 1
		},
		"Canada/Pacific": {
			a: "America/Vancouver",
			r: 1
		},
		"Canada/Saskatchewan": {
			a: "America/Regina",
			r: 1
		},
		"Canada/Yukon": {
			a: "America/Whitehorse",
			r: 1
		},
		"Chile/Continental": {
			a: "America/Santiago",
			r: 1
		},
		"Chile/EasterIsland": {
			a: "Pacific/Easter",
			r: 1
		},
		Cuba: {
			a: "America/Havana",
			r: 1
		},
		EET: {
			u: 120,
			d: 180
		},
		EST: {
			u: -300
		},
		EST5EDT: {
			u: -300,
			d: -240
		},
		Egypt: {
			a: "Africa/Cairo",
			r: 1
		},
		Eire: {
			a: "Europe/Dublin",
			r: 1
		},
		"Etc/GMT": {
			u: 0
		},
		"Etc/GMT+0": {
			a: "Etc/GMT",
			r: 1
		},
		"Etc/GMT+1": {
			u: -60
		},
		"Etc/GMT+10": {
			u: -600
		},
		"Etc/GMT+11": {
			u: -660
		},
		"Etc/GMT+12": {
			u: -720
		},
		"Etc/GMT+2": {
			u: -120
		},
		"Etc/GMT+3": {
			u: -180
		},
		"Etc/GMT+4": {
			u: -240
		},
		"Etc/GMT+5": {
			u: -300
		},
		"Etc/GMT+6": {
			u: -360
		},
		"Etc/GMT+7": {
			u: -420
		},
		"Etc/GMT+8": {
			u: -480
		},
		"Etc/GMT+9": {
			u: -540
		},
		"Etc/GMT-0": {
			a: "Etc/GMT",
			r: 1
		},
		"Etc/GMT-1": {
			u: 60
		},
		"Etc/GMT-10": {
			u: 600
		},
		"Etc/GMT-11": {
			u: 660
		},
		"Etc/GMT-12": {
			u: 720
		},
		"Etc/GMT-13": {
			u: 780
		},
		"Etc/GMT-14": {
			u: 840
		},
		"Etc/GMT-2": {
			u: 120
		},
		"Etc/GMT-3": {
			u: 180
		},
		"Etc/GMT-4": {
			u: 240
		},
		"Etc/GMT-5": {
			u: 300
		},
		"Etc/GMT-6": {
			u: 360
		},
		"Etc/GMT-7": {
			u: 420
		},
		"Etc/GMT-8": {
			u: 480
		},
		"Etc/GMT-9": {
			u: 540
		},
		"Etc/GMT0": {
			a: "Etc/GMT",
			r: 1
		},
		"Etc/Greenwich": {
			a: "Etc/GMT",
			r: 1
		},
		"Etc/UCT": {
			a: "Etc/UTC",
			r: 1
		},
		"Etc/UTC": {
			u: 0
		},
		"Etc/Universal": {
			a: "Etc/UTC",
			r: 1
		},
		"Etc/Zulu": {
			a: "Etc/UTC",
			r: 1
		},
		"Europe/Amsterdam": {
			u: 60,
			d: 120,
			c: ["NL"]
		},
		"Europe/Andorra": {
			u: 60,
			d: 120,
			c: ["AD"]
		},
		"Europe/Astrakhan": {
			u: 240,
			c: ["RU"]
		},
		"Europe/Athens": {
			u: 120,
			d: 180,
			c: ["GR"]
		},
		"Europe/Belfast": {
			a: "Europe/London",
			c: ["GB"],
			r: 1
		},
		"Europe/Belgrade": {
			u: 60,
			d: 120,
			c: ["RS", "BA", "HR", "ME", "MK", "SI"]
		},
		"Europe/Berlin": {
			u: 60,
			d: 120,
			c: ["DE"]
		},
		"Europe/Bratislava": {
			a: "Europe/Prague",
			c: ["SK"],
			r: 1
		},
		"Europe/Brussels": {
			u: 60,
			d: 120,
			c: ["BE"]
		},
		"Europe/Bucharest": {
			u: 120,
			d: 180,
			c: ["RO"]
		},
		"Europe/Budapest": {
			u: 60,
			d: 120,
			c: ["HU"]
		},
		"Europe/Busingen": {
			a: "Europe/Zurich",
			c: ["DE"],
			r: 1
		},
		"Europe/Chisinau": {
			u: 120,
			d: 180,
			c: ["MD"]
		},
		"Europe/Copenhagen": {
			u: 60,
			d: 120,
			c: ["DK"]
		},
		"Europe/Dublin": {
			u: 60,
			d: 0,
			c: ["IE"]
		},
		"Europe/Gibraltar": {
			u: 60,
			d: 120,
			c: ["GI"]
		},
		"Europe/Guernsey": {
			a: "Europe/London",
			c: ["GG"],
			r: 1
		},
		"Europe/Helsinki": {
			u: 120,
			d: 180,
			c: ["FI", "AX"]
		},
		"Europe/Isle_of_Man": {
			a: "Europe/London",
			c: ["IM"],
			r: 1
		},
		"Europe/Istanbul": {
			u: 180,
			c: ["TR"]
		},
		"Europe/Jersey": {
			a: "Europe/London",
			c: ["JE"],
			r: 1
		},
		"Europe/Kaliningrad": {
			u: 120,
			c: ["RU"]
		},
		"Europe/Kiev": {
			u: 120,
			d: 180,
			c: ["UA"]
		},
		"Europe/Kirov": {
			u: 180,
			c: ["RU"]
		},
		"Europe/Lisbon": {
			u: 0,
			d: 60,
			c: ["PT"]
		},
		"Europe/Ljubljana": {
			a: "Europe/Belgrade",
			c: ["SI"],
			r: 1
		},
		"Europe/London": {
			u: 0,
			d: 60,
			c: ["GB", "GG", "IM", "JE"]
		},
		"Europe/Luxembourg": {
			u: 60,
			d: 120,
			c: ["LU"]
		},
		"Europe/Madrid": {
			u: 60,
			d: 120,
			c: ["ES"]
		},
		"Europe/Malta": {
			u: 60,
			d: 120,
			c: ["MT"]
		},
		"Europe/Mariehamn": {
			a: "Europe/Helsinki",
			c: ["AX"],
			r: 1
		},
		"Europe/Minsk": {
			u: 180,
			c: ["BY"]
		},
		"Europe/Monaco": {
			u: 60,
			d: 120,
			c: ["MC"]
		},
		"Europe/Moscow": {
			u: 180,
			c: ["RU"]
		},
		"Europe/Nicosia": {
			a: "Asia/Nicosia",
			r: 1
		},
		"Europe/Oslo": {
			u: 60,
			d: 120,
			c: ["NO", "SJ", "BV"]
		},
		"Europe/Paris": {
			u: 60,
			d: 120,
			c: ["FR"]
		},
		"Europe/Podgorica": {
			a: "Europe/Belgrade",
			c: ["ME"],
			r: 1
		},
		"Europe/Prague": {
			u: 60,
			d: 120,
			c: ["CZ", "SK"]
		},
		"Europe/Riga": {
			u: 120,
			d: 180,
			c: ["LV"]
		},
		"Europe/Rome": {
			u: 60,
			d: 120,
			c: ["IT", "SM", "VA"]
		},
		"Europe/Samara": {
			u: 240,
			c: ["RU"]
		},
		"Europe/San_Marino": {
			a: "Europe/Rome",
			c: ["SM"],
			r: 1
		},
		"Europe/Sarajevo": {
			a: "Europe/Belgrade",
			c: ["BA"],
			r: 1
		},
		"Europe/Saratov": {
			u: 240,
			c: ["RU"]
		},
		"Europe/Simferopol": {
			u: 180,
			c: ["RU", "UA"]
		},
		"Europe/Skopje": {
			a: "Europe/Belgrade",
			c: ["MK"],
			r: 1
		},
		"Europe/Sofia": {
			u: 120,
			d: 180,
			c: ["BG"]
		},
		"Europe/Stockholm": {
			u: 60,
			d: 120,
			c: ["SE"]
		},
		"Europe/Tallinn": {
			u: 120,
			d: 180,
			c: ["EE"]
		},
		"Europe/Tirane": {
			u: 60,
			d: 120,
			c: ["AL"]
		},
		"Europe/Tiraspol": {
			a: "Europe/Chisinau",
			r: 1
		},
		"Europe/Ulyanovsk": {
			u: 240,
			c: ["RU"]
		},
		"Europe/Uzhgorod": {
			u: 120,
			d: 180,
			c: ["UA"]
		},
		"Europe/Vaduz": {
			a: "Europe/Zurich",
			c: ["LI"],
			r: 1
		},
		"Europe/Vatican": {
			a: "Europe/Rome",
			c: ["VA"],
			r: 1
		},
		"Europe/Vienna": {
			u: 60,
			d: 120,
			c: ["AT"]
		},
		"Europe/Vilnius": {
			u: 120,
			d: 180,
			c: ["LT"]
		},
		"Europe/Volgograd": {
			u: 180,
			c: ["RU"]
		},
		"Europe/Warsaw": {
			u: 60,
			d: 120,
			c: ["PL"]
		},
		"Europe/Zagreb": {
			a: "Europe/Belgrade",
			c: ["HR"],
			r: 1
		},
		"Europe/Zaporozhye": {
			u: 120,
			d: 180,
			c: ["UA"]
		},
		"Europe/Zurich": {
			u: 60,
			d: 120,
			c: ["CH", "DE", "LI"]
		},
		Factory: {
			u: 0
		},
		GB: {
			a: "Europe/London",
			c: ["GB"],
			r: 1
		},
		"GB-Eire": {
			a: "Europe/London",
			c: ["GB"],
			r: 1
		},
		GMT: {
			a: "Etc/GMT",
			r: 1
		},
		"GMT+0": {
			a: "Etc/GMT",
			r: 1
		},
		"GMT-0": {
			a: "Etc/GMT",
			r: 1
		},
		GMT0: {
			a: "Etc/GMT",
			r: 1
		},
		Greenwich: {
			a: "Etc/GMT",
			r: 1
		},
		HST: {
			u: -600
		},
		Hongkong: {
			a: "Asia/Hong_Kong",
			r: 1
		},
		Iceland: {
			a: "Atlantic/Reykjavik",
			r: 1
		},
		"Indian/Antananarivo": {
			a: "Africa/Nairobi",
			c: ["MG"],
			r: 1
		},
		"Indian/Chagos": {
			u: 360,
			c: ["IO"]
		},
		"Indian/Christmas": {
			u: 420,
			c: ["CX"]
		},
		"Indian/Cocos": {
			u: 390,
			c: ["CC"]
		},
		"Indian/Comoro": {
			a: "Africa/Nairobi",
			c: ["KM"],
			r: 1
		},
		"Indian/Kerguelen": {
			u: 300,
			c: ["TF", "HM"]
		},
		"Indian/Mahe": {
			u: 240,
			c: ["SC"]
		},
		"Indian/Maldives": {
			u: 300,
			c: ["MV"]
		},
		"Indian/Mauritius": {
			u: 240,
			c: ["MU"]
		},
		"Indian/Mayotte": {
			a: "Africa/Nairobi",
			c: ["YT"],
			r: 1
		},
		"Indian/Reunion": {
			u: 240,
			c: ["RE", "TF"]
		},
		Iran: {
			a: "Asia/Tehran",
			r: 1
		},
		Israel: {
			a: "Asia/Jerusalem",
			r: 1
		},
		Jamaica: {
			a: "America/Jamaica",
			r: 1
		},
		Japan: {
			a: "Asia/Tokyo",
			r: 1
		},
		Kwajalein: {
			a: "Pacific/Kwajalein",
			r: 1
		},
		Libya: {
			a: "Africa/Tripoli",
			r: 1
		},
		MET: {
			u: 60,
			d: 120
		},
		MST: {
			u: -420
		},
		MST7MDT: {
			u: -420,
			d: -360
		},
		"Mexico/BajaNorte": {
			a: "America/Tijuana",
			r: 1
		},
		"Mexico/BajaSur": {
			a: "America/Mazatlan",
			r: 1
		},
		"Mexico/General": {
			a: "America/Mexico_City",
			r: 1
		},
		NZ: {
			a: "Pacific/Auckland",
			c: ["NZ"],
			r: 1
		},
		"NZ-CHAT": {
			a: "Pacific/Chatham",
			r: 1
		},
		Navajo: {
			a: "America/Denver",
			r: 1
		},
		PRC: {
			a: "Asia/Shanghai",
			r: 1
		},
		PST8PDT: {
			u: -480,
			d: -420
		},
		"Pacific/Apia": {
			u: 780,
			c: ["WS"]
		},
		"Pacific/Auckland": {
			u: 720,
			d: 780,
			c: ["NZ", "AQ"]
		},
		"Pacific/Bougainville": {
			u: 660,
			c: ["PG"]
		},
		"Pacific/Chatham": {
			u: 765,
			d: 825,
			c: ["NZ"]
		},
		"Pacific/Chuuk": {
			u: 600,
			c: ["FM"]
		},
		"Pacific/Easter": {
			u: -360,
			d: -300,
			c: ["CL"]
		},
		"Pacific/Efate": {
			u: 660,
			c: ["VU"]
		},
		"Pacific/Enderbury": {
			a: "Pacific/Kanton",
			r: 1
		},
		"Pacific/Fakaofo": {
			u: 780,
			c: ["TK"]
		},
		"Pacific/Fiji": {
			u: 720,
			d: 780,
			c: ["FJ"]
		},
		"Pacific/Funafuti": {
			u: 720,
			c: ["TV"]
		},
		"Pacific/Galapagos": {
			u: -360,
			c: ["EC"]
		},
		"Pacific/Gambier": {
			u: -540,
			c: ["PF"]
		},
		"Pacific/Guadalcanal": {
			u: 660,
			c: ["SB"]
		},
		"Pacific/Guam": {
			u: 600,
			c: ["GU", "MP"]
		},
		"Pacific/Honolulu": {
			u: -600,
			c: ["US", "UM"]
		},
		"Pacific/Johnston": {
			a: "Pacific/Honolulu",
			c: ["UM"],
			r: 1
		},
		"Pacific/Kanton": {
			u: 780,
			c: ["KI"]
		},
		"Pacific/Kiritimati": {
			u: 840,
			c: ["KI"]
		},
		"Pacific/Kosrae": {
			u: 660,
			c: ["FM"]
		},
		"Pacific/Kwajalein": {
			u: 720,
			c: ["MH"]
		},
		"Pacific/Majuro": {
			u: 720,
			c: ["MH"]
		},
		"Pacific/Marquesas": {
			u: -510,
			c: ["PF"]
		},
		"Pacific/Midway": {
			a: "Pacific/Pago_Pago",
			c: ["UM"],
			r: 1
		},
		"Pacific/Nauru": {
			u: 720,
			c: ["NR"]
		},
		"Pacific/Niue": {
			u: -660,
			c: ["NU"]
		},
		"Pacific/Norfolk": {
			u: 660,
			d: 720,
			c: ["NF"]
		},
		"Pacific/Noumea": {
			u: 660,
			c: ["NC"]
		},
		"Pacific/Pago_Pago": {
			u: -660,
			c: ["AS", "UM"]
		},
		"Pacific/Palau": {
			u: 540,
			c: ["PW"]
		},
		"Pacific/Pitcairn": {
			u: -480,
			c: ["PN"]
		},
		"Pacific/Pohnpei": {
			u: 660,
			c: ["FM"]
		},
		"Pacific/Ponape": {
			a: "Pacific/Pohnpei",
			r: 1
		},
		"Pacific/Port_Moresby": {
			u: 600,
			c: ["PG", "AQ"]
		},
		"Pacific/Rarotonga": {
			u: -600,
			c: ["CK"]
		},
		"Pacific/Saipan": {
			a: "Pacific/Guam",
			c: ["MP"],
			r: 1
		},
		"Pacific/Samoa": {
			a: "Pacific/Pago_Pago",
			c: ["WS"],
			r: 1
		},
		"Pacific/Tahiti": {
			u: -600,
			c: ["PF"]
		},
		"Pacific/Tarawa": {
			u: 720,
			c: ["KI"]
		},
		"Pacific/Tongatapu": {
			u: 780,
			c: ["TO"]
		},
		"Pacific/Truk": {
			a: "Pacific/Chuuk",
			r: 1
		},
		"Pacific/Wake": {
			u: 720,
			c: ["UM"]
		},
		"Pacific/Wallis": {
			u: 720,
			c: ["WF"]
		},
		"Pacific/Yap": {
			a: "Pacific/Chuuk",
			r: 1
		},
		Poland: {
			a: "Europe/Warsaw",
			r: 1
		},
		Portugal: {
			a: "Europe/Lisbon",
			r: 1
		},
		ROC: {
			a: "Asia/Taipei",
			r: 1
		},
		ROK: {
			a: "Asia/Seoul",
			r: 1
		},
		Singapore: {
			a: "Asia/Singapore",
			c: ["SG"],
			r: 1
		},
		Turkey: {
			a: "Europe/Istanbul",
			r: 1
		},
		UCT: {
			a: "Etc/UTC",
			r: 1
		},
		"US/Alaska": {
			a: "America/Anchorage",
			r: 1
		},
		"US/Aleutian": {
			a: "America/Adak",
			r: 1
		},
		"US/Arizona": {
			a: "America/Phoenix",
			c: ["US"],
			r: 1
		},
		"US/Central": {
			a: "America/Chicago",
			r: 1
		},
		"US/East-Indiana": {
			a: "America/Indiana/Indianapolis",
			r: 1
		},
		"US/Eastern": {
			a: "America/New_York",
			r: 1
		},
		"US/Hawaii": {
			a: "Pacific/Honolulu",
			c: ["US"],
			r: 1
		},
		"US/Indiana-Starke": {
			a: "America/Indiana/Knox",
			r: 1
		},
		"US/Michigan": {
			a: "America/Detroit",
			r: 1
		},
		"US/Mountain": {
			a: "America/Denver",
			r: 1
		},
		"US/Pacific": {
			a: "America/Los_Angeles",
			r: 1
		},
		"US/Samoa": {
			a: "Pacific/Pago_Pago",
			c: ["WS"],
			r: 1
		},
		UTC: {
			a: "Etc/UTC",
			r: 1
		},
		Universal: {
			a: "Etc/UTC",
			r: 1
		},
		"W-SU": {
			a: "Europe/Moscow",
			r: 1
		},
		WET: {
			u: 0,
			d: 60
		},
		Zulu: {
			a: "Etc/UTC",
			r: 1
		}
	};

	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	if (timezone === "" || !timezone) 
    {
		return null;
	}

	const _country = timezones[timezone].c[0];
	const country = countries[_country];
	return country;
}


/**This function returns current region state
@returns returns current region state
**/
function get_state()
{
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	if (timezone === "" || !timezone) 
    {
		return null;
	}
	
	const state = timezone.split("/")[1].replace("_", " ")
	
	return state
	
}






function test()
{
    var array_ = ["AAABB","AABBB","ABBBB","AAAAB","AAAAA","가","나","가가","가나","ABAB"];
    debug_log(arrange_text(array_));


    //var array_ = [];
    //for(var i = 0; i < 1000; i++)
    //{
    //array_[i] = i;
    //}

    //console.time();
    //debug_log(randomize_array(array_));
    //console.timeEnd();


    debug_log(get_line_function(0,1,1,5));

    debug_log(point_to_line_distance(0,0,6,6,0,6));
}


//test();






const times__ = [];
let fps___;
var is_showing_fps__ = false;

function show_fps(tmp_val) 
{
    is_showing_fps__ = tmp_val;
    window.requestAnimationFrame(() =>
    {
        if (is_showing_fps__)
        {
            const now = performance.now();
            while (times__.length > 0 && times__[0] <= now - 1000)
            {
                times__.shift();
            }
            times__.push(now);
            fps___ = times__.length;
            debug_log("fps : "+fps___)
            show_fps();
        }
    });
}

show_fps();
