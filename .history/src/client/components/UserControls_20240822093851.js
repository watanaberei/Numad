import { format, parseISO } from "date-fns";
import * as element from "./elements.js";


export const sectionControl = {
  render: (store) => {
    const dividerH = element.dividerH;
    const count=333;
    const countDefault = element.countDefault.render(count);
    return `
    <div class="store-controls">


    ${dividerH}

    <div class="content">

      <div class="info">


        <div class="contributions">
          <div class="icon">
            <img class="icon-user-rating" src="icon-user-rating0.svg" />
          </div>
          ${countDefault}
        </div>




        <div class="divider-v">
          <div class="divider-v-action">
            <div class="divider-v-shape"></div>
          </div>
        </div>



        <div class="modified">
          <span class="label">
            <span class="text02">Modified</span>
          </span>
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
            <img
              class="icon-user-rating-comment"
              src="icon-user-rating-comment0.svg"
            />
            <span class="label">
              <span class="text02">Comments</span>
              <span class="count">
                <span class="parenthesis">(</span>
                <span class="text02">333</span>
                <span class="parenthesis">)</span>
              </span>
            </span>
          </button>


          <button class="reviews">
            <img
              class="icon-user-rating-review"
              src="icon-user-rating-review0.svg"
            />
            <span class="label">
              <span class="text02">Reviews</span>
              <span class="count">
                <span class="parenthesis">(</span>
                <span class="text02">333</span>
                <span class="parenthesis">)</span>
              </span>
            </span>
          </button>


        </div>



        <div class="divider-v">
          <div class="divider-v-action">
            <div class="divider-v-shape"></div>
          </div>
        </div>



        <div class="impressions">

          <button class="impression-button like">
            <img
              class="icon-user-rating-like"
              src="icon-user-rating-like0.svg"
            />
            <div class="count">
              <div class="text02">333</div>
            </div>
          </button>

          <button class="impression-button dislike">
            <img
              class="icon-user-rating-dislike"
              src="icon-user-rating-dislike0.svg"
            />
            <div class="count">
              <div class="text02">333</div>
            </div>
          </button> 

        </div>



      </div>
    </div>
  </div>
    
        `;
  },
};
