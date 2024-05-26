// ./src/components/FeaturedBlog.js
import allTags from './DataTags.js';

const FeaturedBlog = {
  render: (featuredBlog) => {
    const {tag, reference, slug,  media, category, headline, location } = featuredBlog;
    const tags = tag && tag.length ? tag[0].tags : [];
    // const tags = tag || [];
    // console.log("tags", tag)
    // const categories = category;
    // const metatags = metatag && metatag.length ? metatag[0].metatags : [];
    const headlines = headline || [];
    const title = headlines.text;
    const medias = media || [];
    const locations = location || [];
    const coordinate = locations.geolocation;
    const thumbnail = medias.thumbnail;
    const references = reference.relatedReferences || [];
    
    // Generate tags HTML
    const limitedTags03 = tags.slice(0, 3);
    const tagsHTML = allTags(limitedTags03);

    // Generate tags HTML
    // const limitedTags03 = tags.slice(0, 3);
    // let tagsHTML = '';
    // limitedTags03.forEach(tags => {
    //   tagsHTML += `<div class="metadata-tag">
    //                  <span class="metadata-tag-text text01">${tags}</span>
    //                </div>`;
    // });

  
      // Limit to the first two references
      const limitedReferences = references.slice(0, 2);
      let referencesHTML = '';
      limitedReferences.forEach((references, index) => {
          // console.log("reference object: ", references);
          referencesHTML += `
          <div class="featured-blog-text">
              <div class="featured-blog-header">
              <a href="/${references.category}/${references.slug}">
                  <div class="featured-blog-header-container">
                  <span class="featured-blog-title-text header03">
                      ${references.title}
                  </span> 
                  
                  <span class="featured-blog-overview-text text02">
                      ${references.overview}
                  </span>
              
                  </div>
              </a>
              </div>
          </div>`;
  
      // If this is not the last reference, add the divider
      if (index !== limitedReferences.length - 1) {
          referencesHTML += '<div class="lineV"></div>';
      }

  
    });

    // Convert category object to lowercase key entries if it's an object
    // let categories = {};
    // if (typeof category === 'object') {
    //   categories = Object.entries(category).reduce((acc, [key, val]) => {
    //     acc[key.toLowerCase()] = val;
    //     return acc;
    //   }, {});
    // }

  // Generate the HTML content for the PrimaryFeaturedBlog component
  return `
  <!-- BLOG --> 
  <div class="featured-blog-container"> 
    <div class="featured-blog"> 
      <div class="featured-blog-img">
      <a href="/blogs/${slug}">
          <img src="${thumbnail}" alt="" />
        </a>
      </div>
    <div class="featured-blog-text">
      <div class="featured-blog-header">
      <a href="/blogs/${slug}">
          <div class="featured-blog-header-container">
            <span class="featured-blog-title-text header04">
              ${title}
            </span> 
            <!--
            <span class="featured-blog-overview-text text02">
              
            </span>
            -->
          </div>
        </a>
      </div>


      <div class="blog-data">
          <div class="tag-collection">
            <div class="featured-blog-data-container">
                <a href="/dine">
                    <div class="section-tag" id="${category.category}">
                      <i class="section-tag-icon icon-${category.category}"></i>
                      <span class="section-tag-divider">
                      <div class="lineV"></div>
                      </span>
                      <a href="/${category.category}">
                        <span class="section-tag-text medium00">
                            ${category.category}
                        </span>
                      </a>
                    </div>
                  </a>
              </div>
              <div class="nav-list-divider">
                  <div class="lineV">
                  </div>
              </div>

              <div class="blog-data">
                  
                  ${tagsHTML}
                      
              </div>   
          </div>
          <div class="data-time">
              <span class="data-time-text text01">2m Read</span>
          </div>
      </div>
      <div class="lineH"></div>
      ${referencesHTML}

  </div>

     
  </div>
 
`;
  },
};  

export default FeaturedBlog;