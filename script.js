// Course data
const courses = [
    {
        "title": "Security Operations (SOC) 101",
        "description": "Learn SOC fundamentals, threat detection, and incident response techniques. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP",
        "link": "https://BrahimSAA.github.io/Security_Operations_-SOC-_101/",
        "category": "cybersecurity"
    },
    {
        "title": "Python 101 for Hackers",
        "description": "Beginner-friendly introduction to Python programming fundamentals. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym",
        "link": "https://BrahimSAA.github.io/Python_101_for_Hackers/",
        "category": "programming"
    },
    {
        "title": "Python 201 For Hackers",
        "description": "Advanced Python concepts including OOP, decorators, and async programming. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u",
        "link": "https://BrahimSAA.github.io/Python_201_For_Hackers/",
        "category": "programming"
    },
    {
        "title": "Practical Malware Analysis and Triage",
        "description": "Understand malware behavior, reverse engineering, and defense strategies. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN",
        "link": "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage/",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Ethical Hacking",
        "description": "Master ethical hacking techniques and penetration testing methodologies. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B",
        "link": "https://BrahimSAA.github.io/Practical_Ethical_Hacking/",
        "category": "cybersecurity"
    },
    {
        "title": "Open-Source Intelligence (OSINT) Fundamentals",
        "description": "Learn open-source intelligence gathering techniques for investigations. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo",
        "link": "https://BrahimSAA.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/",
        "category": "cybersecurity"
    },
    {
        "title": "Linux 101",
        "description": "Essential Linux skills for system administration and security professionals. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj",
        "link": "https://BrahimSAA.github.io/Linux_101/",
        "category": "systems"
    },
    {
        "title": "Practical API Hacking",
        "description": "Understand API vulnerabilities and how to secure modern web applications. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/hDCDoCxRSGCa2vLD9UCV",
        "link": "https://BrahimSAA.github.io/Practical_API_Hacking/",
        "category": "programming"
    },
    {
        "title": "Detection Engineering for Beginners",
        "description": "Build effective threat detection systems and security monitoring solutions. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh",
        "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners/",
        "category": "Cyber Defense"
    },
    {
        "title": "Linux Privilege Escalation for Beginners",
        "description": "Master privilege escalation techniques in Linux environments for penetration testing. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4",
        "link": "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners/",
        "category": "Penetration Testing"
    },
    {
        "title": "Mobile Application Penetration Testing",
        "description": "Comprehensive guide to finding vulnerabilities in Android and iOS applications. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w",
        "link": "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing/",
        "category": "Mobile Security"
    },
    {
        "title": "Practical Bug Bounty",
        "description": "Real-world bug hunting techniques used by professional security researchers. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox",
        "link": "https://BrahimSAA.github.io/Practical_Bug_Bounty/",
        "category": "Ethical Hacking"
    },
    {
        "title": "Practical Phishing Campaigns",
        "description": "Understand and defend against modern phishing techniques and social engineering. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ",
        "link": "https://BrahimSAA.github.io/Practical_Phishing_Campaigns/",
        "category": "Social Engineering"
    },
    {
        "title": "Practical Web Hacking",
        "description": "Hands-on web application penetration testing and vulnerability discovery. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V",
        "link": "https://BrahimSAA.github.io/Practical_Web_Hacking/",
        "category": "Web Security"
    },
    {
        "title": "Windows Privilege Escalation for Beginners",
        "description": "Advanced techniques for escalating privileges in Windows environments. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3TDZkYDzRxaZGnwCHOvW",
        "link": "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners/",
        "category": "Windows Security"
    },
    {
        "title": "C# 101 for Hackers",
        "description": "A specialized guide covering C# programming techniques, security concepts, and penetration testing applications for cybersecurity professionals. - TCM",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/8IL5ZJ7ASSarS6x0xBPg",
        "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/",
        "category": "Cybersecurity"
    },
    {
        title: "CCNA & Networking Fundamentals",
        description: "An in-depth resource covering core networking concepts, protocols, and hands-on configurations to help you prepare for the CCNA certification. - YourCompany",
        image: "https://djgeqya1wekbj.cloudfront.net/product-images/600-600/Cisco-CCNA-200-301-Online-1200x600.jpg",  // Replace with another image URL if preferred
        link: "https://brahimsaa.github.io/CCNA",  // Replace with actual link or your own content
        category: "Networking"
    },
    {
        "title": "Advanced Databases",
        "description": "This course delves into advanced topics in database management systems, including query optimization, transaction processing, NoSQL databases, and distributed database systems. Students will gain practical experience in designing, implementing, and managing complex database solutions.",
        "image": "https://images.pexels.com/photos/32232401/pexels-photo-32232401.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Advanced_Databases",
        "category": "data-science"
    },
    {
        "title": "Java Essentials",
        "description": "This course covers the fundamental concepts and syntax of the Java programming language, enabling students to write and execute basic Java applications. It introduces object-oriented programming principles and essential Java libraries.",
        "image": "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Java_Essentials",
        "category": "programming"
    },
    {
        "title": "Mastering Kubernetes",
        "description": "This course provides a deep dive into Kubernetes, covering its core concepts, architecture, and advanced features for orchestrating containerized applications at scale. Students will learn to deploy, manage, and scale applications effectively using Kubernetes.",
        "image": "https://images.pexels.com/photos/32213227/pexels-photo-32213227.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Mastering_Kubernetes",
        "category": "programming"
    },
    {
        "title": "AWS Certified Cloud Practitioner",
        "description": "This course provides a foundational understanding of AWS cloud concepts, services, security, architecture, and pricing, preparing individuals for the AWS Certified Cloud Practitioner exam. It covers essential knowledge needed to effectively demonstrate overall comprehension of the AWS Cloud.",
        "image": "https://images.pexels.com/photos/32268496/pexels-photo-32268496.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner",
        "category": "business"
    },
    {
        "title": "AWS Certified Solutions Architect",
        "description": "This course prepares individuals to design and implement scalable, highly available, and fault-tolerant systems on the AWS platform, covering various AWS services and best practices for building robust solutions. It is designed to help learners pass the AWS Certified Solutions Architect - Associate exam.",
        "image": "https://images.pexels.com/photos/6568691/pexels-photo-6568691.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect",
        "category": "design"
    },
    {
        "title": "AZ-900 Microsoft Azure Fundamentals",
        "description": "This course provides foundational knowledge of cloud concepts and Microsoft Azure services, covering core Azure services, security, privacy, compliance, and trust.",
        "image": "https://images.pexels.com/photos/32287528/pexels-photo-32287528.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
        "category": "Cloud"
    },
    {
        "title": "Bash Scripting Learn Shell Scripting",
        "description": "This course provides a comprehensive introduction to Bash scripting, empowering you to automate tasks and manage systems effectively using the command-line shell. Learn the fundamentals of shell scripting and develop practical skills for automating processes.",
        "image": "https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting",
        "category": "programming"
    },
    {
        "title": "Complete Cybersecurity Bootcamp",
        "description": "This comprehensive cybersecurity bootcamp provides students with the knowledge and skills needed to protect computer systems and networks from cyber threats. It covers a wide range of topics, from foundational security principles to advanced threat detection and incident response techniques.",
        "image": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "CompTIA Security+ Certification Bootcamp",
        "description": "Prepare for the CompTIA Security+ certification exam with this intensive bootcamp, covering essential security concepts and hands-on skills. Gain the knowledge and confidence needed to pass the exam and advance your cybersecurity career.",
        "image": "https://images.pexels.com/photos/12324202/pexels-photo-12324202.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/CompTIA_Security+_Certification_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "The Complete ASP.NET MVC 5 Course",
        "description": "Learn to build robust and scalable web applications using ASP.NET MVC 5 framework. This course covers all aspects of MVC 5, from basic concepts to advanced techniques, enabling you to create complete and professional web solutions.",
        "image": "https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/The_Complete_ASP.NET_MVC_5_Course",
        "category": "web-development"
    },
    {
        "title": "The Ultimate Docker Course",
        "description": "This course provides a complete understanding of Docker, covering everything from basic concepts to advanced techniques for containerizing applications and managing deployments. Learn to build, ship, and run your applications in isolated containers.",
        "image": "https://images.pexels.com/photos/20432872/pexels-photo-20432872.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
        "category": "programming"
    },
    {
        "title": "The Ultimate JavaScript Series",
        "description": "Master JavaScript from beginner to advanced! This series covers everything from fundamentals to advanced concepts, empowering you to build robust web applications.",
        "image": "https://images.pexels.com/photos/32213227/pexels-photo-32213227.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
        "category": "programming"
    },
    {
        "title": "Web Security & Bug Bounty Learn Penetration Testing",
        "description": "This course provides a thorough understanding of web security principles and equips students with the skills necessary for penetration testing and bug bounty hunting.",
        "image": "https://images.pexels.com/photos/5474035/pexels-photo-5474035.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Web_Security_&_Bug_Bounty_Learn_Penetration_Testing",
        "category": "cybersecurity"
    },
    {
        "title": "Windows Server 2022 Administration",
        "description": "This course provides in-depth knowledge and practical skills for administering and managing Windows Server 2022 environments, covering topics from installation and configuration to security and troubleshooting. Students will learn how to effectively manage server roles, features, and services to ensure optimal performance and security.",
        "image": "https://images.pexels.com/photos/5073493/pexels-photo-5073493.jpeg?w=705&h=400&fit=crop",
        "link": "https://BrahimSAA.github.io/Windows_Server_2022_Administration",
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
