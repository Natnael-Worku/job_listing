
import { count } from 'console';
import react,{useState,useEffect} from 'react';

interface OTPprops{
    email:string;
    name:string;
    password:string;
    confirmpassword:string;
}


export default function CountdownTimer(props:OTPprops) {
    const [countdown, setCountdown] = useState(30);
    const [resendDisabled, setResendDisabled] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    clearInterval(timer);
                    setResendDisabled(false);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [clickCount]);

    const handleResendClick = async () => {
        // alert("Resend code");

        try {
            const response = await fetch("https://akil-backend.onrender.com/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: props.name,
                email: props.email,
                password: props.password,
                confirmpassword: props.confirmpassword,
                role: "User",
              }),
            });
      
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
      
            const result = await response.json();
            // console.log(result);
            // redirect("/jobs"); 
          } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
          }


        setCountdown(30);
        setClickCount((prevClickCount) => prevClickCount + 1);
        setResendDisabled(true);
    };

    return (
        <div className=''>
            {/* <span className="text-[#4640DE]">{countdown}s</span> */}
           
            you can request a resend code{": "}
            {countdown === 0 && (
                <span className="text-[#4640DE] cursor-pointer" onClick={handleResendClick}>
                    Resend Code
                </span>
            )} in {countdown}s
        </div>
    );
}