module.exports = app => {
    const users = require("../controllers/add-menu.controller.js");
  
   // Create a new Customer
   app.post("/UpdateMenu4", users.create);

      // Create a new Customer
      app.post("/InsertBookingInfo", users.InsertBookingInfo);


      
      // Create a new Customer
      app.post("/UpdateCheffStatus", users.UpdateCheffStatus);

        // Create a new Customer
        app.get("/getAllCategories", users.getAllCategories);


          // Create a new Customer
          app.get("/getAllMenu2Items", users.getAllMenu2Items);

          // Create a new Customer
          app.post("/InsertCategoriesByAdmin", users.InsertCategoriesByAdmin);

            // Create a new Customer
            app.post("/Insertmenu1ItemsByAdmin", users.Insertmenu1ItemsByAdmin);


              // Create a new Customer
              app.post("/Insertmenu2ItemsByAdmin", users.Insertmenu2ItemsByAdmin);



                // Create a new Customer
                app.post("/DeleteBookedServiceByUser", users.DeleteBookedServiceByUser);

 // Create a new Customer
 app.post("/UpdateMenu2ByAdmin", users.UpdateMenu2ByAdmin);
              // Create a new Customer
              app.post("/UpdateMenu1ByAdmin", users.UpdateMenu1ByAdmin);

               // Create a new Customer
               app.post("/UpdateMenu3ByAdmin", users.UpdateMenu3ByAdmin); 

 // Create a new Customer
 app.post("/UpdateCategoryByAdmin", users.UpdateCategoryByAdmin); 

  // Create a new Customer
  app.post("/getCategoryById", users.getCategoryById); 


                  // Create a new Customer
                  app.post("/UpdateDesertByAdmin", users.UpdateDesertByAdmin); 

                 // Create a new Customer
                 app.post("/UpdateMenu4ByAdmin", users.UpdateMenu4ByAdmin);
              // Create a new Customer
              app.post("/UpdateMenu1ByAdminInMenu4", users.UpdateMenu1ByAdminInMenu4);

               // Create a new Customer
               app.post("/UpdateMenu2ByAdminInMenu4", users.UpdateMenu2ByAdminInMenu4);


                  // Create a new Customer
                  app.post("/UpdateMenu3ByAdminInMenu4", users.UpdateMenu3ByAdminInMenu4);
                // Create a new Customer
                app.post("/Insertmenu3ItemsByAdmin", users.Insertmenu3ItemsByAdmin);


                // Create a new Customer
                app.post("/Insertmenu4ItemsByAdmin", users.Insertmenu4ItemsByAdmin);


                  // Create a new Customer
                  app.get("/getAllMenu1Items", users.getAllMenu1Items);


                   // Create a new Customer
                   app.get("/getAllMenu3Items", users.getAllMenu3Items);

                  // Create a new Customer
                  app.get("/getAllMenu4Items", users.getAllMenu4Items);



                // find customer by joint querygetRecentHistory
app.get("/getAllAreaInfo", users.getAllAreaInfo);


// find customer by joint querygetRecentHistory
app.get("/getAllStateInfo", users.getAllStateInfo);


// find customer by joint querygetRecentHistory
app.get("/getAllCityInfo", users.getAllCityInfo);

app.post("/getCheffPayment", users.getCheffPayment);

                    // Create a new Customer
                    app.post("/UpdateCheffInBookService", users.UpdateCheffInBookService);

                    app.post("/getCheffProfileById", users.getCheffProfileById);
                    app.post("/getAdminProfileById", users.getAdminProfileById);

                    app.post("/CheffUplaodbase64", users.CheffUplaodbase64);
                    app.post("/AdminUplaodbase64", users.AdminUplaodbase64);
                 
                    app.post("/UpdateAssignInBookService", users.UpdateAssignInBookService);
                    app.post("/getCheffUploadedImage", users.getCheffUploadedImage);

                    app.post("/getAdminUploadedImage", users.getAdminUploadedImage);

                    app.post("/UpdateCheffDecisionAfterSend", users.UpdateCheffDecisionAfterSend);

                     // Create a new Customer
                     app.post("/InsertDesertItemsByAdmin", users.InsertDesertItemsByAdmin);

                    app.post("/AddState", users.AddState);

                    app.post("/AddCity", users.AddCity);

                    app.post("/AddArea", users.AddArea);

                    // find customer by joint querygetRecentHistory
                  app.get("/findStates", users.findStates);

                  app.get("/getPlanningInfo", users.getPlanningInfo);

                  app.post("/InsertPlanningData", users.InsertPlanningData);

                  app.post("/DeleteMenu1ItemsByAdmin", users.DeleteMenu1ItemsByAdmin);

                  app.post("/DeleteMenu2ItemsByAdmin", users.DeleteMenu2ItemsByAdmin);
                  app.post("/DeleteMenu3ItemsByAdmin", users.DeleteMenu3ItemsByAdmin);
                  app.post("/DeleteMenu4ItemsByAdmin", users.DeleteMenu4ItemsByAdmin);

                  app.post("/DeleteDesertItemsByAdmin", users.DeleteDesertItemsByAdmin);

                  app.post("/DeleteCategoryItemsByAdmin", users.DeleteCategoryItemsByAdmin);
                  app.post("/DeletePlanByAdmin", users.DeletePlanByAdmin);
                  app.post("/UpdatePlanInfoByAdmin", users.UpdatePlanInfoByAdmin);

   
                  app.post("/getAllBookingsByAdmin", users.getAllBookingsByAdmin);
                  
                  app.post("/getAllAreas", users.getAllAreas);
                  app.post("/getAllCities", users.getAllCities);
                  app.post("/getCheffInfoByLocation", users.getCheffInfoByLocation);

                  app.post("/getAmountDeduction", users.getAmountDeduction);

                  app.post("/getAllBookingsOfCheffById", users.getAllBookingsOfCheffById);


                  app.post("/getAllAccpetedBookingsOfUser", users.getAllAccpetedBookingsOfUser);

                  app.post("/getAllCompletedBookingsOfCheffById", users.getAllCompletedBookingsOfCheffById);


                  app.post("/getPlanningPriceByPersonNumber", users.getPlanningPriceByPersonNumber);

                  app.post("/getAllAccpetedBookingsOfCheffById", users.getAllAccpetedBookingsOfCheffById);


                  app.post("/getAllCancelledBookingsOfCheffById", users.getAllCancelledBookingsOfCheffById);

    

                  app.post("/getAllTransaction", users.getAllTransaction);

                  app.get("/getCountOfUsers", users.getCountOfUsers);

                  app.get("/getCountOfCheffs", users.getCountOfCheffs);

                  app.get("/getCountOfBookings", users.getCountOfBookings);

                  app.get("/getCountOfBookingsAccpected", users.getCountOfBookingsAccpected);


                  app.post("/CalculateAverageRating", users.CalculateAverageRating);
}