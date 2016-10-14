template_name = "hello"

OnCreated = function() 
            {   
                this.counter = new ReactiveVar(0);    
            }

helpers = {    counter(){// retourne la valeur du counter
                            return Template.instance().counter.get();
                        }
          }
events  = { 'click button'(event, instance) {// increment the counter when button is clicked
                            instance.counter.set(instance.counter.get() + 1);
                },
          }

Template[template_name].onCreated(   OnCreated   );
Template[template_name].helpers  (   helpers    );
Template[template_name].events   (   events     );
