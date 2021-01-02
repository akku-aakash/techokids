import React from 'react'

const TnC = () => {
  const tncArr = [
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion.",
    "The TechoKids Referral Program is solely intended for personal and non-commercial purposes and the referral may only be shared with your personal contacts and not the public at large. Spamming referral links or soliciting potential referral contacts through search engine marketing, other advertising channels, or by building websites to generate traffic to the referrals is strictly prohibited.",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
    "We also reserve the right to cancel this Referral Program or alter the eligibility criteria at any time and for any reason at our own discretion.",
    "We reserve the right to cancel the reward/ disqualification for any fraud/if refund % is high.",
    "All referrals are valid only when your referral purchases minimum Advance (48-51 classes) or Master Package (144-150 classes)",
    "MacBook for the giveaway is only given when you cross 10 referrals", 
    "The registrations should be strictly done via your personal link and no manual flow plus informed in advance to your superior. Account your referral by confirming with the company.",
    "Only referrals registered from 1st Nov will be eligible for the shared structure",
    "This referral program is valid till 31st December 2020. In order to be eligible for the reward, your referral must be registered before 31st December and should buy the minimum package as stated earlier.",
    "The subscriptions and EMIs less than 48 classes will not get the benefits of this referral program."
  ]

  return (
    <div className="TNC">
      <h2>Terms and Conditions</h2>
      {
        tncArr.map((item,index) => {
          return (
            <div>
              <p>{index+1}. &nbsp; {item} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TnC;