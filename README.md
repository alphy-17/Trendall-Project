# Ancient Mediterranean Archaeology Project

## Overview
The Ancient Mediterranean Archaeology Project is a comprehensive initiative aimed at digitizing and preserving the valuable records of the A.D. Trendall Research Centre for Ancient Mediterranean Studies. This project involves the extraction of textual data from scanned PDF documents and matching this data with corresponding artifact images. The ultimate goal is to create an accessible online database that provides researchers with a powerful tool to explore and study ancient South Italian vases.

## Repository Structure
This repository contains the full implementation of the project, including text extraction, database management, frontend, and backend components. Below is an overview of the key directories and files:

- **text_extraction/**: Contains scripts and tools for extracting text from scanned PDF documents.
- **database/**: Includes database schema, models, and scripts for managing data storage.
- **frontend/**: Contains the web application code for the user interface.
- **backend/**: Includes the server-side code for handling API requests and processing data.
- **docs/**: Documentation related to the project, including setup instructions and technical details.

## Getting Started
### Prerequisites
- Python 3.x
- Node.js
- MongoDB
- NLTK Library for Natural Language Processing

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/archaeology-project.git
   cd archaeology-project
   ```

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Install Node.js dependencies**:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Set up MongoDB**:
   - Ensure MongoDB is installed and running on your machine.
   - Create a database named `archaeology`.

### Running the Project
1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend application**:
   ```bash
   cd frontend
   npm start
   ```

3. **Access the web application**:
   Open your web browser and navigate to `http://localhost:3000`.

## Project Components
### Text Extraction
- **Scripts**: Located in `Text-extraction/`, these scripts perform Optical Character Recognition (OCR) on scanned PDF documents and extract relevant textual information.
- **Tools**: Utilizes Python and the NLTK library to process and clean the extracted text.

### Database
- **Schema and Models**: Defined in `database/`, the schema ensures that extracted text and images are stored in a structured format compatible with the Oxford University’s search and data recording format.
- **Management Scripts**: Include tools for inserting, updating, and querying the database records.

### Frontend
- **Web Interface**: Defined in 'Trendallfe/', Built with modern web technologies, the frontend provides a user-friendly interface for researchers to search and retrieve information from the database.
- **Components**: Includes search functionality, artifact detail pages, and image display.

### Backend
- **API Endpoints**: Located in `backend/`, the server handles requests from the frontend, processes data, and communicates with the database.
- **Data Processing**: Ensures that text extraction and image matching are efficiently handled and stored.


## Acknowledgements
This project is a collaboration between the A.D. Trendall Research Centre for Ancient Mediterranean Studies, the Department of Computer Science and Information Technology at La Trobe University, and the Beazley Archive at Oxford University.

For any questions or further information, please contact the project team at [email@example.com].

---

This README provides a high-level overview of the Archaeology project's repository. It includes details on the project's structure, setup instructions, and descriptions of the key components to help new contributors and users understand and navigate the project.
