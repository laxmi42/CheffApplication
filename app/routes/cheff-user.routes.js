module.exports = app => {
    const users = require("../controllers/cheff-user.controller.js");
  
    // Create a new Customer
    app.post("/users", users.create);

         // Create a new Customer
         app.post("/getUserUploadedbase64Image", users.getUserUploadedImage);


  // Create a new Customer
  app.post("/getCheffUploadedImage", users.getCheffUploadedImage);


    
       // Create a new Customer
       app.post("/RegisterUserCheff", users.RegisterUser);

     // Create a new Customer
     app.get("/getAllUserBookingsAfterAssigning", users.getAllUserBookingsAfterAssigning); 

 // Create a new Customer
 app.post("/UpdateUserInfo", users.UpdateUserInfo);

 
 // Create a new Customer
 app.post("/UpdateCheffInfo", users.UpdateCheffInfo);

  // Create a new Customer
  app.post("/UserUplaodbase64", users.UserUplaodbase64);



   // Create a new Customer
   app.post("/CheffUplaodbase64", users.CheffUplaodbase64);
       
       // Create a new Customer
       app.post("/getUserProfileById", users.getUserProfileById);


             // Create a new Customer
             app.post("/LoginUserCheff", users.LoginUser);

             // Create a new Customer
             app.post("/RegisterCheffAdmin", users.RegisterAdmin);

             // Create a new Customer
             app.post("/LoginCheffAdmin", users.LoginAdmin);

             // Create a new Customer
             app.post("/RegisterCheff", users.RegisterCheff);


            // Create a new Customer
            app.post("/LoginCheff", users.LoginCheff);

           // Create a new Customer
            app.post("/CheffBookService", users.BookService);

           // Create a new Customer
            app.post("/Menu1Items", users.Menu1Items);
          // Create a new Customer
            app.post("/Menu2Items", users.Menu2Items);


                 // Create a new Customer
                 app.post("/getBookedServiceById", users.getBookedServiceById);
        // Create a new Customer
            app.post("/Menu3Items", users.Menu3Items);

        // Create a new Customer
            app.post("/CategoryItems", users.CategoryItems);

        // Create a new Customer
            app.post("/Menu4Items", users.Menu4Items);
    // Create a new Customer
    app.post("/AddDesert", users.AddDesert);
   // Create a new Customer
   app.post("/InsertUserDesert", users.InsertUserDesert);

      // Create a new Customer
      app.post("/getCheffProfileById", users.getCheffProfileById);
        // Create a new Customer
            app.get("/getCategoryItems", users.getCategoryItems);


   // Create a new Customer
   app.get("/getAllBookedServices", users.getAllBookedServices);

              // Create a new Customer
              app.get("/getAllDeserts", users.getAllDeserts);
        // Create a new Customer
            app.post("/getUserNotifications", users.getUserNotifications);

 // Create a new Customer
 app.get("/getMenu1Items", users.getMenu1Items);
       // Create a new Customer
            app.post("/getMenu2Items", users.getMenu2Items);


       // Create a new Customer
            app.post("/getMenu3Items", users.getMenu3Items);


      // Create a new Customer
            app.post("/getMenu4Items", users.getMenu4Items);

             // Create a new Customer
             app.post("/getCategoryItemsById", users.getCategoryItemsById);


                       // Create a new Customer
                       app.get("/getAllUserBookings", users.getAllUserBookings);


                       // Create a new Customer
                       app.get("/getAllCheffInfo", users.getAllCheffInfo);


      // Create a new Customer
      app.post("/InsertCreditedTransaction", users.InsertCreditedTransaction);


      
  
 // Create a new Customer

 app.post("/InsertDebitedTransaction", users.InsertDebitedTransaction);
 app.post("/UpdateCreditedTransaction", users.UpdateCreditedTransaction);
 app.post("/UpdateCheffAvailableStatus", users.UpdateCheffAvailableStatus);
 app.post("/getAllCreditedTransactionByCheff", users.getAllCreditedTransactionByCheff);

 app.post("/getAllDebitedTransactionByCheff", users.getAllDebitedTransactionByCheff);

 app.post("/Feedback", users.Feedback);




 app.post("/getUserRatingById", users.getUserRatingById);
 app.get("/getFeedBack", users.getFeedBack);

 app.get("/getCheffInfo", users.getCheffInfo);
};  