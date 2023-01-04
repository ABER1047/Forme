
## What is this?

It is including some of **useful functions** & it makes you can use **sin, cos, tan, abs, power, floor**... functions without **"Math."**

-------------

## How to use?

At first, define below code and check the below functions

```
<script src = "https://cdn.jsdelivr.net/gh/ABER1047/Forme@main/scripts.js"></script>
```

</br>


<details>
<summary>Angles/Distance</summary>


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

</details>










<details>
<summary>Random values and Corrected values</summary>


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



</br>
  
### correct_value(value,min,max)

-------------

<div align="center">

You can limit the value of range of numbers
  
</div>
  
#### Example
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
  
  
#### Example
```

//limit the value of range
var a = choose("A","B","C",1,2,3);

//it returns "A" or "B" or "C" or 1 or 2 or 3 by same chances
console.log(a);
  
```





</br></br></br>
  
### set_value_case(value, min, max, inner)

-------------

<div align="center">

it returns another specific value by dividing the case where the value is within the range of the condition and the case where it is not.
  
</div>
  
  
#### Example
```

//setting
var value = 50;
var returns = 0;



returns = set_value_case(value, 0, 100, true);

//it returns 50 because the value "50" is between 0~100
console.log(returns);


returns = set_value_case(value, 100, 200, true);

//it returns 100 because the value "50" is smaller than "min" value [100]
console.log(returns);
  
```


</details>









<details>
<summary>Colors/Alpha</summary>



### merge_color(color1, color2, amount, debug_mode)

-------------

<div align="center">

you need to set the parameter "color1" and "color2" (hex color only)
And then set the parameter "amount" to merge colors
(0 is minimum and 1 is maximum. if amount value is less than 0 or over than 1, it is applied 0 and 1 if amount is 0, you can get only "color1" value, and if amount is 1, you can get only "color2" value)
  
</div>

#### Example
```

//it return "gray" color
merge_color("#ffffff", "#2a2a28", 0.5);

//if you want to see the result on console, use the parameter "debug mode"
merge_color("#ffffff", "#2a2a28", 0.5, 1);

```


</details>







<details>
<summary>Loading</summary>



### preload_images(file_directory, type, image_name1, image_name2, image_name...)

-------------

<div align="center">

it makes the images preloaded.

it is useful when you added new images after page loaded or change the already existed image to other one.

(if you didn't preload the images before this situations, the images are not shown until fully loaded)


</div>
  
  
#### Example
```

//it loads the images file "MY_GIF1.gif", "MY_GIF2.gif", "MY_GIF3.gif"
preload_images("my_pc/image_folder", "gif", "MY_GIF1", "MY_GIF2", "MY_GIF3");

//it loads the images file "MY_IMG1.png", "MY_IMG2.png", "MY_IMG3.png"
preload_images("my_pc/image_folder", "png", "MY_IMG1", "MY_IMG2", "MY_IMG3");
  
```


</details>







<details>
<summary>Time/Duration</summary>


  
### get_remaining_time(audio)

-------------

<div align="center">

you can get remaining audio/video time.


</div>
  
  
#### Example
```
var audio = document.getElementById("id_audio");

//it returns remaining time (seconds)
console.log(get_remaining_time(audio));
  
```








</br></br></br>
  
### get_current_time(audio)

-------------

<div align="center">

you can get current audio/video time


</div>
  
  
#### Example
```
var audio = document.getElementById("id_audio");

//it returns current time (seconds)
console.log(get_current_time(audio));
  
```





</br></br></br>
  
### reconstruction_time_sec(seconds)

-------------

<div align="center">

It converts seconds to clock time


</div>
  
  
#### Example
```

//it returns current clock time (1:00:00)
console.log(reconstruction_time_sec(3600)); //1 hour
  
```






</br></br></br>
  
### convert_min_to_sec(minutes)

-------------

<div align="center">

It converts minutes to seconds and returns it

</div>


#### Example
```

//it returns "60"
console.log(convert_min_to_sec(1)); //1 minute
  
```
  
  
  
  
  
  

</br></br></br>
  
### convert_hour_to_min(hours)

-------------

<div align="center">

It converts hours to minutes and returns it

</div>


#### Example
```

//it returns "60"
console.log(convert_hour_to_min(1)); //1 hour
  
```
  
  
  
  
  
  
</br></br></br>
  
### convert_hour_to_sec(hours)

-------------

<div align="center">

It converts hours to seconds and returns it

</div>


#### Example
```

//it returns "3600"
console.log(convert_hour_to_sec(1)); //1 hour
  
```
  


</details>
