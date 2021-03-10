const sql = require("./db.js");


// constructor
const userRegister = function(user) {
    this.Name = user.Name;
    this.Email = user.Email;
    this.MobileNumber = user.MobileNumber;
    this.Age = user.Age;
    this.password = user.password;
  };
  
  userRegister.create = (newCustomer, result) => {
    sql.query("INSERT INTO userRegister SET ?", newCustomer, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created customer: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    });
  };










//Register User
RegisterUser = (Name, Email, MobileNumber,StateName,CityName,AreaName,  password, result) => {


    sql.query("select * from userregister where Email ='"+Email+"' ",(err, res) => {
      // if (err) {
      //   console.log("error: ", err);
      //   result(err, null);
      //   return;
      // }
     
      // console.log(res.UserEmail);
      console.log(res.length);
      if (res.length>0)
      {
        let num=[
          {
          error:"issue"
         }                                              
        ]
         console.log("hyy");
      var  ss= "username and passowrd already exists";
      result(num)
      return;
      }
  else {
  
    sql.query("INSERT INTO userregister  SET Name=? , Email=? ,MobileNumber=?,State=?,City=?,Area=?,password=?", [Name,Email,MobileNumber,StateName,CityName,AreaName,password], (err, rest) =>{ 
    })
    let nums=[
    
    ]
    result(nums)
      return;
  }
  })
  }
  
  
  
  
  
  




//Login
LoginUser = ( Email, password, result) => {


    //     sql.query("select * from login where Email ='"+Email+"' and password = '"+password+"'",(err, res) => {
    //       // if (err) {
    //       //   console.log("error: ", err);
    //       //   result(err, null);
    //       //   return;
    //       // }
         
    //       // console.log(res.UserEmail);
    //       console.log(res.length);
    //       if (res.length>0)
    //       {
    //         console.log(res);
    //         result(res);
    //         return;
           
    //       }
    // else {
     sql.query("select * from userregister where Email ='"+Email+"' and password = '"+password+"'",(err, resp) => {
       console.log(resp);
     
       if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    
    // if(ress==[])
    // {
    //   result("empty");
    //   return;
    // }
    // else if(ress!=[])
    // {
    //   sql.query("INSERT INTO login (UserEmail,password ) VALUES ('"+UserEmail+"', '"+password+"')", { 
    
    //    })
    //   result(ress);l
    //   return;
    // }
    
    
    console.log(resp.length);
    console.log(Email);
    if(resp.length>0)
    {
    
      // sql.query("INSERT INTO login  SET Email=? ,password=?", [Email,password], (err, res) =>{ 
      // })
      //      result(resp);
      //      return;
    
    
        resp
      
      result(resp)
      return;
    }
    
     if(resp.length==0){
       let num=[
    
       ]
       console.log("hyy");
    result(num)
    return;
    }
    });
    
    };
      







//Register User
RegisterAdmin = (Name, Email, password, result) => {


  sql.query("select * from admin where Email ='"+Email+"' ",(err, res) => {
    // if (err) {
    //   console.log("error: ", err);
    //   result(err, null);
    //   return;
    // }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      let num=[
        {
        error:"issue"
       }
      ]
       console.log("hyy");
    var  ss= "username and passowrd already exists";
    result(num)
    return;
    }
else {

  sql.query("INSERT INTO admin  SET Name=? , Email=?,password=?", [Name,Email,password], (err, rest) =>{ 
  })
  let nums=[
  
  ]
  result(nums)
    return;
}
})
}










