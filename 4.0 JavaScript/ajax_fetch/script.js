$(document). ready(function(){
    // Handle form subnission
    $('form').submit(function(event){
    event. preventDefault(); // Prevent page reload / form from being submitted
    // Get the entered ingredients
   
    var ingredients = $('#ingredients').val();
    //commas,letters and spaces
    let regex =/^[a-zA-Z,]+$/;
   
    if(regex.test(ingredients)){
              // Make the API request
              $.ajax({
               url:'https://api.spoonacular.com/recipes/findByIngredients',
               method:'GET',
               data:{
                   apiKey :'93fe3824775846e8a79703e74fd2aabe',
                   ingredients : ingredients,
                   number : 9 // Adjust the number of recipes to retrieve as per your prefrence
   
               },
               success:function(response){
                    
                    // array . response is an array
                    //check whether there are any recipes found.
   
                    if(response. length>0 ){
                       console.log('recipes found');
                       console.log(response);
                       //calling the function that displays the recipes
                       displayRecipes(response);
                    }
                    else{
                       alert(" No recipes found for your ingredients");
   
                    }
               },
               error:function(){
                   alert('An error occured while fetching recipes.');
               }
              });
           }else{
               alert('please provide valid input for the ingredients Eg., chicken, broccoli , pasta');
           }
       });
       // a function that displays the recipes within the recipeContainer
       function displayRecipes(recipes){
           var container =$('#recipeContainer');
           //empty it
           container.empty();
          
          //recipes is a JSON array of objects
          /*
           var  a =[1,2,3,4,5];
           a.forEach(function(item){
               console.log(item + "multiplied by 2 is :" + (item*2) );
   
           });
           var  a =[1,2,3,4,5];
           a.forEach(item =>{
               console.log(item + "multiplied by 2 is :" + (item*2) );
           });
                 recipes.forEach(function(recipe){
                        OR
                     recipes.forEach(recipe =>{
   
           });
           
           */
           //es6
           recipes. forEach(recipe =>{
               //yooray!
               console.log(recipe.title);
               // 1. recipe title
               var recipeTitle = recipe.title;
               //2. recipe image(url)
               let recipeImage = recipe.image;
               //3. count of how many ingredients are missing for the recipe
               let missedIngredientsCount = recipe.missedIngredientsCount;
   
               var  missedIngredientsArray = recipe.missedIngredients;
               // add each of the missed ingredients to the array
               var  missedIngredientsTempArray = [];
   
               missedIngredientsArray. forEach(ingredient =>{
                   missedIngredientsTempArray.push(ingredient.originalName);
               });
               console.log(missedIngredientsTempArray);
               //4. the names of the missing ingredients as a string
               let missedIngredientsString = missedIngredientsTempArray.join(',');
   
               var  recipeElement =$('<div>').addClass('recipe');// <div> Class= 'recipe'>

                recipeElement.append($('<h3>').text(recipeTitle)); //  <h3> recipeTitle </h3>
                recipeElement.append($('<img>').attr('src',recipeImage)); //  <img> src='recipeImage'>
                recipeElement.append($('<p>').text("missing Ingedients : " +missedIngredientsCount + "( "+ missedIngredientsString + ")") ); 
                // <p> Missing Ingredints : 2  (a,b)</p>
                //</div>
   
               container.append(recipeElement);
           });
   
       }
       
   });