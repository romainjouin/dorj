template_name   = "navbar"
OnCreated       = function() 
                    {        class_click1_data_default   = '';
                        this.class_click1_data           = "data-click1"; // utilise dans les events
                        this.click1                      = new ReactiveVar(class_click1_data_default);
                    }

// variables dynamiques de template (helper)
helpers         = { 
                    click1(){   local_this = Template.instance();
                                return local_this.click1.get() ;}
                  }
//evenemnts
events          = { 
                    'click .click1': function(event, template)
                                {// met à jour la variable page selon l'attribut "data-page" de l'objet cliqué
                                    local_this    = Template.instance();
                                    a_recuperer   = local_this.class_click1_data;
                                    value_to_give = event.currentTarget.getAttribute(a_recuperer);
                                    local_this.click1.set (value_to_give );
                                    
                                }
                    }
Template[template_name].onCreated   (   OnCreated   );
Template[template_name].helpers     (   helpers     );
Template[template_name].events      (   events      );
