const sql = require("./db.js");



// constructor
const userRegisters = function(updatemenu4) {
    this.adminId = updatemenu4.adminId;
    this.id = updatemenu4.id;
    this.menu3 = updatemenu4.menu3;
    this.menu4 = updatemenu4.menu4;
    this.userId = updatemenu4.userId;
  };
  
  
  
  
  
  userRegisters.create = (newCustomer, result) => {
    console.log(newCustomer);
    // sql.query("INSERT INTO userRegister SET ?", newCustomer, (err, res) => {
    //   if (err) {
    //     console.log("error: ", err);
    //     result(err, null);
    //     return;
    //   }
  
    //   console.log("created customer: ", { id: res.insertId, ...newCustomer });
    //   result(null, { id: res.insertId, ...newCustomer });
    // });
  };




//Register User
InsertBookingInfo = (cheffId,bookingId,adminId, result) => {
  sql.query("INSERT INTO bookings  SET cheffId=?,bookingId=?,adminId=?", [cheffId,bookingId,adminId], (err, rest) =>{ 
    
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










 UpdateCheffStatus = ( cheffId,Price,result) => {

  // sql.query("SELECT * from planning ", (err, res) => {
  // })

sql.query("UPDATE cheffprofile SET  cheffstatus= '0' ,wallet=wallet-'"+Price +"'   WHERE id = '"+cheffId +"'", (err, rest) =>{ 

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







  UpdateAssignInBookService = ( bookingId,result) => {

    // sql.query("SELECT * from planning ", (err, res) => {
    // })
  
  sql.query("UPDATE bookservice  SET  assign= '0' ,cheffdecision='4'  WHERE id = '"+bookingId +"'", (err, rest) =>{ 
  
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

















  UpdateCheffInBookService = ( bookingId,cheffId,workStatus,cheffDecision,result) => {

    // sql.query("SELECT * from planning ", (err, res) => {
    // })
  
  sql.query("UPDATE bookservice SET  cheffId='"+cheffId +"' ,workStatus='"+workStatus +"' ,cheffDecision='"+cheffDecision +"'   WHERE ID = '"+bookingId +"'", (err, rest) =>{ 
  
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









    UpdateCheffDecisionAfterSend = ( bookingId,cheffDecision,result) => {

      // sql.query("SELECT * from planning ", (err, res) => {
      // })
    
    sql.query("UPDATE bookservice SET cheffDecision='"+cheffDecision +"'   WHERE ID = '"+bookingId +"'", (err, rest) =>{ 
    
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















    getCheffPayment = ( ID,wallet,result) => {
      sql.query("UPDATE cheffprofile SET  wallet = wallet+'"+wallet  +"'  WHERE ID= '"+ID +"'", (err, rest) =>{ 
     
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(rest)
        return;
      })
    };
    
  














  //get All User Info
  getAllCategories = result => {
    sql.query("SELECT * from categories ", (err, res) => {
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
InsertCategoriesByAdmin = (category,CategoryImage, result) => {
  sql.query("INSERT INTO categories  SET category=?,CategoryImage=?", [category,CategoryImage], (err, rest) =>{ 
    
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








//Register User
Insertmenu1ItemsByAdmin = (menu1, result) => {
  sql.query("INSERT INTO menu1items  SET menu1=?", [menu1], (err, rest) =>{ 
    
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




//Register User
InsertDesertItemsByAdmin = (desertName, result) => {
  sql.query("INSERT INTO adddesesrt  SET desertName=?", [desertName], (err, rest) =>{ 
    
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









  //get All User Info
  getAllMenu1Items = result => {
    sql.query("SELECT * from menu1items ", (err, res) => {
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
Insertmenu2ItemsByAdmin = (menu2, result) => {
  sql.query("INSERT INTO menu2items  SET menu2=?", [menu2], (err, rest) =>{ 
    
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







//Register User
Insertmenu3ItemsByAdmin = (menu3, result) => {
  sql.query("INSERT INTO menu3items  SET menu3=?", [menu3], (err, rest) =>{ 
    
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






//Register User
Insertmenu4ItemsByAdmin = (menu1,menu1Id,menu2,menu2Id,menu3,menu3Id,menu4, result) => {
  sql.query("INSERT INTO menu4items  SET  menu1=? , menu1Id=?, menu2=? ,menu2Id=?  ,menu3=?,menu3Id=?, menu4=?", [menu1,menu1Id,menu2,menu2Id,menu3,menu3Id,menu4], (err, rest) =>{ 
    
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
AddState = ( StateName, result) => {


  
  sql.query("INSERT INTO state  SET  StateName=?  ", [StateName], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    let nums=[
      rest
    ]
    result(nums)
    return;
  })
  
}



AddCity = ( StateName,CityName, result) => {


  
  sql.query("INSERT INTO city   SET  StateName=? , CityName=?   ", [StateName,CityName], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    let nums=[
      rest
    ]
    result(nums)
    return;
  })
  
}

AddArea = ( StateName,CityName,AreaName, result) => {


  
  sql.query("INSERT INTO area   SET  StateName=? , CityName=? , AreaName=? ", [StateName,CityName,AreaName], (err, rest) =>{ 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    let nums=[
      rest
    ]
    result(nums)
    return;
  })
  
}




//get All States 
getAllStates = result => {
  sql.query("SELECT StateName from state ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};





//get User By Email
getAllCities = ( StateName, result) => {
  sql.query("SELECT * from city  where StateName= '"+StateName +"'  ", (err, res) => {
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
getAllAreas = ( StateName,CityName,result) => {
  sql.query("SELECT * from area  where StateName= '"+StateName +"' and CityName= '"+CityName +"' ", (err, res) => {
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




getCheffInfoByLocation = ( StateName,CityName,AreaName,result) => {
  console.log("StateName"+StateName.length);
  console.log("CityName"+CityName.length);
  console.log("AreaName"+AreaName.length);



if(StateName.length!=0&&CityName.length!=0&&AreaName.length!=0)
{
console.log("Hyy");
  sql.query("SELECT *  FROM cheffprofile     where State= '"+StateName +"' and City= '"+CityName +"' and Area= '"+AreaName +"' and cheffstatus= '1' and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });
}
if(StateName.length!=0&&CityName.length!=0&&AreaName.length==0){
  console.log("Hello");

  sql.query("SELECT *  FROM cheffprofile    where State= '"+StateName +"' and City= '"+CityName +"'  and cheffstatus= '1' and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}


if(StateName.length==0&&CityName.length!=0&&AreaName.length!=0){
  sql.query("SELECT *  FROM cheffprofile      where City= '"+CityName +"'  and Area= '"+AreaName +"'  and cheffstatus= '1' and wallet>300 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}



 if(StateName.length!=0&&CityName.length==0&&AreaName.length!=0){
  sql.query("SELECT *  FROM cheffprofile   where State= '"+StateName +"'   and Area= '"+AreaName +"'  and cheffstatus= '1'  and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}



if(StateName.length!=0&&CityName.length==0&&AreaName.length==0){
  sql.query("SELECT *  FROM cheffprofile   where State= '"+StateName +"'   and cheffstatus= '1'  and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}



 if(StateName.length==0&&CityName.length!=0&&AreaName.length==0){
  sql.query("SELECT *  FROM cheffprofile  where City= '"+CityName +"'   and cheffstatus= '1' and wallet>300 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}


 if(StateName.length==0&&CityName.length==0&&AreaName.length!=0){
  sql.query("SELECT *  FROM cheffprofile  where Area= '"+AreaName +"'   and cheffstatus= '1' and wallet>300", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res);

   result( res);
   return;
  });

}
};




//get All User Info
getAllBookingsByAdmin = ( adminId,result) =>  {
  sql.query("SELECT d.bookingDate,b.ID,r.State,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,p.cheffDecision, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id)    JOIN cheffprofile  p  ON (p.id=f.cheffid)               where b.userId= c.userId and b.userId= d.userId and f.adminid= '"+adminId +"' group by f.admindate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};








//Register User
InsertPlanningData= (personsnumbers,Price,result) => {
  sql.query("INSERT INTO planning  SET personnumbers=?,Price=?", [personsnumbers,Price], (err, rest) =>{ 
    
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



//get All States 
getPlanningInfo = result => {
  sql.query("SELECT * from planning ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};




//get All States 
getAllMenu3Items = result => {
  sql.query("SELECT * from menu3items ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};






//get All States 
getAllMenu4Items = result => {
  sql.query("SELECT * from menu4items ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};










//get User By Email
getAmountDeduction = ( PersonsNumber, result) => {
  
  sql.query("SELECT price from planning where personnumbers = '"+PersonsNumber +"'", (err, res) => {
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





//get All Surveyed User Info
getAllMenu2Items = result => {
  sql.query("SELECT * from menu2items ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};




//get All Surveyed User Info
getAllAreaInfo = result => {
  sql.query("SELECT * from area ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};



//get All Surveyed User Info
getAllStateInfo = result => {
  sql.query("SELECT * from state ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};





//get All Surveyed User Info
getAllCityInfo = result => {
  sql.query("SELECT * from city ", (err, res) => {
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
getAllBookingsOfCheffById = ( cheffId,result) =>  {

  sql.query("SELECT d.bookingDate,b.ID,r.State,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,b.cheffDecision, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id) and   f.cheffId= '"+cheffId +"'   JOIN cheffprofile  p  ON (p.id=f.cheffid)     where b.userId= c.userId and b.userId= d.userId and b.cheffDecision=4 group by b.bookingDate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};
          




//get All User Info
getAllAccpetedBookingsOfUser= ( userId,result) =>  {
  sql.query("SELECT d.bookingDate,b.ID,r.State,b.cheffdecision,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,b.workstatus,b.cheffId, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id)    JOIN cheffprofile  p  ON (p.id=f.cheffid)     where b.userId= c.userId and b.userId= d.userId and   b.cheffdecision>0  and   b.userId= '"+userId +"' group by f.admindate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};
   
















//get All User Info
getAllAccpetedBookingsOfCheffById = ( cheffId,result) =>  {
  sql.query("SELECT d.bookingDate,b.ID,r.State,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,b.cheffDecision, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id)    JOIN cheffprofile  p  ON (p.id=f.cheffid)     where b.userId= c.userId and b.userId= d.userId and b.cheffDecision='1'  and f.cheffId= '"+cheffId +"'group by f.admindate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};
    


getAllCancelledBookingsOfCheffById = ( cheffId,result) =>  {
  sql.query("SELECT d.bookingDate,b.ID,r.State,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,b.cheffDecision, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id)    JOIN cheffprofile  p  ON (p.id=f.cheffid)     where b.userId= c.userId and b.userId= d.userId and b.cheffDecision='3'  and f.cheffId= '"+cheffId +"'group by f.admindate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};
    




getAllCompletedBookingsOfCheffById = ( cheffId,result) =>  {
  sql.query("SELECT d.bookingDate,b.ID,r.State,f.adminid,r.Area,r.City,r.id,r.Email,f.adminDate,r.MobileNumber,p.email,p.mobilenumber,p.Experience,p.currentHotel,p.cheffStatus,b.cheffDecision, group_concat( distinct c.menu4) as menu4 ,group_concat(distinct  d.desertName) as desertName,b.menu1,b.menu2,b.menu3,b.category FROM bookservice  b        JOIN userregister  r  ON (r.id=b.userId)             JOIN usermenu4items  c  ON (c.bookingDate=b.bookingDate) JOIN userdesert d ON (d.bookingDate=b.bookingDate)    join bookings f on (f.bookingid=b.id)    JOIN cheffprofile  p  ON (p.id=f.cheffid)     where b.userId= c.userId and b.userId= d.userId and b.cheffDecision=2  and f.cheffId= '"+cheffId +"'group by f.admindate ;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result( res);
  });
};
    
















UpdateMenu1ByAdmin = ( menu1Id,menu1,result) => {

  // sql.query("SELECT * from planning ", (err, res) => {
  // })

sql.query("UPDATE menu1items SET  menu1='"+menu1 +"'   WHERE ID = '"+menu1Id +"'", (err, rest) =>{ 

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





  UpdateMenu2ByAdmin = ( menu2Id,menu2,result) => {

    // sql.query("SELECT * from planning ", (err, res) => {
    // })
  
  sql.query("UPDATE menu2items SET  menu2='"+menu2 +"'   WHERE ID = '"+menu2Id +"'", (err, rest) =>{ 
  
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






    UpdateMenu3ByAdmin = ( menu3Id,menu3,result) => {

      // sql.query("SELECT * from planning ", (err, res) => {
      // })
    console.log(menu3Id+menu3);
    sql.query("UPDATE menu3items SET  menu3='"+menu3 +"'   WHERE ID = '"+menu3Id +"'", (err, rest) =>{ 
    
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
  
  



      UpdateMenu4ByAdmin = ( menu4Id,menu4,result) => {

        // sql.query("SELECT * from planning ", (err, res) => {
        // })
 
      sql.query("UPDATE menu4items SET  menu4='"+menu4 +"'   WHERE ID = '"+menu4Id +"'", (err, rest) =>{ 
      3
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







        UpdateDesertByAdmin = ( desertId,desertName,result) => {

          // sql.query("SELECT * from planning ", (err, res) => {
          // })
   
        sql.query("UPDATE adddesesrt SET  desertName='"+desertName +"'   WHERE ID = '"+desertId +"'", (err, rest) =>{ 
        
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
getCategoryById= ( ID, result) => {
  sql.query("SELECT * from categories where id= '"+ID +"' ", (err, res) => {
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
getPlanningPriceByPersonNumber= ( personsNumber, result) => {
  sql.query("SELECT * from planning where personnumbers= '"+personsNumber +"' ", (err, res) => {
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






















UpdateCategoryByAdmin = ( ID,category,CategoryImage,result) => {

  // sql.query("SELECT * from planning ", (err, res) => {
  // })

sql.query("UPDATE categories SET  category='"+category +"' ,CategoryImage='"+CategoryImage +"'    WHERE ID = '"+ID +"'", (err, rest) =>{ 
3
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















  UpdateMenu1ByAdminInMenu4 = ( menu1Id,menu1,result) => {

    // sql.query("SELECT * from planning ", (err, res) => {
    // })
  
  sql.query("UPDATE menu4items SET  menu1='"+menu1 +"'   WHERE menu1Id = '"+menu1Id +"'", (err, rest) =>{ 
  
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







    UpdatePlanInfoByAdmin = ( ID,Price,personnumbers,result) => {

      // sql.query("SELECT * from planning ", (err, res) => {
      // })
    
    sql.query("UPDATE planning SET  Price='"+Price +"' , personnumbers='"+personnumbers +"'  WHERE ID = '"+ID +"'", (err, rest) =>{ 
    
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
  






      DeleteMenu1ItemsByAdmin = ( ID,result) => {

        // sql.query("SELECT * from planning ", (err, res) => {
        // })
      
      sql.query("DELETE FROM menu1items WHERE ID='"+ID +"';", (err, rest) =>{ 
      
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
    
  







      DeleteMenu2ItemsByAdmin = ( ID,result) => {

        // sql.query("SELECT * from planning ", (err, res) => {
        // })
      
      sql.query("DELETE FROM menu2items WHERE ID='"+ID +"';", (err, rest) =>{ 
      
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
    








      



          
        DeleteMenu3ItemsByAdmin = ( ID,result) => {

          // sql.query("SELECT * from planning ", (err, res) => {
          // })
        
        sql.query("DELETE FROM menu3items WHERE ID='"+ID +"';", (err, rest) =>{ 
        
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






          DeleteMenu4ItemsByAdmin = ( ID,result) => {

            // sql.query("SELECT * from planning ", (err, res) => {
            // })
          
          sql.query("DELETE FROM menu4items WHERE ID='"+ID +"';", (err, rest) =>{ 
          
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





            
          DeleteDesertItemsByAdmin = ( ID,result) => {

            // sql.query("SELECT * from planning ", (err, res) => {
            // })
          
          sql.query("DELETE FROM adddesesrt WHERE ID='"+ID +"';", (err, rest) =>{ 
          
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



            DeleteCategoryItemsByAdmin = ( ID,result) => {

              // sql.query("SELECT * from planning ", (err, res) => {
              // })
            
            sql.query("DELETE FROM categories WHERE ID='"+ID +"';", (err, rest) =>{ 
            
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
  



              DeletePlanByAdmin = ( ID,result) => {

                // sql.query("SELECT * from planning ", (err, res) => {
                // })
              
              sql.query("DELETE FROM planning WHERE ID='"+ID +"';", (err, rest) =>{ 
              
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










    UpdateMenu2ByAdminInMenu4 = ( menu2Id,menu2,result) => {

      // sql.query("SELECT * from planning ", (err, res) => {
      // })
    
    sql.query("UPDATE menu4items SET  menu2='"+menu2 +"'   WHERE menu2Id = '"+menu2Id +"'", (err, rest) =>{ 
    
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





      UpdateMenu3ByAdminInMenu4 = ( menu3Id,menu3,result) => {

        // sql.query("SELECT * from planning ", (err, res) => {
        // })
      
      sql.query("UPDATE menu4items SET  menu3='"+menu3 +"'   WHERE menu3Id = '"+menu3Id +"'", (err, rest) =>{ 
      
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
getCheffProfileById = ( ID, result) => {
  sql.query("SELECT * from cheffprofile where ID= '"+ID +"' ", (err, res) => {
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











//BookService
CheffUplaodbase64 = ( userId, base64 ,result) => {


  sql.query("select * from cheffupload where userId ='"+userId+"' ",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      sql.query("UPDATE cheffupload SET  base64 = '"+base64  +"'  WHERE userId= '"+userId +"'", (err, rest) =>{ 
 
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

  sql.query("INSERT INTO cheffupload  SET  base64=? , userId=? ", [base64,userId], (err, rest) =>{ 
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
getAdminProfileById = ( ID, result) => {
  sql.query("SELECT * from admin where ID= '"+ID +"' ", (err, res) => {
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










//BookService
AdminUplaodbase64 = ( userId, base64 ,result) => {


  sql.query("select * from admin where userId ='"+userId+"' ",(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
   
    // console.log(res.UserEmail);
    console.log(res.length);
    if (res.length>0)
    {
      sql.query("UPDATE admin SET  base64 = '"+base64  +"'  WHERE userId= '"+userId +"'", (err, rest) =>{ 
 
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

  sql.query("INSERT INTO admin SET  base64=? , userId=? ", [base64,userId], (err, rest) =>{ 
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
getCheffUploadedImage = ( userId, result) => {
  sql.query("SELECT * from cheffupload where userId= '"+userId +"' ", (err, res) => {
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
getAdminUploadedImage = ( userId, result) => {
  sql.query("SELECT * from adminupload where userId= '"+userId +"' ", (err, res) => {
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
getAllTransaction = ( cheffId, result) => {
  
  sql.query("SELECT * from transaction where cheffId = '"+cheffId +"'", (err, res) => {
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











//get All User Info
getCountOfUsers = result => {
  sql.query("select count(id) from userregister;", (err, res) => {
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
getCountOfCheffs = result => {
  sql.query("select count(id) from cheffprofile;", (err, res) => {
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
getCountOfBookings = result => {
  sql.query("select count(id) from bookservice;", (err, res) => {
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
getCountOfBookingsAccpected = result => {
  sql.query("select count(id) from bookservice where cheffdecision='1';", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};






//get User By Email
CalculateAverageRating = ( cheffId, result) => {
  
  sql.query("select count(rating) as count ,sum(rating) as sum from feedback where  cheffId = '"+cheffId +"'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

   console.log(res[0].count);
   console.log(res[0].sum);
   let avg=res[0].sum/res[0].count
   console.log(avg);

   sql.query("UPDATE cheffprofile SET   average= '"+avg +"' WHERE id = '"+cheffId +"'", (err, rest) =>{
    if (err) {
      console.log("error: ", err);
      error=[
        {
        "error":404
       }
      ]
      result(error);
      return;
    }
     console.log(err);
     console.log(rest); 
   let resp=[
   rest
   ]
    
    resp=[
        {
        "sucess":200
      }
        ]
        result( resp);
     return;
     
    
     
  })

  });
};





DeleteBookedServiceByUser = ( userid,bookingdate,bookingid,result) => {

  // sql.query("SELECT * from planning ", (err, res) => {
  // })

sql.query("DELETE FROM bookservice WHERE userid='"+userid +"' and  ID='"+bookingid +"' and bookingdate='"+bookingdate +"'", (err, rest) =>{ 

if (err) {
console.log("error: ", err);
result(err, null);
return;
}



resp=[
  rest
  ]
 
  })
  
  


  sql.query("DELETE FROM usermenu4items WHERE userid='"+userid +"' and bookingdate='"+bookingdate +"'", (err, rest) =>{ 

    if (err) {
    console.log("error: ", err);
    result(err, null);
    return;
    }
    
    
    
    resp=[
      rest
      ]
     
      })


      
sql.query("DELETE FROM userdesert WHERE userid='"+userid +"' and bookingdate='"+bookingdate +"'", (err, rest) =>{ 

  if (err) {
  console.log("error: ", err);
  result(err, null);
  return;
  }
  
  
  
  resp=[
    rest
    ]
   
    })
restt=[
{
  msg:"deleter sucessfully"
}
]
    result(restt)
    return;





  }




















  module.exports = userRegisters;