function Signup({ signUpStyle }) {
    return (
        <>
            <div className={signUpStyle.signupForm}>
                <form>
                    <input type="text" placeholder="First Name*" required />
                    <input type="text" placeholder="Last Name*" required />
                    <input type="email" placeholder="Email Address*" required />
                    <span style={{ position: "relative" }}>
                        <span className={signUpStyle.icon}>
                            <i className="fa fa-eye" />
                        </span>
                        <input type="password" placeholder="Password*" required />
                    </span>
                    <span style={{ position: "relative" }}>
                        <span className={signUpStyle.icon}>
                            <i className="fa fa-eye" />
                        </span>
                        <input type="password" placeholder="Confirm Password*" required />
                    </span>
                    <button>Create Account</button>
                    <div className={`row ${signUpStyle.iconOptions}`}>
                        <div
                            style={{ background: "#000000", marginRight: 6 }}
                            className="col"
                        >
                            <img src="./images/R (2).png" />
                        </div>
                        <div
                            style={{ background: "#5A70E3", margin: "0 6px 0 6px" }}
                            className="col"
                        >
                            <img src="./images/facebook-logo-png-white-i6.png" />
                        </div>
                        <div
                            style={{ background: "#F5F5F5", marginLeft: 6 }}
                            className="col"
                        >
                            <img src="./images/google.png" />
                        </div>
                    </div>
                    <span className={signUpStyle.termsCondi}>
                        <span>By Continuting, you agree to MindMatter's </span>
                        <span>Terms &amp; Conditions </span>
                        <span>and </span>
                        <span>Privacy and Policy</span>
                    </span>
                </form>
            </div>
        </>
    )
}
export default Signup