//DinePost.js
import { format, parseISO } from "date-fns";

const DinePost = {
  render: (dinePost) => {
    return `
        <!--FEATURED BLOG--> 
        <div class="post"> 
            <div class="post-img">
              <a href="/#/posts/${dinePost.slug}">
              <img src="${dinePost.thumbnail.url}" alt="" /></a>
            </div>
            <div class="post-text">
              <div class="post-header">
                <a href="/#/posts/${dinePost.slug}">
                  <div class="post-header-container">
                    <span class="post-title-text bold03">
                    ${
                        dinePost.title.length > 90
                        ? dinePost.title.substr(0, 90) + " ..."
                        : dinePost.title
                    } 
                    </span> 
                    <span class="post-overview-text text02">
                      ${dinePost.overview}
                    </span>
                  </div>
                </a>
              </div>
        

                <div class="post-data">
                    <div class="tag-collection">
                        <div class="featured-post-data-container">
                            <a href="/#/dine">
                                <div class="section-tag" id="${dinePost.section}">
                                    <i class="section-tag-icon icon-${dinePost.section}"></i>
                                    <span class="section-tag-divider">
                                    <div class="lineV"></div>
                                    </span>
                                    <span class="section-tag-text medium00">
                                        ${dinePost.section}
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="nav-list-divider">
                            <div class="lineV">
                            </div>
                        </div>

                        <div class="post-data-container">
                            <div class="metadata-tag">
                                <span class="metadata-tag-text text01">${dinePost.tag} </span>
                            </div>   
                        </div>   
                    </div>
                    <div class="data-time">
                        <span class="data-time-text text01">2m Read</span>
                    </div>
                </div>
              

            </div>
            <div class="lineH"></div>
          </div>`;
  },
};

export default DinePost;
