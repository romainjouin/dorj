import './main.html';
import { Template       }  from 'meteor/templating'     ;
import { ReactiveVar    }  from 'meteor/reactive-var'   ;

ui_config = {passwordSignupFields : 'USERNAME_AND_EMAIL'}

Accounts.ui.config(ui_config);
Session.setDefault('page', 'home');



