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
return Math.atan((y1 - y2)/(x1 - x2));
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