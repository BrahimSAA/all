// Course data
const courses = [
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course provides a foundational understanding of C# for security professionals, covering syntax, data structures, and common programming patterns relevant to vulnerability analysis and exploit development. It teaches how to leverage C# for building custom security tools and understanding Windows-based applications.",
        "image": "https://coinedition.com/wp-content/uploads/2025/05/What-Does-the-CETUS-Hack-Mean-for-DeFi-Security-on-SUI-355x200.jpg",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "This course provides an introduction to the fundamentals of detection engineering, covering the process of identifying and responding to security threats. It will equip beginners with the foundational knowledge to build and maintain effective detection strategies.",
        "image": "https://i.ytimg.com/vi/otjjPnNFFXo/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Linux 101",
        "description": "This course provides a fundamental introduction to the Linux operating system, covering basic concepts, command-line usage, and system administration tasks. It is designed for beginners with little to no prior experience with Linux.",
        "image": "https://www.freyrscada.com/images/iec101-netcore.jpg",
        "link": "https://BrahimSAA.github.io/Linux_101",
        "category": "programming"
    },
    {
        "title": "Linux Privilege Escalation for Beginners",
        "description": "This course introduces Linux privilege escalation techniques for beginners, covering common vulnerabilities and methods to gain elevated access. Students will learn to identify and exploit misconfigurations to escalate privileges on Linux systems.",
        "image": "https://i.ytimg.com/vi/ZTnwg3qCdVM/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Mobile Application Penetration Testing",
        "description": "This course provides in-depth knowledge and practical skills for identifying and exploiting security vulnerabilities in mobile applications. Students will learn methodologies and tools to perform thorough penetration testing on both Android and iOS platforms.",
        "image": "https://www.beyondkey.com/blog/wp-content/uploads/2023/06/Best_Practices_to_Protect_Your_Mobile_Application_Penetration_Testing-394x218.jpg",
        "link": "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing",
        "category": "cybersecurity"
    },
    {
        "title": "Open-Source Intelligence (OSINT) Fundamentals",
        "description": "This course introduces the core concepts and techniques of Open-Source Intelligence (OSINT), focusing on methods for gathering and analyzing publicly available information. It covers the fundamentals needed to effectively conduct OSINT investigations.",
        "image": "https://www.meirc.com/assets/images/course-image/course/certificate-in-opensource-intelligence-osint-fundamentals-courses.jpg",
        "link": "https://BrahimSAA.github.io/Open-Source_Intelligence_(OSINT)_Fundamentals",
        "category": "cybersecurity"
    },
    {
        "title": "Practical API Hacking",
        "description": "Learn practical techniques for identifying and exploiting vulnerabilities in APIs, enabling you to secure your own APIs and assess the security of others. This course covers common API hacking methods and defensive strategies.",
        "image": "https://img-c.udemycdn.com/course/240x135/6482585_f8ec_7.jpg",
        "link": "https://BrahimSAA.github.io/Practical_API_Hacking",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Bug Bounty",
        "description": "This course provides hands-on training and real-world techniques for finding and reporting security vulnerabilities in web applications and other software to earn bug bounties. Students will learn practical methodologies and tools to effectively identify and exploit vulnerabilities.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/2024-06-27_14-06.png?w=204",
        "link": "https://BrahimSAA.github.io/Practical_Bug_Bounty",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Ethical Hacking",
        "description": "This course provides hands-on training in ethical hacking techniques, covering penetration testing, vulnerability assessment, and security auditing methodologies used to identify and mitigate security risks in systems and networks. Students will learn to use industry-standard tools and techniques to simulate real-world attacks, all within legal and ethical boundaries.",
        "image": "https://img-c.udemycdn.com/course/240x135/2396206_e860_7.jpg",
        "link": "https://BrahimSAA.github.io/Practical_Ethical_Hacking",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Malware Analysis and Triage",
        "description": "This course provides hands-on training in the essential techniques for analyzing and triaging malware, focusing on identifying malicious functionality and prioritizing response efforts. Students will learn to dissect malware samples in a practical setting, using industry-standard tools and methodologies.",
        "image": "https://www.domedion.com/wp-content/uploads/2021/11/Analysis400.png",
        "link": "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Phishing Campaigns",
        "description": "This course provides hands-on training on how to design, execute, and analyze phishing campaigns for security awareness and penetration testing purposes. It covers ethical considerations and legal boundaries while teaching practical techniques.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/2024-06-27_20-42.png?w=329",
        "link": "https://BrahimSAA.github.io/Practical_Phishing_Campaigns",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Web Hacking",
        "description": "Learn practical techniques and methodologies for identifying and exploiting vulnerabilities in web applications, equipping you with the skills to secure your own and defend against real-world attacks. This course covers a wide range of topics from common web vulnerabilities to advanced exploitation techniques.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/image.png",
        "link": "https://BrahimSAA.github.io/Practical_Web_Hacking",
        "category": "cybersecurity"
    },
    {
        "title": "Python 101 for Hackers",
        "description": "This course provides a foundational understanding of Python programming, tailored for individuals interested in cybersecurity and penetration testing. Students will learn essential Python syntax and concepts to automate tasks, analyze data, and develop basic hacking tools.",
        "image": "https://img-c.udemycdn.com/course/240x135/4161452_aaf3_4.jpg",
        "link": "https://BrahimSAA.github.io/Python_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Python 201 For Hackers",
        "description": "This course builds upon basic Python knowledge, teaching advanced techniques and libraries relevant to penetration testing, exploit development, and other hacking-related activities. Students will learn to automate tasks, analyze data, and create custom tools for cybersecurity applications.",
        "image": "https://img-c.udemycdn.com/course/240x135/4430080_761d.jpg",
        "link": "https://BrahimSAA.github.io/Python_201_For_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Security Operations (SOC) 101",
        "description": "This course provides a foundational understanding of Security Operations Centers (SOCs), covering their purpose, roles, responsibilities, and key technologies used to detect and respond to security incidents. It is an introductory course for aspiring SOC analysts and anyone interested in learning about security monitoring and incident response.",
        "image": "https://i.ytimg.com/vi/xsRW7_Cbppg/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Security_Operations_(SOC)_101",
        "category": "cybersecurity"
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
