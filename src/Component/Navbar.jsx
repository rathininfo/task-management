import { useState } from "react";


const Navbar = () => {

    const userName = "Rathindra Nath Biswas"; 
  
    return (
        <nav className="bg-slate-200 max-w-full mx-auto ">
       <div className="px-12 py-4">
           <div className="flex justify-between">
              <div>
                <h1 className="font-bold text-2xl">TaskHub</h1>
            </div>
        
        <div className="flex">
            <div className="">
              
            </div>
            <button className="btn btn-primary"> <i class="fa-solid fa-plus"></i> Create Task</button>
        </div>

        <div>
            <img className="h-10 w-full rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/b5e62aeee5d5fe8b24dfb3c8f4f3ce75-1557413770913/e1c0c69c-1206-4a88-9c1d-a7ae042b3d31.jpg" alt="" />
        </div>
          </div>
       </div>
            
        </nav>
    );
};

export default Navbar;