//Login
LoginAdmin = ( Email, password, result) => {


  //     sql.query("select * from login where Email ='"+Email+"' and password = '"+password+"'",(err, res) => {
  //       // if (err) {
  //       //   console.log("error: ", err);
  //       //   result(err, null);
  //       //   return;
  //       // }
       
  //       // console.log(res.UserEmail);
  //       console.log(res.length);
  //       if (res.length>0)
  //       {
  //         console.log(res);
  //         result(res);
  //         return;
         
  //       }
  // else {
   sql.query("select * from admin where Email ='"+Email+"' and password = '"+password+"'",(err, resp) => {
     console.log(resp);
   
     if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  
  // if(ress==[])
  // {
  //   result("empty");
  //   return;
  // }
  // else if(ress!=[])
  // {
  //   sql.query("INSERT INTO login (UserEmail,password ) VALUES ('"+UserEmail+"', '"+password+"')", { 
  
  //    })
  //   result(ress);l
  //   return;
  // }
  
  
  console.log(resp.length);
  console.log(Email);
  if(resp.length>0)
  {
  
    // sql.query("INSERT INTO login  SET Email=? ,password=?", [Email,password], (err, res) =>{ 
    // })
    //      result(resp);
    //      return;
  
  
      resp
    
    result(resp)
    return;
  }
  
   if(resp.length==0){
     let num=[
  
     ]
     console.log("hyy");
  result(num)
  return;
  }
  });
  
  };
    





//Register User
RegisterCheff = (Name, Email, password, result) => {


  sql.query("select * from cheffprofile where Email ='"+Email+"' ",(err, res) => {
    // if (err) {
    //   console.log("error: ", err);
    //   result(err, null);
    //   return;
    // }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      let num=[
        {
        error:"issue"
       }
      ]
       console.log("hyy");
    var  ss= "username and passowrd already exists";
    result(num)
    return;
    }
else {

  sql.query("INSERT INTO cheffprofile  SET Name=? , Email=?, password=?", [Name,Email,password], (err, rest) =>{ 
  })
  let nums=[
  
  ]
  result(nums)
    return;
}
})
}







//Login
LoginCheff = ( Email, password, result) => {


  //     sql.query("select * from login where Email ='"+Email+"' and password = '"+password+"'",(err, res) => {
  //       // if (err) {
  //       //   console.log("error: ", err);
  //       //   result(err, null);
  //       //   return;
  //       // }
       
  //       // console.log(res.UserEmail);
  //       console.log(res.length);
  //       if (res.length>0)
  //       {
  //         console.log(res);
  //         result(res);
  //         return;
         
  //       }
  // else {
   sql.query("select * from cheffprofile where Email ='"+Email+"' and password = '"+password+"'",(err, resp) => {
     console.log(resp);
   
     if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  
  // if(ress==[])
  // {
  //   result("empty");
  //   return;
  // }
  // else if(ress!=[])
  // {
  //   sql.query("INSERT INTO login (UserEmail,password ) VALUES ('"+UserEmail+"', '"+password+"')", { 
  
  //    })
  //   result(ress);l
  //   return;
  // }
  
  
  console.log(resp.length);
  console.log(Email);
  if(resp.length>0)
  {
  
    // sql.query("INSERT INTO login  SET Email=? ,password=?", [Email,password], (err, res) =>{ 
    // })
    //      result(resp);
    //      return;
  
  
      resp
    
    result(resp)
    return;
  }
  
   if(resp.length==0){
     let num=[
  
     ]
     console.log("hyy");
  result(num)
  return;
  }
  });
  
  };
    







//Register User
BookService = (Name, bookingDate, menu1, menu2, menu3, homeAddrs, personsNumber,category,assign,userId,StateName,CityName,AreaName, result) => {


 

  sql.query("INSERT INTO bookservice  SET Name=?,bookingDate=?,menu1=?,menu2=?,menu3=?,homeAddrs=?,personsNumber=?,category=?,assign=?,userId=?,State=?,City=?,Area=?", [Name,bookingDate,menu1,menu2,menu3,homeAddrs,personsNumber,category,assign,userId,StateName,CityName,AreaName], (err, rest) =>{ 
  
    let num=[
      rest
    ]
    result(num)
    return;
})
}




