const userRegisters = require("../models/add-menu.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const updatemenu4 = new userRegisters({
      adminId: req.body.adminId,
      id: req.body.id,
      menu3: req.body.menu3,
      menu4: req.body.menu4,
      userId: req.body.userId
    });
  
    // Save Customer in the database
    userRegisters.create(updatemenu4, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };








  exports.InsertBookingInfo = (req, res) => {
       
    // console.log(req.body.password);
    InsertBookingInfo(req.body.cheffId,req.body.bookingId,req.body.adminId, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };





  exports.UpdateCheffStatus = (req, res) => {
       
    // console.log(req.body.password);
    UpdateCheffStatus(req.body.cheffId,req.body.Price, ( data) => {
        console.log("Name"+req.body.cheffId);
   
  res.send(data);
      return res
    });
  };







  exports.DeleteBookedServiceByUser = (req, res) => {
       
    // console.log(req.body.password);
    DeleteBookedServiceByUser(req.body.userid,req.body.bookingdate,req.body.bookingid, ( data) => {
     
   
  res.send(data);
      return res
    });
  };



















  exports.getAllAccpetedBookingsOfUser = (req, res) => {
       
    // console.log(req.body.password);
    getAllAccpetedBookingsOfUser(req.body.userId, ( data) => {
  
   
  res.send(data);
      return res
    });
  };





  exports.getPlanningPriceByPersonNumber = (req, res) => {
       
    // console.log(req.body.password);
    getPlanningPriceByPersonNumber(req.body.personsNumber, ( data) => {
  
   
  res.send(data);
      return res
    });
  };















  exports.UpdateAssignInBookService = (req, res) => {
       
    // console.log(req.body.password);
    UpdateAssignInBookService(req.body.bookingId,  ( data) => {
        console.log("Name"+req.body.bookingId);
   
  res.send(data);
      return res
    });
  };






  exports.UpdateMenu1ByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu1ByAdmin(req.body.menu1Id,req.body.menu1, ( data) => {
       
   
  res.send(data);
      return res
    });
  };



  
  exports.UpdateMenu2ByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu2ByAdmin(req.body.menu2Id,req.body.menu2, ( data) => {
       
   
  res.send(data);
      return res
    });
  };



  exports.UpdateMenu3ByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu3ByAdmin(req.body.menu3Id,req.body.menu3, ( data) => {
       
      console.log(req.body.menu3Id+req.body.menu3);
  res.send(data);
      return res
    });
  };


  exports.UpdateMenu4ByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu4ByAdmin(req.body.menu4Id,req.body.menu4, ( data) => {
       
     
  res.send(data);
      return res
    });
  };



  exports.UpdateDesertByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateDesertByAdmin(req.body.desertId,req.body.desertName, ( data) => {
       
     
  res.send(data);
      return res
    });
  };



  exports.UpdateMenu1ByAdminInMenu4 = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu1ByAdminInMenu4(req.body.menu1Id,req.body.menu1, ( data) => {
       
   
  res.send(data);
      return res
    });
  };


  exports.UpdateMenu2ByAdminInMenu4 = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu2ByAdminInMenu4(req.body.menu2Id,req.body.menu2, ( data) => {
       
   
  res.send(data);
      return res
    });
  };



  exports.UpdateMenu3ByAdminInMenu4 = (req, res) => {
       
    // console.log(req.body.password);
    UpdateMenu3ByAdminInMenu4(req.body.menu3Id,req.body.menu3, ( data) => {
       
   
  res.send(data);
      return res
    });
  };



  exports.getCategoryById = (req, res) => {
       
    // console.log(req.body.password);
    getCategoryById(req.body.ID, ( data) => {
       
   
  res.send(data);
      return res
    });
  };


  exports.UpdateCategoryByAdmin = (req, res) => {
       
    // console.log(req.body.password);
    UpdateCategoryByAdmin(req.body.ID,req.body.category,req.body.CategoryImage, ( data) => {
       
   
  res.send(data);
      return res
    });
  };
















  // Retrieve all Customers from the database.
  exports.getAllCategories = (req, res) => {
    getAllCategories((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };






    exports.InsertCategoriesByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      InsertCategoriesByAdmin(req.body.category,req.body.CategoryImage, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };



    exports.Insertmenu1ItemsByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      Insertmenu1ItemsByAdmin(req.body.menu1, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };

    exports.Insertmenu2ItemsByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      Insertmenu2ItemsByAdmin(req.body.menu2, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };



    exports.Insertmenu3ItemsByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      Insertmenu3ItemsByAdmin(req.body.menu3, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };




    exports.InsertDesertItemsByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      InsertDesertItemsByAdmin(req.body.desertName, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };





    exports.Insertmenu4ItemsByAdmin = (req, res) => {
       
      // console.log(req.body.password);
      Insertmenu4ItemsByAdmin(req.body.menu1,req.body.menu1Id,req.body.menu2,req.body.menu2Id, req.body.menu3,req.body.menu3Id,req.body.menu4, ( data) => {
          console.log("Name"+req.body.Name);
     
    res.send(data);
        return res
      });
    };

    
  // Retrieve all Customers from the database.
  exports.getAllMenu1Items = (req, res) => {
    getAllMenu1Items((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };





      // Retrieve all Customers from the database.
  exports.getAllMenu2Items = (req, res) => {
    getAllMenu2Items((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };


         // Retrieve all Customers from the database.
  exports.getAllMenu3Items = (req, res) => {
    getAllMenu3Items((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };





         // Retrieve all Customers from the database.
         exports.getAllMenu4Items = (req, res) => {
          getAllMenu4Items((err, data) => {
              if (err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving customers."
                });
              else res.send(data);
            });
          };








          // find by joint query based on condition
exports.AddState = (req, res) => {

  // console.log(req.body.password);
  AddState(req.body.StateName, ( data) => {

res.send(data);
    return res
  });
};


exports.AddCity = (req, res) => {

  // console.log(req.body.password);
  AddCity(req.body.StateName,req.body.CityName, ( data) => {

res.send(data);
    return res
  });
};


exports.AddArea = (req, res) => {

  // console.log(req.body.password);
  AddArea(req.body.StateName,req.body.CityName,req.body.AreaName, ( data) => {

res.send(data);
    return res
  });
};



// Retrieve all Customers from the database.
exports.findStates = (req, res) => {
  getAllStates((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };



   // find by joint query based on condition
   exports.getAllCities = (req, res) => {

    // console.log(req.body.password);
    getAllCities(req.body.StateName,( data) => {
  
  res.send(data);
      return res
    });
  }




   // find by joint query based on condition
   exports.getAllAreas = (req, res) => {

    // console.log(req.body.password);
    getAllAreas(req.body.StateName,req.body.CityName,( data) => {
  
  res.send(data);
      return res
    });
  }




      // find by joint query based on condition
      exports.getCheffInfoByLocation = (req, res) => {

        // console.log(req.body.password);
        getCheffInfoByLocation(req.body.StateName,req.body.CityName,req.body.AreaName,( data) => {
          // console.log("StateName"+StateName);
          // console.log("CityName"+CityName);
          // console.log("AreaName"+AreaName);
      res.send(data);
          return res
        });
      }




        // find by joint query based on condition
   exports.getAllBookingsByAdmin = (req, res) => {

    // console.log(req.body.password);
    getAllBookingsByAdmin(req.body.adminId,( data) => {
  
  res.send(data);
      return res
    });
  }



          // find by joint query based on condition
          exports.InsertPlanningData = (req, res) => {

            // console.log(req.body.password);
            InsertPlanningData(req.body.personsnumbers,req.body.Price,( data) => {
          
          res.send(data);
              return res
            });
          }






 // find by joint query based on condition
 exports.UpdatePlanInfoByAdmin = (req, res) => {

  // console.log(req.body.password);
  UpdatePlanInfoByAdmin(req.body.ID,req.body.Price,req.body.personnumbers,( data) => {

res.send(data);
    return res
  });
}


 // find by joint query based on condition
 exports.DeleteMenu1ItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteMenu1ItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}


 // find by joint query based on condition
 exports.DeleteMenu2ItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteMenu2ItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}




 // find by joint query based on condition
 exports.DeleteMenu3ItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteMenu3ItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}



 // find by joint query based on condition
 exports.DeleteMenu4ItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteMenu4ItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}




 // find by joint query based on condition
 exports.DeleteDesertItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteDesertItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}



 // find by joint query based on condition
 exports.DeleteCategoryItemsByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeleteCategoryItemsByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}



 // find by joint query based on condition
 exports.DeletePlanByAdmin = (req, res) => {

  // console.log(req.body.password);
  DeletePlanByAdmin(req.body.ID,( data) => {

res.send(data);
    return res
  });
}




          // Retrieve all Customers from the database.
exports.getPlanningInfo = (req, res) => {
  getPlanningInfo((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };



     // find by joint query based on condition
     exports.getAmountDeduction = (req, res) => {

      // console.log(req.body.password);
      getAmountDeduction(req.body.PersonsNumber,( data) => {
    
    res.send(data);
        return res
      });
    }


           // Retrieve all Customers from the database.
exports.getAllAreaInfo = (req, res) => {
  getAllAreaInfo((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };


            // Retrieve all Customers from the database.
exports.getAllStateInfo = (req, res) => {
  getAllStateInfo((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };



              // Retrieve all Customers from the database.
exports.getAllCityInfo = (req, res) => {
  getAllCityInfo((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };






       // find by joint query based on condition
       exports.getAllBookingsOfCheffById = (req, res) => {

        // console.log(req.body.password);
        getAllBookingsOfCheffById(req.body.cheffId,( data) => {
      
      res.send(data);
          return res
        });
      }



             // find by joint query based on condition
             exports.UpdateCheffInBookService = (req, res) => {

              // console.log(req.body.password);
              UpdateCheffInBookService(req.body.bookingId,req.body.cheffId,req.body.workStatus,req.body.cheffDecision,( data) => {
            
            res.send(data);
                return res
              });
            }



              // find by joint query based on condition
       exports.getAllAccpetedBookingsOfCheffById = (req, res) => {

        // console.log(req.body.password);
        getAllAccpetedBookingsOfCheffById(req.body.cheffId,( data) => {
      
      res.send(data);
          return res
        });
      }




          // find by joint query based on condition
          exports.getAllCompletedBookingsOfCheffById = (req, res) => {

            // console.log(req.body.password);
            getAllCompletedBookingsOfCheffById(req.body.cheffId,( data) => {
          
          res.send(data);
              return res
            });
          }
    

 // find by joint query based on condition
 exports.UpdateCheffDecisionAfterSend = (req, res) => {

  // console.log(req.body.password);
  UpdateCheffDecisionAfterSend(req.body.bookingId,req.body.cheffDecision,( data) => {

res.send(data);
    return res
  });
}



 // find by joint query based on condition
 exports.getAllTransaction = (req, res) => {

  // console.log(req.body.password);
  getAllTransaction(req.body.cheffId,( data) => {

res.send(data);
    return res
  });
}





                 // find by joint query based on condition
                 exports.getAllCancelledBookingsOfCheffById = (req, res) => {

                  // console.log(req.body.password);
                  getAllCancelledBookingsOfCheffById(req.body.cheffId,( data) => {
                
                res.send(data);
                    return res
                  });
                }
          


                exports.getCheffProfileById = (req, res) => {
       
                  // console.log(req.body.password);
                  getCheffProfileById(req.body.ID,( data) => {
                      console.log("Name"+req.body.Name);
                 
                res.send(data);
                    return res
                  });
                };
              


                
  exports.CheffUplaodbase64 = (req, res) => {
       
    // console.log(req.body.password);
    CheffUplaodbase64(req.body.userId,req.body.base64, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };

  
  exports.getAdminProfileById = (req, res) => {
       
    // console.log(req.body.password);
    getAdminProfileById(req.body.ID,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };



                  
  exports.AdminUplaodbase64 = (req, res) => {
       
    // console.log(req.body.password);
    AdminUplaodbase64(req.body.userId,req.body.base64, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };


  exports.getCheffUploadedImage = (req, res) => {
       
    // console.log(req.body.password);
    getCheffUploadedImage(req.body.userId, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };




 










  exports.getAdminUploadedImage = (req, res) => {
       
    // console.log(req.body.password);
    getAdminUploadedImage(req.body.userId, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };





  exports.  getCheffPayment = (req, res) => {
       
    // console.log(req.body.password);
    getCheffPayment(req.body.ID,req.body.wallet,  ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };







  
  exports.getAdminUploadedImage = (req, res) => {
       
    // console.log(req.body.password);
    getAdminUploadedImage(req.body.ID, req.body.Name, req.body.Email, req.body.MobileNumber, req.body.cheffStatus, req.body.Experience, req.body.currentHotel, req.body.Area, req.body.City,req.body.State,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };






  
  // Retrieve all Customers from the database.
exports.getCountOfUsers = (req, res) => {
  getCountOfUsers((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };




    
  // Retrieve all Customers from the database.
exports.getCountOfCheffs = (req, res) => {
  getCountOfCheffs((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };





      
  // Retrieve all Customers from the database.
exports.getCountOfBookings = (req, res) => {
  getCountOfBookings((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };



    // Retrieve all Customers from the database.
exports.getCountOfBookingsAccpected = (req, res) => {
  getCountOfBookingsAccpected((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };




  exports.  CalculateAverageRating = (req, res) => {
       
    // console.log(req.body.password);
    CalculateAverageRating(req.body.cheffId,  ( data) => {
        console.log("Name"+req.body.cheffId);
   
  res.send(data);
      return res
    });
  };
