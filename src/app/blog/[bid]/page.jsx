import React from 'react';
import { Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { allPosts } from '../../../../utils/blogData';
import Link from 'next/link';

const BlogDetail = ({ params }) => {
  const { id } = params;
  const postId = parseInt(id || '1');
  
  // Find the post with the matching ID
  const post = allPosts.find(p => p.id === postId);
  
  // If post not found, show a message
  if (!post) {
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">Blog Post Not Found</h1>
          <p className="not-found-message">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">      
      <main className="blog-detail-main">
        {/* Back to Blog Link */}
        <div className="back-link-container">
          <Link href="/blog" className="back-link">
            <ArrowLeft size={18} className="back-icon" />
            Back to Blog
          </Link>
        </div>
        
        {/* Blog Post Header */}
        <article className="blog-post-article">
          <div className="post-header">
            <div className="post-category-date">
              <span className="post-category">
                {post.category === 'webdev' ? 'Web Development' : 
                 post.category === 'design' ? 'Design' : 'Digital Marketing'}
              </span>
              <span className="post-date">{post.date}</span>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <div className="author-container">
                <div className="author-icon">
                  <User  className="author-icon-svg" />
                </div>
                <div>
                  <p className="author-name">{post.author}</p>
                  <div className="read-time">
                    <Clock size={14} className="read-time-icon" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="share-button-container">
                <button className="share-button">
                  <Share2 size={20} className="share-icon" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="featured-image-container">
            <img 
              src={post.image} 
              alt={post.title} 
              className="featured-image"
            />
          </div>
          
          {/* Blog Content */}
          <div className="blog-content">
            <p className="blog-excerpt">{post.excerpt}</p>
            <p className="blog-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere.
            </p>
            <h2 className="blog-subtitle">Getting Started</h2>
            <p className="blog-paragraph">
              Fusce vitae nisi eget nisi feugiat hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl.
            </p>
            <pre className="code-snippet">
              <code>
                {`// Example code snippet
function example() {
  console.log("Hello World!");
  return true;
}`}
              </code>
            </pre>
            <h2 className="blog-subtitle">Advanced Techniques</h2>
            <p className="blog-paragraph">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Fusce vitae nisi eget nisi feugiat hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
              Donec vitae felis ut urna scelerisque posuere.
            </p>
            <ul className="blog-list">
              <li className="list-item">First important point to remember</li>
              <li className="list-item">Second crucial aspect of the topic</li>
              <li className="list-item">Final key consideration</li>
            </ul>
            <p className="blog-paragraph">
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
            <h2 className="blog-subtitle">Conclusion</h2>
            <p className="blog-paragraph">
              In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor justo vitae nibh finibus, in pulvinar risus volutpat. 
              Vivamus fermentum, neque sit amet commodo imperdiet, nunc massa lacinia lectus, ut eleifend metus arcu quis nisl. 
              Praesent vitae ultricies nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
            </p>
          </div>
          
          {/* Tags */}
          <div className="tags-section">
            <div className="tags-container">
              <span className="tags-label">Tags:</span>
              <span className="tag-badge">
                {post.category === 'webdev' ? 'React' : 
                 post.category === 'design' ? 'UI/UX' : 'SEO'}
              </span>
              <span className="tag-badge">
                {post.category === 'webdev' ? 'JavaScript' : 
                 post.category === 'design' ? 'Design' : 'Marketing'}
              </span>
              <span className="tag-badge">
                {post.category === 'webdev' ? 'Web Development' : 
                 post.category === 'design' ? 'Color Theory' : 'Google Ads'}
              </span>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="comments-section">
            <div className="comments-header">
              <h3 className="comments-title">Comments</h3>
              <span className="comments-count">
                {post.comments}
              </span>
            </div>
            
            <div className="comment-form-container">
              <h4 className="comment-form-title">Leave a Comment</h4>
              <form className="comment-form">
                <div className="form-fields">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="form-input"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="form-input"
                    required
                  />
                </div>
                <textarea 
                  placeholder="Your Comment" 
                  rows={4}
                  className="form-textarea"
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
            <div className="sample-comments">
              <div className="comment">
                <div className="comment-header">
                  <div className="comment-icon">
                    <User  className="comment-icon-svg" />
                  </div>
                  <div>
                    <p className="comment-author">John Doe</p>
                    <p className="comment-date">June 20, 2024</p>
                  </div>
                </div>
                <p className="comment-text">Great article! I've been struggling with this concept for a while, and your explanation really cleared things up for me.</p>
              </div>
              
              <div className="comment">
                <div className="comment-header">
                  <div className="comment-icon">
                    <User  className="comment-icon-svg" />
                  </div>
                  <div>
                    <p className="comment-author">Jane Smith</p>
                    <p className="comment-date">June 18, 2024</p>
                  </div>
                </div>
                <p className="comment-text">I would love to see a follow-up article that dives deeper into this topic. There's so much more to explore!</p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetail;