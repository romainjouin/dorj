template_name = "home"

OnCreated = function() 
            {   
                this.counter = new ReactiveVar(0);    
            }

helpers = {    counter(){// retourne la valeur du counter
                            local_this = Template.instance();
                            return local_this.counter.get();
                        }
          }
events  = { 'click button'(event, instance) {// increment the counter when button is clicked
                    local_this = Template.instance();        
                    local_this.counter.set(Template.instance().counter.get() + 1);
                },
          }


Template[template_name].onCreated  (   OnCreated    );
Template[template_name].helpers  (   helpers    );
Template[template_name].events   (   events     );
