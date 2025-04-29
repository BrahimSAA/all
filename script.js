// Course data
const courses = [
    {
        title: "Security Operations Center",
        description: "Learn SOC fundamentals, threat detection, and incident response techniques. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP",
        link: "https://brahimsaa.github.io/soc",
        category: "cybersecurity"
    },
    {
        title: "Python Programming 1",
        description: "Beginner-friendly introduction to Python programming fundamentals. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym",
        link: "https://brahimsaa.github.io/python1",
        category: "programming"
    },
    {
        title: "Python Programming 2",
        description: "Advanced Python concepts including OOP, decorators, and async programming. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u",
        link: "https://brahimsaa.github.io/python2",
        category: "programming"
    },
    {
        title: "Malware Analysis",
        description: "Understand malware behavior, reverse engineering, and defense strategies. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN",
        link: "https://brahimsaa.github.io/malware",
        category: "cybersecurity"
    },
    {
        title: "Certified Ethical Hacker",
        description: "Master ethical hacking techniques and penetration testing methodologies. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B",
        link: "https://brahimsaa.github.io/ceh",
        category: "cybersecurity"
    },
    {
        title: "OSINT Fundamentals",
        description: "Learn open-source intelligence gathering techniques for investigations. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo",
        link: "https://brahimsaa.github.io/osint",
        category: "cybersecurity"
    },
    {
        title: "Linux Administration",
        description: "Essential Linux skills for system administration and security professionals. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj",
        link: "https://brahimsaa.github.io/linux",
        category: "systems"
    },
    {
        title: "API Security",
        description: "Understand API vulnerabilities and how to secure modern web applications. - TCM",
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
        image: "data:image/jpeg;base64,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",
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
        description: "Build effective threat detection systems and security monitoring solutions. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh",
        link: "https://brahimsaa.github.io/DetectionEngineering",
        category: "Cyber Defense"
    },
    {
        title: "Linux Privilege Escalation",
        description: "Master privilege escalation techniques in Linux environments for penetration testing. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4",
        link: "https://brahimsaa.github.io/LinuxPrivilegeEscalation",
        category: "Penetration Testing"
    },
    {
        title: "Mobile App Penetration Testing",
        description: "Comprehensive guide to finding vulnerabilities in Android and iOS applications. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w",
        link: "https://brahimsaa.github.io/MobileApplicationPenetrationTesting",
        category: "Mobile Security"
    },
    {
        title: "Practical Bug Bounty",
        description: "Real-world bug hunting techniques used by professional security researchers. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox",
        link: "https://brahimsaa.github.io/PracticalBugBountyTCM",
        category: "Ethical Hacking"
    },
    {
        title: "Practical Phishing",
        description: "Understand and defend against modern phishing techniques and social engineering. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ",
        link: "https://brahimsaa.github.io/PracticalPhishing",
        category: "Social Engineering"
    },
    {
        title: "Practical Web Hacking",
        description: "Hands-on web application penetration testing and vulnerability discovery. - TCM",
        image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V",
        link: "https://brahimsaa.github.io/PracticalWebHacking",
        category: "Web Security"
    },
    {
        title: "Windows Privilege Escalation",
        description: "Advanced techniques for escalating privileges in Windows environments. - TCM",
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
