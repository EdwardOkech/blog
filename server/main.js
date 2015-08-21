Meteor.startup(function(){

   //creating out admin user
   if(Meteor.users.find().count() === 0){ //check if the users collection is empty
        console.log('Created Admin user'); 

         var userId = Accounts.createUser({
             username: 'admin',
             email: 'okech.edward@reactivestudio.co.ke',
             password: 'admin',
             profile: {
                 name : 'Edward Okech'
             }
         });
        // add user roles
        Meteor.users.update(userId, {$set: {
             roles: {admin: true},
        }});
    }

    console.log('Server	started');
    //#Storing Data -> Adding post examples
    if(Posts.find().count() ===	0)	{
	console.log('Adding dummy posts');
	var dummyPosts	= [
	   {
	      title: 'My First entry',
	      slug: 'my-first-entry',
	      description: 'Lorem ipsum	dolor sit amet.',
	      text:'Lorem ipsum	dolor sit amet...',
	      timeCreated:moment().subtract(7,'days').unix(),
	      author: 'John Doe'
	      },
	      {
	      title:'My	Second	entry',
	      slug:'my-second-entry',
	      description:'Borem ipsum dolor sit.',
	      text:	'Lorem	ipsum	dolor	sit	amet...',
	      timeCreated:moment().subtract(6,'days').unix(),
	      author:	'John	Doe'
	      },
              {
	      title:'My	third	entry',
	      slug:'my-second-entry',
	      description:'Borem ipsum dolor sit.',
	      text:	'Lorem	ipsum	dolor	sit	amet...',
	      timeCreated:moment().subtract(5,'days').unix(),
	      author:	'John	Doe'
	      },
              {
	      title:'My	fourth	entry',
	      slug:'my-second-entry',
	      description:'Borem ipsum dolor sit.',
	      text:	'Lorem	ipsum	dolor	sit	amet...',
	      timeCreated:moment().subtract(2,'days').unix(),
	      author:	'John	Doe'
	      }
              
						
	 ];
	 //we add the dummyPosts to our	database
	_.each(dummyPosts, function(post){
	  Posts.insert(post);
	});
      }
});
