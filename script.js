// Course data
const courses = [
    {
      "title": "Linux 101",
      "description": "Essential Linux skills for system administration and security professionals.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/znrRDjrwRRykVhFB5Osj",
      "link": "https://BrahimSAA.github.io/Linux_101/",
      "category": "systems"
    },
    {
      "title": "Bash Scripting Learn Shell Scripting",
      "description": "Automate tasks and manage systems using Bash scripting techniques.",
      "image": "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
      "link": "https://BrahimSAA.github.io/Bash_Scripting_Learn_Shell_Scripting",
      "category": "programming"
    },
    {
      "title": "CompTIA Security+ Certification Bootcamp",
      "description": "Intensive preparation for Security+ exam with hands-on security training.",
      "image": "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg",
      "link": "https://BrahimSAA.github.io/CompTIA_Security-_Certification_Bootcamp",
      "category": "cybersecurity"
    },
    {
      "title": "Python 101 for Hackers",
      "description": "Beginner-friendly introduction to Python programming fundamentals.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/qT5GRyTSHWEoH1Euq7ym",
      "link": "https://BrahimSAA.github.io/Python_101_for_Hackers/",
      "category": "programming"
    },
    {
      "title": "Java Essentials",
      "description": "Learn Java fundamentals including syntax and object-oriented programming basics.",
      "image": "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350,350_QL50_.jpg",
      "link": "https://BrahimSAA.github.io/Java_Essentials",
      "category": "programming"
    },
    {
      "title": "The Ultimate JavaScript Series",
      "description": "Complete JavaScript guide from fundamentals to modern frameworks.",
      "image": "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg",
      "link": "https://BrahimSAA.github.io/The_Ultimate_JavaScript_Series",
      "category": "programming"
    },
    {
      "title": "Security Operations (SOC) 101",
      "description": "Learn SOC fundamentals, threat detection, and incident response techniques.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/doDD6MrQgma58qFv0TSP",
      "link": "https://BrahimSAA.github.io/Security_Operations_-SOC-_101/",
      "category": "cybersecurity"
    },
    {
      "title": "AWS Certified Cloud Practitioner",
      "description": "Fundamental AWS cloud concepts and services for certification preparation.",
      "image": "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png",
      "link": "https://BrahimSAA.github.io/AWS_Certified_Cloud_Practitioner",
      "category": "business"
    },
    {
      "title": "AZ-900 Microsoft Azure Fundamentals",
      "description": "Core Azure services and cloud computing fundamentals.",
      "image": "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg",
      "link": "https://BrahimSAA.github.io/AZ-900_Microsoft_Azure_Fundamentals",
      "category": "Cloud"
    },
    {
      "title": "AWS Certified Solutions Architect",
      "description": "Design scalable and fault-tolerant systems on AWS platform.",
      "image": "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg",
      "link": "https://BrahimSAA.github.io/AWS_Certified_Solutions_Architect",
      "category": "design"
    },
    {
      "title": "CCNA Networking Complete Cisco CCNA 200-301 Prep Course",
      "description": "Prepare for CCNA certification with networking fundamentals and Cisco tech.",
      "image": "https://img-c.udemycdn.com/course/240x135/5623666_17de_5.jpg",
      "link": "https://BrahimSAA.github.io/CCNA_Networking__Complete_Cisco_CCNA_200-301_Prep_Course",
      "category": "cybersecurity"
    },
    {
      "title": "The Ultimate Docker Course",
      "description": "Master containerization and Docker from basics to advanced.",
      "image": "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg",
      "link": "https://BrahimSAA.github.io/The_Ultimate_Docker_Course",
      "category": "programming"
    },
    {
      "title": "Mastering Kubernetes",
      "description": "Learn Kubernetes core concepts and deployment strategies for container management.",
      "image": "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
      "link": "https://BrahimSAA.github.io/Mastering_Kubernetes",
      "category": "programming"
    },
    {
      "title": "Python 201 For Hackers",
      "description": "Advanced Python concepts including OOP, decorators, and async programming.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/xUP2OWjTTuG1Pzx8AL8u",
      "link": "https://BrahimSAA.github.io/Python_201_For_Hackers/",
      "category": "programming"
    },
    {
      "title": "The Complete ASP.NET MVC 5 Course",
      "description": "Build robust web applications with ASP.NET MVC 5 framework.",
      "image": "https://img-c.udemycdn.com/course/240x135/806922_6310_3.jpg",
      "link": "https://BrahimSAA.github.io/The_Complete_ASP-NET_MVC_5_Course",
      "category": "web-development"
    },
    {
      "title": "Build a Real-world App with ASP.NET Core and Angular 2 (4+)",
      "description": "Full-stack development with ASP.NET Core backend and Angular frontend.",
      "image": "https://freecoursesite.com/wp-content/uploads/2018/05/1144726_45a2_2-300x169.jpg",
      "link": "https://BrahimSAA.github.io/Build_a_Real-world_App_with_ASP-NET_Core_and_Angular_2_-4--",
      "category": "web-development"
    },
    {
      "title": "Getting Started with Ansible Automation Made Easy",
      "description": "Beginner's guide to automating IT tasks with Ansible.",
      "image": "https://img-c.udemycdn.com/course/240x135/6032754_930e.jpg",
      "link": "https://BrahimSAA.github.io/Getting_Started_with_Ansible_Automation_Made_Easy",
      "category": "programming"
    },
    {
      "title": "C# 101 for Hackers",
      "description": "A specialized guide covering C# programming techniques, security concepts, and penetration testing applications for cybersecurity professionals.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/8IL5ZJ7ASSarS6x0xBPg",
      "link": "https://BrahimSAA.github.io/C_sharp_101_for_Hackers/",
      "category": "Cybersecurity"
    },
    {
      "title": "Master Python Hacking plus then 15 Projects from Beginner to Expert",
      "description": "Ethical hacking with Python through 15 practical projects.",
      "image": "https://img-c.udemycdn.com/course/240x135/6124711_54b8_2.jpg",
      "link": "https://BrahimSAA.github.io/Master_Python_Hacking_plus_then_15_Projects_from_Beginner_to_Expert",
      "category": "cybersecurity"
    },
    {
      "title": "Open-Source Intelligence (OSINT) Fundamentals",
      "description": "Learn open-source intelligence gathering techniques for investigations.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/cndIXbcWSsXldQrB5jTo",
      "link": "https://BrahimSAA.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/",
      "category": "cybersecurity"
    },
    {
      "title": "Practical Malware Analysis and Triage",
      "description": "Understand malware behavior, reverse engineering, and defense strategies.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/KWZgSZeATJmhuBdIhLGN",
      "link": "https://BrahimSAA.github.io/Practical_Malware_Analysis_and_Triage/",
      "category": "cybersecurity"
    },
    {
      "title": "Practical Web Hacking",
      "description": "Hands-on web application penetration testing and vulnerability discovery.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/9c7K4sUTXOjS0vKWVr7V",
      "link": "https://BrahimSAA.github.io/Practical_Web_Hacking/",
      "category": "Web Security"
    },
    {
      "title": "Practical API Hacking",
      "description": "Understand API vulnerabilities and how to secure modern web applications.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/hDCDoCxRSGCa2vLD9UCV",
      "link": "https://BrahimSAA.github.io/Practical_API_Hacking/",
      "category": "programming"
    },
    {
      "title": "Web Security & Bug Bounty Learn Penetration Testing",
      "description": "Learn penetration testing for web security and bug bounties.",
      "image": "https://img-c.udemycdn.com/course/240x135/3985968_eafc_4.jpg",
      "link": "https://BrahimSAA.github.io/Web_Security_-_Bug_Bounty_Learn_Penetration_Testing",
      "category": "cybersecurity"
    },
    {
      "title": "Mobile Application Penetration Testing",
      "description": "Comprehensive guide to finding vulnerabilities in Android and iOS applications.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lfFu7iSIyJwPhrR2yz1w",
      "link": "https://BrahimSAA.github.io/Mobile_Application_Penetration_Testing/",
      "category": "Mobile Security"
    },
    {
      "title": "Linux Privilege Escalation for Beginners",
      "description": "Master privilege escalation techniques in Linux environments for penetration testing.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/6ZeARBwScaIN1UxGh5Z4",
      "link": "https://BrahimSAA.github.io/Linux_Privilege_Escalation_for_Beginners/",
      "category": "Penetration Testing"
    },
    {
      "title": "Windows Privilege Escalation for Beginners",
      "description": "Advanced techniques for escalating privileges in Windows environments.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3TDZkYDzRxaZGnwCHOvW",
      "link": "https://BrahimSAA.github.io/Windows_Privilege_Escalation_for_Beginners/",
      "category": "Windows Security"
    },
    {
      "title": "Complete Cybersecurity Bootcamp",
      "description": "Comprehensive training from cybersecurity basics to advanced techniques.",
      "image": "https://www.itcareerfinder.com/images/best-cybersecurity-bootcamps-online-2024.gif",
      "link": "https://BrahimSAA.github.io/Complete_Cybersecurity_Bootcamp",
      "category": "cybersecurity"
    },
    {
      "title": "Windows Server 2022 Administration",
      "description": "Essential skills for managing Windows Server 2022 environments.",
      "image": "https://kavoneinstitute.com/wp-content/uploads/2024/07/Windows-Server-2022-Administration.png",
      "link": "https://BrahimSAA.github.io/Windows_Server_2022_Administration",
      "category": "business"
    },
    {
      "title": "Practical Ethical Hacking",
      "description": "Master ethical hacking techniques and penetration testing methodologies.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/25Jl6X5mQ6iALUtb931B",
      "link": "https://BrahimSAA.github.io/Practical_Ethical_Hacking/",
      "category": "cybersecurity"
    },
    {
      "title": "Practical Bug Bounty",
      "description": "Real-world bug hunting techniques used by professional security researchers.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/pVs4ytz0RiG8bzlwDyox",
      "link": "https://BrahimSAA.github.io/Practical_Bug_Bounty/",
      "category": "Ethical Hacking"
    },
    {
      "title": "Practical Phishing Campaigns",
      "description": "Understand and defend against modern phishing techniques and social engineering.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/vIuC2QSyRNCclJ8oh3aQ",
      "link": "https://BrahimSAA.github.io/Practical_Phishing_Campaigns/",
      "category": "Social Engineering"
    },
    {
      "title": "Detection Engineering for Beginners",
      "description": "Build effective threat detection systems and security monitoring solutions.",
      "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/tS0hJsAARMWznu0NjWsh",
      "link": "https://BrahimSAA.github.io/Detection_Engineering_for_Beginners/",
      "category": "Cyber Defense"
    },
    {
      "title": "Advanced Databases",
      "description": "Learn distributed databases, NoSQL, and query optimization for high-performance systems.",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_z9Gtz-GV0uMw0JqKvKIv0DQZPGUPbJM8C3MMHu1aBX9_kU8Z6SZs8s9ddqJ-NcjzdUMeSaPUhfVxWrv-Vl9_rl5yXEOdLtrI8wgTmANoPfnogR_YCqJPO85ne4CwNRSc79x4GFX_3bXQm48c2uYjaSSVjD9cCCVpYdrvILMdZdsxtT_CkvJyvsl9Th_8/s320/ADBMS_GMeet%20Discussion%20Board_Aug%2024%202023.jpg",
      "link": "https://BrahimSAA.github.io/Advanced_Databases",
      "category": "data-science"
    },
    {
        "title": "GRC Analyst Master Class",
        "description": "Become a master of Governance, Risk, and Compliance analysis, learning to assess and manage organizational risks effectively.",
        "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://uploads.teachablecdn.com/attachments/2fdqCoajQ6qU8syJO2yO_grc-new-2.png",
        "link": "https://BrahimSAA.github.io/GRC_Analyst_Master_Class",
        "category": "business"
    },
    {
        "title": "Node.js, Express, MongoDB",
        "description": "Learn full-stack web development using Node.js for the backend, Express.js as a framework, and MongoDB as the database to build dynamic and scalable applications.",
        "image": "https://miro.medium.com/v2/resize:fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png",
        "link": "https://BrahimSAA.github.io/Node-js-_Express-_MongoDB",
        "category": "web-development"
    },
    {
        "title": "Redux",
        "description": "This course provides a thorough understanding of Redux, a predictable state container for JavaScript apps, helping you manage application state effectively. You will learn how to use Redux with React and other frameworks to build scalable and maintainable applications.",
        "image": "https://www.clariontech.com/hubfs/Blog-images/BlogImage-97.jpg",
        "link": "https://BrahimSAA.github.io/Redux",
        "category": "web-development"
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
