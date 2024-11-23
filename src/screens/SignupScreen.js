import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Axios from 'axios'
import "./LoginScreen.css"
import { Store } from '../Store';
import { toast } from "react-toastify";
import { getError } from "../utils";

const SignupScreen = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    // Name validation rules
    const validateName = (name) => {
        const errors = [];
        
        if (name.trim().length < 2) {
            errors.push("Name must be at least 2 characters long");
        }
        
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            errors.push("Name can only contain letters and spaces");
        }
        
        if (/^\s|\s$/.test(name)) {
            errors.push("Name cannot start or end with a space");
        }
        
        // Optional: Check for minimum word count (at least first and last name)
        if (name.trim().split(/\s+/).length < 2) {
            errors.push("Please provide both first and last name");
        }

        return errors;
    };

    // Email validation rules
    const validateEmail = (email) => {
        const errors = [];
        
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push("Please enter a valid email address");
        }
        
        // Optional domain restrictions (example: only allow certain domains)
        const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
        const domain = email.split('@')[1];
        if (domain && !allowedDomains.includes(domain)) {
            errors.push(`Only ${allowedDomains.join(', ')} domains are allowed`);
        }
        
        // Check for disposable email domains (optional)
        const disposableDomains = ['temp.com', 'tempmail.com', 'throwawaymail.com'];
        if (domain && disposableDomains.includes(domain)) {
            errors.push("Disposable email addresses are not allowed");
        }

        return errors;
    };

    // Password validation rules
    const validatePassword = (password) => {
        const errors = [];
        
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        }
        if (!/[0-9]/.test(password)) {
            errors.push("Password must contain at least one number");
        }
        if (!/[!@#$%^&*]/.test(password)) {
            errors.push("Password must contain at least one special character (!@#$%^&*)");
        }

        return errors;
    };

    // Handle name change
    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        
        const errors = validateName(newName);
        if (errors.length > 0) {
            setNameError(errors.join(', '));
        } else {
            setNameError('');
        }
    };

    // Handle email change
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        
        const errors = validateEmail(newEmail);
        if (errors.length > 0) {
            setEmailError(errors.join(', '));
        } else {
            setEmailError('');
        }
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        
        const errors = validatePassword(newPassword);
        if (errors.length > 0) {
            setPasswordError(errors.join(', '));
        } else {
            setPasswordError('');
        }

        // Check confirm password match if it's already entered
        if (confirmPassword) {
            if (newPassword !== confirmPassword) {
                setConfirmPasswordError('Passwords do not match');
            } else {
                setConfirmPasswordError('');
            }
        }
    };

    // Handle confirm password change
    const handleConfirmPasswordChange = (e) => {
        const confirmPwd = e.target.value;
        setConfirmPassword(confirmPwd);
        
        if (confirmPwd !== password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate name before submission
        const nameErrors = validateName(name);
        if (nameErrors.length > 0) {
            toast.error('Please fix name requirements: ' + nameErrors.join(', '));
            return;
        }

        // Validate email before submission
        const emailErrors = validateEmail(email);
        if (emailErrors.length > 0) {
            toast.error('Please fix email requirements: ' + emailErrors.join(', '));
            return;
        }
        
        // Validate password before submission
        const passwordErrors = validatePassword(password);
        
        if (passwordErrors.length > 0) {
            toast.error('Please fix password requirements: ' + passwordErrors.join(', '));
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            const { data } = await Axios.post('http://127.0.0.1:5000/api/users/signup', {
                "name": name,
                "email": email,
                "password": password
            });

            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');

        } catch (err) {
            toast.error(getError(err));
        }
    }

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h3 className="text-center mb-4">Sign Up Now!</h3>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${nameError ? 'is-invalid' : ''}`}
                                        id="name"
                                        required
                                        onChange={handleNameChange}
                                    />
                                    {nameError && (
                                        <div className="invalid-feedback">
                                            {nameError}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                        id="email"
                                        required
                                        onChange={handleEmailChange}
                                    />
                                    {emailError && (
                                        <div className="invalid-feedback">
                                            {emailError}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                        id="password"
                                        required
                                        onChange={handlePasswordChange}
                                    />
                                    {passwordError && (
                                        <div className="invalid-feedback">
                                            {passwordError}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                                        id="confirmPassword"
                                        required
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    {confirmPasswordError && (
                                        <div className="invalid-feedback">
                                            {confirmPasswordError}
                                        </div>
                                    )}
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </form>

                            <div className="text-center mt-3">
                                <Link to="/login" className="text-decoration-none">
                                    Already have an account? Login here!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupScreen