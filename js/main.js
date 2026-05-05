// Blog posts data
const posts = [
    {
        title: "I Built an Agentic AI Project Manager for a Hackathon",
        date: "April 27, 2026",
        excerpt: "My team built SentinelPM at an Agentic AI Hackathon — an autonomous system that pulls Jira data, identifies risks via Gemini, reassigns overdue tickets, and handles client emails automatically.",
        tags: ["Agentic AI", "n8n", "Google Gemini", "Jira", "Automation"],
        category: "agents",
        link: "posts/sentinelpm.html",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop"
    },
    {
        title: "Building an E-Sports Stats Dashboard",
        date: "April 14, 2026",
        excerpt: "A full-stack stats dashboard for Fortnite, Valorant, and CS:GO built with React, FastAPI, and Supabase — inspired by the data-dense layout of Tracker.gg.",
        tags: ["Web Dev", "React", "FastAPI", "Supabase", "Python"],
        category: "data-science",
        link: "posts/esports-dashboard.html",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
        title: "Building an AI Day Trading Assistant for NASDAQ Analysis",
        date: "April 4, 2026",
        excerpt: "How I built a web-based AI trading tool using JavaScript, Yahoo Finance API, and technical indicators like RSI, MACD, and Bollinger Bands to generate real-time NASDAQ price predictions.",
        tags: ["Finance", "JavaScript", "Technical Analysis", "Data Science"],
        category: "data-science",
        link: "posts/ai-trading-assistant.html",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
        title: "Kaggle Housing Price Prediction with Linear Regression",
        date: "February 17, 2026",
        excerpt: "Using linear regression to predict house prices in the Kaggle House Prices competition, covering data cleaning, one-hot encoding, and model evaluation.",
        tags: ["Machine Learning", "Regression", "Kaggle", "Python"],
        category: "machine-learning",
        link: "posts/housing-price-prediction.html",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
        title: "ML Prediction Bias: Understanding Confusion Matrices in Fraud Detection",
        date: "March 5, 2026",
        excerpt: "Exploring how ML classification models detect credit card fraud, understanding confusion matrices and performance metrics.",
        tags: ["Machine Learning", "Bias", "Classification", "Banking"],
        category: "machine-learning",
        link: "posts/ml-prediction-bias.html",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
        title: "Agent-Based Modeling vs Agent-Oriented Programming",
        date: "February 8, 2026",
        excerpt: "Understanding the key differences between ABM and AOP, and when to use each approach in AI and software development.",
        tags: ["AOP", "Multi-Agent Systems", "Software Architecture"],
        category: "agents",
        link: "posts/agent-oriented-programming.html",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
        title: "MedMNIST Visual AI Model Comparison: When Simplicity Beats Complexity",
        date: "February 3, 2026",
        excerpt: "Exploring whether complex models always perform better by comparing six computer vision architectures on medical imaging data.",
        tags: ["Computer Vision", "Medical Imaging", "Transfer Learning", "Deep Learning"],
        category: "computer-vision",
        link: "posts/medmnist-model-comparison.html",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
    },
    {
        title: "Agent-Based Modeling: Simulating Social Feature Adoption",
        date: "February 3, 2026",
        excerpt: "Exploring Agent-Based Modeling through a social media feature adoption simulation. Learn how simple rules create complex emergent behavior.",
        tags: ["Agent-Based Modeling", "Python", "Mesa", "Simulation"],
        category: "agents",
        link: "posts/agent-based-modeling.html",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
    }
];

// Function to create post cards
function createPostCard(post) {
    return `
        <div class="post-card" data-category="${post.category}" onclick="window.location.href='${post.link}'">
            <img src="${post.image}" alt="${post.title}" class="post-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E'">
            <div class="post-card-body">
                <p class="post-meta">${post.date}</p>
                <div class="post-card-header">
                    <h3>${post.title}</h3>
                </div>
                <div class="post-author">
                    <img src="assets/photos/IMG_7740.jpg alt="Patrick" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22%3E%3Ccircle fill=%22%232d5f5d%22 cx=%2212%22 cy=%2212%22 r=%2212%22/%3E%3C/svg%3E'">
                    <span class="post-author-name">Patrick</span>
                </div>
            </div>
        </div>
    `;
}

// Load posts on page load
document.addEventListener('DOMContentLoaded', () => {
    const postsGrid = document.getElementById('postsGrid');
    if (postsGrid) {
        postsGrid.innerHTML = posts.map(post => createPostCard(post)).join('');
    }

    // Category filtering
    const filterButtons = document.querySelectorAll('.filter-pill');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter posts
            const category = button.getAttribute('data-category');
            const postCards = document.querySelectorAll('.post-card');

            postCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
