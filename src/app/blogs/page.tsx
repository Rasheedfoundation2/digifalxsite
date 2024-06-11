'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const blogPosts = [
    {
      title: '10 ways to supercharge your productivity',
      date: 'June 12, 2024',
      category: 'Business',
      image: '/assets/images/img1.jpg',
      excerpt: 'The rapid advancements in AI have paved the way for startups to revolutionize...',
      link: '/post/10-ways-to-supercharge-startup-with-ai',
    },
    {
      title: '10 ways to supercharge startup with AI integration',
      date: 'June 10, 2024',
      category: 'Business',
      image: '/assets/images/img2.jpg',
      excerpt: 'The rapid advancements in AI have paved the way for startups to revolutionize...',
      link: '/post/10-ways-to-supercharge-startup-with-ai',
    },
    {
      title: 'Understanding Blockchain: The Future of Secure Transactions',
      date: 'May 25, 2024',
      category: 'Technology',
      image: '/assets/images/img3.jpg',
      excerpt: 'Blockchain technology is transforming the way we handle digital transactions...',
      link: '/post/understanding-blockchain',
    },
    {
      title: 'The Art of Minimalism in Modern Design',
      date: 'April 18, 2024',
      category: 'Art & Beauty',
      image: '/assets/images/img4.jpg',
      excerpt: 'Minimalism has taken the design world by storm, emphasizing simplicity and functionality...',
      link: '/post/art-of-minimalism',
    },
    {
      title: 'Top 5 Marketing Strategies for Digital Agencies',
      date: 'March 30, 2024',
      category: 'Digital Agency',
      image: '/assets/images/img5.jpg',
      excerpt: 'Effective marketing strategies are crucial for digital agencies to thrive in a competitive market...',
      link: '/post/top-5-marketing-strategies',
    },
    {
      title: 'AI in Healthcare: Transforming Patient Care',
      date: 'February 15, 2024',
      category: 'Technology',
      image: '/assets/images/img4.jpg',
      excerpt: 'Artificial Intelligence is revolutionizing the healthcare industry by improving diagnostics and patient care...',
      link: '/post/ai-in-healthcare',
    },
    {
      title: 'Exploring the Future of Remote Work',
      date: 'January 10, 2024',
      category: 'Business',
      image: '/assets/images/img2.jpg',
      excerpt: 'The shift towards remote work has been accelerated by technological advancements and global events...',
      link: '/post/future-of-remote-work',
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryCounts = blogPosts.reduce((acc: { [key: string]: number }, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-black text-white min-h-[calc(100vh-4rem)] flex flex-col justify-between">
      <header className="bg-black py-6 shadow">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-7xl font-bold hollow-text">Our Blog</h1>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 flex">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <article key={index} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt="Blog Image"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-600">{post.category} • {post.date}</p>
                  <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                  <p className="mt-4">{post.excerpt}</p>
                  <Link href={post.link} legacyBehavior>
                    <a className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition duration-300">Read more</a>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="w-1/4 ml-6">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-6">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold">Blog Categories</h3>
            <ul className="mt-4 space-y-2">
              {Object.keys(categoryCounts).map(category => (
                <li key={category}>
                  <Link href={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} legacyBehavior>
                    <a className="relative block pb-1 text-black transition duration-300 hover:text-BlueNew-100">
                      {category} ({categoryCounts[category]})
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-BlueNew-100 scale-x-0 transition-transform duration-300 transform-gpu origin-left group-hover:scale-x-100"></span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 bg-white text-black rounded-lg shadow-lg p-6 ">
            <h3 className="text-lg font-bold">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              {blogPosts.slice(0, 5).map((post, index) => (
                <li key={index} className="flex space-x-4">
                  <Link href={post.link} legacyBehavior>
                    <a className="flex space-x-4 hover:text-BlueNew-100">
                      <Image
                        src={post.image}
                        alt="Recent Post Image"
                        width={60}
                        height={60}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="text-sm text-gray-600">{post.date}</p>
                        <h4 className="font-bold">{post.title}</h4>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
