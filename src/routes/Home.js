import React from "react";
import pic from "../assets/pic.png"

const Home = () => {
    return (
        <div className="container pt-4 pb-2">
            <div className="d-flex justify-content-between">
               <div className="" style={{width: '24%'}}>
                <div className="bg-white border">
                    <div className="bg-red position-relative" style={{height: 100}}>
                        <div className="position-absolute bg-light p-1   rounded-pill" style={{bottom: "-30%", right: "39%"}}>
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={80} width={80} />
                        </div>
                    </div>
                    <div className="text-center" style={{marginTop: 60}}>
                        <h2>John Doe</h2>
                        <p className="grey">Graphic Designer at Self Employed</p>
                    </div>
                    <div className="text-center py-3" style={{borderTop: '1px solid #80808060'}}>
                        <h5 className="grey mb-0">Following</h5>
                        <h5 className="mb-0">34</h5>
                    </div>
                    <div className="text-center py-3" style={{borderTop: '1px solid #80808060'}}>
                        <h5 className="grey mb-0">Followers</h5>
                        <h5 className="mb-0">155</h5>
                    </div>
                    <div className="text-center py-3" style={{borderTop: '1px solid #80808060'}}>                        
                        <p className="red mb-0">View Profile</p>
                    </div>
                </div>
                {/* first second */}
               <div className="border mt-4 bg-white">   
               <div className="d-flex justify-content-between px-3 py-3 "  style={{borderBottom: '1px solid #80808060'}}>
                    <div className="d-flex flex-row align-items-center">
                                <h6 className="mb-0">Suggestions</h6>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                    </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-red text-white">&#10003;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                
                <div className="text-center py-3">       
                        <p className="red mb-0">View More</p>
                    </div>
               </div>
                {/* first third */}
               <div className="border mt-4 bg-white">  
                <div className="d-flex justify-content-around flex-wrap px-3 pt-3 ">
                   <p className="mb-0 grey">Help Center</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">About</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Privacy Policy</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Community Guidelines</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Cookies Policy</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Career</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Language</p>
                   <p className="mb-0 grey">|</p>
                   <p className="mb-0 grey">Copyright Policy</p>
                </div>
                
                <div className="d-flex justify-content-between py-2 px-3">       
                        <p className="red mb-0">Workwise</p>
                        <p className="grey mb-0">&copy; Copyright 2017</p>
                    </div>
               </div>
               </div>
               {/* Second Part */}
               <div className="" style={{width: '48%'}}>
                <div className="border d-flex justify-content-between px-3 py-3 bg-white">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={50} width={50} />
                            <div className="d-flex flex-row my-auto">
                                <button className="me-2 border-0 py-2 px-3 text-secondary">Post a Project</button>
                                <button className=" border-0 py-2 px-3 bg-red text-light">Post a Job</button>
                            </div>
                </div>
                <div className="border mt-4 bg-white">
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={50} width={50} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">John Doe</h6>
                                <p className="grey mb-0">3 min ago</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3">
                    <div className="d-flex">
                                <p className="grey mb-0 me-3">Epic Coder</p>
                                <p className="grey mb-0">India</p>
                    </div>
                    <div>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>

                    </div>
                </div>
                <h5 className="mb-3 ms-3 ">Senior Wordpress Developer</h5>
                    <div className="d-flex ms-3 align-items-center">
                                <p className="mb-0 me-3 text-light bg-success py-1 px-3 rounded-pill">Full Time</p>
                                <p className="mb-0">$30 / hr</p>
                    </div>
                    <div className="grey px-3 mt-2">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum corrupti soluta omnis unde nisi perferendis reprehenderit perspiciatis nulla? Dolores. <span className="red">view more...</span></p>
                    </div>
                    <div className="px-3 mb-3">
                        
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">HTML</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">PHP</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">CSS</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Javascript</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Wordpress</button>
                    </div>
                        <div className="d-flex justify-content-between px-3 py-3"  style={{borderTop: '1px solid #80808060'}}>
                        <div className="d-flex">
                                    <p className="grey mb-0 me-3">Like</p>
                                    <p className="grey mb-0">Comments 15</p>
                        </div>
                        <div>
                                    <p className="grey mb-0">Views 50</p>

                        </div>
                    </div>
                </div>
                {/* Second fourth */}
                <div className="border mt-4 bg-white">
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={50} width={50} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">John Doe</h6>
                                <p className="grey mb-0">3 min ago</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3">
                    <div className="d-flex">
                                <p className="grey mb-0 me-3">Epic Coder</p>
                                <p className="grey mb-0">India</p>
                    </div>
                    <div>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>

                    </div>
                </div>
                <h5 className="mb-3 ms-3 ">Senior Wordpress Developer</h5>
                    <div className="d-flex ms-3 align-items-center">
                                <p className="mb-0 me-3 text-light bg-success py-1 px-3 rounded-pill">Full Time</p>
                                <p className="mb-0">$30 / hr</p>
                    </div>
                    <div className="grey px-3 mt-2">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum corrupti soluta omnis unde nisi perferendis reprehenderit perspiciatis nulla? Dolores. <span className="red">view more...</span></p>
                    </div>
                    <div className="px-3 mb-3">
                        
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">HTML</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">PHP</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">CSS</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Javascript</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Wordpress</button>
                    </div>
                        <div className="d-flex justify-content-between px-3 py-3"  style={{borderTop: '1px solid #80808060'}}>
                        <div className="d-flex">
                                    <p className="grey mb-0 me-3">Like</p>
                                    <p className="grey mb-0">Comments 15</p>
                        </div>
                        <div>
                                    <p className="grey mb-0">Views 50</p>

                        </div>
                    </div>
                </div>
                {/* Second fifth */}
                <div className="border mt-4 bg-white">
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={50} width={50} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">John Doe</h6>
                                <p className="grey mb-0">3 min ago</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3">
                    <div className="d-flex">
                                <p className="grey mb-0 me-3">Epic Coder</p>
                                <p className="grey mb-0">India</p>
                    </div>
                    <div>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                                <button className=" border-0  bg-none text-dark">&#8942;</button>

                    </div>
                </div>
                <h5 className="mb-3 ms-3 ">Senior Wordpress Developer</h5>
                    <div className="d-flex ms-3 align-items-center">
                                <p className="mb-0 me-3 text-light bg-success py-1 px-3 rounded-pill">Full Time</p>
                                <p className="mb-0">$30 / hr</p>
                    </div>
                    <div className="grey px-3 mt-2">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum corrupti soluta omnis unde nisi perferendis reprehenderit perspiciatis nulla? Dolores. <span className="red">view more...</span></p>
                    </div>
                    <div className="px-3 mb-3">
                        
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">HTML</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">PHP</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">CSS</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Javascript</button>
                                <button className="me-2 rounded-pill fs-6 bg-grey border-0 py-2 px-3 text-secondary bg-none ">Wordpress</button>
                    </div>
                        <div className="d-flex justify-content-between px-3 py-3"  style={{borderTop: '1px solid #80808060'}}>
                        <div className="d-flex">
                                    <p className="grey mb-0 me-3">Like</p>
                                    <p className="grey mb-0">Comments 15</p>
                        </div>
                        <div>
                                    <p className="grey mb-0">Views 50</p>

                        </div>
                    </div>
                </div>

               </div>
               {/* Third Part */}
               <div className="" style={{width: '24%'}}>
               <div className="border bg-white">
                <div className=" text-center">
                            <img className="rounded-pill img-fluid mt-4 mb-3" src={pic} alt="./png" height={80} width={80} />

                </div>
                       
                    <div className="text-center">
                        <h5>Track Time on Workwise</h5>
                        <p className="grey">Pay only for the hours worked</p>
                    </div>
                    <div className="text-center py-3" style={{borderTop: '1px solid #80808060'}}>                        
                        <h5 className="mb-0">Sign up</h5>
                        <p className="red mb-0">Learn More</p>
                    </div>
                </div>

                {/* third second */}
               <div className="border mt-4 bg-white">                  
                    <div className="d-flex justify-content-between px-3 py-3 "  style={{borderBottom: '1px solid #80808060'}}>
                    <div className="d-flex flex-row align-items-center">
                                <h6 className="mb-0">Top Jobs</h6>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                    </div>
                    <div className="px-3 py-2">
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                    </div>

                </div>
                {/* third third */}
               <div className="border mt-4 bg-white">                  
                    <div className="d-flex justify-content-between px-3 py-3 "  style={{borderBottom: '1px solid #80808060'}}>
                    <div className="d-flex flex-row align-items-center">
                                <h6 className="mb-0">Most Viewed This Week</h6>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                    </div>
                    <div className="px-3 py-2">
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                        <div className="d-flex justify-content-between my-3">
                            <div className="d-flex flex-column mr-2">
                                        <h6 className="mb-0">Senior Product Designer</h6>
                                        <p className="mb-0 grey">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                                    <div className="">
                                        <p className=" fs-6 text-dark">$25/hr</p>
                                    </div>
                        </div>
                                            </div>

                </div>

                {/* third fourth */}
               <div className="border mt-4 bg-white">   
               <div className="d-flex justify-content-between px-3 py-3 "  style={{borderBottom: '1px solid #80808060'}}>
                    <div className="d-flex flex-row align-items-center">
                                <h6 className="mb-0">Most Viewed People</h6>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className=" border-0  bg-none text-dark">&#8942;</button>
                            </div>
                    </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-red text-white">&#10003;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                <div className="d-flex justify-content-between px-3 py-3 ">
                    <div className="d-flex flex-row align-items-center">
                            <img className="rounded-pill img-fluid" src={pic} alt="./png" height={40} width={40} />
                            <div className="d-flex flex-column ms-3">
                                <h6 className="mb-0">Jessica William</h6>
                                <p className="grey mb-0">Graphic Designer</p>
                            </div>
                    </div>
                            <div className="d-flex flex-row my-auto">
                                <button className="border border-secondary bg-none grey">&#43;</button>
                            </div>
                </div>
                
                <div className="text-center py-3">       
                        <p className="red mb-0">View More</p>
                    </div>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Home;
