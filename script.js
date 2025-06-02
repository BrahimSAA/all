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
    },
    {
        "title": "Practical Malware Analysis and Triage",
        "description": "This course provides hands-on training in the essential skills needed to analyze and triage malware samples, enabling rapid identification and understanding of malicious code behavior. Students will learn practical techniques for dissecting malware, determining its impact, and prioritizing incident response efforts.",
        "image": "https://www.domedion.com/wp-content/uploads/2021/11/Analysis400.png",
        "link": "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Phishing Campaigns",
        "description": "This course teaches the practical aspects of designing, launching, and analyzing phishing campaigns, covering techniques, tools, and ethical considerations. Students will learn how to simulate real-world phishing attacks to identify vulnerabilities and improve security awareness.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/2024-06-27_20-42.png?w=329",
        "link": "https://BrahimSAA.github.io/Practical_Phishing_Campaigns",
        "category": "cybersecurity"
    },
    {
        "title": "Practical Web Hacking",
        "description": "This course teaches the practical skills and techniques necessary to identify and exploit vulnerabilities in web applications. It focuses on real-world examples and hands-on exercises to develop a strong understanding of web hacking methodologies.",
        "image": "https://blog.invid.eu/wp-content/uploads/2024/06/image.png",
        "link": "https://BrahimSAA.github.io/Practical_Web_Hacking",
        "category": "cybersecurity"
    },
    {
        "title": "Python 101 for Hackers",
        "description": "Learn the fundamentals of Python programming, focusing on its application in cybersecurity and ethical hacking. This course provides a foundation for automating tasks, scripting exploits, and analyzing security data.",
        "image": "https://img-c.udemycdn.com/course/240x135/4161452_aaf3_4.jpg",
        "link": "https://BrahimSAA.github.io/Python_101_for_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Python 201 For Hackers",
        "description": "An advanced Python course designed to equip hackers with the skills to leverage Python for penetration testing, exploit development, and security automation. It builds upon foundational Python knowledge to delve into topics like network programming, reverse engineering, and cryptography.",
        "image": "https://img-c.udemycdn.com/course/240x135/4430080_761d.jpg",
        "link": "https://BrahimSAA.github.io/Python_201_For_Hackers",
        "category": "cybersecurity"
    },
    {
        "title": "Security Operations (SOC) 101",
        "description": "This course provides a foundational understanding of Security Operations Centers (SOCs), covering core concepts, processes, technologies, and roles involved in detecting, analyzing, and responding to cybersecurity incidents. It's an introductory course designed to equip learners with the basics of SOC operations.",
        "image": "https://i.ytimg.com/vi/xsRW7_Cbppg/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Security_Operations_(SOC)_101",
        "category": "cybersecurity"
    },
    {
        "title": "Windows Privilege Escalation for Beginners",
        "description": "This course provides a foundational understanding of Windows privilege escalation techniques, enabling beginners to identify and exploit vulnerabilities to gain higher-level access. It covers essential concepts and practical methods for escalating privileges on Windows systems.",
        "image": "https://i.ytimg.com/vi/aD_KlzVK834/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners",
        "category": "cybersecurity"
    },
    {
        "title": "Advanced Databases",
        "description": "This course delves into the theoretical foundations and practical applications of advanced database concepts, including distributed databases, NoSQL databases, and advanced query optimization techniques. Students will learn to design, implement, and manage complex database systems for high-performance and scalability.",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_z9Gtz-GV0uMw0JqKvKIv0DQZPGUPbJM8C3MMHu1aBX9_kU8Z6SZs8s9ddqJ-NcjzdUMeSaPUhfVxWrv-Vl9_rl5yXEOdLtrI8wgTmANoPfnogR_YCqJPO85ne4CwNRSc79x4GFX_3bXQm48c2uYjaSSVjD9cCCVpYdrvILMdZdsxtT_CkvJyvsl9Th_8/s320/ADBMS_GMeet%20Discussion%20Board_Aug%2024%202023.jpg",
        "link": "https://BrahimSAA.github.io/Advanced_Databases",
        "category": "data-science"
    },
    {
        "title": "Java Essentials",
        "description": "This course provides a foundational understanding of Java programming, covering syntax, object-oriented principles, and essential libraries. It equips learners with the skills to build basic Java applications.",
        "image": "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350,350_QL50_.jpg",
        "link": "https://BrahimSAA.github.io/Java_Essentials",
        "category": "programming"
    },
    {
        "title": "Mastering Kubernetes",
        "description": "This course provides a deep understanding of Kubernetes, covering core concepts, deployment strategies, and advanced features for managing containerized applications at scale. Students will gain hands-on experience in deploying, scaling, and troubleshooting Kubernetes clusters.",
        "image": "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
        "link": "https://BrahimSAA.github.io/Mastering_Kubernetes",
        "category": "programming"
    },
    {
        "title": "AWS Certified Cloud Practitioner",
        "description": "This course provides a foundational understanding of AWS Cloud concepts, services, security, architecture, and pricing, preparing individuals for the AWS Certified Cloud Practitioner exam. It covers cloud concepts, AWS services, security, architecture, and pricing.",
        "image": "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner",
        "category": "business"
    },
    {
        "title": "AWS Certified Solutions Architect",
        "description": "This course prepares individuals to design and implement scalable, highly available, and fault-tolerant systems on the Amazon Web Services (AWS) platform, focusing on architectural best practices.",
        "image": "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect",
        "category": "design"
    },
    {
        "title": "AZ-900 Microsoft Azure Fundamentals",
        "description": "This course provides foundational knowledge of cloud concepts and Microsoft Azure services, enabling learners to understand the capabilities and benefits of cloud computing. It covers core Azure services, security, privacy, compliance, and trust.",
        "image": "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg",
        "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
        "category": "Cloud"
    },
    {
        "title": "Bash Scripting Learn Shell Scripting",
        "description": "This course provides a comprehensive introduction to Bash scripting, enabling students to automate tasks and manage systems effectively using shell scripting techniques. Students will learn to write powerful and efficient scripts to streamline their workflows.",
        "image": "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
        "link": "https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting",
        "category": "programming"
    },
    {
        "title": "Build a Real-world App with ASP.NET Core and Angular 2 (4+)",
        "description": "Learn to develop complete, practical web applications using the powerful combination of ASP.NET Core for the backend and Angular (version 4 or later) for the frontend, gaining hands-on experience with real-world development challenges. This course focuses on building a full-stack application from start to finish.",
        "image": "https://freecoursesite.com/wp-content/uploads/2018/05/1144726_45a2_2-300x169.jpg",
        "link": "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP.NET_Core_and_Angular_2_(4+)",
        "category": "web-development"
    },
    {
        "title": "CCNA Networking  Complete Cisco CCNA 200-301 Prep Course",
        "description": "This course provides comprehensive preparation for the Cisco CCNA 200-301 certification exam, covering fundamental networking concepts and Cisco technologies. It equips learners with the knowledge and skills to configure, manage, and troubleshoot modern networks.",
        "image": "https://img-c.udemycdn.com/course/240x135/5623666_17de_5.jpg",
        "link": "https://BrahimSAA.github.io/CCNA_Networking__Complete_Cisco_CCNA_200-301_Prep_Course",
        "category": "cybersecurity"
    },
    {
        "title": "Complete Cybersecurity Bootcamp",
        "description": "This course offers a complete and thorough training program covering all essential aspects of cybersecurity, from foundational concepts to advanced techniques. It equips students with the knowledge and skills needed to protect systems and data from cyber threats.",
        "image": "https://www.itcareerfinder.com/images/best-cybersecurity-bootcamps-online-2024.gif",
        "link": "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "CompTIA Security+ Certification Bootcamp",
        "description": "This intensive bootcamp prepares students to pass the CompTIA Security+ certification exam, covering essential principles of network security and risk management. Participants will gain hands-on experience in identifying and mitigating security threats.",
        "image": "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg",
        "link": "https://BrahimSAA.github.io/CompTIA_Security+_Certification_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "Getting Started with Ansible Automation Made Easy",
        "description": "This course provides a beginner-friendly introduction to Ansible, guiding you through the fundamentals of automating IT tasks with ease. Learn to configure systems, deploy applications, and orchestrate complex workflows using Ansible's simple and powerful automation framework.",
        "image": "https://img-c.udemycdn.com/course/240x135/6032754_930e.jpg",
        "link": "https://BrahimSAA.github.io/Getting_Started_with_Ansible_Automation_Made_Easy",
        "category": "programming"
    },
    {
        "title": "Master Python Hacking plus then 15 Projects from Beginner to Expert",
        "description": "This course provides a complete path to Python hacking mastery, starting from beginner level and progressing through 15 projects to expert level proficiency. You will learn ethical hacking techniques and develop practical skills through hands-on project experience.",
        "image": "https://img-c.udemycdn.com/course/240x135/6124711_54b8_2.jpg",
        "link": "https://BrahimSAA.github.io/Master_Python_Hacking_plus_then_15_Projects_from_Beginner_to_Expert",
        "category": "cybersecurity"
    },
    {
        "title": "The Complete ASP.NET MVC 5 Course",
        "description": "Master ASP.NET MVC 5 and build robust, scalable web applications from scratch. This comprehensive course covers everything from the fundamentals to advanced topics, equipping you with the skills to develop professional-grade MVC applications.",
        "image": "https://img-c.udemycdn.com/course/240x135/806922_6310_3.jpg",
        "link": "https://BrahimSAA.github.io/The_Complete_ASP.NET_MVC_5_Course",
        "category": "web-development"
    },
    {
        "title": "The Ultimate Docker Course",
        "description": "Master Docker from beginner to advanced, learning to containerize applications, manage images, and orchestrate containers for efficient deployment and scaling. This course covers everything you need to know to become a Docker expert.",
        "image": "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
        "category": "programming"
    },
    {
        "title": "The Ultimate JavaScript Series",
        "description": "This course provides a complete and in-depth guide to JavaScript, covering everything from the fundamentals to advanced concepts and modern frameworks. Become a proficient JavaScript developer ready to build complex web applications.",
        "image": "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
        "category": "programming"
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
