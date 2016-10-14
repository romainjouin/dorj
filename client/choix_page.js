
helper_map  = { currentPage: function(page)
                            {// retourne la variable "page"
                                variable_de_session = 'page';
                                return Session.get(variable_de_session);
                            }
              }

event_map   = { 'click .clickChangesPage': function(event, template)
                                            {// met à jour la variable page selon l'attribut "data-page" de l'objet cliqué
                                                variable_de_session     = 'page';
                                                attribut_objet_cliqué   = 'data-page';
                                                value_to_give    = event.currentTarget.getAttribute(attribut_objet_cliqué);
                                                Session.set(variable_de_session, value_to_give)
                                            }
            }

Template.choix_page.helpers(helper_map)
Template.choix_page.events(event_map)
