
## What is this?

It is including some of **useful functions** & it makes you can use **sin, cos, tan, abs, power, floor**... functions without **"Math."**

-------------

## How to use?

At first, define below code and check the below functions

```
<script src = "https://cdn.jsdelivr.net/gh/ABER1047/Forme@main/scripts.js"></script>
```

### point_distance(x1,y1,x2,y2)

-------------

<div align="center">

<img width="420px" src = imgs/img_distance.PNG />

This function returns the length of a vector formed by the specified components [x1,y1] and [x2,y2]

you can use this function when you want to get distance between two points

</div>

</br>



### point_direction(x1,y1,x2,y2)

-------------

<div align="center">

<img width="450px" src = imgs/img_angle.PNG />

This function returns the direction of a vector formed by the specified components [x1,y1] and [x2,y2]

</div>

</br>


### place_meeting_point(x1,y1,x2,y2,rad)

-------------

<div align="center">

<img width="450px" src = imgs/img_place_meeting_point.PNG />

This function returns "true" when a point met or be inside a circle

</div>


</br>


### place_meeting_circle(x1,y1,x2,y2,rad1,rad2)

-------------
<div align="center">

<img width="550px" src = imgs/img_place_meeting.PNG />

This function returns "true" when two circles(collision mask) met

</div>

</br>


### irandom_range(range_1,range_2)

-------------

<div align="center">

You supply the low value for the range as well as the high value, and the function will return a random integer value within (and including) the given range

For example, irandom_range(10, 35) will return an integer between 10 and 35 inclusive

</div>



</br>


### irandom_return()

-------------

<div align="center">

You can get -1 or 1 value by 50% chance
  
</div>
  

</br></br></br>
  
### merge_color(color1, color2, amount, debug_mode)

-------------

<div align="center">

you need to set the parameter "color1" and "color2" (hex color only)
And then set the parameter "amount" to merge colors
(0 is minimum and 1 is maximum. if amount value is less than 0 or over than 1, it is applied 0 and 1 if amount is 0, you can get only "color1" value, and if amount is 1, you can get only "color2" value)
  
</div>

### Example
```

//it return "gray" color
merge_color("#ffffff", "#2a2a28", 0.5);

//if you want to see the result on console, use the parameter "debug mode"
merge_color("#ffffff", "#2a2a28", 0.5, 1);

```


</br>
  
### correct_value(value,min,max)

-------------

<div align="center">

You can limit the value of range of numbers
  
</div>
  
### Example
```

var a = 10

//limit the value of range
a = correct_value(a,0,5);

//it returns 5
console.log(a);
  
```




</br>
  
### sign_without(value)

-------------

<div align="center">

it functions same as "Math.sign(value)"
but, when the value of sign was "0", it returns -1 or 1 by 50% chance
  
</div>
  


</br></br></br>
  
### choose(val0, val1, val2, …, max_val)

-------------

<div align="center">

it chooses the values from above parameters and returns it.
  
</div>
  
  
### Example
```

//limit the value of range
var a = choose("A","B","C",1,2,3);

//it returns "A" or "B" or "C" or 1 or 2 or 3 by same chances
console.log(a);
  
```
