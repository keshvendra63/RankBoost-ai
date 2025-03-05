
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-kudevs-gray-50">
      <Navbar />
      
      <main>
        {/* Blog Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="section-subtitle">KNOWLEDGE HUB</h4>
            <h1 className="gradient-text mb-6">Tech Blog</h1>
            <p className="text-kudevs-gray-800 text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights in technology, 
              web development, design, and digital marketing.
            </p>
          </div>
        </section>
        
        {/* Blog Categories */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white shadow-md">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="webdev">Web Development</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <BlogPosts category="all" />
            </TabsContent>
            
            <TabsContent value="webdev" className="mt-0">
              <BlogPosts category="webdev" />
            </TabsContent>
            
            <TabsContent value="design" className="mt-0">
              <BlogPosts category="design" />
            </TabsContent>
            
            <TabsContent value="marketing" className="mt-0">
              <BlogPosts category="marketing" />
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Newsletter Subscription */}
        <section className="py-16 px-4 bg-gradient-to-r from-kudevs-blue to-kudevs-purple">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Subscribe to Our Newsletter</h3>
                <p className="text-kudevs-gray-800 mb-6">
                  Get the latest articles, tutorials, and updates delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 rounded-md border border-kudevs-gray-200 px-4 py-2"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
