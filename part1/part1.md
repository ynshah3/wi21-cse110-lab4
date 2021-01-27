## Answer 1
3 will be printed since it is the length of the *prices* array. Since *i* was declared using *var* and it is a part of the *for* code block, it has global-scope and can be accessed outside of the *for*-loop.

## Answer 2
*discountedPrice* takes the value that is last assigned to it in the *for*-loop (i.e., *prices[3] * (1 - 0.5) = 150*). It is still accessible outside of the code block that it was declared in because *var* was used which made *discountedPrice* global in scope inside the function.

## Answer 3
*finalPrice* retains the value that is last assigned to it in the *for*-loop (i.e., *Math.round(150 * 100) / 100 = 150*). It is accesible everywhere inside the function since it was declared using *var* and has a function-level scope.

## Answer 4
The function returns the array *[50, 100, 150]* since these are the final prices after the discount is added. In the *for* loop, every time the *finalPrice* is calculated for each price in *prices*, it is *push*ed (added to the end) of the *discounted* function-level scope array that was declared using *var*.

## Answer 5
There is a *ReferenceError* since *i* is declared using *let* and it can only be accessed within the code block it is declared - in this case, the *for* loop.

## Answer 6
There is again a *ReferenceError* since *discontedPrice* is local variable which is declared using *let*. It can only be accessed within the code block it is declared - in this case, the *for* loop.

## Answer 7
*finalPrice* retains the value that is last assigned to it in the *for*-loop (i.e., *Math.round(150 * 100) / 100 = 150*). It is accesible everywhere inside the function since it was declared using *let* and has a local scope inside the function *discountPrices*.

## Answer 8
The function returns the array *[50, 100, 150]* since these are the final prices after the discount is added. In the *for* loop, every time the *finalPrice* is calculated for each price in *prices*, it is *push*ed (added to the end) of the *discounted* local scope array that was declared using *let*. *discounted* is accessible everywhere inside the function since it is declared outsid of any code blocks of *if*, *for*, etc.

## Answer 9
There is a *ReferenceError* since *i* is declared using *let* and it can only be accessed within the code block it is declared - in this case, the *for* loop.

## Answer 10
There is again a *ReferenceError* since *discontedPrice* is local variable which is declared using *const*. It can only be accessed within the code block it is declared - in this case, the *for* loop.

## Answer 11
There is a *TypeError* since we are reassigning values to a *const* variable which is not allowed.

## Answer 12
The function will return the array *[0, 0, 0]* if we assume that there is no error from the reassigning of *const finalPrice* but because it is *const*, it does not update its value. There is no error here since we are not reassinging here, just manipulating.

## Answer 13
A. student.name  
B. student['Grad Year']  
C. student.greeting()  
D. student['Favorite Teacher'].name  
E. student.courseload[0]

## Answer 14
A. 32 since '+' is a concatenation operator when one of the operands is a string.  
B. 1 since '-' is applicable to numbers and it automatically converts '3' into 3.  
C. 3 since *null* is converted to 0 according to the numeric conversion rules.  
D. 3null since '+' acts as a concatenation operator and turns *null* into *'null'*.  
E. 4 since *true* is converted to a 1 according to the numeric conversion rules.  
F. 0 since, by numeric conversion rules, both *false* and *null* are converted to a 0.  
G. 3undefined since '+' acts as a concatenation operator and turns *undefined* into *'undefined'*.  
H. NaN since, by numeric conversion rules, *undefined* is converted into *NaN* which cannot be subtracted from "3".

## Answer 15
A. true since '2' is converted into 2 for comparison which is greater than 1.  
B. false since two strings are compared in lexicographical order; a '1' comes before a '2' and so '2' > '12'.  
C. true since '2' is converted into 2 for comparison.  
D. false since a strict equality operator compares without type conversion and 2 and '2' have different types.  
E. false since a true is evaluated to a 1 which is not equal to 2.  
F. true since 2 has a "value" and Boolean(2) returns true.

## Answer 16
The regular equality operator (==) uses type conversion and hence, cannot differentiate between objects of differing types. For example, (0 == false) evaluates to true even though both have different types.

The strict operator (===), on the other hand, does not use type conversion and compares objects as is. (0 === false) returns false since they have different types.

## Answer 17
*How are you?* gets printed because the first condition (2 == true) evaluates to a false since true is converted to a 1 which is not equal to 2. The second condition evaluates to true since Boolean(2) = true (any argument to Boolean() which has a "value" returns true). So, the second if statement runs and prints.

## Answer 19
The function returns the array *[6, 8, 10]*. For each element in *array*, the function *doSomething(array[i], function(x))* is called which in turn calls *function(array[i] + 2)*, which returns *2(array[i] + 2)*. This value is evaluated for every element in the array and then appended to *newArr* which is returned by *modifyArray*.

## Answer 21
1  
4  
3  
2  
This is because the first function waits for 3 seconds before executing and the second function has some delay associated with it which gives the above order.