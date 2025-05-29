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
    },
    {
        "title": "Windows Privilege Escalation for Beginners",
        "description": "This course teaches beginners how to identify and exploit common vulnerabilities in Windows systems to gain elevated privileges. It covers fundamental concepts and practical techniques for escalating user rights.",
        "image": "https://miro.medium.com/v2/resize:fit:708/0*CglysKz-8YDQGuQi",
        "link": "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Advanced Databases",
        "description": "This course delves into advanced concepts in database management, covering topics like distributed databases, NoSQL databases, data warehousing, and data mining techniques for efficient data storage, retrieval, and analysis. It explores the cutting-edge technologies and research trends in modern database systems.",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_z9Gtz-GV0uMw0JqKvKIv0DQZPGUPbJM8C3MMHu1aBX9_kU8Z6SZs8s9ddqJ-NcjzdUMeSaPUhfVxWrv-Vl9_rl5yXEOdLtrI8wgTmANoPfnogR_YCqJPO85ne4CwNRSc79x4GFX_3bXQm48c2uYjaSSVjD9cCCVpYdrvILMdZdsxtT_CkvJyvsl9Th_8/s320/ADBMS_GMeet%20Discussion%20Board_Aug%2024%202023.jpg",
        "link": "https://BrahimSAA.github.io/Advanced_Databases",
        "category": "data-science"
    },
    {
        "title": "Java Essentials",
        "description": "This course covers the fundamental concepts of Java programming, enabling students to write basic applications and understand object-oriented principles. It's designed to provide a solid foundation for further Java development.",
        "image": "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350,350_QL50_.jpg",
        "link": "https://BrahimSAA.github.io/Java_Essentials",
        "category": "programming"
    },
    {
        "title": "Mastering Kubernetes",
        "description": "This course provides a deep dive into Kubernetes, covering everything from fundamental concepts to advanced deployment strategies and management techniques for container orchestration. You'll gain practical skills to effectively manage and scale applications within a Kubernetes cluster.",
        "image": "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
        "link": "https://BrahimSAA.github.io/Mastering_Kubernetes",
        "category": "programming"
    },
    {
        "title": "AWS Certified Cloud Practitioner",
        "description": "This course provides a foundational understanding of AWS Cloud services and concepts, enabling individuals to demonstrate a basic comprehension of the AWS platform. It covers cloud concepts, AWS services, security, architecture, pricing, and support.",
        "image": "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner",
        "category": "business"
    },
    {
        "title": "AWS Certified Solutions Architect",
        "description": "This course prepares individuals to design and deploy scalable, highly available, and fault-tolerant systems on the AWS cloud platform, covering key AWS services and architectural best practices. It validates expertise in architecting and deploying secure and robust applications on AWS.",
        "image": "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect",
        "category": "cloud"
    },
    {
        "title": "AZ-900 Microsoft Azure Fundamentals",
        "description": "This course provides foundational knowledge of cloud concepts and Azure services, covering cloud computing principles and the core Azure offerings. It is designed for individuals seeking to understand the basics of Azure and cloud technology.",
        "image": "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg",
        "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
        "category": "Cloud"
    },
    {
        "title": "Bash Scripting Learn Shell Scripting",
        "description": "This course teaches you how to write Bash scripts to automate tasks and manage your system more efficiently. You will learn the fundamentals of shell scripting and develop practical skills for various applications.",
        "image": "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
        "link": "https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting",
        "category": "programming"
    },
    {
        "title": "Build a Real-world App with ASP.NET Core and Angular 2 (4+)",
        "description": "Learn to build a complete, production-ready web application using ASP.NET Core for the backend and Angular (version 4 or higher) for the frontend, covering practical development techniques and real-world scenarios. This course will teach you how to integrate these technologies to create robust and scalable applications.",
        "image": "https://freecoursesite.com/wp-content/uploads/2018/05/1144726_45a2_2-300x169.jpg",
        "link": "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP.NET_Core_and_Angular_2_(4+)",
        "category": "web-development"
    },
    {
        "title": "CCNA Networking  Complete Cisco CCNA 200-301 Prep Course",
        "description": "A complete preparation course for the Cisco CCNA 200-301 certification exam, covering all networking fundamentals and Cisco technologies. This course provides the knowledge and skills necessary to pass the exam and begin a career in networking.",
        "image": "https://img-c.udemycdn.com/course/240x135/5623666_17de_5.jpg",
        "link": "https://BrahimSAA.github.io/CCNA_Networking__Complete_Cisco_CCNA_200-301_Prep_Course",
        "category": "cybersecurity"
    },
    {
        "title": "Complete Cybersecurity Bootcamp",
        "description": "This comprehensive bootcamp covers all essential aspects of cybersecurity, from foundational concepts to advanced techniques, preparing students for a career in the field. It provides hands-on experience and in-depth knowledge to protect systems and data.",
        "image": "https://images.ctfassets.net/aq13lwl6616q/1nSOi4H0zAGJOhK1VTKWDK/09cbe2160152366ce3f0edfc97e96010/Cybersecurity_-_Academy_Thumbnail_2.png?w=400&h=225&q=50&fm=png&bg=transparent",
        "link": "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "CompTIA Security+ Certification Bootcamp",
        "description": "This intensive bootcamp provides comprehensive training to prepare individuals for the CompTIA Security+ certification exam, covering essential security concepts and best practices. Participants will gain the knowledge and skills necessary to protect networks and data from security threats.",
        "image": "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg",
        "link": "https://BrahimSAA.github.io/CompTIA_Security+_Certification_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "The Complete ASP.NET MVC 5 Course",
        "description": "Learn to build robust and scalable web applications using ASP.NET MVC 5 framework, covering everything from the fundamentals to advanced techniques. This course provides a complete guide to developing dynamic, data-driven websites.",
        "image": "https://img-c.udemycdn.com/course/240x135/806922_6310_3.jpg",
        "link": "https://BrahimSAA.github.io/The_Complete_ASP.NET_MVC_5_Course",
        "category": "web-development"
    },
    {
        "title": "The Ultimate Docker Course",
        "description": "Master Docker from beginner to advanced levels, learning to containerize applications, manage Docker images, and deploy containerized solutions efficiently. This course provides a complete understanding of Docker concepts and best practices.",
        "image": "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
        "category": "programming"
    },
    {
        "title": "The Ultimate JavaScript Series",
        "description": "Master JavaScript from beginner to advanced. This comprehensive series covers core concepts, modern frameworks, and best practices for building dynamic web applications.",
        "image": "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
        "category": "programming"
    },
    {
        "title": "Web Security & Bug Bounty Learn Penetration Testing",
        "description": "This course teaches you how to find and exploit security vulnerabilities in web applications, preparing you for penetration testing and bug bounty hunting. Learn the essential skills and techniques to secure websites and earn rewards by identifying security flaws.",
        "image": "https://img-c.udemycdn.com/course/240x135/3985968_eafc_4.jpg",
        "link": "https://BrahimSAA.github.io/Web_Security_&_Bug_Bounty_Learn_Penetration_Testing",
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
