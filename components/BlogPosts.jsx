import React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/Card"
import { Clock, MessageSquare, Tag, User } from "lucide-react"

import { allPosts } from "../utils/blogData"
import Link from "next/link";

const BlogPosts = ({ category }) => {
  // Filter posts based on category
  const filteredPosts =
    category === "all"
      ? allPosts
      : allPosts.filter(post => post.category === category)

      return (
        <div className="blog-posts-grid">
          {filteredPosts.map(post => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="blog-post-link"
            >
              <Card className="blog-card">
                <div className="blog-image-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
                  <div className="category-badge">
                    {post.category === "webdev"
                      ? "Web Dev"
                      : post.category === "design"
                      ? "Design"
                      : "Marketing"}
                  </div>
                </div>
    
                <CardHeader className="card-header">
                  <h3 className="card-title">
                    {post.title}
                  </h3>
                </CardHeader>
    
                <CardContent>
                  <p className="card-excerpt">
                    {post.excerpt}
                  </p>
    
                  <div className="post-meta">
                    <div className="meta-item">
                      <User  size={14} className="meta-icon" />
                      <span>{post.author}</span>
                    </div>
                    <span className="meta-separator">•</span>
                    <div className="meta-item">
                      <Clock size={14} className="meta-icon" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
    
                <CardFooter className="card-footer">
                  <div className="footer-item">
                    <Tag size={14} className="footer-icon" />
                    {post.category === "webdev"
                      ? "Web Development"
                      : post.category === "design"
                      ? "Design"
                      : "Digital Marketing"}
                  </div>
                  <div className="footer-item">
                    <MessageSquare size={14} className="footer-icon" />
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

