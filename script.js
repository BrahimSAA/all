// Course data
const courses = [
    {
        title: "Security Operations Center",
        description: "Learn SOC fundamentals, threat detection, and incident response techniques.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP",
        link: "https://brahimsaa.github.io/soc",
        category: "cybersecurity"
    },
    {
        title: "Python Programming 1",
        description: "Beginner-friendly introduction to Python programming fundamentals.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym",
        link: "https://brahimsaa.github.io/python1",
        category: "programming"
    },
    {
        title: "Python Programming 2",
        description: "Advanced Python concepts including OOP, decorators, and async programming.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u",
        link: "https://brahimsaa.github.io/python2",
        category: "programming"
    },
    {
        title: "Malware Analysis",
        description: "Understand malware behavior, reverse engineering, and defense strategies.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN",
        link: "https://brahimsaa.github.io/malware",
        category: "cybersecurity"
    },
    {
        title: "Certified Ethical Hacker",
        description: "Master ethical hacking techniques and penetration testing methodologies.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B",
        link: "https://brahimsaa.github.io/ceh",
        category: "cybersecurity"
    },
    {
        title: "OSINT Fundamentals",
        description: "Learn open-source intelligence gathering techniques for investigations.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo",
        link: "https://brahimsaa.github.io/osint",
        category: "cybersecurity"
    },
    {
        title: "Linux Administration",
        description: "Essential Linux skills for system administration and security professionals.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj",
        link: "https://brahimsaa.github.io/linux",
        category: "systems"
    },
    {
        title: "API Security",
        description: "Understand API vulnerabilities and how to secure modern web applications.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/hDCDoCxRSGCa2vLD9UCV",
        link: "https://brahimsaa.github.io/api",
        category: "programming"
    },
    {
        title: "Kubernetes",
        description: "Container orchestration mastery with Kubernetes for scalable deployments.",
        image: "https://www.amigoscode.com/assets/thumbnails/courses/kubernetes.webp",
        link: "https://brahimsaa.github.io/Kubernetes",
        category: "devops"
    },
    {
        title: "Database Fundamentals",
        description: "Essential database concepts, SQL queries, and administration basics.",
        image: "https://www.amigoscode.com/assets/thumbnails/courses/advanced-databases.webp",
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
        image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
        link: "https://brahimsaa.github.io/AWS_CloudPractitioner",
        category: "cloud"
    },
    {
        title: "AWS Solutions Architect",
        description: "Design distributed systems on AWS following best practices.",
        image: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1445194948/image7879818108719238597.png",
        link: "https://brahimsaa.github.io/AWS_SolutionsArchitect",
        category: "cloud"
    },
    {
        title: "Bash Scripting",
        description: "Automate tasks and write powerful shell scripts in Bash.",
        image: "https://i.ytimg.com/vi/PPQ8m8xQAs8/maxresdefault.jpg",
        link: "https://brahimsaa.github.io/BashScripting",
        category: "systems"
    },
    {
        title: "CompTIA Security+",
        description: "Prepare for the SY0-601 exam with comprehensive security training.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC80lmmATR4kmbE7ardxYGyBuayWdeAKY7xQ&s",
        link: "https://brahimsaa.github.io/ComptiaSecurity",
        category: "certification"
    },
    {
        title: "Complete Cybersecurity Bootcamp",
        description: "End-to-end cybersecurity training from fundamentals to advanced techniques.",
        image: "https://images.ctfassets.net/aq13lwl6616q/1nSOi4H0zAGJOhK1VTKWDK/09cbe2160152366ce3f0edfc97e96010/Cybersecurity_-_Academy_Thumbnail_2.png",
        link: "https://brahimsaa.github.io/CompleteCybersecurityBootcamp",
        category: "cybersecurity"
    },
    {
        title: "Microsoft Azure",
        description: "Cloud computing with Microsoft Azure services and solutions.",
        image: "https://www.edunao.com/app/uploads/2022/07/Microsoft-Azure.png",
        link: "https://brahimsaa.github.io/azure",
        category: "cloud"
    },
    {
        title: "Windows Server 2022",
        description: "Comprehensive training on Windows Server installation, configuration, and administration.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNBabd04L4v1l4fEg_K_UNHriefneDHpC7Q&s",
        link: "https://brahimsaa.github.io/Windows_Server_2022",
        category: "windows administration"
    },
    {
        title: "DevOps with Linux",
        description: "Learn essential DevOps practices using Linux environments, including CI/CD, automation, and containerization.",
        image: "https://miro.medium.com/v2/resize:fit:588/0*xu7TxXhQlv91fdR6.png",
        link: "https://brahimsaa.github.io/DevOps_Linux",
        category: "devops"
    },
    {
        title: "Bug Bounty Hunting",
        description: "Learn ethical hacking techniques to find and report vulnerabilities for bug bounty programs.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNUhYAEUGRAcYx656gn9hiq0yyLVS_QcD5g&s",
        link: "https://brahimsaa.github.io/BugBounty",
        category: "cybersecurity"
    },
    {
        title: "JavaScript Programming",
        description: "Master JavaScript fundamentals and modern ES6+ features for web development.",
        image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
        link: "https://brahimsaa.github.io/javascript",
        category: "web development"
    },
    {
        title: "Linux بالعربية",
        description: "تعلم أساسيات إدارة أنظمة لينكس باللغة العربية للمبتدئين والمحترفين",
        image: "https://linuxaw.com/wp-content/uploads/2022/06/linux-guide.png",
        link: "https://brahimsaa.github.io/Linux_arabic",
        category: "systems"
    },
    {
        title: "Docker و Kubernetes بالعربية",
        description: "دورة متكاملة عن الحاويات وإدارة الكلاستر باللغة العربية",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqnVeeWILK-TkEnI8Uio8MhN4VF7E8WkxoQ&s",
        link: "https://brahimsaa.github.io/DockerKubernetes_Arabic",
        category: "DevOps"
    },
    {
        title: "Git بالعربية",
        description: "إدارة المشاريع البرمجية باستخدام Git و GitHub باللغة العربية",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVsbnospX6k6LhMLuI53WAz--Ho1lrjccMQ&s",
        link: "https://brahimsaa.github.io/Git_Arabic",
        category: "Development"
    },
    {
        title: "Detection Engineering",
        description: "Build effective threat detection systems and security monitoring solutions.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh",
        link: "https://brahimsaa.github.io/DetectionEngineering",
        category: "Cyber Defense"
    },
    {
        title: "Linux Privilege Escalation",
        description: "Master privilege escalation techniques in Linux environments for penetration testing.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4",
        link: "https://brahimsaa.github.io/LinuxPrivilegeEscalation",
        category: "Penetration Testing"
    },
    {
        title: "Mobile App Penetration Testing",
        description: "Comprehensive guide to finding vulnerabilities in Android and iOS applications.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w",
        link: "https://brahimsaa.github.io/MobileApplicationPenetrationTesting",
        category: "Mobile Security"
    },
    {
        title: "Practical Bug Bounty",
        description: "Real-world bug hunting techniques used by professional security researchers.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox",
        link: "https://brahimsaa.github.io/PracticalBugBountyTCM",
        category: "Ethical Hacking"
    },
    {
        title: "Practical Phishing",
        description: "Understand and defend against modern phishing techniques and social engineering.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ",
        link: "https://brahimsaa.github.io/PracticalPhishing",
        category: "Social Engineering"
    },
    {
        title: "Practical Web Hacking",
        description: "Hands-on web application penetration testing and vulnerability discovery.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V",
        link: "https://brahimsaa.github.io/PracticalWebHacking",
        category: "Web Security"
    },
    {
        title: "Windows Privilege Escalation",
        description: "Advanced techniques for escalating privileges in Windows environments.",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3TDZkYDzRxaZGnwCHOvW",
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
