
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, MessageSquare, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allPosts } from '../utils/blogData';

interface BlogPostsProps {
  category: 'all' | 'webdev' | 'design' | 'marketing';
}

const BlogPosts: React.FC<BlogPostsProps> = ({ category }) => {
  // Filter posts based on category
  const filteredPosts = category === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map(post => (
        <Link to={`/blog/${post.id}`} key={post.id} className="transition-transform hover:-translate-y-2 duration-300">
          <Card className="h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white text-kudevs-blue px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                {post.category === 'webdev' ? 'Web Dev' : 
                 post.category === 'design' ? 'Design' : 'Marketing'}
              </div>
            </div>
            
            <CardHeader className="pt-6 pb-0">
              <h3 className="text-xl font-semibold line-clamp-2 text-kudevs-gray-800">{post.title}</h3>
            </CardHeader>
            
            <CardContent>
              <p className="text-kudevs-gray-800 line-clamp-3 mt-2 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-kudevs-gray-800 mt-2">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="border-t pt-4 flex justify-between text-sm text-kudevs-gray-800">
              <div className="flex items-center">
                <Tag size={14} className="mr-1" />
                {post.category === 'webdev' ? 'Web Development' : 
                post.category === 'design' ? 'Design' : 'Digital Marketing'}
              </div>
              <div className="flex items-center">
                <MessageSquare size={14} className="mr-1" />
                {post.comments} comments
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogPosts;