//get User By Email
getCategoryItemsById = ( ID, result) => {
  sql.query("SELECT * from categories where ID= '"+ID +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};








//get User By Email
getUserProfileById = ( ID, result) => {
  sql.query("SELECT * from userregister where ID= '"+ID +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};









UpdateUserInfo = ( ID,Name,Email,MobileNumber,result) => {
  console.log(Email);
sql.query("UPDATE userregister SET  Name= '"+Name +"' , Email= '"+Email +"' , MobileNumber= '"+MobileNumber +"' WHERE id = '"+ID +"'", (err, rest) =>{ 

if (err) {
console.log("error: ", err);
result(err, null);
return;
}



resp=[
  rest
  ]
  result(resp)
  return;
  })
  
  
  }
  







  UpdateCheffInfo = ( ID,Name,Email,Experience,currentHotel,MobileNumber,Area,City,State,result) => {
    console.log(Email);
  sql.query("UPDATE cheffprofile SET  Name= '"+Name +"' , Email= '"+Email +"' , Experience= '"+Experience +"'  , currentHotel= '"+currentHotel +"'  , MobileNumber= '"+MobileNumber +"'  , Area= '"+Area +"'  , City= '"+City +"' , State= '"+State +"' WHERE id = '"+ID +"'", (err, rest) =>{ 
  
  if (err) {
  console.log("error: ", err);
  result(err, null);
  return;
  }
  
  
  
  resp=[
    rest
    ]
    result(resp)
    return;
    })
    
    
    }
    























 
//BookService
UserUplaodbase64 = ( userId, base64 ,result) => {


  sql.query("select * from userupload where userId ='"+userId+"' ",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      sql.query("UPDATE userupload SET  base64 = '"+base64  +"'  WHERE userId= '"+userId +"'", (err, rest) =>{ 
 
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(rest)
        return;
      })
    }
else {

  sql.query("INSERT INTO userupload  SET  base64=? , userId=? ", [base64,userId], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(rest)
    return;
  })
  
  
}
})
}








//BookService
CheffUplaodbase64 = ( cheffId, base64 ,result) => {


  sql.query("select * from cheffupload where userId ='"+cheffId+"' ",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      sql.query("UPDATE cheffupload SET  base64 = '"+base64  +"'  WHERE userId= '"+cheffId +"'", (err, rest) =>{ 
 
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(rest)
        return;
      })
    }
else {

  sql.query("INSERT INTO cheffupload  SET  base64=? , userId=? ", [base64,cheffId], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(rest)
    return;
  })
  
  
}
})
}


























