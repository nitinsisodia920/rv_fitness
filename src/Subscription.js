import React, { useState } from 'react';
import { Check, ArrowLeft, CreditCard, Building, Mail, User, Send, QrCode, Smartphone } from 'lucide-react';
import img from './WhatsApp Image 2024-11-11 at 11.01.01_9e7d1cb9.jpg'
const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPaymentBot, setShowPaymentBot] = useState(false);
  const [showUPIQR, setShowUPIQR] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    paymentMethod: ''
  });
  const [errors, setErrors] = useState({});

  // Existing plans data
  const plans = [
    {
      name: 'Basic',
      price: '1500',
      period: 'month',
      features: [
        'Basic furniture access',
        'Standard delivery',
        'Email support',
        '10% discount on first order'
      ],
      isPopular: false
    },
    {
      name: 'Premium',
      price: '2000',
      period: 'month',
      features: [
        'Full furniture catalog',
        'Priority delivery',
        '24/7 phone support',
        '20% discount on first order',
        'Early access to sales'
      ],
      isPopular: true
    },
    {
      name: 'Family',
      price: '15000',
      period: 'month',
      features: [
        'Wholesale prices',
        'Same-day delivery',
        'Dedicated account manager',
        'Custom furniture orders',
        'Bulk order discounts',
        'Extended warranty'
      ],
      isPopular: false
    }
  ];

  // Payment methods with UPI QR option
  const paymentMethods = [
    { 
      name: 'WhatsApp Payment', 
      description: 'Pay directly through WhatsApp',
      icon: <Send size={24} />,
      details: 'Instant communication and payment'
    },
    { 
      name: 'UPI QR', 
      description: 'Scan and pay via UPI',
      icon: <QrCode size={24} />,
      details: 'Quick bank transfer using QR'
    },
    // { 
    //   name: 'Bank Transfer', 
    //   description: 'Direct bank account transfer',
    //   icon: <CreditCard size={24} />,
    //   details: 'Traditional bank transfer method'
    // }
  ];

  // UPI QR Code generation (mock implementation)
  // const generateUPIQR = () => {
  //   // In a real-world scenario, this would be an API call to generate a dynamic UPI QR
  //   return `/api/upi-qr?amount=${selectedPlan.price}&name=${formData.name}&phone=${formData.phone}`;
  // };

  // Validation functions (existing code)
  const validateFullName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!name) return "Full name is required";
    if (!nameRegex.test(name)) return "Please enter a valid name (letters and spaces only, 2-50 characters)";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit Indian mobile number";
    return "";
  };

  const validatePincode = (pincode) => {
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincode) return "Pincode is required";
    if (!pincodeRegex.test(pincode)) return "Please enter a valid 6-digit pincode";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateFullName(formData.name),
      phone: validatePhone(formData.phone),
      pincode: validatePincode(formData.pincode)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleWhatsAppPayment = () => {
    if (!validateForm()) {
      return;
    }

    setShowPaymentBot(true);
  };

  const handlePaymentMethodSelection = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method.name
    }));

    if (method.name === 'WhatsApp Payment') {
      // Construct WhatsApp message with standardized country code
      const message = `
*Subscription Payment Request*

Name: ${formData.name}
Phone: +91${formData.phone}
Plan: ${selectedPlan.name}
Amount: ₹${selectedPlan.price}
Payment Method: ${method.name}

Please process the payment and confirm the subscription.
      `.trim();

      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // WhatsApp number with +91 country code
      const whatsappNumber = '+918851663808'; // Example Indian number with country code
      
      // Remove '+' and spaces from the number
      const cleanWhatsappNumber = whatsappNumber.replace(/[+ ]/g, '');
      
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new window
      window.open(whatsappUrl, '_blank');
    } else if (method.name === 'UPI QR') {
      // Show UPI QR code
      setShowUPIQR(true);
    }
  };

  const renderInputField = (label, name, icon, type = "text", placeholder = "") => (
    <div>
      <label className="flex items-center text-sm font-medium mb-1">
        {icon && React.cloneElement(icon, { size: 16, className: "mr-2 text-orange-500" })}
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full p-2 border ${
          errors[name] ? 'border-red-500' : 'border-gray-200'
        } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
        required
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );

  // Render UPI QR code screen
  const renderUPIQRScreen = () => (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => setShowUPIQR(false)}
          className="flex items-center text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Payment Methods
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">UPI QR Payment</h2>
          <p className="text-gray-600 mb-6">Scan the QR code to complete your payment</p>
          
          <div className="flex justify-center mb-6">
            <img 
              src={img} 
              alt="UPI QR Code" 
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-orange-600 font-medium">
              Amount to Pay: ₹{selectedPlan.price}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Please complete the payment within 15 minutes
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">How to Pay</h3>
            <ol className="text-left max-w-md mx-auto space-y-2 text-gray-600">
              <li>1. Open your UPI app (GooglePay, PhonePe, etc.)</li>
              <li>2. Scan the QR code</li>
              <li>3. Verify the payment details</li>
              <li>4. Complete the transaction</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

  // Payment method selection screen
  if (selectedPlan) {
    if (showUPIQR) {
      return renderUPIQRScreen();
    }

    if (showPaymentBot) {
      return (
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => setShowPaymentBot(false)}
              className="flex items-center text-orange-600 hover:text-orange-700 mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Details
            </button>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Select Payment Method</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    onClick={() => handlePaymentMethodSelection(method)}
                    className="border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:bg-orange-50 transition-colors"
                  >
                    {React.cloneElement(method.icon, { className: "text-orange-500 mb-2" })}
                    <h3 className="font-semibold">{method.name}</h3>
                    <p className="text-sm text-gray-500 text-center">{method.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{method.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }


    return (
      // Existing code for contact details form remains the same
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={() => setSelectedPlan(null)}
            className="flex items-center text-orange-600 hover:text-orange-700 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Plans
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    {renderInputField("Full Name", "name", <User />)}
                    {renderInputField("Phone Number", "phone", <Mail />, "tel", "9876543210")}
                  </div>

                  <div className="space-y-4">
                    {renderInputField("Address", "address", <Building />)}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        {renderInputField("City", "city")}
                      </div>
                      <div>
                        {renderInputField("Pincode", "pincode")}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsAppPayment}
                    disabled={loading}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    {loading ? 'Processing...' : (
                      <>
                        <Send className="mr-2" size={20} />
                        Proceed to Payment
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary remains the same */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-orange-600">{selectedPlan.name} Plan</h4>
                    <p className="text-gray-600">₹{selectedPlan.price}/{selectedPlan.period}</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="mr-2 text-orange-500" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span className="text-orange-600">₹{selectedPlan.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main plans selection page remains the same
  return (
    // Existing code for plan selection remains unchanged
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
        <p className="text-xl text-gray-600">Select a subscription that best fits your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg p-8 relative ${
              plan.isPopular ? 'border-2 border-orange-500' : ''
            }`}
          >
            {plan.isPopular && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <div className="mb-6">
              <span className="text-gray-600 text-lg">₹</span>
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-600">
                  <Check className="mr-2 text-orange-500" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              onClick={() => setSelectedPlan(plan)}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;