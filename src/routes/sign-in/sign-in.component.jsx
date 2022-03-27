import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/Firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                SIgn in with google
            </button>
        </div>
    )
}

export default SignIn