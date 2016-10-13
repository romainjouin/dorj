import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    smtp = {    username : "romain.jouin"           ,
                password : "connards2016"           ,
                server   : "smtp.googlemail.com"    ,
                port     : 465                      };
    
    smtp_url = "smtp://" + encodeURIComponent(smtp.username)   + ":" +
                            encodeURIComponent(smtp.password)   + "@" +
                            encodeURIComponent(smtp.server  )   + ":" +
                            encodeURIComponent(smtp.port    )   ;
    process.env.MAIL_URL = smtp_url ;
});

Accounts.onCreateUser(function(options, user)
                      {
                        user.profile = {};
                        if (options.profile){user.profile = options.profile;}
                        user.profile.rank = "nouveau";
                        if (options.email)
                        {
                            nb_seconds      = 2 ;
                            timeout         = nb_seconds * 1000 ; 
                            send_verif_mail = function(){ Accounts.sendVerificationEmail(user._id);   }
                            Meteor.setTimeout(send_verif_mail , timeout)
                        }
                        return user;
                    }
);
