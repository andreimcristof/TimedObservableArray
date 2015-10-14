window.TimedObservableArray = function TimedObservableArray(){
    var self = this;
    self.items = [];
    self.callBackOnLimitReached = function(){};
    
    self.arrayObserver =
    {
        currentTime : null,
        timeAllowedLimitInMilliseconds :  1,
        itemLimit : 30,
        IsItemLimitReached : function(){
            return self.items.length >= this.itemLimit;
        },
        
        IsTimeLimitReached:function()
        {
            var elapsedTime = new Date().getTime() - this.currentTime;
            return this.currentTime !== null && elapsedTime >= this.timeAllowedLimitInMilliseconds;
        },
        
        ResetArray:function(){
            self.items = [];
            this.currentTime = null;
        }
    }
}

TimedObservableArray.prototype.push = function push(){
    var obs = this.arrayObserver;
    if(!obs.IsTimeLimitReached() && !obs.IsItemLimitReached())
    {
        if(obs.currentTime === null)
        {
            obs.currentTime = new Date().getTime();
        }
        console.log(this.items);
    }
    else
    {
        this.callBackOnLimitReached();
        obs.ResetArray();   
    }
    
    Array.prototype.push.apply(this.items, arguments);
}

var utils = 
{
    callbackAlert :function()
    {
        console.log("alert - item limit reached!");
    }    
}


var obsv = new TimedObservableArray();
obsv.callBackOnLimitReached = utils.callbackAlert;
obsv.items = [1,2,3];

for(var i = 0;i <300;i++)
{
    obsv.push(i);
}

