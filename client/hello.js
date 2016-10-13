helloOnCreated = function helloOnCreated() 
{   
    this.counter = new ReactiveVar(0);    
}

hello_helpers    = {    counter(){// retourne la valeur du counter
                            return Template.instance().counter.get();
                        }
                    }
hello_events     =  {   'click button'(event, instance) {// increment the counter when button is clicked
                            instance.counter.set(instance.counter.get() + 1);
                        },
                    }


Template.hello.onCreated(   helloOnCreated   );
Template.hello.helpers  (   hello_helpers    );
Template.hello.events   (   hello_events     );
