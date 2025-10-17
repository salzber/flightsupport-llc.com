/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


//   Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');

    })
}

// Menu Hidden

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader();

/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp();

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__content , .services__data , .services__swiper,.footer__container,.home__data`);
sr.reveal(`.home__images`, { origin: 'bottom', delay: 1000 });
sr.reveal(`.about__images,home__title,.contact__img`, { origin: 'left' });
sr.reveal(`.about__data,contact__data`, { origin: 'right' });
sr.reveal(`.projects__card`, { interval: 100 });



navLink.forEach(element => {
    element.onclick = () => {
        const maincontainer = document.querySelector(".main");
        const data = element.getAttribute('href');


        if (data == "#home") {
           maincontainer.innerHTML = `
              <!--==================== HOME ====================-->
                        <section class="home section" id="home" onclick="window.location.href='tel:+18445131859'">

                            <div class="home__container container grid">
                            <div class="home__content grid">
                                <div class="home__data">
                                    <h1 class="home__title" style="color: var(--first-color);">
                                        Get Great Deals And Book Affordable Flights!
                                    </h1>
                                    <p class="home__description">
                                        At <b>FlightLLC.com </b>, we take pride in being your trusted travel companion, dedicated to providing unparalleled services in the world of travel. As a leading travel agency based in Pennsylvania, United States, we specialize in offering a comprehensive range of travel solutions, including flight tickets and enticing travel packages that cater to your wanderlust.
                                    </p>
                                    
                                    

                                </div>

                                <div class="home__info">
                                    <div>
                                        <h3 class="home__info__title">20+</h3>
                                        <p class="home_info__description">Years of <br> Experience</p>
                                    </div>

                                    <div>
                                        <h3 class="home__info__title">65000</h3>
                                        <p class="home_info__description">Happy <br>Costumers</p>
                                    </div>
                                </div>
                            </div>

                            <div class="home__images">
                                <article class="services__card swiper-slide swiper-slide-next" role="group" aria-label="2 / 4" data-swiper-slide-index="1" style="margin-right: 24px;">
                                    <div class="services__icon">
                                        <i class="fa-solid fa-jet-fighter-up"></i>
                                    </div>

                                    <h3 class="services__title"> Book cheap flights and save<br> up to 20% OFF</h3>

                                    <p>
                                        Your Gateway to Seamless Travel Experiences!
                                    </p>

                                    <a href="tel:+18445131859" class="nav__link button homebtn">Call To Grab</a>

                                </article>
                            </div>
                            </div>
                            
                        </section>
                            
                        <!-- ==================== ABOUT ==================== -->
                        <section class="about section" id="about">

                            <div class="about__container container grid">
                            
                                    <div class="about__data" >
                                        <h2 class="section__title" style="color: var(--first-color);">
                                        Flight Tickets and Travel Packages:
                                        </h2>     

                                        <p class="about__description">
                                        Embark on a journey with Plane To Paradise as we bring you 
                                        unbeatable deals on flight tickets and curated travel packages. Whether you’re
                                            seeking a relaxing beach getaway, a cultural exploration, or an adventure-filled escapade, 
                                        our travel experts are here to craft the perfect itinerary that suits your preferences and budget.
                                        </p>
                                    
                                    </div>


                                    <div class="about__data">
                                        <h2 class="section__title" style="color: var(--first-color);">
                                        Connect with Us - Your Journey Begins with a Call:
                                        </h2>     

                                        <p class="about__description">
                                        Ready to embark on your dream vacation?
                                        Connect with our travel experts through our Toll-Free number: +1-855-738-4299. 
                                        Our dedicated team is available to assist you with personalized 
                                        travel advice, exclusive deals, and any queries you may have.
                                        </p>
                                    
                                    </div>


                                    <div class="about__data">
                                        <h2 class="section__title" style="color: var(--first-color);">
                                        Exclusive Phone-Based Deals:
                                        </h2>     

                                        <p class="about__description">
                                        At Plane To Paradise, we understand the importance of personalized service.
                                        Unlike other travel agencies, we proudly conduct our transactions through direct phone calls. 
                                        This unique approach allows us to tailor our offerings specifically to your
                                        needs and preferences, ensuring a bespoke travel experience.
                                        <br><br>
                                        While presenting our deals, we may mention the names
                                        of airlines associated with the offers to provide transparency and clarity to our valued customers. Rest assured, we are not directly connected with any airlines, and our deals are 
                                        crafted meticulously to guarantee the best value for your money.
                                        </p>
                                    
                                    </div>

                                    
                                    <div class="about__data">
                                        <h2 class="section__title" style="color: var(--first-color);">
                                        Global Presence:
                                        </h2>     

                                        <p class="about__description">
                                        With call centers strategically located in the United States, the Philippines, and India, we ensure around-the-clock accessibility and assistance for our customers. No matter where you are in the world, Plane To Paradise is just a phone call away, ready to make your travel dreams a reality.
                                        <br><br>
                                        
                                        <b>Discover the world with Plane To Paradise – Where Every Journey is an Adventure, and Every Adventure is Tailored to You!</b>
                                        </p>
                                    
                                    </div>
                            </div>
                            
                        </section>

                        <!-- ==================== Contact ==================== -->

                        <section class="home section" id="home">

                            <div class="home__container container grid">
                            <div class="home__content grid" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                        <h3 class="form__title">Flights Book Now !</h3>
                                        <form action="https://formspree.io/f/mgvandld" method="POST">
                                        <input type="text" name="name" placeholder="Your Name" required>
                                        <input type="email" name="email" placeholder="Your Email" required>
                                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                                        <button type="submit">Send Message</button>
                                        </form>
                            </div>
                
                            <div class="home__images" data-sr-id="5" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 1s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 1s;">
                                <img src="assets/img/home-img-1.jpg" alt="image" class="home__img-1">
                                <!-- <img src="assets/img/home-img-2.jpg" alt="image" class="home__img-1"> -->
                            </div>
                            </div>
                
                        </section>

                        <!-- ==================== Offer ==================== -->

                        <section class="projects section" id="offer">
                            <span class="section__subtitle">WE OFFER</span>
                            <h2 class="section__title" style="color: var(--first-color);">Latest Offer</h2>
                
                            <div class="projects__container container grid">
                            <article class="projects__card" data-sr-id="11" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                <img src="assets/img/projects-img-1.jpg" alt="image"  class="projects__img">
                                <div class="projects__data">
                                    <h2 class="projects__title">A World of Flight Options</h2>
                                    <p>
                                    Explore the skies with Plane To Paradise and unlock a world of possibilities. Our flight offers span across various routes, connecting you to your desired destinations with convenience and affordability. Whether you’re embarking on a business trip, planning a family vacation, or seeking a spontaneous getaway, our diverse range of flight deals caters to every traveler’s needs.
                                    </p>
                                </div>
                            </article>
                
                            <article class="projects__card" data-sr-id="12" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                <img src="assets/img/projects-img-2.jpg" alt="image" class="projects__img">
                                <div class="projects__data">
                                    <h2 class="projects__title">Exclusive Partnerships With Same</h2>
                                    
                                    <p>
                                        At Plane To Paradise, we believe in offering exclusivity to our customers. Through our strategic partnership with Expedia TAAP, we gain access to an extensive network of airlines, enabling us to curate unique and budget-friendly flight options. This affiliation empowers us to provide tailored solutions, ensuring that your journey is not only seamless but also tailored to your preferences.
                                    </p>
                                </div>
                            </article>
                
                            <article class="projects__card" data-sr-id="13" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                <img src="assets/img/projects-img-3.jpg" alt="image" class="projects__img">
                                <div class="projects__data">
                                    <h2 class="projects__title">Tailored Travel Packages</h2>
                                
                                    <p>
                                        Our flight offers are seamlessly integrated into comprehensive travel packages, allowing you to enjoy a hassle-free and well-planned getaway. Whether you’re dreaming of a beach retreat, cultural exploration, or adventure-filled escapade, our travel experts meticulously design packages that encompass flights, accommodations.
                                    </p>
                                </div>
                            </article>
                
                            
                            
                            </div>
                        </section>

           
           `;
        }
        if (data == "#about") {
           maincontainer.innerHTML = `
                        <!--==================== ABOUT ====================-->
                        <section class="about section" id="about">

                            <div class="about__container container grid">
                                
                                    <div class="about__data">
                                        <h2 class="section__title">
                                            Online Booking
                                        </h2>     

                                        <p class="about__description">
                                            Go to the official airlines website or get the app on your phone
                                            Put in your information
                                            Decide on the sort of trip and the total number of travelers
                                            Include the dates and locations of your trips
                                            Select “Search Flights.
                                        </p>

                                        
                                        <p class="about__description">
                                            To save even more, use your TrueBlue points
                                            Examine the flights that are offered
                                            Select your aircraft
                                            Give more information
                                            Pay and validate your reservation
                                        </p>


                                        
                                    </div>

                                    <div class="about__data">
                                        <h2 class="section__title">
                                        Opt for an Offline Method
                                        </h2>     

                                        <p class="about__description">
                                        Speak with a real agent now
                                        Give your information
                                        Examine the flights that are offered
                                        Pick a flight that fits within your means
                                        Choose the payment option that you want
                                        Verify your reservation and pay for the flight.
                                        </p>

                                        

                                    
                                    </div>

                                    
                                    <div class="about__data">
                                        <h2 class="section__title">
                                        How to Book Affordable Flights?
                                        </h2>     

                                        <p class="about__description">
                                        Do you want to fly but are concerned about the expensive flights? Fear not—it is possible to purchase airline tickets without going over budget. Reservations at reasonable rates can be made with a few easy techniques and tricks.  <br>
                                        <br>
                                        
                                        Make a Reservation Early: To save your trip expenses, purchase your tickets early in advance. <br>
                                        Select Red-Eye Flights: The cost of these flights is frequently less than that of daytime flights. <br>
                                        Travel on Weekdays: Since weekends are typically more expensive, schedule your trip for a weekday. <br>
                                        Look for Deals: To get the most out of your savings, keep an eye out for any current specials or discounts. <br>
                                        Become a Fare Alert Subscriber: To be informed about new offers and discounts, subscribe to airline fare alerts. <br>
                                        Make a Direct Reservation: When purchasing your tickets, use the airline’s official website to avoid any additional fees. <br>
                                                    
                                        </p>

                                        

                                    
                                    </div>
                
                                    <div class="about__data">
                                        <h2 class="section__title">
                                        This is how to handle your reservation
                                        </h2>     

                                        <p class="about__description">
                                        Go to the official Airlines website <br>
                                        Then select “Manage Trips”. <br>
                                        Put your last name here <br>
                                        Incorporate your ticket number or confirmation code <br>
                                        Select “Continue.” <br>
                                        View the details of your itinerary <br>   
                                        Select the option of your choice. <br> <br>
                                        Make the required adjustments to your itinerary by following the instructions. <br>
                                        You can get in touch with the airline’s customer care for more help. Additionally, all you have to do is give the official number a call if you need to handle vacation packages. Representatives are always hand to help you around-the-clock.
                                        </p>

                                        

                                    
                                    </div>

                                    <div class="about__data">
                                        <h2 class="section__title">
                                        Manage Your Booking to Suit Your Needs!
                                        </h2>     

                                        <p class="about__description">
                                        You can simply modify your flight reservation through the manage booking process if necessary. Get freedom to customize your journey by choosing your seats and adding extras.
                                        </p>

                                        

                                    
                                    </div>


                                    <div class="about__data">
                                        <h2 class="section__title">
                                        Conclusion
                                        </h2>     

                                        <p class="about__description">
                                        Make sure to utilize these techniques to get cheap tickets, whether you go to the airline’s website or speak with customer support representativesDon’t pass up the opportunity to save money on your upcoming trip!
                                        
                                        </p>

                                        

                                    
                                    </div>

                            </div>
                            
                        </section>
           
           `;
        }

        if (data == "#contact") {
          maincontainer.innerHTML = `
          
                  <section class="home section" id="home" style="background:white;">

                            <div class="home__container container grid">
                            <div class="home__content grid" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                        <h3 class="form__title">Flights Book Now !</h3>
                                        <form action="https://formspree.io/f/mgvandld" method="POST">
                                        <input type="text" name="name" placeholder="Your Name" required>
                                        <input type="email" name="email" placeholder="Your Email" required>
                                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                                        <button type="submit">Send Message</button>
                                        </form>
                            </div>
                
                            <div class="home__images" data-sr-id="5" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 1s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 1s;">
                                <img src="assets/img/home-img-1.jpg" alt="image" class="home__img-1">
                                <!-- <img src="assets/img/home-img-2.jpg" alt="image" class="home__img-1"> -->
                            </div>
                            </div>
   
                 </section>

          
          `;
        }

        if (data == "#privacy") {
            maincontainer.innerHTML = `
            
    
                                    <!--==================== ABOUT ====================-->
                            <section class="about section" id="privacy">

                                <h1 style="text-align: center ; margin-bottom: 14px; color: var(--first-color); font-size: 2.30rem; font-weight: bold;">Privacy Policy</h1>
                                <div class="about__container container grid">
                                    
                                        <div class="about__data">
                                            <h2 class="section__title">
                                                1. Information We Collect
                                            </h2>     
                                            
                                            <p class="about__description">
                                                At <b>FlightLLC.com</b>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.  </p>

                                            <p class="about__description">
                                                <ul>
                                                    <li> <b>Personal Information:</b> When you book a trip or create an account, we may collect personal information such as your name, email address, phone number, billing address, and payment details.</li>
                                                    <br>
                                                    <li> <b>Travel Preferences: </b>We may also collect information regarding your travel preferences, such as destination interests, preferred accommodations, and special requests.</li>
                                                    <br>
                                                    <li> <b>Usage Data: </b>We may collect non-personal data such as your IP address, browser type, device information, and browsing activity to improve the functionality of our website.</li>
                                                </ul>
                                            </p>

                                            
                                        

                                            
                                        </div>

                                        <div class="about__data">
                                            <h2 class="section__title">
                                                2. Sharing Your Information

                                            </h2>     
                                            <p class="about__description">
                                                We may share your personal information with third parties under the following circumstances:
                                            </p>
                                            <p class="about__description">
                                                <ul>
                                                    <li> <b>Service Providers: </b>We may share your data with trusted partners, such as airlines, hotels, and tour operators, to complete your bookings and reservations.</li>
                                                    <br>
                                                    <li> <b>Legal Requirements: </b>We may disclose your information when required by law or to protect our legal rights.</li>
                                                    <br>
                                                    <li> <b>Business Transfers: </b>In the event of a merger or acquisition, your information may be transferred as part of the business assets.</li>
                                                </ul>
                                            </p>
                                            

                                            

                                        
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            3. How We Use Your Information

                                        </h2>     
                                        <p class="about__description">
                                            We use the information we collect for the following purposes:
                                        </p>
                                        <p class="about__description">
                                            <ul>
                                                <li>To process bookings and reservations.</li>
                                                <br>
                                                <li>To communicate with you about your trip and provide customer suppo</li>
                                                <br>
                                                <li>To improve our services and personalize your travel experience.</li>
                                                <br>
                                                <li>To send promotional offers, newsletters, and other marketing materials (you can opt out at any time).</li>
                                                <br>
                                                <li>To comply with legal obligations.</li>
                                                <br>
                                                
                                            </ul>
                                        </p>
                                        

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            4. Your Rights

                                        </h2>     
                                        <p class="about__description">
                                            You have the right to:  
                                        </p>
                                        <p class="about__description">
                                            <ul>
                                                <li>Access, update, or delete your personal information.</li>
                                                <br>
                                                <li>Opt-out of receiving marketing communications from us.</li>
                                                <br>
                                                <li>Request restrictions on how we use your data.</li>
                                                
                                            </ul>
                                        
                                            <p class="about__description">
                                                To exercise any of these rights, please contact us at [Your Contact Information].
                                            
                                            </p>


                                        </p>
                                        

                                        

                                    
                                        </div>

                                        
                                        <div class="about__data">
                                        <h2 class="section__title">
                                            5. How We Protect Your Information

                                        </h2>     
                                        <p class="about__description">
                                            At <b>FlightLLC.com</b>, we take the security of your information seriously. We implement industry-standard encryption and security protocols to protect your personal data from unauthorized access, use, or disclosure.
                                        </p>
                                        
                

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            6. Cookies and Tracking Technologies
                                        </h2>     
                                        <p class="about__description">
                                            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies allow us to remember your preferences and provide a personalized browsing experience. You can manage or disable cookies in your browser settings, but please note that some features of the site may not function properly without them.  </p>
                                        
                

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            7. Third-Party Links
                                        </h2>     
                                        <p class="about__description">
                                            Our website may contain links to third-party websites. <b>FlightLLC.com</b> is not responsible for the privacy practices or content of these external sites. We recommend reviewing the privacy policies of any third-party sites you visit.
                                            </p>
                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                        8. Changes to This Policy
                                        </h2>     
                                        <p class="about__description">
                                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                                        </p>
                                    
                                        </div>

                                </div>
                                
                            </section>

     
           `;
        }
    
        if(data =="#offers"){
            maincontainer.innerHTML = `
            
            <!-- ==================== Offer ==================== -->

                      <section class="projects section" id="offer">
                          <span class="section__subtitle">WE OFFER</span>
                          <h2 class="section__title" style="color:var(--first-color);">Latest Offer</h2>
              
                          <div class="projects__container container grid">
                          <article class="projects__card" data-sr-id="11" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                              <img src="assets/img/projects-img-1.jpg" alt="image"  class="projects__img">
                              <div class="projects__data">
                                  <h2 class="projects__title">A World of Flight Options</h2>
                                  <p>
                                  Explore the skies with Plane To Paradise and unlock a world of possibilities. Our flight offers span across various routes, connecting you to your desired destinations with convenience and affordability. Whether you’re embarking on a business trip, planning a family vacation, or seeking a spontaneous getaway, our diverse range of flight deals caters to every traveler’s needs.
                                  </p>
                              </div>
                          </article>
              
                          <article class="projects__card" data-sr-id="12" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                              <img src="assets/img/projects-img-2.jpg" alt="image" class="projects__img">
                              <div class="projects__data">
                                  <h2 class="projects__title">Exclusive Partnerships With Same</h2>
                                  
                                  <p>
                                      At Plane To Paradise, we believe in offering exclusivity to our customers. Through our strategic partnership with Expedia TAAP, we gain access to an extensive network of airlines, enabling us to curate unique and budget-friendly flight options. This affiliation empowers us to provide tailored solutions, ensuring that your journey is not only seamless but also tailored to your preferences.
                                  </p>
                              </div>
                          </article>
              
                          <article class="projects__card" data-sr-id="13" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                              <img src="assets/img/projects-img-3.jpg" alt="image" class="projects__img">
                              <div class="projects__data">
                                  <h2 class="projects__title">Tailored Travel Packages</h2>
                              
                                  <p>
                                      Our flight offers are seamlessly integrated into comprehensive travel packages, allowing you to enjoy a hassle-free and well-planned getaway. Whether you’re dreaming of a beach retreat, cultural exploration, or adventure-filled escapade, our travel experts meticulously design packages that encompass flights, accommodations.
                                  </p>
                              </div>
                          </article>
              
                          
                          
                          </div>
                      </section>

      
      `;

        }

    }
});


const FooterLink = document.querySelectorAll('.footer__link');


FooterLink.forEach(element => {
    element.onclick = () => {
        const maincontainer = document.querySelector(".main");
        const data = element.getAttribute('href');

        if (data == "#about") {
            maincontainer.innerHTML = `
                         <!--==================== ABOUT ====================-->
                         <section class="about section" id="about">
 
                             <div class="about__container container grid">
                                 
                                     <div class="about__data">
                                         <h2 class="section__title">
                                             Online Booking
                                         </h2>     
 
                                         <p class="about__description">
                                             Go to the official airlines website or get the app on your phone
                                             Put in your information
                                             Decide on the sort of trip and the total number of travelers
                                             Include the dates and locations of your trips
                                             Select “Search Flights.
                                         </p>
 
                                         
                                         <p class="about__description">
                                             To save even more, use your TrueBlue points
                                             Examine the flights that are offered
                                             Select your aircraft
                                             Give more information
                                             Pay and validate your reservation
                                         </p>
 
 
                                         
                                     </div>
 
                                     <div class="about__data">
                                         <h2 class="section__title">
                                         Opt for an Offline Method
                                         </h2>     
 
                                         <p class="about__description">
                                         Speak with a real agent now
                                         Give your information
                                         Examine the flights that are offered
                                         Pick a flight that fits within your means
                                         Choose the payment option that you want
                                         Verify your reservation and pay for the flight.
                                         </p>
 
                                         
 
                                     
                                     </div>
 
                                     
                                     <div class="about__data">
                                         <h2 class="section__title">
                                         How to Book Affordable Flights?
                                         </h2>     
 
                                         <p class="about__description">
                                         Do you want to fly but are concerned about the expensive flights? Fear not—it is possible to purchase airline tickets without going over budget. Reservations at reasonable rates can be made with a few easy techniques and tricks.  <br>
                                         <br>
                                         
                                         Make a Reservation Early: To save your trip expenses, purchase your tickets early in advance. <br>
                                         Select Red-Eye Flights: The cost of these flights is frequently less than that of daytime flights. <br>
                                         Travel on Weekdays: Since weekends are typically more expensive, schedule your trip for a weekday. <br>
                                         Look for Deals: To get the most out of your savings, keep an eye out for any current specials or discounts. <br>
                                         Become a Fare Alert Subscriber: To be informed about new offers and discounts, subscribe to airline fare alerts. <br>
                                         Make a Direct Reservation: When purchasing your tickets, use the airline’s official website to avoid any additional fees. <br>
                                                     
                                         </p>
 
                                         
 
                                     
                                     </div>
                 
                                     <div class="about__data">
                                         <h2 class="section__title">
                                         This is how to handle your reservation
                                         </h2>     
 
                                         <p class="about__description">
                                         Go to the official Airlines website <br>
                                         Then select “Manage Trips”. <br>
                                         Put your last name here <br>
                                         Incorporate your ticket number or confirmation code <br>
                                         Select “Continue.” <br>
                                         View the details of your itinerary <br>   
                                         Select the option of your choice. <br> <br>
                                         Make the required adjustments to your itinerary by following the instructions. <br>
                                         You can get in touch with the airline’s customer care for more help. Additionally, all you have to do is give the official number a call if you need to handle vacation packages. Representatives are always hand to help you around-the-clock.
                                         </p>
 
                                         
 
                                     
                                     </div>
 
                                     <div class="about__data">
                                         <h2 class="section__title">
                                         Manage Your Booking to Suit Your Needs!
                                         </h2>     
 
                                         <p class="about__description">
                                         You can simply modify your flight reservation through the manage booking process if necessary. Get freedom to customize your journey by choosing your seats and adding extras.
                                         </p>
 
                                         
 
                                     
                                     </div>
 
 
                                     <div class="about__data">
                                         <h2 class="section__title">
                                         Conclusion
                                         </h2>     
 
                                         <p class="about__description">
                                         Make sure to utilize these techniques to get cheap tickets, whether you go to the airline’s website or speak with customer support representativesDon’t pass up the opportunity to save money on your upcoming trip!
                                         
                                         </p>
 
                                         
 
                                     
                                     </div>
 
                             </div>
                             
                         </section>
            
            `;
         }
 
         if (data == "#contact") {
            maincontainer.innerHTML = `
          
            <section class="home section" id="home" style="background:white;">

                      <div class="home__container container grid">
                      <div class="home__content grid" data-sr-id="0" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                  <h3 class="form__title">Flights Book Now !</h3>
                                  <form action="https://formspree.io/f/mgvandld" method="POST">
                                  <input type="text" name="name" placeholder="Your Name" required>
                                  <input type="email" name="email" placeholder="Your Email" required>
                                  <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                                  <button type="submit">Send Message</button>
                                  </form>
                      </div>
          
                      <div class="home__images" data-sr-id="5" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 1s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 1s;">
                          <img src="assets/img/home-img-1.jpg" alt="image" class="home__img-1">
                          <!-- <img src="assets/img/home-img-2.jpg" alt="image" class="home__img-1"> -->
                      </div>
                      </div>

           </section>

    
            `;
         }
         
         if (data == "#privacy") {
            maincontainer.innerHTML = `
            
    
                                    <!--==================== ABOUT ====================-->
                            <section class="about section" id="privacy">

                                <h1 style="text-align: center ; margin-bottom: 14px; color: var(--first-color); font-size: 2.30rem; font-weight: bold;">Privacy Policy</h1>
                                <div class="about__container container grid">
                                    
                                        <div class="about__data">
                                            <h2 class="section__title">
                                                1. Information We Collect
                                            </h2>     
                                            
                                            <p class="about__description">
                                                At <b>FlightLLC.com</b>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.  </p>

                                            <p class="about__description">
                                                <ul>
                                                    <li> <b>Personal Information:</b> When you book a trip or create an account, we may collect personal information such as your name, email address, phone number, billing address, and payment details.</li>
                                                    <br>
                                                    <li> <b>Travel Preferences: </b>We may also collect information regarding your travel preferences, such as destination interests, preferred accommodations, and special requests.</li>
                                                    <br>
                                                    <li> <b>Usage Data: </b>We may collect non-personal data such as your IP address, browser type, device information, and browsing activity to improve the functionality of our website.</li>
                                                </ul>
                                            </p>

                                            
                                        

                                            
                                        </div>

                                        <div class="about__data">
                                            <h2 class="section__title">
                                                2. Sharing Your Information

                                            </h2>     
                                            <p class="about__description">
                                                We may share your personal information with third parties under the following circumstances:
                                            </p>
                                            <p class="about__description">
                                                <ul>
                                                    <li> <b>Service Providers: </b>We may share your data with trusted partners, such as airlines, hotels, and tour operators, to complete your bookings and reservations.</li>
                                                    <br>
                                                    <li> <b>Legal Requirements: </b>We may disclose your information when required by law or to protect our legal rights.</li>
                                                    <br>
                                                    <li> <b>Business Transfers: </b>In the event of a merger or acquisition, your information may be transferred as part of the business assets.</li>
                                                </ul>
                                            </p>
                                            

                                            

                                        
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            3. How We Use Your Information

                                        </h2>     
                                        <p class="about__description">
                                            We use the information we collect for the following purposes:
                                        </p>
                                        <p class="about__description">
                                            <ul>
                                                <li>To process bookings and reservations.</li>
                                                <br>
                                                <li>To communicate with you about your trip and provide customer suppo</li>
                                                <br>
                                                <li>To improve our services and personalize your travel experience.</li>
                                                <br>
                                                <li>To send promotional offers, newsletters, and other marketing materials (you can opt out at any time).</li>
                                                <br>
                                                <li>To comply with legal obligations.</li>
                                                <br>
                                                
                                            </ul>
                                        </p>
                                        

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            4. Your Rights

                                        </h2>     
                                        <p class="about__description">
                                            You have the right to:  
                                        </p>
                                        <p class="about__description">
                                            <ul>
                                                <li>Access, update, or delete your personal information.</li>
                                                <br>
                                                <li>Opt-out of receiving marketing communications from us.</li>
                                                <br>
                                                <li>Request restrictions on how we use your data.</li>
                                                
                                            </ul>
                                        
                                            <p class="about__description">
                                                To exercise any of these rights, please contact us at [Your Contact Information].
                                            
                                            </p>


                                        </p>
                                        

                                        

                                    
                                        </div>

                                        
                                        <div class="about__data">
                                        <h2 class="section__title">
                                            5. How We Protect Your Information

                                        </h2>     
                                        <p class="about__description">
                                            At <b>FlightLLC.com</b>, we take the security of your information seriously. We implement industry-standard encryption and security protocols to protect your personal data from unauthorized access, use, or disclosure.
                                        </p>
                                        
                

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            6. Cookies and Tracking Technologies
                                        </h2>     
                                        <p class="about__description">
                                            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies allow us to remember your preferences and provide a personalized browsing experience. You can manage or disable cookies in your browser settings, but please note that some features of the site may not function properly without them.  </p>
                                        
                

                                        

                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                            7. Third-Party Links
                                        </h2>     
                                        <p class="about__description">
                                            Our website may contain links to third-party websites. <b>FlightLLC.com</b> is not responsible for the privacy practices or content of these external sites. We recommend reviewing the privacy policies of any third-party sites you visit.
                                            </p>
                                    
                                        </div>

                                        <div class="about__data">
                                        <h2 class="section__title">
                                        8. Changes to This Policy
                                        </h2>     
                                        <p class="about__description">
                                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                                        </p>
                                    
                                        </div>

                                </div>
                                
                            </section>

     
           `;
        }

        if(data =="#offers"){
            maincontainer.innerHTML = `
            
                  <!-- ==================== Offer ==================== -->

                            <section class="projects section" id="offer">
                                <span class="section__subtitle">WE OFFER</span>
                                <h2 class="section__title" style="color:var(--first-color);">Latest Offer</h2>
                    
                                <div class="projects__container container grid">
                                <article class="projects__card" data-sr-id="11" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                    <img src="assets/img/projects-img-1.jpg" alt="image"  class="projects__img">
                                    <div class="projects__data">
                                        <h2 class="projects__title">A World of Flight Options</h2>
                                        <p>
                                        Explore the skies with Plane To Paradise and unlock a world of possibilities. Our flight offers span across various routes, connecting you to your desired destinations with convenience and affordability. Whether you’re embarking on a business trip, planning a family vacation, or seeking a spontaneous getaway, our diverse range of flight deals caters to every traveler’s needs.
                                        </p>
                                    </div>
                                </article>
                    
                                <article class="projects__card" data-sr-id="12" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                    <img src="assets/img/projects-img-2.jpg" alt="image" class="projects__img">
                                    <div class="projects__data">
                                        <h2 class="projects__title">Exclusive Partnerships With Same</h2>
                                        
                                        <p>
                                            At Plane To Paradise, we believe in offering exclusivity to our customers. Through our strategic partnership with Expedia TAAP, we gain access to an extensive network of airlines, enabling us to curate unique and budget-friendly flight options. This affiliation empowers us to provide tailored solutions, ensuring that your journey is not only seamless but also tailored to your preferences.
                                        </p>
                                    </div>
                                </article>
                    
                                <article class="projects__card" data-sr-id="13" style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
                                    <img src="assets/img/projects-img-3.jpg" alt="image" class="projects__img">
                                    <div class="projects__data">
                                        <h2 class="projects__title">Tailored Travel Packages</h2>
                                    
                                        <p>
                                            Our flight offers are seamlessly integrated into comprehensive travel packages, allowing you to enjoy a hassle-free and well-planned getaway. Whether you’re dreaming of a beach retreat, cultural exploration, or adventure-filled escapade, our travel experts meticulously design packages that encompass flights, accommodations.
                                        </p>
                                    </div>
                                </article>
                    
                                
                                
                                </div>
                            </section>

            
            `;

        }



    }
})