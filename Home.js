import './Home.css'


function HomePage()
{
    const navLog=()=>{
        window.location.href="/";
    }
    const navReg=()=>{
      window.location.href="/register"
    }
    return(
 
        <div>
        <nav class="sidebar close">
  <header>
    <div class="image-text">
      <span class="image">
        <img src="data:image/png;base64,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" alt="image gallery"/>
      </span>

      <div class="text logo-text">
        <span class="name">ICOM DIGITAL </span>
        <span class="profession">Development</span>
      </div>
    </div>

    <i class='bx bx-chevron-right toggle'></i>
  </header>

  <div class="menu-bar">
    <div class="menu">

      <li class="search-box">
        <a href='#'><i class='bx bx-search icon'></i></a>
        <input type="submit" placeholder="Search..."/>
      </li>

      <ul class="menu-links">
        <li class="nav-link">
          <a href="#">
            <i class='bx bx-home-alt icon'></i>
            <span class="text nav-text">Dashboard</span>
          </a>
        </li>

        <li class="nav-link">
          <a href="#">
            <i class='bx bx-plus-medical icon'></i>
            <span class="text nav-text">Revenue</span>
          </a>
        </li>

        <li class="nav-link">
          <a href="#">
            <i class='bx bx-bell icon'></i>
            <span class="text nav-text">Notifications</span>
          </a>
        </li>
        <li class="nav-link">
          <a href="#">
            <i class='bx bx-wallet icon'></i>
            <span class="text nav-text">Wallets</span>
          </a>
        </li>

      </ul>
    </div>

    <div class="bottom-content">
      <li class="">
        <a href="/">
          <i class='bx bx-log-out icon'></i>
          <span class="text nav-text">Logout</span>
        </a>
      </li>
    </div>
  </div>

</nav>

<section class="home">
  <div class="text">Pharmacy.Com</div>
  
</section>
<div className='para'>
  <p>“A pharmacist is a molecule mixer and a pill pusher.”
  </p>
</div>
<div className='boxes'>
  <div className='box'>
    <h3>Medicine Details</h3>
    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medicine-jar-6299629-5203258.png"/>
  </div>
  <div className='box' onClick={()=>window.location.href="/medicalreports"}>
    <h3>Medicine Report</h3>
    <img src='https://static.vecteezy.com/system/resources/previews/009/596/518/original/3d-illustration-of-report-icon-png.png'/>
  </div>
  <div className='box' onClick={()=>window.location.href="/patientinfo"}>
    <h3>Patient Info</h3>
    <img src='https://static.vecteezy.com/system/resources/previews/032/851/483/original/cv-approved-3d-illustration-icon-or-resume-approved-3d-illustration-icon-free-png.png'/>
  </div>
</div>
<div className='content'>
  <div className='about'>
    <h1>About us</h1>
    <p>Our Story and Mission
At Pharmacy.Com, we believe in more than just dispensing medications. Our journey began 6 years ago with a vision to provide personalized care, foster community well-being, and empower patients to lead healthier lives.

Meet Our Team
Our team of dedicated pharmacists, technicians, and staff is committed to your health and wellness. With [combined years of experience], we bring expertise, compassion, and a patient-centric approach to every interaction.

<h1>Why Choose Pharmacy.Com?</h1>
Expertise: Our pharmacists stay updated on the latest advancements in pharmaceuticals and healthcare.
Personalized Service: We take the time to understand your needs and provide tailored solutions.
Community Connection: As an active part of Coimbatore, we’re invested in your well-being.
Quality Assurance and Safety.</p>
  </div>
  <div className='contact'>
    <h1>Contact Us</h1>
    <p>Have a question or need assistance? Reach out to us anytime:
<ul>
<li>Phone: +91 8080800808</li>
<li>Email: 727723eucs210@skcet.ac.in</li>
</ul></p>
  </div>
<div className='copy'>
  <h1>&copy;Pharmacy.Com</h1>
</div>
</div>
</div>
    )
}

export default HomePage;