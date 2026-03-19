export const portfolioData = {
  hero: {
    name: "Raj Humraskar",
    titles: ["AI & Machine Learning Specialist", "Data Scientist", "Software Developer"],
    description: "Driven by data and algorithms, I design intelligent models and applications that turn complex datasets into meaningful insights and solutions.",
  },
  about: {
    bio: "I am a dedicated AI and Machine Learning enthusiast with hands-on experience in building predictive models, deep learning architectures, and data-driven solutions. My background ranges from core machine learning to applied AI methodologies, enabling me to build end-to-end intelligent systems.",
    details: [
      { label: "Name", value: "Raj Humraskar" },
      { label: "Focus", value: "Artificial Intelligence" },
      { label: "Location", value: "Global / Remote" },
      { label: "Availability", value: "Open for Opportunities" }
    ]
  },
  skillCategories: [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "Git/GitHub", "SQL (MS SQL Server)"]
    },
    {
      title: "Core ML Skills",
      skills: ["Data Preprocessing", "Regression Models", "Model Evaluation", "Deep Learning Basics"]
    }
  ],
  projects: [
    {
      title: "House Price Prediction",
      description: "Built a machine learning model to predict house prices using data preprocessing, feature engineering, and regression algorithms (Linear Regression, Random Forest). Optimized via hyperparameter tuning (RMSE/R² metrics) and analyzed feature importance.",
      date: "Mar '24",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
      tags: ["Regression", "Random Forest", "Scikit-Learn"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Student Score Prediction",
      description: "Developed a linear regression model predicting student exam scores based on study hours. Visualized datasets, evaluated with MAE and R², and deployed via a Streamlit/Flask interface for instant predictions.",
      date: "Jan '25",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      tags: ["Linear Regression", "Flask/Streamlit", "Pandas"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Image Classification with CNNs",
      description: "Implemented a Convolutional Neural Network using TensorFlow and Keras to classify images from the CIFAR-10 dataset, utilizing data augmentation and dropout layers to prevent overfitting.",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
      tags: ["Deep Learning", "CNN", "TensorFlow", "Keras"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Segmentation using KMeans",
      description: "Applied unsupervised learning (K-Means Clustering) to segment retail customers based on purchasing behavior. Utilized Seaborn and Matplotlib for insightful data visualizations.",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      tags: ["Clustering", "Machine Learning", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Stock Market Forecasting with LSTMs",
      description: "Engineered a Long Short-Term Memory (LSTM) recurrent neural network to forecast stock prices based on historical daily metrics. Implemented data scaling, sequencing, and robust train-test splits.",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
      tags: ["Deep Learning", "LSTM", "Time Series", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Generative AI Text Summarizer",
      description: "Created an automated text summarization web platform. Integrated powerful Large Language Models (LLMs) to condense long articles into quick, digestible key points using the Hugging Face API.",
      date: "Recent",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600",
      tags: ["NLP", "Generative AI", "Hugging Face", "React"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],
  training: [
    {
      title: "Introduction to Linux System",
      issuer: "Cipher Schools (Edtech Company)",
      date: "Jun '23 – Jul '23",
      description: "Completed hands-on training covering Linux commands, file systems, user management, and shell operations. Gained practical experience in system operations, process control, and basic networking (IP config). Worked with real Linux environments for monitoring, log analysis, and system troubleshooting."
    }
  ],
  certifications: [
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys SpringBoard",
      date: "Aug '25"
    },
    {
      title: "Master Generative AI & Generative AI tools (ChatGPT & more)",
      issuer: "Infosys SpringBoard",
      date: "Aug '25"
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys SpringBoard",
      date: "Aug '25"
    }
  ],
  socials: [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' }
  ]
};
