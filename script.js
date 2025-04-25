// Course data
const courses = [
    {
        title: "Security Operations Center",
        description: "Learn SOC fundamentals, threat detection, and incident response techniques.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywJ6jN3qTzU1yKzfOi8h4XgwbeBI3pEUP9g&s",
        link: "https://brahimsaa.github.io/soc",
        category: "cybersecurity"
    },
    {
        title: "Python Programming 1",
        description: "Beginner-friendly introduction to Python programming fundamentals.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/python1",
        category: "programming"
    },
    {
        title: "Python Programming 2",
        description: "Advanced Python concepts including OOP, decorators, and async programming.",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        link: "https://brahimsaa.github.io/python2",
        category: "programming"
    },
    {
        title: "Malware Analysis",
        description: "Understand malware behavior, reverse engineering, and defense strategies.",
        image: "https://sectigostore.com/blog/wp-content/uploads/2020/09/malware-analysis-feature.jpg",
        link: "https://brahimsaa.github.io/malware",
        category: "cybersecurity"
    },
    {
        title: "Certified Ethical Hacker",
        description: "Master ethical hacking techniques and penetration testing methodologies.",
        image: "https://cihbyesaip.esaip.org/wp-content/uploads/sites/6/2023/05/ethical-hacking-1024x683.png",
        link: "https://brahimsaa.github.io/ceh",
        category: "cybersecurity"
    },
    {
        title: "OSINT Fundamentals",
        description: "Learn open-source intelligence gathering techniques for investigations.",
        image: "https://cdn.prod.website-files.com/62233c592d2a1e009d42f46c/66e6622dab41021595585f21_66e6622695c2eb7826ddfeff_Osint%2520Cyber%2520Min.webp",
        link: "https://brahimsaa.github.io/osint",
        category: "cybersecurity"
    },
    {
        title: "Linux Administration",
        description: "Essential Linux skills for system administration and security professionals.",
        image: "https://www.meilleure-innovation.com/wp-content/uploads/2022/02/linux-1206x679.png",
        link: "https://brahimsaa.github.io/linux",
        category: "systems"
    },
    {
        title: "API Security",
        description: "Understand API vulnerabilities and how to secure modern web applications.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*_iUKfrLN0BAKNHvI990crQ.png",
        link: "https://brahimsaa.github.io/api",
        category: "programming"
    },
    {
        title: "Kubernetes",
        description: "Container orchestration mastery with Kubernetes for scalable deployments.",
        image: "https://globalit.com.tr/wp-content/uploads/2022/10/kubernetes-nedir-ne-ise-yarar.jpg",
        link: "https://brahimsaa.github.io/Kubernetes",
        category: "devops"
    },
    {
        title: "Database Fundamentals",
        description: "Essential database concepts, SQL queries, and administration basics.",
        image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmi6h1hnetwyvqyi5hgnv.png",
        link: "https://brahimsaa.github.io/db",
        category: "databases"
    },
    {
        title: "Java Programming",
        description: "Comprehensive Java development from basics to advanced concepts.",
        image: "https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp",
        link: "https://brahimsaa.github.io/Java",
        category: "programming"
    },
    {
        title: "Docker",
        description: "Containerization with Docker for efficient application deployment.",
        image: "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/docker-logo__w1200.png",
        link: "https://brahimsaa.github.io/docker",
        category: "devops"
    },
    {
        title: "Git Version Control",
        description: "Master Git for collaborative software development and version control.",
        image: "https://lh7-rt.googleusercontent.com/slidesz/AGV_vUdr_5EA31PeBeGj1qBPYeATWABADA6KNuo28j4BZTA4jQiZBTDxeXn5D1vbuUiFPTqXROMmHrsVAFP4R9Det7O2OIy0SREzMrGEDG3bD5RRnGhHytrjA-no0HA1kq2i6DGrBj2oqrj5qdBICbn7nWF5Rx1RLCMf2VtX3F9naf3pgNo8iR9SNd0=s2048?key=JGQqazrxg4vzpdmzyRxaWQ",
        link: "https://brahimsaa.github.io/git",
        category: "tools"
    }
];

// Display courses
function displayCourses(coursesToShow) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-image" style="background-image: url('${course.image}')">
                <h3 class="course-title">${course.title}</h3>
            </div>
            <div class="course-info">
                <p class="course-description">${course.description}</p>
                <a href="${course.link}" class="course-link">Start Course</a>
                <div class="course-meta">
                    <span>${course.category}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) || 
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm)
    );
    displayCourses(filteredCourses);
});

// Initial display
displayCourses(courses);
