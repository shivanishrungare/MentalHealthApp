import { useState } from 'react'
import './AssessmentQns.css'
import DesktopMenu from '../NavigationBar/DesktopDevice/DesktopMenu'
import { Auth } from '../../screens/auth/Auth'
import { useNavigate } from "react-router-dom";

const AssessmentQns = () => {
    let navigate = useNavigate();
    const [questions, setQuestions] = useState(
        [
            {
                qns: 'How old are you?',
                ans: [
                    {
                        icon: '',
                        ans: '10 to 18 years',
                        borderColor: '#EC4BDC'
                    },
                    {
                        icon: '',
                        ans: '18 to 40 years',
                        borderColor: '#46AC81'
                    },
                    {
                        icon: '',
                        ans: '40 to 70 years',
                        borderColor: '#f2351bb3'
                    },
                    {
                        icon: '',
                        ans: 'above 70 years',
                        borderColor: '#391bf2b3'
                    }
                ]
            },
            {
                qns: 'What brings you good mental health?',
                ans: [
                    {
                        icon: './images/Exercise.png',
                        ans: 'Regular Exercise',
                        borderColor: '#EC4BDC'
                    },
                    {
                        icon: './images/sleep3.png',
                        ans: 'Sufficient Sleep',
                        borderColor: '#f2351bb3'
                    },
                    {
                        icon: './images/Group.png',
                        ans: 'Strong Social Connection',
                        borderColor: '#391bf2b3'
                    },
                    {
                        icon: './images/Medidate.png',
                        ans: 'Practicing Meditation',
                        borderColor: '#46AC81'
                    }
                ]
            },
            {
                qns: 'Have you ever been feeling down, depressed or hopeless in the past weeks?',
                ans: [
                    {
                        icon: './images/No.png',
                        ans: 'Not at All',
                        borderColor: '#46AC81'
                    },
                    {
                        icon: './images/Someday.png',
                        ans: 'Several days',
                        borderColor: '#f2351bb3'
                    },
                    {
                        icon: './images/Everyday.png',
                        ans: 'Nearly everyday',
                        borderColor: '#EC4BDC'
                    },
                ]
            },
            {
                qns: 'Have you noticed a significant change in your appetite or weight recently ?',
                ans: [
                    {
                        icon: './images/Change.png',
                        ans: 'Yes, noticeable change',
                        borderColor: '#46AC81'
                    },
                    {
                        icon: './images/eat.png',
                        ans: 'No, change in appetite',
                        borderColor: '#f2351bb3'
                    },
                ]
            },
            {
                qns: 'Do you frequently experience excessive worry or anxiety that is difficult to control?',
                ans: [
                    {
                        icon: './images/Anxious.png',
                        ans: 'Yes, I become anxious',
                        borderColor: '#46AC81'
                    },
                    {
                        icon: './images/CalmEmo.png',
                        ans: 'No, I remain calm',
                        borderColor: '#f2351bb3'
                    },
                ]
            },
        ]
    )

    const [steps, setSteps] = useState(0)

    const goToNextStep = () => {
        setSteps(steps + 1)
    }

    const closePopup = () => {
        navigate("/login"); 

        // if (steps  === questions.length) {
        //     setShowAssessment(false);
        //     navigate("/login");
        // }
    }

    const displayQuestionPop = () => {

        let filteredQuestion = questions.find((question, index) => index === steps);
        console.log("steps" +steps);
        if (steps  === questions.length) {
            return (
                <div className='row qnsProgress'>
                    <img src="./images/ThankYou.jpg" className='thankyouImg'/>

                    <span>For your answers, Lets begin the journey with us!</span>

                </div>
            )
        }
        else {
            return (
                <>
                    <div className='row qnsProgress'>
                        <span>Question {steps + 1} of {questions.length}</span>
                    </div>
                    <div className="row ques">
                        <span className="col-12">
                            {filteredQuestion.qns}
                        </span>
                    </div>
                    <div className="row ans">
                        {
                            filteredQuestion.ans.map((answer, index) => {
                                return (
                                    <div onClick={goToNextStep} className="col-12" style={{ borderColor: answer.borderColor }} key={index}>
                                        <span>
                                            <img src={answer.icon} />
                                            {/* <EmojiPicker /> */}
                                            {/* <EmojiPeople emoji="grinning-face"/> */}
                                        </span>
                                        {answer.ans}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row skipBtn">
                        <button onClick={goToNextStep} className="col-12">
                            Skip
                        </button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="popup-overlay">
                <div className="popup-window">
                    <span className='closeQns'>
                        <img src='./images/failed-icon.jpg' className='imgClose' onClick={closePopup}></img>
                    </span>
                    <div className="container qnsContai">
                        {
                            displayQuestionPop()
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
export default AssessmentQns