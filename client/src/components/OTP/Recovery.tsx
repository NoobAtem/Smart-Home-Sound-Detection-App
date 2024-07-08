import { useState } from 'react';
import RecoverIcon from '../../assets/Recover.png';
import PasswordIcon from '../../assets/password.png';
import Mail from '../../assets/mail.png';
import '../../output.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from "../../components/navigation/header"; 


const Recovery = () => {
  // State to control the form visibility
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);

  // Input Email For Recovery
  const [email, setEmail] = useState('');
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [emailNotFoundError, setEmailNotFoundError] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmitRecovery = async (e: any) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailFormatError(true);
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Check if the email is registered
      const checkEmailResponse = await axios.post('http://localhost:5000/CheckEmail', { EmailAcc: email });

      if (checkEmailResponse.data === 'exists') {
        // Email is registered, proceed with OTP sending
        const otpResponse = await axios.post('http://localhost:5000/sendOTP', { email: email });

        if (otpResponse.data.status === 'success') {
          // OTP sent successfully, show verifyForm
          alert('OTP is sent to your email');
          setShowVerifyForm(true);
        } else {
          // Handle OTP sending failure
          alert('Error sending OTP. Please try again.');
        }
      } else {
        // Email is not registered
        setEmailNotFoundError(true);
        alert('This email is not registered. Please enter a registered email.');
      }
    } catch (error) {
      console.error('Error during email and OTP verification:', error);
      alert('Error during email and OTP verification. Please try again.');
    }
  };

  // Input Received OTP for recovery
  const [Verification_Code, setVerification_Code] = useState('');
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [I_proceed, I_setProceed] = useState(false);

  const handleSubmitOTP = async (e : any) => {
    e.preventDefault();

    if (Verification_Code.trim() === '') {
      // Don't proceed if the OTP is not entered
      return;
    }

    try {
      // Check if the entered OTP is correct
      const response = await axios.post('http://localhost:5000/VerifyOTP', {
        email: email, // Access the email prop
        otp: Verification_Code,
      });

      console.log('VerifyOTP Response:', response.data);

      if (response.data === 'success') {
        // OTP verification successful
        setShowNewPasswordForm(true);
        alert("OTP successfully verified");
      } else {
        // OTP verification failed
        setIsOtpCorrect(false);
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
    }
  };

  const isFormValid = Verification_Code.trim() !== '';

   //---------------------------RESET PASSWORD-=----------------------

   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [passwordError, setPasswordError] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const [resetError, setResetError] = useState('');
   const [loading, setLoading] = useState(false);

   const validatePassword = () => {
       if (password.length < 6) {
           setPasswordError('Password must be at least 6 characters long');
       } else {
           setPasswordError('');
       }
   };

   const validateConfirmPassword = () => {
       if (confirmPassword !== password) {
           setConfirmPasswordError('Passwords do not match');
       } else {
           setConfirmPasswordError('');
       }
   };

   const handleSubmitReset = async (e : any ) => {
       e.preventDefault();
  
       // Validate password and confirm password
       validatePassword();
       validateConfirmPassword();
  
       // Check if there are any validation errors
       if (passwordError || confirmPasswordError) {
           console.log('Form has errors. Please fix them before submitting.');
           return;
       }
  
       setLoading(true);
  
       try {
           // Send user data and new password to the server for password reset
           const resetPasswordResponse = await axios.post('http://localhost:5000/ResetPassword', {
               EmailAcc: email,
               NewPassword: password,
           });
  
           console.log('Reset Password Response:', resetPasswordResponse.data);
  
           if (resetPasswordResponse.data.status === 'success') {
               // Password reset successful
               console.log('Password reset successful');
               // Redirect to the login page
               console.log(email);
               alert("Password changed successfully");
               navigate("/");
           } else {
               // Password reset failed
               console.log('Password reset failed');
               alert('Password reset failed. Please try again.');
           }
       } catch (error) {
           console.error('Error during password reset:', error);
           alert('Error during password reset. Please try again later.');
       } finally {
           setLoading(false);
       }
   };

  return (
   
  
    <>
    <Header />
      {!showVerifyForm && !showNewPasswordForm && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" id="recoveryForm">
          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center">
            <div className='flex mb-4'>
              <img className="w-12 h-12" src={RecoverIcon} alt="Recover Icon" />
              <h2 className="text-4xl font-bold mb-6 text-gray-500">Recover <br /> Account</h2>
            </div>
            <div className="flex justify-center mb-4">
            </div>
            <form className="space-y-4" onSubmit={handleSubmitRecovery}>
              <div className="relative flex items-center">
                <img className="absolute left-3 w-6 h-6" src={Mail} alt="Mail Icon" />
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Enter email" 
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
       
      )}
      
      {showVerifyForm && !showNewPasswordForm && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" id='verifyForm'>
          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center">
            <div className='flex mb-4'>
              <img className="w-12 h-12" src={RecoverIcon} alt="Recover Icon" />
              <h2 className="text-4xl font-bold mb-6 text-gray-500">Recover <br /> Account</h2>
            </div>
            <div className="flex justify-center mb-4">
              <p className='text-xs'>An OTP has been sent to your registered mobile number.<br/> Please check your inbox and use the code to proceed. Thank you!</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmitOTP}>
              <div className="relative flex items-center">
                <img className="absolute left-3 w-6 h-6" src={Mail} alt="Mail Icon" />
                <input 
                  type="text" 
                  name="OTP" 
                  placeholder="Enter OTP" 
                  onChange={(e) => setVerification_Code(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Verify 
              </button>
            </form>
          </div>
        </div>
      )}

      {showNewPasswordForm && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100" id='newPassword'>
          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center">
              <div className='flex mb-4'>
              <img className="w-12 h-12" src={RecoverIcon} alt="Recover Icon" />
              <h2 className="text-4xl font-bold mb-6 text-gray-500">Recover <br /> Account</h2>
              </div>
              <div className="flex justify-center mb-4">
              
              </div>
              <form className="space-y-4" onSubmit={handleSubmitReset}>
              <div className="relative flex items-center">
                  <img className="absolute left-3 w-6 h-6" src={PasswordIcon} alt="Mail Icon" />
                  <input 
                  type="password" 
                  name="newpassword" 
                  placeholder="New Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
              </div>
              <div className="relative flex items-center">
                  <img className="absolute left-3 w-6 h-6" src={PasswordIcon} alt="Mail Icon" />
                  <input 
                  type="password" 
                  name="confirmpassword" 
                  placeholder="Confirm Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
              </div>
              <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                  Save 
              </button>
              </form>
          </div>
        </div>
        
      )}
      <Footer/>
    </>
  );
};

export default Recovery;
