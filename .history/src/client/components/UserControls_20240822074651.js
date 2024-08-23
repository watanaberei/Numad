import { format, parseISO } from "date-fns";
import * as element from "./elements.js";


export const storeControls = {
  render: (store) => {
    return `
    <div class="store-controls">
        <div class="divider">
        <div class="s">
            <div class="_15">15</div>
        </div>
        <img class="vector-251" src="vector-2510.svg" />
        <div class="s">
            <div class="_15">15</div>
        </div>
        </div>
        <div class="content">
        <div class="info">
            <div class="contributions">
            <div class="icon">
                <img class="icon-user-rating" src="icon-user-rating0.svg" />
            </div>
            <div class="label">
                <div class="count">
                <div class="_333">333</div>
                </div>
            </div>
            </div>
            <div class="divider2">
            <div class="divider-action">
                <div class="rectangle-4592"></div>
            </div>
            </div>
            <div class="modified">
            <div class="label2">
                <div class="modified2">Modified</div>
            </div>
            <div class="count2">
                <div class="date">
                <div class="_06">06</div>
                <div class="div">/</div>
                <div class="_06">06</div>
                <div class="div">/</div>
                <div class="_24">24</div>
                <div class="div">,</div>
                </div>
                <div class="time">
                <div class="count3">
                    <div class="_333">3</div>
                </div>
                <div class="min">min</div>
                </div>
            </div>
            </div>
        </div>
        <div class="actions">
            <div class="score">
            <div class="comments">
                <img
                class="icon-user-rating-comment"
                src="icon-user-rating-comment0.svg"
                />
                <div class="label3">
                <div class="comments2">Comments</div>
                <div class="count4">
                    <div class="div2">(</div>
                    <div class="_3332">333</div>
                    <div class="div2">)</div>
                </div>
                </div>
            </div>
            <div class="reviews">
                <img
                class="icon-user-rating-review"
                src="icon-user-rating-review0.svg"
                />
                <div class="label3">
                <div class="comments2">Reviews</div>
                <div class="count4">
                    <div class="div2">(</div>
                    <div class="_3332">333</div>
                    <div class="div2">)</div>
                </div>
                </div>
            </div>
            </div>
            <div class="divider2">
            <div class="divider-action">
                <div class="rectangle-4592"></div>
            </div>
            </div>
            <div class="impressions">
            <div class="frame-24783">
                <div class="impressions2">
                <img
                    class="icon-user-rating-like"
                    src="icon-user-rating-like0.svg"
                />
                <div class="count3">
                    <div class="_3333">333</div>
                </div>
                </div>
                <div class="impressions2">
                <img
                    class="icon-user-rating-dislike"
                    src="icon-user-rating-dislike0.svg"
                />
                <div class="count3">
                    <div class="_3333">333</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
        `;
  },
};
