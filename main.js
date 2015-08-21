Accounts.config({
   forbidClientAccountCreation: true,
   //passwordSignupFields: "USERNAME_ONLY" 
});
if(Meteor.isClient){
   Meteor.subscribe("userRoles");
}
//making the edit post routes work
PostController = RouteController.extend({
    waitOn: function(){
         return Meteor.subscribe('single-post', this.params.slug);
    },

    data: function(){
         return Posts.findOne({slug: this.params.slug});
    }
});

