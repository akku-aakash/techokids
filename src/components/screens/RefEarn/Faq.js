import React from 'react'

const Faq = () => {
  const faqArr = [
    {
      id: 1,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 2,
      ques: "I have referred 1 or many leads but not yet received my referral gift?",
      ans: "1 or many of your referrals need to purchase a minimum advance package of 48-51 classes or higher. So, you can refer as many friends, family and acquaintances as you can, but all of them need to enroll in the aforementioned packages."
    },
    {
      id: 3,
      ques: "I have referred my friends, where I can check the status of them?",
      ans: "You can check the status with TechoKids admin. Your Referrals will be accounted against your name. Here you will get the details of your referrals like who registered, done with trial class and paid and if Eligible/Not Eligible for the referral award."
    },
    {
      id: 4,
      ques: "I have not used any of my link/connection or not informed earlier, but I have referred will I get a Referral Reward?",
      ans: "The registrations should be strictly done via your own link and should be informed prior to your superior at TechoKids. If a customer has not registered via your referral, they won’t be considered as your referral."
    },
    {
      id: 5,
      ques: "How will I receive the Reward?",
      ans:  "Once any of your referrals sign up for a minimum advance package of 48-51 classes or higher on our platform, you will be notified. Once we have the required information, we will Send your reward after 31st December when the program is ended."
    },
    {
      id: 6,
      ques: "Are there any Terms and Conditions of this referral program?",
      ans: "Yes, here are the Terms and Conditions of this Referral Program." 
    },
    {
      id: 7,
      ques: "Is there any limit on benefits?",
      ans: "This reward is available only to the first 50 winners without any questions asked. During the program period your link/connection should make the payment to be eligible." 
    },
    {
      id: 8,
      ques: "What is the Model of Macbook which the company is providing?",
      ans: "ompany is providing Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466 (13.3 inch, Silver, 1.35 kg) MRP Rs 84,900 ($1,125)."
    },
    {
      id: 9,
      ques: "If I refer one of my friends will he/she get the same teacher as me?",
      ans: "Not required that your referral will get the same teacher but level of the teacher and student will be same, but don’t worry TechoKids follows a rigorous 5-Step Selection Process for confirming teacher candidates so your kids are taught by the Top 1% of Experts so all of our teachers are best." 
    },
    {
      id: 10,
      ques: "Is there any end date of this referral program?",
      ans: "This referral program is valid till 31st December. In order to be eligible for the rewards, your referral must be registered and paid before 31st December 2020." 
    },
    {
      id: 11,
      ques: "Is there any benefit whom I am referring to?",
      ans: "Your referrals will also get 10% additional off in all our packages (on MRP package value)" 
    },
    {
      id: 12,
      ques: "Can I get the benefit in case my referral buys a subscription or EMI?",
      ans: "No, people who are buying programs on subscriptions or EMI (less than 48 Classes) they would not become your eligible referrals." 
    },
  ]

  return (
    <div className="TNC">
      <h2>FAQs & Strategies for "Refer & Earn"</h2>
      {
        faqArr.map((item,index) => {
          return (
            <div>
              <p>Q{item.id}. &nbsp; {item.ques} <br />{item.ans} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Faq;