//get User By Email
getUserUploadedImage = ( userId, result) => {
  sql.query("SELECT * from userupload where userId= '"+userId +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};




//get User By Email
getCheffUploadedImage = ( cheffId, result) => {
  sql.query("SELECT * from cheffupload where userId= '"+cheffId +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};



















//get User By Email
getBookedServiceById = ( userId, result) => {
  sql.query("SELECT d.bookingDate, b.ID,group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b    JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate) where b.userId= '"+userId +"' and c.userId= '"+userId +"' and d.userId= '"+userId +"' group by c.bookingDate ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};
















//Register User
Menu1Items = (menu1,  result) => {


 

  sql.query("INSERT INTO menu1items  SET menu1=?", [menu1], (err, rest) =>{ 
   
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(rest)
    return;
})
}




//Register User
Menu2Items = (menu1, menu2, result) => {
 sql.query("INSERT INTO menu2items  SET menu1=?,menu2=?", [menu1,menu2], (err, rest) =>{ 
   
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(rest)
    return;
})
}


//multiselect

//Register User
Menu3Items = (menu2,  menu3, result) => {
  sql.query("INSERT INTO menu3items  SET menu2=?,menu3=?", [menu2,menu3], (err, rest) =>{ 
    
     if (err) {
       console.log("error: ", err);
       result(err, null);
       return;
     }
     result(rest)
     return;
 })
 }






//Register User
AddDesert = (adminId,  desertName, result) => {
  sql.query("INSERT INTO addDesesrt  SET adminId=?,desertName=?", [adminId,desertName], (err, rest) =>{ 
    
     if (err) {
       console.log("error: ", err);
       result(err, null);
       return;
     }
     result(rest)
     return;
 })
 }





















//Admin Insert //add user selected menu 4 items
InsertUserDesert = (array, result) => {
  console.log(array);

  var userId = [];
  var desertName=[];

  var bookingDate=[];
 
    for( i=0;i<array.length;i++)
    {
      userId=array[i].userId
  console.log("userId"+userId);
    }
 

  for( i=0;i<array.length;i++)
  {
    desertName[i]=array[i].desertName
  }
  console.log("desertName"+desertName);

  for( i=0;i<array.length;i++)
  {
    bookingDate[i]=array[i].bookingDate
  }


 for(i=0;i<array.length;i++)
 {
  sql.query("INSERT INTO userdesert  SET desertName=?,userId=?,bookingDate=?", [array[i].desertName,array[i].userId,array[i].bookingDate], (rest) =>{ 
    
  

 
 
})
}
let nums=[
  {
  completed:"completed"
  }
]
result(nums,null)




// let query ="UPDATE  menu4items  SET userId= '"+userId +"' where  ID IN(?)"
//     sql.query(query, [ID], function (err, res) {
//       console.log(res);
 
//      if (err) {
//        console.log("error: ", err);
//        result(err, null);
//        return;
//      }
//      result(res)
//      return;
//  })
 }





//Admin Insert //add user selected menu 4 items
Menu4ItemsInsert = (array, result) => {
  console.log(array);

  var userId = [];
  var menu3=[];
  var menu4=[];
  var bookingDate=[];
 
    for( i=0;i<array.length;i++)
    {
      userId=array[i].userId
  console.log("userId"+userId);
    }
 

  for( i=0;i<array.length;i++)
  {
    menu3[i]=array[i].menu3
  }
  console.log("menu3"+menu3);

  for( i=0;i<array.length;i++)
  {
    menu4[i]=array[i].menu4
  }


  for( i=0;i<array.length;i++)
  {
    bookingDate[i]=array[i].bookingDate
  }

 for(i=0;i<array.length;i++)
 {
  sql.query("INSERT INTO usermenu4items  SET menu3=?,menu4=?,userId=?,bookingDate=?", [array[i].menu3,array[i].menu4,array[i].userId,array[i].bookingDate], (rest) =>{ 
    
  })
}

let nums=[
  {
  completed:"completed"
  }
]
result(nums,null)

 

// let query ="UPDATE  menu4items  SET userId= '"+userId +"' where  ID IN(?)"
//     sql.query(query, [ID], function (err, res) {
//       console.log(res);
 
//      if (err) {
//        console.log("error: ", err);
//        result(err, null);
//        return;
//      }
//      result(res)
//      return;
//  })
 }












//Register User
CategoryItems = (category,CategoryImage, result) => {
  sql.query("INSERT INTO categories  SET category=?,CategoryImage=?", [category,CategoryImage], (err, rest) =>{ 
    
     if (err) {
       console.log("error: ", err);
       result(err, null);
       return;
     }
     result(rest)
     return;
 })
 }







//get All User Info
getCategoryItems = result => {
  console.log("connected");
  sql.query("SELECT *  FROM categories ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
    return
  });
};




//get All User Info
getMenu1Items = result => {
  sql.query("SELECT *  FROM menu1items ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


//get All User Info
getAllDeserts = result => {
  sql.query("SELECT *  FROM adddesesrt ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};




//get All User Info
getAllBookedServices = result => {
  sql.query("SELECT *  FROM bookservice ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};



//get All User Info
getUserNotifications = ( ID, result) => {
  sql.query("SELECT *  FROM bookservice where userId='"+ID +"' and cheffDecision='1' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(res);
  });
};




//get User By Email
getMenu2Items = ( menu1, result) => {
  sql.query("SELECT * from menu2items where menu1= '"+menu1 +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};





//get User By Email
getCheffProfileById= ( cheffId, result) => {
  sql.query("SELECT * from cheffprofile where id= '"+cheffId +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
};













//get User By Email
getMenu3Items = ( menu1, menu2, result) => {
  sql.query("SELECT * from menu3items where menu1= '"+menu1 +"' and  menu2= '"+menu2 +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};



//get User By Email
getMenu4Items = (menu1,menu2, menu3, result) => {
  sql.query("SELECT * from menu4items where menu1= '"+menu1 +"' and menu2= '"+menu2 +"' and menu3= '"+menu3 +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};









//get All User Info
getAllUserBookings = result => {
  var arr1 = new Array();
  // sql1="SELECT bookingId from bookings group by bookingId "
  //   sql.query(sql1, function (err, res) {
  //         if (err) throw err;
  //      console.log(res);
  //     for(i=0;i<res.length;i++)
  //     {
  //      arr1[i]=res[i].bookingId
  //     }
  //      console.log(arr1);
  //     var queryData=[arr1];

      sql2="SELECT d.bookingDate,b.ID,b.State,b.Area,b.City,r.id,r.email,b.personsNumber,r.MobileNumber, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    where b.userId= c.userId and b.userId= d.userId and b.assign=1   group by b.bookingDate"
      sql.query(sql2,  function (err, rest) {
          if (err) throw err;
console.log(rest);
result(null, rest);
return;
      })

 

};





//get All User Info
getAllUserBookingsAfterAssigning = result => {
  console.log("hyyyy");
  var arr1 = new Array();
  sql1="SELECT bookingId from bookings group by bookingId "
    sql.query(sql1, function (err, res) {
          if (err) throw err;
       console.log(res);
      for(i=0;i<res.length;i++)
      {
       arr1[i]=res[i].bookingId
      }
       console.log(arr1);
      var queryData=[arr1];

      sql2="SELECT d.bookingDate,b.ID,r.State,r.Area,r.City,r.id,r.email,b.personsNumber,r.MobileNumber, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate) JOIN bookings k     where b.userId= c.userId and b.userId= d.userId and    b.ID not in (?) group by b.bookingDate"
      sql.query(sql2, queryData, function (err, rest) {
          if (err) throw err;
console.log(rest);
result(null, rest);
return;
      })

        });

};

























//get User By Email
getAllAdminBookings = (menu1,menu2, menu3, result) => {
  sql.query("SELECT * from menu4items where menu1= '"+menu1 +"' and menu2= '"+menu2 +"' and menu3= '"+menu3 +"' ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};














//get All User Info
getAllCheffInfo = result => {
  sql.query("SELECT * from cheffprofile where cheffstatus= '1' and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};







//Register User
InsertCreditedTransaction = (cheffId, creditedAmount,  result) => {

  sql.query("SELECT  wallet from cheffprofile where ID= '"+cheffId +"'  ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
console.log(res[0].wallet);
console.log(creditedAmount);
var cm=Number(creditedAmount )
var  amount=Number(res[0].wallet )
var am=amount + cm
console.log(am);

var datetime = new Date();
console.log(datetime);
console.log(datetime);
  sql.query("INSERT INTO transaction  SET cheffId=?,creditedAmount=?,debitedAmount=?,walletAmount=?,CreditedDate=?", [cheffId,cm,0,amount,datetime], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    let num=[
      rest
    ]
    result(num)
    return;
})

  });
};









//Register User
InsertDebitedTransaction = (cheffId, debitedAmount,  result) => {

  sql.query("SELECT  wallet from cheffprofile where ID= '"+cheffId +"'  ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
console.log(res[0].wallet);
console.log(debitedAmount);
var dm=Number(debitedAmount )
var  amount=Number(res[0].wallet )
var am=amount - dm
console.log(am);

var datetime = new Date();
console.log(datetime);
console.log(datetime);
  sql.query("INSERT INTO transaction  SET cheffId=?,debitedAmount=?, creditedAmount=?,walletAmount=?,debitedDate=?", [cheffId,dm,0,amount,datetime], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    let num=[
      rest
    ]
    result(num)
    return;
})

  });
};











UpdateCreditedTransaction = ( cheffId,Price,result) => {
 
sql.query("UPDATE cheffprofile SET  wallet=wallet+'"+Price +"' WHERE id = '"+cheffId +"'", (err, rest) =>{ 

if (err) {
console.log("error: ", err);
result(err, null);
return;
}



resp=[
  rest
  ]
  result(resp)
  return;
  })
  
  
  }
  






  UpdateCheffAvailableStatus = ( cheffId,cheffstatus,result) => {

    // sql.query("SELECT * from planning ", (err, res) => {
    // })
  
  sql.query("UPDATE cheffprofile SET  cheffstatus= '"+cheffstatus +"'   WHERE id = '"+cheffId +"'", (err, rest) =>{ 
  
  if (err) {
  console.log("error: ", err);
  result(err, null);
  return;
  }
  
  
  
  resp=[
    rest
    ]
    result(resp)
    return;
    })
    
    
    }







//get User By Email
getAllCreditedTransactionByCheff = (cheffId, result) => {
  sql.query("SELECT * from transaction where cheffId= '"+cheffId +"' and debitedAmount=0", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};









//get User By Email
getAllDebitedTransactionByCheff = (cheffId, result) => {
  sql.query("SELECT * from transaction where cheffId= '"+cheffId +"' and creditedAmount=0", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};










//Register User
Feedback = (feedback,rating,userid,cheffid,bookingid, result) => {

  

  sql.query("select * from feedback where userid ='"+userid+"'  and  cheffid ='"+cheffid+"'  and    bookingid ='"+bookingid+"'   ",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      sql.query("UPDATE feedback SET  feedback = '"+feedback  +"' ,rating = '"+rating  +"'     WHERE userid ='"+userid+"'  and  cheffid ='"+cheffid+"'  and    bookingid ='"+bookingid+"'    ", (err, rest) =>{ 
 
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(rest)
        return;
      })
    }
else {

  sql.query("INSERT INTO feedback  SET feedback=?,rating=?,userid=?,cheffid=?,bookingid=?", [feedback,rating,userid,cheffid,bookingid], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(rest)
    return;
  })
  
  
}
})
 }





//get User By Email
getUserRatingById = (userid,cheffid,bookingid, result) => {
  sql.query("SELECT * from feedback where userid= '"+userid +"' and cheffid= '"+cheffid +"' and bookingid= '"+bookingid +"'   ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result(res);
   return;
  });
};














//get All User Info
getFeedBack = result => {
  sql.query("SELECT * from feedback", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};







//get All User Info
getCheffInfo= result => {
  sql.query("SELECT * from cheffprofile ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};





UpdatePasswordUser= ( mobilenumber,password ,result) => {

sql.query("UPDATE userregister SET  password= '"+password +"'  WHERE mobilenumber = '"+mobilenumber +"'", (err, rest) =>{ 

if (err) {
console.log("error: ", err);
result(err, null);
return;
}



resp=[
  rest
  ]
  result(resp)
  return;
  })
  
  
  }



  UpdatePasswordCheff= ( mobilenumber,password ,result) => {

    sql.query("UPDATE cheffprofile SET  password= '"+password +"'  WHERE mobilenumber = '"+mobilenumber +"'", (err, rest) =>{ 
    
    if (err) {
    console.log("error: ", err);
    result(err, null);
    return;
    }
    
    
    
    resp=[
      rest
      ]
      result(resp)
      return;
      })
      
      
      }
    



  module.exports = userRegister;