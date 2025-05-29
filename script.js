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
        "title": "AWS Certified Cloud Practitioner",
        "description": "This course provides a foundational understanding of AWS cloud concepts, services, and terminology, preparing individuals for the AWS Certified Cloud Practitioner exam. It covers core AWS services, security best practices, pricing, and support.",
        "image": "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner",
        "category": "business"
    },
    {
        "title": "Advanced Databases",
        "description": "This course delves into advanced topics in database management systems, covering areas like query optimization, distributed databases, NoSQL databases, and database security. Students will learn to design, implement, and manage high-performance and scalable database solutions.",
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_z9Gtz-GV0uMw0JqKvKIv0DQZPGUPbJM8C3MMHu1aBX9_kU8Z6SZs8s9ddqJ-NcjzdUMeSaPUhfVxWrv-Vl9_rl5yXEOdLtrI8wgTmANoPfnogR_YCqJPO85ne4CwNRSc79x4GFX_3bXQm48c2uYjaSSVjD9cCCVpYdrvILMdZdsxtT_CkvJyvsl9Th_8/s320/ADBMS_GMeet%20Discussion%20Board_Aug%2024%202023.jpg",
        "link": "https://BrahimSAA.github.io/Advanced_Databases",
        "category": "data-science"
    },
    {
        "title": "Java Essentials",
        "description": "This course covers the fundamental concepts of Java programming, providing students with the skills to write, compile, and execute basic Java applications. It explores core language features, object-oriented programming principles, and essential Java APIs.",
        "image": "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350,350_QL50_.jpg",
        "link": "https://BrahimSAA.github.io/Java_Essentials",
        "category": "programming"
    },
    {
        "title": "Mastering Kubernetes",
        "description": "This course provides in-depth knowledge and practical skills to effectively deploy, manage, and scale applications using Kubernetes. You will learn essential concepts and best practices for container orchestration and automation.",
        "image": "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
        "link": "https://BrahimSAA.github.io/Mastering_Kubernetes",
        "category": "programming"
    },
    {
        "title": "AWS Certified Solutions Architect",
        "description": "This course prepares individuals to design and implement robust, scalable, and cost-effective solutions on the Amazon Web Services (AWS) platform, validating their expertise in cloud architecture.",
        "image": "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg",
        "link": "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect",
        "category": "design"
    },
    {
        "title": "AZ-900 Microsoft Azure Fundamentals",
        "description": "This course provides foundational level knowledge of cloud concepts and Microsoft Azure services. It covers core Azure services, security, privacy, compliance, and trust.",
        "image": "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg",
        "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
        "category": "cloud"
    },
    {
        "title": "Bash Scripting Learn Shell Scripting",
        "description": "This course provides a comprehensive introduction to Bash scripting, equipping students with the skills to automate tasks and manage systems using shell scripting.",
        "image": "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
        "link": "https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting",
        "category": "programming"
    },
    {
        "title": "Build a Real-world App with ASP.NET Core and Angular 2 (4)",
        "description": "Learn to develop a complete, practical application using ASP.NET Core for the backend and Angular for the frontend, building upon foundational concepts to create a real-world project.",
        "image": "https://freecoursesite.com/wp-content/uploads/2018/05/1144726_45a2_2-300x169.jpg",
        "link": "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP.NET_Core_and_Angular_2_(4)",
        "category": "web-development"
    },
    {
        "title": "CCNA Networking  Complete Cisco CCNA 200-301 Prep Course",
        "description": "This comprehensive course provides complete preparation for the Cisco CCNA 200-301 certification exam, covering all necessary networking concepts and skills. It aims to equip students with the knowledge and hands-on experience to confidently pass the exam and excel in networking roles.",
        "image": "https://img-c.udemycdn.com/course/240x135/5623666_17de_5.jpg",
        "link": "https://BrahimSAA.github.io/CCNA_Networking__Complete_Cisco_CCNA_200-301_Prep_Course",
        "category": "cybersecurity"
    },
    {
        "title": "Complete Cybersecurity Bootcamp",
        "description": "This complete cybersecurity bootcamp provides a comprehensive training program covering various aspects of cybersecurity, from foundational concepts to advanced techniques. Students will gain practical skills and knowledge necessary to protect systems and data from cyber threats.",
        "image": "https://images.ctfassets.net/aq13lwl6616q/1nSOi4H0zAGJOhK1VTKWDK/09cbe2160152366ce3f0edfc97e96010/Cybersecurity_-_Academy_Thumbnail_2.png?w=400&h=225&q=50&fm=png&bg=transparent",
        "link": "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "CompTIA Security+ Certification Bootcamp",
        "description": "This intensive bootcamp prepares individuals to pass the CompTIA Security+ certification exam, covering essential security principles and practices. It provides hands-on training and expert instruction to ensure exam readiness.",
        "image": "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg",
        "link": "https://BrahimSAA.github.io/CompTIA_Security+_Certification_Bootcamp",
        "category": "cybersecurity"
    },
    {
        "title": "The Complete ASP.NET MVC 5 Course",
        "description": "Master ASP.NET MVC 5 and build dynamic, data-driven web applications from scratch. This course covers everything from the fundamentals to advanced techniques for building robust and scalable web solutions.",
        "image": "https://img-c.udemycdn.com/course/240x135/806922_6310_3.jpg",
        "link": "https://BrahimSAA.github.io/The_Complete_ASP.NET_MVC_5_Course",
        "category": "web-development"
    },
    {
        "title": "The Ultimate Docker Course",
        "description": "This course provides a complete understanding of Docker, covering everything from the basics to advanced techniques for containerizing and deploying applications. You'll learn to build, manage, and orchestrate Docker containers for efficient software development and deployment.",
        "image": "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
        "category": "programming"
    },
    {
        "title": "The Ultimate JavaScript Series",
        "description": "A complete journey through JavaScript, covering everything from the fundamentals to advanced concepts and modern frameworks. Master the language and build robust web applications.",
        "image": "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg",
        "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
        "category": "programming"
    },
    {
        "title": "Web Security & Bug Bounty Learn Penetration Testing",
        "description": "Learn to identify and exploit web application vulnerabilities through penetration testing techniques and ethical hacking for bug bounty hunting. This course covers essential web security principles and practical skills to secure web applications and earn rewards.",
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
