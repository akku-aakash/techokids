import React from 'react'
import './RefEarn.css'
import banner from '../../../../images/ref_earn/Banner_laptop.png'
import bannerMobile from '../../../../images/ref_earn/Banner_mobile.png'
import RefInvite from '../RefInvite/RefInvite'
function RefEarnScreen() {
  document.title = "Refer and Earn | TechoKids";
  const handleClickTC = () => {
    document.getElementById("terms").style.display = "block";
    document.getElementById("faqs").style.display = "none";
    
  }

  const handleClickFAQ = () => {
    
    document.getElementById("terms").style.display="none";
    document.getElementById("faqs").style.display="block";
  }
  return (
    <div className="home">
        <div className="container-fluid1">
            <img id="image2" className="image1" src={banner}/>
            <img id="image1" className="image1" src={bannerMobile} alt="Image-1"/>
        </div>
      <RefInvite />
      <div className="content">
            <div className="nav-pills">
              <button id="tc" onClick={handleClickTC} className="nav-link active">T&C</button>
              <button id="faq" onClick={handleClickFAQ} className="nav-link">FAQs</button>
            </div>
        </div>
    
        <div className="container-fluid5">
          <div id="terms">
            <h1>Terms and Conditions</h1>
            <ol>
              <li>The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion.</li>
              <li>The TechoKids Referral Program is solely intended for personal and non-commercial purposes and the referral may only be shared with your personal
            contacts and not the public at large. Spamming referral links or soliciting potential referral contacts through search engine marketing, other advertising
            channels, or by building websites to generate traffic to the referrals is strictly prohibited.</li>
              <li>We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these
            terms.</li>
              <li>We also reserve the right to cancel this Referral Program or alter the eligibility criteria at any time and for any reason at our own discretion.</li>
              <li>We reserve the right to cancel the reward/ disqualification for any fraud/if refund % is high.</li>
              <li>All referrals are valid only when your referral purchases minimum Advance (48-51 classes) or Master Package (144-150 classes)</li>
              <li>MacBook for the giveaway is only given when you cross 10 referrals.</li>
              <li>The registrations should be strictly done via your personal link and no manual flow plus informed in advance to your superior. Account your referral by
              confirming with the company.</li>
              <li>Only referrals registered from 1st Nov will be eligible for the shared structure.</li>
              <li>This referral program is valid till 31st December 2020. In order to be eligible for the reward, your referral must be registered before 31st December and
              should buy the minimum package as stated earlier.</li>
              <li>The subscriptions and EMIs less than 48 classes will not get the benefits of this referral program.</li>
            </ol>
          </div>
        </div>
      <div className="container-fluid5">

        <div id="faqs">
          <h1>FAQs & Strategies for "Refer & Earn"</h1>
          <ol>
            <li>Q.1. How can I refer? The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win
            MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name,
            email ID to TechoKids.</li>
            <li>Q.2. I have referred 1 or many leads but not yet received my referral gift 1 or many of your referrals need to purchase a minimum advance package of 48-51
            classes or higher. So, you can refer as many friends, family and acquaintances as you can, but all of them need to enroll in the aforementioned packages.</li>
            <li>Q.3. I have referred my friends, where I can check the status of them?
            You can check the status with TechoKids admin. Your Referrals will be accounted against your name. Here you will get the details of your referrals like who
            registered, done with trial class and paid and if Eligible/Not Eligible for the referral award.
            </li>
            <li>Q.4. I have not used any of my link/connection or not informed earlier, but I have referred will I get a Referral Reward?
            The registrations should be strictly done via your own link and should be informed prior to your superior at TechoKids. If a customer has not registered via your
            referral, they won’t be considered as your referral.</li>
            <li>Q.5. How will I receive the Reward?
            Once any of your referrals sign up for a minimum advance package of 48-51 classes or higher on our platform, you will be notified. Once we have the required
            information, we will Send your reward after 31st December when the program is ended.</li>
            <li>Q.6. Are there any Terms and Conditions of this referral program?
            Yes, here are the Terms and Conditions of this Referral Program.</li>
            <li>Q.7. Is there any limit on benefits?
            This reward is available only to the first 50 winners without any questions asked. During the program period your link/connection should make the payment to be
            eligible.</li>
            <li>Q.8. What is the Model of Macbook which the company is providing?
            Company is providing Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466 (13.3 inch, Silver, 1.35 kg) MRP Rs 84,900 ($1,125).</li>
            <li>Q.9. If I refer one of my friends will he/she get the same teacher as me?
            Not required that your referral will get the same teacher but level of the teacher and student will be same, but don’t worry TechoKids follows a rigorous 5-Step
            Selection Process for confirming teacher candidates so your kids are taught by the Top 1% of Experts so all of our teachers are best.</li>

            <li>Q.10. Is there any end date of this referral program?
            This referral program is valid till 31st December. In order to be eligible for the rewards, your referral must be registered and paid before 31st December 2020.</li>
            <li>Q.11. Is there any benefit whom I am referring to?
            Your referrals will also get 10% additional off in all our packages (on MRP package value)</li>
            <li>Q.12. Can I get the benefit in case my referral buys a subscription or EMI?
            No, people who are buying programs on subscriptions or EMI (less than 48 Classes) they would not become your eligible referrals.</li>
          </ol>
        </div>
    </div>
  </div>
  );
}

export default RefEarnScreen;
