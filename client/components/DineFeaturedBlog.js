// DineFeaturedBlog.js
import { format, parseISO } from "date-fns";


const DineFeaturedBlog = {
  render: (dineFeaturedBlog) => {
    
    return `
        <!--FEATURED BLOG--> 

            <div class="primary-featured-blog"> 
                <div class="primary-featured-blog-img">
                    <a href="/#/blogs/${dineFeaturedBlog.slug}">
                        <img src="${dineFeaturedBlog.thumbnail.url}" alt="" />
                    </a>
                </div>

                <div class="primary-featured-blog-text">  
                    <div class="featured-blog-header">
                        <a href="/#/blogs/${dineFeaturedBlog.slug}">
                            <div class="featured-blog-header-container">
                                <span class="featured-blog-title-text header01">
                                    ${dineFeaturedBlog.title}
                                    <!--${
                                        dineFeaturedBlog.title.length > 40 
                                        ? dineFeaturedBlog.title.substr(0, 40) + " ..."
                                        : dineFeaturedBlog.title
                                    } -->
                                </span> 
                                <span class="featured-blog-overview-text text02">
                                    ${dineFeaturedBlog.overview}
                                </span>
                        
                            </div>
                        </a>
                    </div>
            
                    <div class="blog-data">
                        <div class="tag-collection">
                            <div class="featured-blog-data-container">
                                <a href="/#/dine">
                                    <div class="section-tag" id="${dineFeaturedBlog.section}">
                                        <i class="section-tag-icon icon-${dineFeaturedBlog.section}"></i>
                                        <span class="section-tag-divider">
                                        <div class="lineV"></div>
                                        </span>
                                        <span class="section-tag-text medium00">
                                            ${dineFeaturedBlog.section}
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="nav-list-divider">
                                <div class="lineV">
                                </div>
                            </div>

                            <div class="blog-data-container">
                                <div class="metadata-tag">
                                    <span class="metadata-tag-text text01">${dineFeaturedBlog.tag} </span>
                                </div>   
                            </div>   
                        </div>
                        <div class="data-time">
                            <span class="data-time-text text01">2m Read</span>
                        </div>
                    </div>
                </div>
                <div class="lineH"></div>
            </div>

        </a>`;
  },
};

export default DineFeaturedBlog;
