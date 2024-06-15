// data/teamMembers.tsx
export interface TeamMember {
    id: number;
    name: string;
    title: string;
    image: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  }
export const teamMembers = [
    {
      id: 1,
      name: "Rasheed Shaikh",
      title: "DIRECTOR",
      image: '/assets/images/Team/Rasheed_Shaikh.webp',
      linkedin: "#",
    },
    {
      id: 2,
      name: "Bilkees Shaikh",
      title: "DIRECTOR",
      image: "/assets/images/Team/Bilkees_Shaikh.webp",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Ankush Kanojia",
      title: "CLIENT OPERATIONS HEAD",
      image: "/assets/images/Team/Ankush_Kanojia.webp",
      linkedin: "#",
  
    },
    {
      id: 4,
      name: "Yash Khatri",
      title: "BUSINESS DEVELOPMENT EXECUTIVE",
      image: "/assets/images/Team/yash.png",
      linkedin: "#",
      
    },
    {
      id: 5,
      name: "Nirmiti Sahare",
      title: "SALES & BUSINESS DEVELOPMENT",
      image: "/assets/images/Team/Nirmiti_Sahare.webp",
      linkedin: "#",
  
    },
    {
      id: 6,
      name: "Shivan Sahani",
      title: "CREATIVE HEAD",
      image: "/assets/images/Team/Shivan_sahani.webp",
      linkedin: "#",
      
    },
    {
      id: 7,
      name: "Nikhilesh",
      title: "GRAPHIC DESIGNER",
      image: "/assets/images/Team/Nikhilesh.webp",
      linkedin: "#",
    },
    {
      id: 8,
      name: "Umair Shaikh",
      title: "PHOTOGRAPHER & VIDEOGRAPHER",
      image: "/assets/images/Team/Umair_Shaikh.webp",
      linkedin: "#",
    }
  ];
  