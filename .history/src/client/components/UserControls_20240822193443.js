import { format, parseISO } from "date-fns";
import * as element from "./elements.js";
import { count } from "d3";

export const userControl = {
  render: (store) => {
    const dividerH = element.dividerH.render();
    const dividerV = element.dividerV.render();
    const modifiedDateData = '03/03/2024';
    const userCount = 333;
    const dateModified = element.timestamp.render(modifiedDateData);
    let count = {
        countRating: 333,
        countReview: 333,
        countComment: 333,
        countLike: 333,
        countDislike: 333
    }
    const countDefault = element.countDefault;
    const countParenthesis = element.countDefault;

    return `
    <div class="user-controls">
      ${dividerH}
      <div class="content">
      <div class="stamp">
        <div class="contributions">
            <i class="icon icon-user-rating-rating-12px"></i>
            ${countDefault.render(count.countRating)}
        </div>

        ${dividerV}

        <div class="modified">
          <span class="label">
            <span class="text02">Modified</span>
          </span>
          ${dateModified}
          <div class="count">
            <span class="text02 date">
              <span class="text02">06</span>
              <span class="text02 divider-h">/</span>
              <span class="text02">06</span>
              <span class="text02 divider-h">/</span>
              <span class="text02">24</span>
              <span class="text02 divider-h">,</span>
            </span>
            <div class="time">
              <div class="count">
                <div class="text02">3</div>
              </div>
              <div class="text02 min">min</div>
            </div>
          </div>
        </div>



      </div>




        <div class="actions">
          <div class="score">



          <button class="comments">
            <i class="icon-user-rating-comment-12px"></i>
            <span class="label">
              <span class="text02">Comments</span>
              ${countParenthesis.render(count.countComment)}
            </span>
          </button>


          <button class="reviews">
            <i class="icon-user-rating-review-12px"></i>
            <span class="label">
              <span class="text02">Reviews</span>
              ${countParenthesis.render(count.countReview)}
            </span>
          </button>


        </div>



        ${dividerV}

          <div id="userImpression" class="impression disabled">
            <button class="impression-button like" onclick="storeActions.toggleImpression('${store.storeId}', 'like')">
              <i class="icon-user-rating-like-12px"></i>
              ${countDefault.render(count.countLike)}
            </button>

            <button class="impression-button dislike" onclick="storeActions.toggleImpression('${store.storeId}', 'dislike')">
              <i class="icon-user-rating-dislike-12px"></i>
              ${countDefault.render(count.countDislike)}
            </button> 
          </div>
        </div>
      </div>
    </div>
    `;
  },
};