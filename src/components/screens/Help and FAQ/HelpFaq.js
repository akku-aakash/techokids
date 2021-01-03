import React from 'react'
import "./index.css"
import banner from '../../../images/group.png'
import banner2 from '../../../images/minus.png';
import Header from "../../base/Header";
import Footer from "../../base/Footer";

function HelpFaq() {

    const handleClick = (s,q,r) => {
        const x = '.' +  s.toString();
        
        var divs = document.querySelectorAll(".grid-ans");
        divs.forEach((div) => {
            div.style.display = "none";
        });

        var divs = document.querySelector('.'+q.toString());
        var ele = divs.querySelector(x);
        ele.style.display = "block";
        var changeImage = document.querySelectorAll(".show-ans");
        changeImage.forEach((image) => {
            image.src = banner;
        })
    }

    const handleShow = (name, flag) => {

        var divs = document.querySelectorAll(".ques");
        divs.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector('.' + name.toString()).style.display = "block";
    }

    return (
        <>
        <div className="home-header">
          FAQs
        </div>
        <div className="faq-grids">
            <div className="grids">
                <div className="left-grid">
                    <div><button className="grid-item active" onClick={() => handleShow("about-techoKids", "true")}>
                        About TechoKids
                    </button></div>
                    <div><button className="grid-item a2" onClick={() => handleShow("techoKids-live-classes")}>
                        TechoKids' Live Classes
                    </button></div>
                    <div><button className="grid-item 3" onClick={() => handleShow("teachers")}>
                        Teachers
                    </button></div>
                    <div><button className="grid-item 4" onClick={() => handleShow("courses")}>
                        Courses
                    </button></div>
                    <div><button className="grid-item 5" onClick={() => handleShow("parent-teacher-meetings")}>
                        Parent-Teacher Meetings
                    </button></div>
                    <div><button className="grid-item 6" onClick={() => handleShow("signing-up-with-techokids")}>
                        Signing Up with TechoKids
                    </button></div>
                    <div><button className="grid-item 7" onClick={() => handleShow("start-learning-with-techokids")}>
                        Start learning with us!
                    </button></div>
                </div>
                <div className="right-grid">
                    <div className="ques about-techoKids">
                        <h2 className="heading">About TechoKids</h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) What is TechoKids? </h2>
                                <img onClick={() => handleClick("a", "about-techoKids", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>TechoKids Private Limited is an online coding platform for kids from age 6 to 18 years. We provide live lessons for kids to connect them with leading teachers worldwide through 1:1 online classes. Our vision is to create a generation of young programmers and Tech Entrepreneurs who would create exciting and brilliant applications, websites, games, and more. </p>
                            </div>
                        </div>

                        <hr></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) Why should my child subscribe TechoKids?</h2>
                                    <img onClick={() => handleClick("b", "about-techoKids", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>Students demand 1:1  contact with an accomplished instructor to lead them, immersive content to sustain a dedication, and a customized forum to maximize outcomes for the best learning experience. Each platform comes with its visions and policies. However, TechoKids offers an engaging and enjoyable curriculum, self-paced online courses to learn coding in the comfort of their home.  </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) What does a week at TechoKids look like?</h2>
                                    <img onClick={() => handleClick("c", "about-techoKids", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>A week at TechoKids is fun, exciting, and filled with learning! Your child will have at least two but not more than seven classes a week - Our coding classes are flexible. TechoKids is the perfect versatile solution to continue your child's learning outside of school to make sure they keep engaged and busy. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( D ) What makes TechoKids different from every other 
          Education Platform?</h2>
                                    <img onClick={() => handleClick("d", "about-techoKids","imaged")} className="show-ans imaged" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans d">
                                    <p>A week at TechoKids is fun, exciting, and filled with learning! Your child will have at least two but not more than seven classes a week - Our coding classes are flexible. TechoKids is the perfect versatile solution to continue your child's learning outside of school to make sure they keep engaged and busy. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques techoKids-live-classes">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) What is the duration of TechoKids’ Online Class? </h2>
                                <img onClick={() => handleClick("a", "techoKids-live-classes", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) What is the frequency of TechoKids Online Classes? </h2>
                                    <img onClick={() => handleClick("b", "techoKids-live-classes", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) What are the systems requirements to attend            
            TechoKids Online Classes? </h2>
                                    <img onClick={() => handleClick("c", "techoKids-live-classes", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( D ) Will my child get 1:1 Online Classes or in a batch with         
            other students? </h2>
                                    <img onClick={() => handleClick("d", "techoKids-live-classes", "imaged")} className="show-ans imaged" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans d">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( E ) Can my child reschedule a class if he/she misses it? </h2>
                                    <img onClick={() => handleClick("e", "techoKids-live-classes", "imagee")} className="show-ans imagee" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans e">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( F ) Can we download TechoKids Online Classes?</h2>
                                    <img onClick={() => handleClick("f", "techoKids-live-classes", "imagef")} className="show-ans imagef" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans f">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( G ) Can we schedule TechoKids Class Timings as per    
            our convenience? </h2>
                                    <img onClick={() => handleClick("g", "techoKids-live-classes", "imageg")} className="show-ans imageg" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans g">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( H ) Is my child going to get homework? How are 
            they going to get evaluate it? </h2>
                                    <img onClick={() => handleClick("h", "techoKids-live-classes", "imageh")} className="show-ans imageh" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans h">
                                    <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques about-techoKids">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) How TechoKids  select a teacher? </h2>
                                <img onClick={() => handleClick("a", "teachers", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>Our teachers go through intense scrutiny for hiring & training, designed to ensure that kids' interest, curiosity & outcome-based learning are top-notch. Our process is challenging; it's a highly rigorous selection process; out of 100, we end up selecting one faculty and add to our population of hand-picked teachers. </p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) What if my child doesn't like his personal tutor? </h2>
                                    <img onClick={() => handleClick("b", "teachers", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>We are confident that your child would find a teacher that they would love. TechoKids tutors are excellent providing a friendly and welcoming atmosphere. It might happen that they may not like their mentor. In such cases, please contact the academic advisor, and they will assist you further in giving another teacher.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) Will my child have different tutors for different 
         courses? </h2>
                                    <img onClick={() => handleClick("c", "teachers", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>Our teachers are highly qualified and trained to teach several subjects. You may have the same teacher for various topics, or you may have different teachers! You can always request a change in case of a mentor you don't like or like - undoubtedly, and our teachers would try their best to support your child in every way possible.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( D ) How will you ensure that the student likes the 
         teacher's teaching style? </h2>
                                    <img onClick={() => handleClick("d", "teachers", "imaged")} className="show-ans imaged" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans d">
                                    <p>We believe that student-teacher rapport can transform the coding journey, and therefore the students are asked for feedback on the mentor to ensure that they are happy with them. Parents can contact the relationship manager for feedback or queries related to the mentor. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( E ) Is the teacher who conducted the trial class going to 
        run actual lessons as well? </h2>
                                    <img onClick={() => handleClick("e", "teachers", "imagee")} className="show-ans imagee" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans e">
                                    <p>All our teachers are highly qualified and seasoned in the subjects they provide the class with. The teacher assigned to your ward would depend on their interactions, learning patterns, which would measure your child's personality and learning requirements and, in the end, matching them to the best guide.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques courses">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) What are the courses available? </h2>
                                <img onClick={() => handleClick("a", "courses", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>We currently offer 1:1 live online coding courses for different grades. We are continually adding new lessons, grades, and standards, so check back here for updates.</p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) How will you cover the concepts and doubts? </h2>
                                    <img onClick={() => handleClick("b", "courses", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>We ensure that students cover the same material/maybe more than the course contents. Students are encouraged to ask for doubts, which can be addressed during class. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) Will the course cover the school curriculum and 
         reference books?</h2>
                                    <img onClick={() => handleClick("c", "courses", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>Yes! Our curriculum is fabricated using the school curriculum and a great list of text and reference books from multiple publishers. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( D ) How are lesson plans and questions designed? </h2>
                                    <img onClick={() => handleClick("d", "courses", "imaged")} className="show-ans imaged" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans d">
                                    <p>Designed by Google, Amazon, IIT alumni, every lesson comprises HD animated videos, fun games, online quiz competitions in class to make your child fall in love with the subject</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( E ) Are printed study materials provided to 
        the enrolled students? </h2>
                                    <img onClick={() => handleClick("e", "courses", "imagee")} className="show-ans imagee" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans e">
                                    <p>Once a child uses TechoKids, all the resources they need, and more, are all on the platform. No need for any additional e-learning apps, question banks, practice tests, explanation videos. We have videos that cover all fundamental concepts and quizzes for our enrolled students!</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques parent-teacher-meetings">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) What is PTM? </h2>
                                <img onClick={() => handleClick("a", "parent-teacher-meetings", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>Our classes are for 60 minutes long, to cover each topic in depth through explanations, videos, games, live quizzes, plus time for questions, support, and coaching from our courteous and seasoned mentors. </p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) How to book a PTM? </h2>
                                    <img onClick={() => handleClick("b", "parent-teacher-meetings", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>A PTM is a Parent-Teacher meeting that will take place between you and the mentor, which would be held in the live class sessions. The mentor would provide feedback on your child's performance and speak in detail about their requirements or their boons. They would talk about your child's weaknesses and strengths, as well. Accordingly, we at TechoKids can help best train them to become leaders in their fields of choice.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) I want to reschedule the PTM. Is it possible? </h2>
                                    <img onClick={() => handleClick("c", "parent-teacher-meetings", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>Unfortunately, you won't be able to reschedule the PTM. But no worries, the mentor would keep in touch with you for the next round of PTM to get detailed feedback about your child's performance. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques signing-up-with-techokids">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) How will TechoKids get in touch with me after I 
         book a trial class? </h2>
                                <img onClick={() => handleClick("a", "signing-up-with-techokids", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>No worries about that either, as our team would get in touch with the official WhatsApp/SMS service. The pros of booking a class are that you would choose the language of your choice and the method of communication. Choose WhatsApp services to stay up-to-date.</p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) Once I subscribe to TechoKids, how will I be 
         contacted? </h2>
                                    <img onClick={() => handleClick("b", "signing-up-with-techokids", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>All you need is to subscribe to TechoKids, and the rest will be taken care of via WhatsApp and SMS. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) How will I be informed about the details of the 
         tutor and batch routine?</h2>
                                    <img onClick={() => handleClick("c", "signing-up-with-techokids", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>You will be informed about such details as soon as your child is assigned with a mentor and batch. You will receive a direct message with the chosen communication method, i.e., either WhatsApp/SMS. So, keep an eye over that.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                    <div className="ques start-learning-with-techokids">
                        <h2 className="heading">TechoKids' Live Classes </h2>
                        <div className="quesus">
                            <div className="grid-ques first">
                                <h2>( A ) How will learning Coding with TechoKids 
         help my child? </h2>
                                <img onClick={() => handleClick("a", "start-learning-with-techokids", "imagea")} className="show-ans imagea" src={banner} alt="image" />
                            </div>
                            <div className="grid-ans a">
                                <p>TechoKids would be the right choice for your child as we would go above and beyond to help your child learn coding from the core of their heart.  

1 : 1 Interaction: Your child needs personalized attention for them to become what they want to be. To aid them, we provide them with regular feedback, and all their doubts are cleared on the spot as TechoKids class is face-to-face and interactive. 

Irresistible & Captivating Content: Designed by Google, Amazon, IIT alumni, every lesson is packed with HD animated videos, interactive games, live quiz competitions in class to aid your child to learn concepts and fall in love with learning. 

Realistic Skills: TechoKids covers school curriculum AND helps build them inside out with skills like leadership, communication, creativity to curate a job giver and not a job seeker.</p>
                            </div>
                        </div>
                        <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( B ) Will TechoKids help my child with homework and 
         clearing doubts? 
</h2>
                                    <img onClick={() => handleClick("b", "start-learning-with-techokids", "imageb")} className="show-ans imageb" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans b">
                                    <p>Our 1:1 student-teacher ratio allows your child enough time with the teacher to clarify doubts before the class ends.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( C ) Coding For Your Child </h2>
                                    <img onClick={() => handleClick("c", "start-learning-with-techokids", "imagec")} className="show-ans imagec" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans c">
                                    <p>Whether you are interested in IT sectors and want to get through by qualification or want to get fascinated by the world of tech and coding courses, TechoKids offers a plethora of live coding courses to make coding reach out to kids and youngsters. Our guide answers some of the frequently asked questions from parents and students to help you understand the basics of our kids' programming courses cover. It would help you know whether you have made the right decision.  </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( D ) Are coding classes suitable for kids? </h2>
                                    <img onClick={() => handleClick("d", "start-learning-with-techokids", "imaged")} className="show-ans imaged" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans d">
                                    <p>Being a parent, we understand your concerns. All you need to do is explore the opportunities and trust the process. The benefits of such courses are not just for their careers but for navigating more options than you would ever know. TechoKids teaches coding for kids in programs designed to stimulate creativity, problem-solving skills, and academic performance overall.</p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( E ) When should my child start learning the subject? </h2>
                                    <img onClick={() => handleClick("e", "start-learning-with-techokids", "imagee")} className="show-ans imagee" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans e">
                                    <p>Kids as young as six years of age can start coding and learning programming basics—TechoKids aid your child produce apps, games, and animations. We focus on learning rather than making them train to code or become a consumer of the apps. Because they are oriented so that your kid gets the most concentration from the teachers. TechoKids makes sure that the kids get proper knowledge about what they are getting into by providing Live 1:1 lessons. TechoKids also provides interactions with International faculty to shape the child's interest in their field. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                            <div className="quesus">
                                <div className="grid-ques">
                                    <h2>( F ) There are so many programming languages. Which 
         one should my child learn? </h2>
                                    <img onClick={() => handleClick("f", "start-learning-with-techokids", "imagef")} className="show-ans imagef" src={banner} alt="image" />
                                </div>
                                <div className="grid-ans f">
                                    <p>The most straightforward coding language to learn for first-time learners is Python and scratch. Thanks to its flexibility, Python and scratch are among the most widely used high-level programming languages today. In TechoKids, we teach Python and scratch for the beginners who want to know the necessary coding concept.  
Still looking out for other queries, Contact Us. </p>
                                </div>
                            </div>
                            <hr style={{borderTop: "1px  solid black !important"}}></hr>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default HelpFaq
