# TimedObservableArray

TimedObservableArray is useful in those cases when you need to fire up an event on an array, after a certain amount of time or after a certain item count has been pushed into it  -whichever event happens first, will fire up the callback you provide.  
This is of course achievable with different libraries, but sometimes you may not want to add a library to your project only for such a simple functionality.

Pushing items into this array will fire up the callback passed into the push method if configured time has elapsed or if configured allowed array size has been reached. You can use this to flush the array's items regularly to some output. 

/Andrei Cristof

