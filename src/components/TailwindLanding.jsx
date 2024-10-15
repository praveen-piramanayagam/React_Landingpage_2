import React from 'react';

const TailwindLanding = () => {
    return (
        <div>
            <div class="container mx-auto">
    {/* <!-- Navbar --> */}
    <nav class="flex items-center justify-between p-4 pt-0 pb-0 shadow-md">
      {/* <!-- Logo --> */}
      <div class="items-center space-x-2">
        <img src="assets/header_logo.png" alt="Logo" class="w-44 h-20" /> 
        {/* <!-- Replace with your logo --> */}
      </div>

      {/* <!-- Navigation Links --> */}
      <div class="hidden md:flex space-x-8 font-font1">
        <a href="#" class="text-black hover:text-gray-600">Home</a>
        <a href="#" class="text-black hover:text-gray-600">About</a>
        <a href="#" class="text-black hover:text-gray-600">Courses</a>
        <a href="#" class="text-black hover:text-gray-600">Contact</a>
      </div>

      {/* <!-- Icons and Buttons --> */}
      <div class="flex items-center space-x-6">
        {/* <!-- Cart Icon with Badge --> */}
        <div class="flex">
          <div class="relative">
            <img src="assets/Icon1.png" alt="Icon1" />
          </div>
          <div class="absolute top-6 left-61.5rem">
            <img src="assets/widget.png" alt="widget" />
          </div>
        </div>

        {/* <!-- Search Icon --> */}
        <svg class="w-6 h-6 text-black hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 5a7 7 0 110 14 7 7 0 010-14zm0 0v2m-2-2h2m10 10v2m2-2h-2m-2 0v2m-4-2h2"></path>
        </svg>

        {/* <!-- User Icon --> */}
        <svg class="w-6 h-6 text-black hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5.121 17.804A7.002 7.002 0 0112 15a7.002 7.002 0 016.879 2.804M12 7a4 4 0 100 8 4 4 0 000-8z">
          </path>
        </svg>
      </div>

      {/* <!-- Login and Signup Buttons --> */}
      <div class="flex items-center space-x-4">
        <a href="#" class="text-gray-700 hover:text-gray-900">Login</a>
        <a href="#"
          class="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600">Signup</a>
      </div>
    </nav>
    {/* <!-- nav ends --> */}

    {/* <!-- Hero part --> */}
    <div class="bg-gradient-to-r from-blue-900 to-purple-500 h-100 w-full min-h-80 flex items-center justify-center">
      <div
        class="container mx-auto px-6 lg:px-16 lg:px-34  flex flex-col md:flex-row items-center justify-between px-16 pt-16 font-font1 border-solid border-2 border-white-200">
        {/* <!-- Left Content: Text and Buttons --> */}
        <div class="md:flex md:px-16">
          <div class="text-white max-w-md	 mb-10 md:mb-0">
            <p class="text-sm uppercase tracking-wider mb-4">Successful coaches are visionaries</p>
            <h1 class="text-5xl font-bold mb-6 leading-tight">
              Good <span class="text-blue2">coaching</span> is good teaching & nothing else.
            </h1>
            {/* <!-- Buttons --> */}
            <div class="flex space-x-4 mb-8">
              <a href="#"
                class="px-6 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-blue-500">View
                Courses</a>
              <a href="#" class="px-6 py-2 text-white hover:bg-white hover:text-blue-500">Get Free
                Consultation</a>
            </div>
            {/* <!-- Search Bar --> */}
            <div class="relative top-6">
              <input type="text" placeholder="What do you want to learn today?"
                class="w-full py-3 pl-4 pr-20 rounded-lg focus:outline-none text-black" />
              <button
                class="absolute right-2 top-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                <div class="flex space-x-2">
                  <div>
                    <img src="assets/search_icon.png" alt="search_icon" />
                  </div>
                  <div>
                    Search
                  </div>
                </div>
              </button>
            </div>
            <div class="relative  md:left-30rem hidden sm:block">
              <img src="assets/arc_img.png" alt="arc_img" class="w-15" />
            </div>
          </div>

          <div class="flex md:p-11">
            <div>
              <img src="assets/line_img.png" alt="line_img" />
            </div>

            <div class="text-white p-4 rounded-lg max-w-xs">
              <p class="text-sm mb-2">
                <strong>Shyam</strong>
              </p>
              <p class="text-xs">
                In a coaching role, you ask the questions and rely more on your staff, who become the
                experts, to provide the information.
              </p>
              <p class="text-blue-500 text-left mt-2 text-sm">4.9</p>
            </div>
          </div>
        </div>

        {/* <!-- Right Content: Image--> */}
        <div class="relative left-[-5rem]">
          <img src="assets/lady_img.png" alt="lady_img" class="md:w-22 lg:w-22 w-22 h-auto object-cover sm:w-15" />
        </div>

      </div>
    </div>
    {/* <!-- Hero part ends --> */}

    {/* <!-- Brands part --> */}
    <div
      class="container  bg-gradient-to-r from-blue-900 to-purple-500 mx-auto px-6 lg:px-16 lg:px-34  flex md:flex-row items-center justify-evenly py-14 ">
      <div>
        <img src="assets/b1.png" alt="" />
      </div>
      <div>
        <img src="assets/b2.png" alt="" />
      </div>
      <div>
        <img src="assets/b1.png" alt="" />
      </div>
      <div>
        <img src="assets/b3.png" alt="" />
      </div>
      <div>
        <img src="assets/b4.png" alt="" />
      </div>
      <div>
        <img src="assets/b2.png" alt="" />
      </div>

    </div>
    {/* <!-- Brands part ends --> */}

    {/* <!-- Grid part --> */}
    <div class="pb-16">
      <div class="pt-16 pb-16">
        <h1 class="text-[45px] font-bold text-center font-font1">Featured Course</h1>
        <p class="uppercase font-font1 text-center tracking-[.25em]">The feature courses are we invented our teaching
          part</p>
      </div>

      {/* <!-- Card part --> */}
      <div>
        <div class="container mx-auto p-10 pl-24 pr-24">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Card 1 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c1.png" alt="Course 1" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>1,957 Students</span>
                  <span>01h 59m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  Motion Graphics: Create a Nice Typography Animation
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- card 2 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c2.png" alt="Course 2" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>9,575 Students</span>
                  <span>01h 59m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  Advance PHP knowledge with JS to make smart web
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>


            {/* <!-- card 3 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c3.png" alt="Course 1" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>2957 Students</span>
                  <span>02h 59m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  Education Software and PHP and JS System Script
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- card 4 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c4.png" alt="Course 1" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>5,457 Students</span>
                  <span>01h 59m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  The Complete Financial Analyst Training & Investing
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- card 5 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c5.png" alt="Course 1" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>595 Students</span>
                  <span>01h 59m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  Marketing 2023: Complete Guide To Instagram Growth
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- card 6 --> */}
            <div class="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="bg-blue-100">
                <img class="w-full h-48 object-cover" src="assets/c6.png" alt="Course 1" />
              </div>
              <div class="p-4">
                <div class="flex justify-between text-gray-500 text-sm mb-6 font-font2 font-normal text-text1">
                  <span>458 Students</span>
                  <span>03h 00m</span>
                </div>
                <h2 class="text-lg font-bold font-font2 text-text1 mb-10">
                  Learn 3D Modelling and Design for Beginners
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[18px] font-semibold font-font2 text-text1">Rs.499</span>
                  <button class="p-2 text-white rounded-full">
                    <img src="assets/cart_img.png" alt="" />
                  </button>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      {/* <!-- Card part ends --> */}

      <div class="flex justify-center">
        
        <button
          style={{
            width: '200px',
            height: '60px',
            background: 'linear-gradient(95deg, #083F9B 0%, #7F56D9 100%)',
            borderRadius: '10px'
          }}
          class="font-font1 text-sm text-white content-center">
          Explore courses
        </button>
      </div>
    </div>
    {/* <!-- Grid part Ends --> */}

    {/* <!-- Why learn part --> */}
    <div class="text-center py-16 relative bg-gradient-to-r from-blue-300 to-blue-700 font-font1">
      <div class="container mx-auto relative z-10">
        {/* <!-- Section Heading --> */}
        <h2 class="text-3xl font-bold text-white mb-4">
          Why <span class="text-blue-400">learn</span> with our courses?
        </h2>
        <p class="text-white text-lg mb-12">
          We are providing the best courses and top classes. And extraordinary placement training...
        </p>

        {/* <!-- 3 Steps --> */}
        <div class="flex flex-col md:flex-row relative justify-center">

          {/* <!-- Left Side Image --> */}
          <div class="absolute top-[-7.75rem] hidden md:block md:left-0">
            <img src="assets/side_arc.png" alt="Side Illustration" style={{width: '100px'}} />
          </div>

          {/* <!-- Step 1 --> */}
          <div
            class="text-white relative flex flex-col items-center md:border-r-2 md:border-dashed md:border-white pr-20">
            <div class="mb-4">
              <img src="assets/i1.png" alt="i1" />
            </div>
            <h3 class="text-xl font-bold">01. Learn</h3>
            <p class="mt-2">Learn continually. There is always <br />"one more thing" to learn.</p>
          </div>

          {/* <!-- Step 2 --> */}
          <div
            class="text-white relative flex flex-col items-center md:border-r-2 md:border-dashed md:border-white pr-20 pl-20">
            <div class="mb-4">
              <img src="assets/i2.png" alt="i2" />
            </div>
            <h3 class="text-xl font-bold">02. Graduate</h3>
            <p class="mt-2">Be bold, be courageous,<br /> be your best.</p>
          </div>

          {/* <!-- Step 3 --> */}
          <div class="text-white relative flex flex-col items-center pl-20">
            <div class="mb-4">
              <img src="assets/i3.png" alt="i3" />
            </div>
            <h3 class="text-xl font-bold">03. Work</h3>
            <p class="mt-2">Great companies are built in<br /> the office with hard work put<br /> in by team.</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Why learn part ends --> */}

    <div class="bg-gradient-to-t from-blue-200 to-white">
      <div class="pt-16 font-font1 text-center">
        <p class="text-[45px]">
          Top <span class="text-blue-400">Categories</span>
        </p>
        <p>
          100+ unique online course list designs
        </p>
      </div>

      {/* <!-- cource part --> */}
      <div class="flex flex-row justify-center items-center " style={{height: '410px'}}>
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-6 font-font1">
          {/* <!-- Digital Marketing Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-9 pt-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d1.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[75px] text-center">Digital Marketing</h2>
            <p class="text-gray-500 mt-5 mb-6">25 Courses</p>
          </div>

          {/* <!-- Web Development Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d2.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[100px] text-center">Web Development</h2>
            <p class="text-gray-500 mt-5 mb-6">16 Courses</p>
          </div>

          {/* <!-- Art & Humanities Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d3.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[75px] text-center">Art & Humanities</h2>
            <p class="text-gray-500 mt-5 mb-6">76 Courses</p>
          </div>

          {/* <!-- Personal Development Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d4.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[110px] text-center">Personal Developments</h2>
            <p class="text-gray-500 mt-5 mb-6">76 Courses</p>
          </div>

          {/* <!-- IT and Software Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d5.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[75px] text-center">IT and Software</h2>
            <p class="text-gray-500 mt-5 mb-6">76 Courses</p>
          </div>

          {/* <!-- Graphic Design Card --> */}
          <div class="bg-white shadow-lg rounded-lg p-0 pb-0 flex flex-col items-center">
            <div class="pt-6 rounded-full">
              <img src="assets/d6.png" alt="" />
            </div>
            <h2 class="text-lg font-semibold mt-8 w-[75px] text-center">Graphic Design</h2>
            <p class="text-gray-500 mt-5 mb-6">76 Courses</p>
          </div>
        </div>
      </div>
      {/* <!-- cource part ends --> */}

      {/* <!-- subscribe part --> */}

      <div class="bg-white flex justify-center items-center pt-20">
        <div class="relative container mx-auto p-8 w-[900px] ">

          {/* <!-- Background Shape --> */}
          <div class="absolute left-0 bottom-0 w-20 h-20">
            <img src="assets/Polygon_img.png" alt="" style={{position: 'relative',zindex: '1'}} />
          </div>
          <div class="absolute right-0 top-[26rem] w-20 h-20">

            <img src="assets/Polygon_img.png" alt="" />
          </div>

          {/* <!-- Subscribe Section --> */}
          <div
            class="relative bg-gradient-to-r from-custom-blue via-custom-cyan to-custom-purple text-white rounded-lg shadow-lg p-10 flex flex-col items-center">

            {/* <!-- Circular Images floating around --> */}
            <div class="absolute left-4 top-6 w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r1.png" alt="User 1" class="w-full h-full object-cover" />
            </div>
            <div class="absolute left-12 bottom-8 w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r2.png" alt="User 2" class="w-full h-full object-cover" />
            </div>
            <div class="absolute left-[6rem] top-[7rem] w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r3.png" alt="User 2" class="w-full h-full object-cover" />
            </div>


            <div class="absolute right-10 top-8 w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r4.png" alt="User 3" class="w-full h-full object-cover" />
            </div>
            <div class="absolute right-[5rem] top-[7rem] w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r5.png" alt="User 4" class="w-full h-full object-cover" />
            </div>
            <div class="absolute right-2 bottom-6 w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="assets/r6.png" alt="User 4" class="w-full h-full object-cover" />
            </div>


            {/* <!-- Main Content --> */}
            <h1 class="text-3xl font-bold mb-4 font-font1 text-center">Subscribe For Get Update <br /> Every New Courses
            </h1>
            <p class="text-gray-200 mb-6 font-font1">20k+ students daily learn with Eduvi. Subscribe for new courses.
            </p>

            {/* <!-- Subscription Form --> */}
            <div class="w-full max-w-sm mx-auto flex font-font1">
              <input type="email" placeholder="enter your email"
                class="flex-1 p-4 rounded-l-lg bg-white text-gray-800 focus:outline-none" />
              <button class="p-4 bg-blue-700 text-white rounded-r-lg hover:bg-blue-800">Subscribe</button>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- subscribe part ends --> */}

      {/* <!-- video part --> */}
      <div class="bg-white pt-[8rem]">
        <div class="flex justify-center">
          <img src="assets/e3.png" alt="" style={{width: '900px'}} />
        </div>
        <div class="absolute right-[8rem]">
          <img src="assets/e4.png" alt="" class="z-index relative top-[-11rem]" />
        </div>
      </div>
      {/* <!-- video part ends --> */}


      {/* <!-- Rating part --> */}

      <div class="bg-gradient-to-t from-blue-200 to-white pt-[10rem]">
        <div class="text-center">
          <p class="font-font1 text-3xl text-blue2 pb-4">Testimonials</p>
          <p class="font-font1">What our student say about us</p>
        </div>

        <div class="pt-16 p-[48px] font-font1" style={{fontsize: '15px'}}>
          <div class="flex flex-col md:flex-row justify-center">


            {/* <!-- 1st star part --> */}
            <div class="bg-white shadow-lg p-12 pt-0 pb-4 max-w-[34rem] mx-4 grow-0 relative left-12 ">
              {/* <!-- Profile Image --> */}
              <div class="flex justify-center mb-0 relative top-[-28px]">
                <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Profile Image"
                  class="w-16 h-16 rounded-full border-2 border-gray-300" />
              </div>
              {/* <!-- Testimonial Content --> */}
              <p class="text-left text-gray-500 mb-4 text-font15">
                Such an amazing trainer and easily understands the entire syllabus, and the guidance is super good
                thanks to the way of explaining.
              </p>
              {/* <!-- Rating --> */}
              <div class="flex">
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-gray-400">&#9733;</span>
              </div>
            </div>


            {/* <!-- 2nd star part --> */}
            <div class="bg-white shadow-lg p-12 pt-0 pb-4 max-w-[34rem] mx-4 grow-0 relative top-[-2rem] z-index"
              style={{zindex: '1'}}>
              {/* <!-- Profile Image --> */}
              <div class="flex justify-center mb-0 relative top-[-28px]">
                <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Profile Image"
                  class="w-16 h-16 rounded-full border-2 border-gray-300" />
              </div>
              {/* <!-- Testimonial Content --> */}
              <p class="text-left text-gray-500 mb-4">
                Such an amazing trainer and easily understands the entire syllabus, and the guidance is super good
                thanks to the way of explaining.
              </p>
              {/* <!-- Rating --> */}
              <div class="flex">
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-gray-400">&#9733;</span>
              </div>
            </div>


            {/* <!-- 3rd star part --> */}
            <div class="bg-white shadow-lg p-12 pt-0 pb-4 max-w-[34rem] mx-4 grow-0 relative right-12"
              style={{zindex: '0'}}>
              {/* <!-- Profile Image --> */}
              <div class="flex justify-center mb-0 relative top-[-28px]">
                <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Profile Image"
                  class="w-16 h-16 rounded-full border-2 border-gray-300" />
              </div>
              {/* <!-- Testimonial Content --> */}
              <p class="text-left text-gray-500 mb-4">
                Such an amazing trainer and easily understands the entire syllabus, and the guidance is super good
                thanks to the way of explaining.
              </p>
              {/* <!-- Rating --> */}
              <div class="flex">
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-yellow-400">&#9733;</span>
                <span class="text-gray-400">&#9733;</span>
              </div>
            </div>
          </div>


        </div>


        <div class="flex pt-16 justify-end relative right-2">
          <div>
            <img src="assets/l2.png" alt="" />
          </div>
          <div>
            <img src="assets/l1.png" alt="" />
          </div>
        </div>

      </div>

      {/* <!-- Rating part ends --> */}

      <footer class="bg-gradient-to-r from-purple-600 to-blue-500 text-black py-8 font-font1">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pl-24">

          {/* <!-- Connect Section --> */}
          <div class="relative right-10">
            <h3 class="text-lg font-bold mb-4">Connect</h3>
            <img src="assets/ff1.png" alt="Company Logo" class="mb-4 w-[200px] h-24 relative left-[-35px]" />
            <address class="text-sm">
              Sri Jaganndoth Nivas, 8-1-164/3456/A/1,<br />
              Pragati Colony, Malloredepally,<br />
              Nawab Staheb Kunto, Hyd, 500005
            </address>
          </div>

          {/* <!-- Classes Section --> */}
          <div class="relative left-2">
            <h3 class="text-lg font-bold mb-4">Classes</h3>
            <ul class="space-y-2 text-sm">
              <li>Classroom courses</li>
              <li>Virtual classroom courses</li>
              <li>E-learning courses</li>
              <li>Video Courses</li>
              <li>Offline Courses</li>
            </ul>
          </div>

          {/* <!-- Community Section --> */}
          <div class="relative left-2">
            <h3 class="text-lg font-bold mb-4">Community</h3>
            <ul class="space-y-2 text-sm">
              <li>Learners</li>
              <li>Partners</li>
              <li>Developers</li>
              <li>Transactions</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* <!-- Quick Links Section --> */}
          <div class="relative left-2">
            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li>Home</li>
              <li>Professional Education</li>
              <li>Courses</li>
              <li>Admissions</li>
              <li>Testimonial</li>
              <li>Programs</li>
            </ul>
          </div>

          {/* <!-- More Section --> */}
          <div>
            <h3 class="text-lg font-bold mb-4">More</h3>
            <ul class="space-y-2 text-sm">
              <li>Press</li>
              <li>Investors</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* <!-- Social Media Icons Section --> */}
        <div class="mt-8 flex justify-center space-x-4">
          <a href="#" class="bg-white rounded-full p-2"><img src="assets/Instagram.png" alt="Instagram" /></a>
          <a href="#" class="bg-white rounded-full p-2"><img src="assets/WhatsApp.png" alt="WhatsApp" /></a>
          <a href="#" class="bg-white rounded-full p-2"><img src="assets/Twitter.png" alt="Twitter" /></a>
          <a href="#" class="bg-white rounded-full p-2"><img src="assets/LinkedIn.png" alt="LinkedIn" /></a>
          <a href="#" class="bg-white rounded-full p-2"><img src="assets/YouTube.png" alt="YouTube" /></a>
        </div>

        {/* <!-- Copyright Section --> */}
        <div class="mt-4 text-center text-white text-sm">
          Copyright © 2023 askmeidentity, All Rights Reserved
        </div>
      </footer>

    </div>
    </div>
        </div>
    );
};

export default TailwindLanding;