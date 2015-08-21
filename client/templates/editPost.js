Template.editPost.events({
   'submit form':function(e, templates){
      e.preventDefault();
      var form = e.target,
          user = Meteor.user();
    }
});


//generate a slug from the post's title
var slug = _.slugify(form.title.value);

// insert post documents into the Post collection using form fields
Posts.insert({
            title:        form.title.value,
            slug:         slug,
            description:  form.description.value,
            text:         form.text.value,
            timeCreated:  moment().unix,
            author:       user.profile.name,
            owner:        user._id
         
            }, function(error){
                if(error){
                    // display the error to the user
                    alert(error.reason);
                } else {
                    // Redirect to the post
                    Router.go('Post', {slug: slug});
              }
         }
         
);
