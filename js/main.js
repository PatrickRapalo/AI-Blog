// Blog posts data
const posts = [
    {
        title: "Agent-Based Modeling: Simulating Social Feature Adoption",
        date: "February 1, 2025",
        excerpt: "Exploring Agent-Based Modeling through a social media feature adoption simulation. Learn how simple rules create complex emergent behavior.",
        tags: ["Agent-Based Modeling", "Python", "Mesa", "Simulation"],
        link: "posts/agent-based-modeling.html"
    },
    {
        title: "Agent-Based Modeling vs Agent-Oriented Programming",
        date: "February 1, 2025",
        excerpt: "Understanding the key differences between ABM and AOP, and when to use each approach in AI and software development.",
        tags: ["AOP", "Multi-Agent Systems", "Software Architecture"],
        link: "posts/agent-oriented-programming.html"
    }
];

// Function to create post cards
function createPostCard(post) {
    return `
        <div class="post-card" onclick="window.location.href='${post.link}'">
            <div class="post-card-header">
                <h3>${post.title}</h3>
                <p class="post-meta"><i class="far fa-calendar"></i> ${post.date}</p>
            </div>
            <div class="post-card-body">
                <p>${post.excerpt}</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${post.link}" class="read-more">Read More →</a>
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