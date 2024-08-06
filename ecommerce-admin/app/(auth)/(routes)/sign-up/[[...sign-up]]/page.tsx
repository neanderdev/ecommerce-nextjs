import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return <SignUp
        fallbackRedirectUrl="/sign-in"
        forceRedirectUrl="/sign-in"
    />;
}