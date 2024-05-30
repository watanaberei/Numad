// ./src/components/NonFeaturedBlog.js
import { format, parseISO } from "date-fns";

function generateTags(input) {
  if (Array.isArray(input)) {
    input = input.join(", ");
  } else if (input === null) {
    return "";
  } else if (typeof input !== "string") {
    console.error("Invalid input. Expected a string or an array. Received:", input);
    return "";
  }

  const keywordArray = input.split(",").map((keyword) => keyword.trim()).slice(0, 1);

  return keywordArray
    .map(
      (keyword) => `
    <div class="metadata-tag">
      <span class="metadata-tag-text text01">
        ${keyword}
      </span>
    </div>
  `
    )
    .join("");
}


// NonFeaturedBlog.js

const ArticlePost = {
  render: (articlePost) => {
    // Destructure the properties from the primaryFeaturedBlog object
    const {tag, relatedReferences, slug,  media, category, headline, location } = articlePost;
    const tags = tag && tag.length ? tag[0].tags : [];
    const headlines = headline || [];
    const title = headlines.text;
    const medias = media || [];
    const locations = location || [];
    const coordinate = locations.geolocation;
    const thumbnail = medias.thumbnail;
    const references = relatedReferences || [];
      console.log("coordinate: ", coordinate);

      // Generate tags HTML
      const limitedTags03 = tags.slice(0, 3);
      let tagsHTML = '';
      limitedTags03.forEach(tag => {
        tagsHTML += `<div class="metadata-tag">
                       <span class="metadata-tag-text bold01">${tag}</span>
                     </div>`;
      });

  return `
  <!-- BLOG --> 
  <div class="primary-featured-blog-container"> 
    <div class="primary-featured-blog"> 
      <div class="primary-featured-blog-img">
        <a href="/article/${category}/${slug}"> <!-- Update the href here -->
          <img src="${thumbnail}" alt="" />
        </a>
      </div>
      <div class="primary-featured-blog-text">
        <div class="primary-featured-blog-header">
          <a href="/article/${category}/${slug}"> <!-- Update the href here -->
            <div class="primary-featured-blog-header-container">
              <span class="primary-featured-blog-title-text header05">
                ${title}
              </span> 
            </div>
          </a>
        </div>
        <div class="blog-data">
          <div class="tag-collection">
            <div class="featured-blog-data-container">
              <a href="/dine">
                <div class="section-tag" id="${category}">
                  <i class="section-tag-icon icon-${category}"></i>
                  <span class="section-tag-divider">
                    <div class="lineV"></div>
                  </span>
                  <span class="section-tag-text bold01">
                    ${category}
                  </span>
                </div>
              </a>
            </div>
            <div class="nav-list-divider">
              <div class="lineV"></div>
            </div>
            <div class="blog-data">
              ${tagsHTML}
            </div>   
          </div>
          <div class="data-time">
            <span class="data-time-text text01">2m Read</span>
          </div>
        </div>
      </div>
    </div>
    <div class="lineH"></div>

  </div>`;
  }
};

export default ArticlePost;
