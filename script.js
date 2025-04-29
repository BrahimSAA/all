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
        title: "AWS Cloud Practitioner",
        description: "Fundamentals of AWS cloud services and infrastructure.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        link: "https://brahimsaa.github.io/AWS_CloudPractitioner",
        category: "cloud"
    },
    {
        title: "AWS Solutions Architect",
        description: "Design distributed systems on AWS following best practices.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/AWS_SolutionsArchitect",
        category: "cloud"
    },
    {
        title: "Bash Scripting",
        description: "Automate tasks and write powerful shell scripts in Bash.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        link: "https://brahimsaa.github.io/BashScripting",
        category: "systems"
    },
    {
        title: "CompTIA Security+",
        description: "Prepare for the SY0-601 exam with comprehensive security training.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/ComptiaSecurity",
        category: "certification"
    },
    {
        title: "Complete Cybersecurity Bootcamp",
        description: "End-to-end cybersecurity training from fundamentals to advanced techniques.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/CompleteCybersecurityBootcamp",
        category: "cybersecurity"
    },
    {
        title: "Microsoft Azure",
        description: "Cloud computing with Microsoft Azure services and solutions.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/azure",
        category: "cloud"
    },
    {
        title: "Windows Server 2022",
        description: "Comprehensive training on Windows Server installation, configuration, and administration.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/Windows_Server_2022",
        category: "windows administration"
    },
    {
        title: "DevOps with Linux",
        description: "Learn essential DevOps practices using Linux environments, including CI/CD, automation, and containerization.",
        image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/DevOps_Linux",
        category: "devops"
    },
    {
        title: "Bug Bounty Hunting",
        description: "Learn ethical hacking techniques to find and report vulnerabilities for bug bounty programs.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/BugBounty",
        category: "cybersecurity"
    },
    {
        title: "JavaScript Programming",
        description: "Master JavaScript fundamentals and modern ES6+ features for web development.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
        link: "https://brahimsaa.github.io/javascript",
        category: "web development"
    },
    {
        title: "Linux بالعربية",
        description: "تعلم أساسيات إدارة أنظمة لينكس باللغة العربية للمبتدئين والمحترفين",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        link: "https://brahimsaa.github.io/Linux_arabic",
        category: "أنظمة"
    },
    {
        title: "Docker و Kubernetes بالعربية",
        description: "دورة متكاملة عن الحاويات وإدارة الكلاستر باللغة العربية",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/DockerKubernetes_Arabic",
        category: "DevOps"
    },
    {
        title: "Git بالعربية",
        description: "إدارة المشاريع البرمجية باستخدام Git و GitHub باللغة العربية",
        image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/Git_Arabic",
        category: "أدوات تطوير"
    },
    {
        title: "Detection Engineering",
        description: "Build effective threat detection systems and security monitoring solutions.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/DetectionEngineering",
        category: "Cyber Defense"
    },
    {
        title: "Linux Privilege Escalation",
        description: "Master privilege escalation techniques in Linux environments for penetration testing.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        link: "https://brahimsaa.github.io/LinuxPrivilegeEscalation",
        category: "Penetration Testing"
    },
    {
        title: "Mobile App Penetration Testing",
        description: "Comprehensive guide to finding vulnerabilities in Android and iOS applications.",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/MobileApplicationPenetrationTesting",
        category: "Mobile Security"
    },
    {
        title: "Practical Bug Bounty",
        description: "Real-world bug hunting techniques used by professional security researchers.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/PracticalBugBountyTCM",
        category: "Ethical Hacking"
    },
    {
        title: "Practical Phishing",
        description: "Understand and defend against modern phishing techniques and social engineering.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/PracticalPhishing",
        category: "Social Engineering"
    },
    {
        title: "Practical Web Hacking",
        description: "Hands-on web application penetration testing and vulnerability discovery.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/PracticalWebHacking",
        category: "Web Security"
    },
    {
        title: "Windows Privilege Escalation",
        description: "Advanced techniques for escalating privileges in Windows environments.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        link: "https://brahimsaa.github.io/WindowsPrivilegeEscalation",
        category: "Windows Security"
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
