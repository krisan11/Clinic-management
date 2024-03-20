// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEPZ5Zta35edAa785R9yIVAbF8fqU6CNM",
  authDomain: "clinic-managment-d91d5.firebaseapp.com",
  projectId: "clinic-managment-d91d5",
  storageBucket: "clinic-managment-d91d5.appspot.com",
  messagingSenderId: "200271258990",
  appId: "1:200271258990:web:f81ca8b7eb9ca343764d7f",
};

firebase.initializeApp(firebaseConfig);

// Firebase services
const db = firebase.firestore();
const auth = firebase.auth();

// Logging setup
const logger = (action) => {
    console.log(`[${new Date().toLocaleString()}] Action: ${action}`);
};

// Authentication
function login() {
    const userType = document.getElementById('user-type').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (userType === 'doctor') {
        const doctorID = document.getElementById('doctor-id').value;
        // Implement doctor login logic using Firebase Auth and doctorID
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Log the action
                logger(`Doctor logged in with email: ${email} and ID: ${doctorID}`);
                showPatientForm();
            })
            .catch((error) => {
                console.error(error.message);
            });
    } else if (userType === 'receptionist') {
        // Implement receptionist login logic using Firebase Auth
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Log the action
                logger(`Receptionist logged in with email: ${email}`);
                showPatientForm();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}

function showPatientForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('patient-form').style.display = 'block';
}

function generateToken() {
    const patientName = document.getElementById('patientName').value;
    const tokenAmount = Math.floor(Math.random() * 1000) + 1; // Generating a random token amount (for simplicity)

    // You can save the token and patient details to Firebase or perform any other necessary actions
    // For simplicity, log the action to console
    logger(`Token generated for ${patientName}. Token Amount: ${tokenAmount}`);
}

// Placeholder for billing logic
function generateBill() {
    const patientName = document.getElementById('patientName').value;
    const prescription = document.getElementById('prescription').value;

    // You can calculate the bill based on the prescription or any other relevant information
    // For simplicity, log the action to console
    logger(`Billing advice generated for ${patientName}. Prescription: ${prescription}`);
}

