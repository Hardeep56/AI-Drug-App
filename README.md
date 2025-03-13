AI-Driven Drug Design & Molecular Analysis Mobile App

This repository contains the source code for the AI-Driven Drug Design & Molecular Analysis mobile application built with React Native. The app provides a user-friendly interface to interact with backend APIs for de novo drug design and molecular analysis. It leverages generative AI models and cheminformatics tools (such as TensorFlow, RDKit, and integrations with OpenEye/Schrodinger) to generate novel molecules, evaluate synthetic accessibility, and simulate the design of PROTAC® molecules—aligned with Arvinas’s mission to develop innovative therapies.

**Features**
User-Friendly Mobile Interface: Navigate through modules for molecular generation, analysis, and result visualization using an intuitive tab-based or drawer navigation system.
Parameter Input: Easily set key drug-like properties (molecular weight, logP, etc.) via input forms.
Interactive Actions: Train models, generate molecules, evaluate synthetic accessibility, and visualize molecular structures with interactive buttons.
Backend Integration: Communicate with backend APIs that handle AI model training, molecular generation using TensorFlow, and cheminformatics analysis with RDKit.
PROTAC Design Module: A dedicated section to simulate the design of PROTAC molecules for targeted protein degradation.
Responsive Design: Optimized for both Android and iOS devices.

**Prerequisites**
Before getting started, ensure you have the following installed:
Node.js (v12 or higher) and npm or Yarn
React Native CLI (or use Expo if preferred)
Android Studio (for Android emulation) or Xcode (for iOS development)
Backend API (optional): A Python-based server running TensorFlow, RDKit, and other required cheminformatics tools. (Sample backend code is included in this repository for demonstration purposes or can be set up separately.)

**Installation**
1. Clone the Repository:
git clone https://github.com/yourusername/ai-driven-drug-design.git
cd ai-driven-drug-design
2. Install Dependencies:
   Using npm:
   npm install

**Usage**

*Running the Mobile App*
**Backend API Integration**
API Endpoints: The app communicates with backend endpoints for training models, generating molecules, and performing molecular analysis.
Make sure to update the API base URL in the app’s configuration file (config.js or similar) to point to your backend server.

Sample Data: The repository includes sample API endpoint examples and payload formats for demonstration. Adjust these based on your actual backend implementation.

**Screenshots**
![Screenshot 2025-03-13 131059](https://github.com/user-attachments/assets/c1b91111-1936-4f27-b108-f75e553af2c1)
![Screenshot 2025-03-13 131056](https://github.com/user-attachments/assets/cbb0eb09-5136-4ca3-b456-d92ce762b729)
![Screenshot 2025-03-13 131053](https://github.com/user-attachments/assets/f60bd694-42e0-4d8d-ac40-0447496ef402)
![Screenshot 2025-03-13 131045](https://github.com/user-attachments/assets/30f39aee-3ddc-4b24-8129-854bbee4a725)

Below are some screenshots of the app in action. Replace the placeholder images with your actual screenshots:


**Contributing**
Contributions are welcome! Please follow these steps if you’d like to contribute:

**Fork the repository.**
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
**License**
This project is licensed under the MIT License.

Support
If you have any questions or run into issues, please open an issue on GitHub.
