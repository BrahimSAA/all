// Course data
const courses = [
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course teaches the fundamentals of C# programming with a focus on its applications in penetration testing and security tool development. It covers C# syntax, data structures, and object-oriented programming principles, all within the context of practical hacking scenarios.",
        "image": "https://business.sharpusa.com/Portals/0/EasyDNNNews/816/images/img-Security-BP-tbn-350-180-c-L-97.JPG",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/",
        "category": "cybersecurity"
    },
    {
        "title": "C sharp 101 for Hackers",
        "description": "This course teaches the fundamentals of C# programming with a focus on its applications in penetration testing, security auditing, and exploit development. Students will learn to write tools and scripts for offensive and defensive cybersecurity tasks using C# 10.",
        "image": "https://business.sharpusa.com/Portals/0/EasyDNNNews/816/images/img-Security-BP-tbn-350-180-c-L-97.JPG",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "This course provides a foundational understanding of detection engineering principles and practices, enabling participants to build and implement effective security detection strategies. It covers essential concepts and techniques for identifying and responding to threats in modern IT environments.",
        "image": "https://img-c.udemycdn.com/course/240x135/5450800_e323_2.jpg",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Linux 101",
        "description": "This introductory course provides a foundational understanding of the Linux operating system, covering basic commands, file system navigation, and user management. Students will learn to interact with the Linux environment and perform common tasks.",
        "image": "https://www.freyrscada.com/images/iec101-netcore.jpg",
        "link": "https://BrahimSAA.github.io/Linux_101",
        "category": "cybersecurity"
    },
    {
        "title": "Linux Privilege Escalation for Beginners",
        "description": "This course teaches beginners the fundamentals of Linux privilege escalation techniques, providing a hands-on approach to identifying and exploiting common vulnerabilities to gain root access. Learn to elevate your user privileges and secure Linux systems against unauthorized access.",
        "image": "https://i.ytimg.com/vi/ZTnwg3qCdVM/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Mobile Application Penetration Testing",
        "description": "This course provides in-depth knowledge and practical skills to identify and exploit vulnerabilities in mobile applications on various platforms. Students will learn techniques for analyzing, reverse engineering, and testing mobile apps to ensure their security.",
        "image": "https://www.beyondkey.com/blog/wp-content/uploads/2023/06/Best_Practices_to_Protect_Your_Mobile_Application_Penetration_Testing-394x218.jpg",
        "link": "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing",
        "category": "cybersecurity"
    },
    {
        "title": "Open-Source Intelligence (OSINT) Fundamentals",
        "description": "This course provides a foundational understanding of Open-Source Intelligence (OSINT) principles and techniques, covering methodologies for collecting, analyzing, and disseminating information from publicly available sources.",
        "image": "https://www.meirc.com/assets/images/course-image/course/certificate-in-opensource-intelligence-osint-fundamentals-courses.jpg",
        "link": "https://BrahimSAA.github.io/Open-Source_Intelligence_(OSINT)_Fundamentals",
        "category": "cybersecurity"
    },
    {
        "title": "Practical API Hacking",
        "description": "This course provides hands-on training on identifying and exploiting vulnerabilities in APIs, enabling participants to secure and defend against API-related attacks. It covers practical techniques for testing, analyzing, and compromising real-world APIs.",
        "image": "https://img-c.udemycdn.com/course/240x135/6482585_f8ec_7.jpg",
        "link": "https://BrahimSAA.github.io/Practical_API_Hacking",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Bug Bounty",
        "description": "This course provides hands-on training in identifying and exploiting vulnerabilities in systems and applications to earn rewards through bug bounty programs. It focuses on practical techniques and real-world scenarios to prepare students for successful bug hunting.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/2024-06-27_14-06.png?w=204",
        "link": "https://BrahimSAA.github.io/Practical_Bug_Bounty",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Ethical Hacking",
        "description": "This course provides hands-on training in ethical hacking techniques, equipping students with the practical skills to identify and exploit vulnerabilities in systems and networks for defensive purposes. Students will learn to use penetration testing tools and methodologies in a real-world context.",
        "image": "https://img-c.udemycdn.com/course/240x135/2396206_e860_7.jpg",
        "link": "https://BrahimSAA.github.io/Practical_Ethical_Hacking",
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
