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

//random value (whole number only)
function irandom_range(range_1,range_2)
{
return Math.floor(Math.random()*range_2 | range_1);
}

//get distance from point to point
function point_distance(x1,y1,x2,y2)
{
return sqrt(power(x1 - x2,2) + power(y1 - y2,2));
}

//get direction(angle) from point to point
function point_direction(x1,y1,x2,y2)
{
return Math.atan2(y2 - y1, x2 - x1);
}

//return -1 or 1
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

//return choosed values randomly
function choose(val0, /*val1, val2, …, max_val*/)
{
var random_choosed__ = irandom_range(0,arguments.length);
//console.log(arguments[random_choosed__]);
return arguments[random_choosed__];
}

//checking that these two circle met
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

//checking that a point met a cirle
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

//sign without_zero
function sign_without(value)
{
var _____var = Math.sign(value);
    if (_____var == 0)
    {
    _____var = choose(-1,1);
    }

return Math.sign(value);
}

//correct value
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


//merge color
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

//= console.log()
function debug_log(value)
{
console.log(value);
}