
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, User, Tag, ArrowLeft, Share2, MessageSquare } from 'lucide-react';

// Import the mock blog posts data
import { allPosts } from '../utils/blogData';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '1');
  
  // Find the post with the matching ID
  const post = allPosts.find(p => p.id === postId);
  
  // If post not found, show a message
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-kudevs-gray-50">
        <Navbar />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-kudevs-gray-50">
      <Navbar />
      
      <main className="pt-32 pb-16">
        {/* Back to Blog Link */}
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <Link to="/blog" className="inline-flex items-center text-kudevs-blue hover:underline">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
        </div>
        
        {/* Blog Post Header */}
        <article className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-kudevs-blue/10 text-kudevs-blue px-3 py-1 rounded-full text-sm font-medium mr-2">
                {post.category === 'webdev' ? 'Web Development' : 
                 post.category === 'design' ? 'Design' : 'Digital Marketing'}
              </span>
              <span className="text-kudevs-gray-800">{post.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-kudevs-gray-800">{post.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-kudevs-gray-200 flex items-center justify-center mr-3">
                <User className="text-kudevs-gray-800" />
              </div>
              <div>
                <p className="font-medium text-kudevs-gray-800">{post.author}</p>
                <div className="flex items-center text-sm text-kudevs-gray-800">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="ml-auto flex space-x-3">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Share2 size={20} className="text-kudevs-gray-800" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-kudevs-gray-800">
            <p className="text-lg mb-6">
              {post.excerpt}
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
            <p className="mb-6">
              Fusce vitae nisi eget nisi feugiat hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl.
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-6">
              <code>
                {`// Example code snippet
function example() {
  console.log("Hello World!");
  return true;
}`}
              </code>
            </pre>
            <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Techniques</h2>
            <p className="mb-6">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Fusce vitae nisi eget nisi feugiat hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">First important point to remember</li>
              <li className="mb-2">Second crucial aspect of the topic</li>
              <li className="mb-2">Final key consideration</li>
            </ul>
            <p className="mb-6">
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-6">
              In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
          </div>
          
          {/* Tags */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="font-medium mr-2">Tags:</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-kudevs-blue/10 hover:text-kudevs-blue transition-colors">
                {post.category === 'webdev' ? 'React' : 
                 post.category === 'design' ? 'UI/UX' : 'SEO'}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-kudevs-blue/10 hover:text-kudevs-blue transition-colors">
                {post.category === 'webdev' ? 'JavaScript' : 
                 post.category === 'design' ? 'Design' : 'Marketing'}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-kudevs-blue/10 hover:text-kudevs-blue transition-colors">
                {post.category === 'webdev' ? 'Web Development' : 
                 post.category === 'design' ? 'Color Theory' : 'Google Ads'}
              </span>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mt-16">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold">Comments</h3>
              <span className="ml-2 bg-kudevs-blue text-white text-sm px-2 py-1 rounded-full">
                {post.comments}
              </span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="font-bold mb-4">Leave a Comment</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="rounded-md border border-kudevs-gray-200 px-4 py-2"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="rounded-md border border-kudevs-gray-200 px-4 py-2"
                    required
                  />
                </div>
                <textarea 
                  placeholder="Your Comment" 
                  rows={4}
                  className="w-full rounded-md border border-kudevs-gray-200 px-4 py-2"
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Post Comment
                </button>
              </form>
            </div>
            
            {/* Sample Comments */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="w-10 h-10 rounded-full bg-kudevs-gray-200 flex items-center justify-center mr-3">
                    <User className="text-kudevs-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-kudevs-gray-800">June 20, 2024</p>
                  </div>
                </div>
                <p>Great article! I've been struggling with this concept for a while, and your explanation really cleared things up for me.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <div className="w-10 h-10 rounded-full bg-kudevs-gray-200 flex items-center justify-center mr-3">
                    <User className="text-kudevs-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-sm text-kudevs-gray-800">June 18, 2024</p>
                  </div>
                </div>
                <p>I would love to see a follow-up article that dives deeper into this topic. There's so much more to explore!</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
