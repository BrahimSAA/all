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
        "link": "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP-NET_Core_and_Angular_2_-4--",
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
        "link": "https://BrahimSAA.github.io/CompTIA_Security-_Certification_Bootcamp",
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
        "link": "https://BrahimSAA.github.io/The_Complete_ASP-NET_MVC_5_Course",
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
    },
    {
        "title": "Web Security & Bug Bounty Learn Penetration Testing",
        "description": "This course teaches web security principles and penetration testing techniques to find and exploit vulnerabilities for bug bounty programs. Learn practical skills to secure web applications and earn rewards by identifying security flaws.",
        "image": "https://img-c.udemycdn.com/course/240x135/3985968_eafc_4.jpg",
        "link": "https://BrahimSAA.github.io/Web_Security_-_Bug_Bounty_Learn_Penetration_Testing",
        "category": "cybersecurity"
    },
    {
        "title": "Windows Server 2022 Administration",
        "description": "This course provides a comprehensive overview of Windows Server 2022 administration, covering essential skills for managing and maintaining Windows Server environments. Students will learn to configure, deploy, and troubleshoot core services and features.",
        "image": "https://kavoneinstitute.com/wp-content/uploads/2024/07/Windows-Server-2022-Administration.png",
        "link": "https://BrahimSAA.github.io/Windows_Server_2022_Administration",
        "category": "business"
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
