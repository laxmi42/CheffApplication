const userRegister = require("../models/cheff-user.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const user = new userRegister({
    Name: req.body.Name,
    Email: req.body.Email,
    MobileNumber: req.body.MobileNumber,
    Age: req.body.Age,
    password: req.body.password
  });

  // Save Customer in the database
  userRegister.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};




















exports.RegisterUser = (req, res) => {
       
    // console.log(req.body.password);
    RegisterUser(req.body.Name,req.body.Email, req.body.MobileNumber,req.body.StateName,req.body.CityName,req.body.AreaName,  req.body.password, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };




  exports.RegisterAdmin = (req, res) => {
       
    // console.log(req.body.password);
    RegisterAdmin(req.body.Name,req.body.Email, req.body.password,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };




  exports.UserUplaodbase64 = (req, res) => {
       
    // console.log(req.body.password);
    UserUplaodbase64(req.body.userId,req.body.base64, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };




  exports.CheffUplaodbase64 = (req, res) => {
       
    // console.log(req.body.password);
    CheffUplaodbase64(req.body.cheffId,req.body.base64, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };












  exports.getUserUploadedImage = (req, res) => {
       
    // console.log(req.body.password);
    getUserUploadedImage(req.body.userId, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };



  exports.getCheffUploadedImage = (req, res) => {
       
    // console.log(req.body.password);
    getCheffUploadedImage(req.body.cheffId, ( data) => {
        console.log("Name"+req.body.cheffId);
   
  res.send(data);
      return res
    });
  };







  
  exports.UpdateUserInfo = (req, res) => {
       
    // console.log(req.body.password);
    UpdateUserInfo(req.body.ID,req.body.Name, req.body.Email,req.body.MobileNumber,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };





  exports.UpdateCheffInfo = (req, res) => {
       
    // console.log(req.body.password);
    UpdateCheffInfo(req.body.ID,req.body.Name, req.body.Email,req.body.Experience, req.body.currentHotel,req.body.MobileNumber,req.body.Area,req.body.City,req.body.State,( data) => {
        console.log("Name"+req.body.Area);
        console.log("Name"+req.body.City);
        console.log("Name"+req.body.State);
  res.send(data);
      return res
    });
  };











  exports.getUserProfileById = (req, res) => {
       
    // console.log(req.body.password);
    getUserProfileById(req.body.ID,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };











  exports.RegisterCheff = (req, res) => {
       
    // console.log(req.body.password);
    RegisterCheff(req.body.Name,req.body.Email, req.body.password, req.body.MobileNumber,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };
  exports.LoginAdmin = (req, res) => {
       
    // console.log(req.body.password);
    LoginAdmin(req.body.Email,req.body.password, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };



  exports.LoginUser = (req, res) => {
       
    // console.log(req.body.password);
    LoginUser(req.body.Email,req.body.password, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };





  exports.ValidateMobileCheff = (req, res) => {
       
    // console.log(req.body.password);
    ValidateMobileCheff(req.body.MobileNumber,( data) => {
        
   
  res.send(data);
      return res
    });
  };





  exports.ValidateMobileUser = (req, res) => {
       
    // console.log(req.body.password);
    ValidateMobileUser(req.body.MobileNumber,( data) => {
        
   
  res.send(data);
      return res
    });
  };




  
  exports.LoginCheff = (req, res) => {
       
    // console.log(req.body.password);
    LoginCheff(req.body.Email,req.body.password, ( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };





  
  exports.getUserBookedOrderById = (req, res) => {
       
    // console.log(req.body.password);
    getUserBookedOrderById(req.body.userId,req.body.bookingid, ( data) => {
        console.log("Name"+req.body.bookingid);
   
  res.send(data);
      return res
    });
  };












  exports.BookService = (req, res) => {
       
    // console.log(req.body.password);
    BookService(req.body.Name,req.body.bookingDate, req.body.menu1,req.body.menu2,req.body.menu3,req.body.homeAddrs,req.body.personsNumber,req.body.category,req.body.assign,req.body.userId,req.body.StateName,req.body.CityName,req.body.AreaName,( data) => {
        console.log("Name"+req.body.Name);
   
  res.send(data);
      return res
    });
  };



  exports.Menu1Items = (req, res) => {
       
    // console.log(req.body.password);
    Menu1Items(req.body.menu1,( data) => {
        console.log("Name"+req.body.menu1);
   
  res.send(data);
      return res
    });
  };



  exports.getBookedServiceById = (req, res) => {
       
    // console.log(req.body.password);
    getBookedServiceById(req.body.userId,( data) => {
        console.log("Name"+req.body.userId);
   
  res.send(data);
      return res
    });
  };











  
  exports.Menu2Items = (req, res) => {
       
    // console.log(req.body.password);
    Menu2Items(req.body.menu1,req.body.menu2,( data) => {
        console.log("Name"+req.body.menu1);
   
  res.send(data);
      return res
    });
  };





  exports.Menu3Items = (req, res) => {
       
    // console.log(req.body.password);
    Menu3Items(req.body.menu2,req.body.menu3,( data) => {
        console.log("Name"+req.body.menu1);
   
  res.send(data);
      return res
    });
  };



  exports.AddDesert = (req, res) => {
       
    // console.log(req.body.password);
    AddDesert(req.body.adminId,req.body.desertName,( data) => {
        console.log("Name"+req.body.desertName);
   
  res.send(data);
      return res
    });
  };









  
  exports.CategoryItems = (req, res) => {
       
    // console.log(req.body.password);
    CategoryItems(req.body.category,req.body.CategoryImage,( data) => {
        console.log("Name"+req.body.category);
   
  res.send(data);
      return res
    });
  };





  exports.getCategoryItemsById = (req, res) => {
       
    // console.log(req.body.password);
    getCategoryItemsById(req.body.ID,( data) => {
        console.log("Name"+req.body.ID);
   
  res.send(data);
      return res
    });
  };



  exports.InsertUserDesert = (req, res) => {
 
   console.log("Hyy"+req.body.length);
   var array = [];
for(i=0;i<req.body.length;i++)
{
  array[i]=req.body[i]
}
  //  console.log(array);

// console.log(req.body.password);
InsertUserDesert(array,( data) => {
  
   
  res.send(data);
      return res
    });
  };





  exports.Menu4Items = (req, res) => {
 
    console.log("Hyy"+req.body.length);
    var array = [];
 for(i=0;i<req.body.length;i++)
 {
   array[i]=req.body[i]
 }
   //  console.log(array);
 
 // console.log(req.body.password);
     Menu4ItemsInsert(array,( data) => {
   
    
   res.send(data);
       return res
     });
   };



  // Retrieve all Customers from the database.
  exports.getAllUserBookingsAfterAssigning = (req, res) => {
    getAllUserBookingsAfterAssigning((err, data) => {
      console.log("Hyyy");
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };





  // Retrieve all Customers from the database.
exports.getCategoryItems = (req, res) => {
  getCategoryItems((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };




  
  // Retrieve all Customers from the database.
exports.getMenu1Items = (req, res) => {
  getMenu1Items((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };


  // Retrieve all Customers from the database.
  exports.getAllDeserts = (req, res) => {
    getAllDeserts((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };
  







  // Retrieve all Customers from the database.
  exports.getAllBookedServices = (req, res) => {
    getAllBookedServices((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };










      // Retrieve all Customers from the database.
  exports.getUserNotifications = (req, res) => {
     // console.log(req.body.password);
     getUserNotifications(req.body.ID,( data) => {
      console.log("Name"+req.body.ID);
 
res.send(data);
    return res
  });
    };
  




      // Retrieve all Customers from the database.
      exports.getCheffProfileById = (req, res) => {
        // console.log(req.body.password);
        getCheffProfileById(req.body.cheffId,( data) => {
         console.log("Name"+req.body.cheffId);
    
   res.send(data);
       return res
     });
       };









  exports.getMenu2Items = (req, res) => {
       
    // console.log(req.body.password);
    getMenu2Items(req.body.menu1,( data) => {
        console.log("Name"+req.body.menu1);
   
  res.send(data);
      return res
    });
  };





  exports.getMenu3Items = (req, res) => {
       
    // console.log(req.body.password);
    getMenu3Items(req.body.menu1,req.body.menu2,( data) => {
        console.log("Name"+req.body.menu2);
   
  res.send(data);
      return res
    });
  };




  exports.getMenu4Items = (req, res) => {
       
    // console.log(req.body.password);
    getMenu4Items(req.body.menu1,req.body.menu2,req.body.menu3,( data) => {
        console.log("Name"+req.body.menu3);
   
  res.send(data);
      return res
    });
  };


  
  // Retrieve all Customers from the database.
  exports.getAllUserBookings = (req, res) => {
    getAllUserBookings((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };


     
  // Retrieve all Customers from the database.
  exports.getAllCheffInfo = (req, res) => {
    getAllCheffInfo((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };






    exports.InsertCreditedTransaction = (req, res) => {
       
      // console.log(req.body.password);
      InsertCreditedTransaction(req.body.cheffId,req.body.creditedAmount,( data) => {
          
     
    res.send(data);
        return res
      });
    };
  


    

    exports.InsertDebitedTransaction = (req, res) => {
       
      // console.log(req.body.password);
      InsertDebitedTransaction(req.body.cheffId,req.body.debitedAmount,( data) => {
          
     
    res.send(data);
        return res
      });
    };
  


    
    exports.UpdateCreditedTransaction = (req, res) => {
       
      // console.log(req.body.password);
      UpdateCreditedTransaction(req.body.cheffId,req.body.Price,( data) => {
          
     
    res.send(data);
        return res
      });
    }




    exports.UpdateCheffAvailableStatus = (req, res) => {
       
      // console.log(req.body.password);
      UpdateCheffAvailableStatus(req.body.cheffId,req.body.cheffstatus,( data) => {
          
     
    res.send(data);
        return res
      });
    }



    
      // Retrieve all Customers from the database.
  exports.getAllCreditedTransactionByCheff = (req, res) => {
    // console.log(req.body.password);
    getAllCreditedTransactionByCheff(req.body.cheffId,( data) => {
     console.log("Name"+req.body.cheffId);

res.send(data);
   return res
 });
   };
 


         // Retrieve all Customers from the database.
  exports.getAllDebitedTransactionByCheff = (req, res) => {
    // console.log(req.body.password);
    getAllDebitedTransactionByCheff(req.body.cheffId,( data) => {
     console.log("Name"+req.body.cheffId);

res.send(data);
   return res
 });
   };
 








            // Retrieve all Customers from the database.
  exports.Feedback = (req, res) => {
    // console.log(req.body.password);
    Feedback(req.body.feedback,req.body.rating,req.body.userid,req.body.cheffid,req.body.bookingid,( data) => {
  

res.send(data);
   return res
 });
   };

   




         // Retrieve all Customers from the database.
         exports.getUserRatingById = (req, res) => {
          // console.log(req.body.password);
          getUserRatingById(req.body.userid,req.body.cheffid,req.body.bookingid,( data) => {
           console.log("Name"+req.body.cheffId);
      
      res.send(data);
         return res
       });
         };
       
      









        
  // Retrieve all Customers from the database.
  exports.getFeedBack = (req, res) => {
    getFeedBack((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };




            
  // Retrieve all Customers from the database.
  exports.getCheffInfo = (req, res) => {
    getCheffInfo((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };




   
  exports.UpdateUserPassword = (req, res) => {
       
    // console.log(req.body.password);
    UpdateUserPassword(req.body.mobilenumber,req.body.password, ( data) => {

   
  res.send(data);
      return res
    });
  };



  exports.UpdateUserCheff = (req, res) => {
       
    // console.log(req.body.password);
    UpdateUserCheff(req.body.mobilenumber,req.body.password, ( data) => {
      
   
  res.send(data);
      return res
    });
  };
