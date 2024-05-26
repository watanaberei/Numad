import { format, parseISO } from "date-fns";
import { createSanitizingProxy } from "../lock/secure.js";

export const mediaImageFeatured = {
  render: (url) => {
    return `
                <div class="image-featured"            
                    style="
                        background: url(${url}) center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    "
                >  
                </div>
        `;
  },
};

export const neustars = {
  render: (rank, state) => {
    return `
            <span class="neustar-item">
                <i class="icon neustar-${rank}-${state}"></i> 
            </span>
            `;
  },
};

export const neubranch = {
  render: (rank, order) => {
    return `
            <span class="neubranch-item">
                <i class="icon neubranch-${rank}-${order}"></i>
            </span>
            `;
  },
};


export const neustarTag = {
  render: (rank, state) => {
    return `
       
            <i class="icon neustar-${rank}15"></i> 
           
            `;
  },
};

export const neubranchTag = {
  render: (rank, order) => {
    return `
           
            <i class="icon neubranch-${rank}15-${order}"></i>
           
            `;
  },
};

export const title = {
  render: (text) => {
    return `
            <div class="title">
                <span class="text03 bold">
                    ${text}
                </span>
            </div>
            `;
  },
};

export const subtitle = {
  render: (text) => {
    return `
                <span class="subtitle">
                    <span class="nearby text03">
                        ${text.primary}
                        store.currentRange
                    </span>
                    <span class="text03 nearby">
                        ${text.secondary}
                        store.storeType
                    </span>
                </span>
                `;
  },
};

export const label = {
  render: (text) => {
    return `
            <span class="label">
                <span class="nearby text03">
                    ${text}
                </span>
            </span>
            `;
  },
};

export const labelGlyph = {
  render: (text, glyph) => {
    return `
            <span class="label label-glyph">
                <span class="text nearby">
                    ${text}
                </span>
                <span class="glyph">
                    <i class="${glyph}"></i>
                </span>
            </span>
            `;
  },
};

// COMPONENTS
export const buttonFloating = {
  render: (text, glyph) => {
    return `
            <div class="button-floating">
                <button class="container">
                    ${labelGlyph.render(text, glyph)}
                </button>
            </div>
            `;
  },
};

export const buttonCta = {
  render: (text, glyph) => {
    return `
        <button class="cta">
          <div class="cta-popup">
              <span class="search-field">
                  <span class="cta-popup2">cta-popup</span>
                  <i class="glyph-container"></i>
              </span>
          </div>
        </button>
            `;
  },
};

export const mediaPlatinum = {
  render: (url) => {
    return `
          <div class="media-platinum">  
            ${mediaImageFeatured.render(url)}
          </div>
          `;
  },
};

// Neustar
export const neustarAward = {
  render: (neustar) => {
    let metal = "";
    const start = "start";
    const end = "end";
    const active = "active";
    const inactive = "inactive";
    console.log("neustar", neustar);
    switch (neustar) {
      case 1:
        metal = "bronze";
        return `
                    <button class="container">
                        <div class="neubranch-start">
                            ${neubranch.render(metal, start)}
                        </div>
                        <div class="neustar-metal">
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, inactive)}
                            ${neustars.render(metal, inactive)}
                        </div>
                        <div class="neubranch-branchR">
                            ${neubranch.render(metal, end)}
                        </div>
                    </button>`;
      case 2:
        metal = "silver";
        return `
                    <button class="container">
                        <div class="neubranch-start">
                            ${neubranch.render(metal, start)}
                        </div>
                        <div class="neustar-metal">
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, inactive)}
                        </div>
                        <div class="neubranch-end">
                            ${neubranch.render(metal, end)}
                        </div>
                    </button>`;
      case 3:
        metal = "gold";
        return `
                    <button class="container">
                        <div class="neubranch-start">
                            ${neubranch.render(metal, start)}
                        </div>
                        <div class="neustar-metal">
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, active)}
                        </div>
                        <div class="neubranch-end">
                            ${neubranch.render(metal, end)}
                        </div>
                    </button>`;
      default:
        metal = "bronze";
        return `
                    <button class="container">
                        <div class="neubranch-start">
                            ${neubranch.render(metal, start)}
                        </div>
                        <div class="neustar-metal">
                            ${neustars.render(metal, active)}
                            ${neustars.render(metal, inactive)}
                            ${neustars.render(metal, inactive)}
                        </div>
                        <div class="neubranch-end">
                            ${neubranch.render(metal, end)}
                        </div>
                    </button>`;
    }
  },
};


// Neustar
export const neustar = {
  render: (neustar) => {
    let metal = "";
    const start = "start";
    const end = "end";
    const active = "active";
    const inactive = "inactive";
    console.log("neustar", neustar);
    switch (neustar) {
      case 1:
        metal = "bronze";
        return `
                  <div class="objtag-lg">
                    <div class="tag">
                      <div class="neuanchor-left">
                        ${neubranch.render(metal, start)}
                      </div>
                      <div class="award">
                        <span class="text03 bold">
                          ${metal}
                        </span>
                        <div class="neustar-award">
                          ${neustars.render(metal, active)}
                        </div>
                      </div>
                      <div class="neuanchor-right">
                        ${neubranch.render(metal, end)}
                      </div>
                    </div>
                  </div>`;
      case 2:
        metal = "silver";
        return `
                  <div class="objtag-lg">
                    <div class="tag">
                      <div class="neuanchor-left">
                        ${neubranch.render(metal, start)}
                      </div>
                      <div class="award">
                        <span class="text03 bold">
                          ${metal}
                        </span>
                        <div class="neustar-award">
                          ${neustars.render(metal, active)}
                        </div>
                      </div>
                      <div class="neuanchor-right">
                        ${neubranch.render(metal, end)}
                      </div>
                    </div>
                  </div>`;
      case 3:
        metal = "gold";
        return `
                  <div class="objtag-lg">
                    <div class="tag">
                      <div class="neuanchor-left">
                        ${neubranch.render(metal, start)}
                      </div>
                      <div class="award">
                        <span class="text03 bold">
                          ${metal}
                        </span>
                        <div class="neustar-award">
                          ${neustars.render(metal, active)}
                        </div>
                      </div>
                      <div class="neuanchor-right">
                        ${neubranch.render(metal, end)}
                      </div>
                    </div>
                  </div>`;
      default:
        metal = "bronze";
        return `
              `;
    }
  },
};


export const headlineEyebrow = {
  render: () => {
    return `
    <!--
                <div class="headline-eyebrow">
                    <div class="eyebrow">
                    <div class="icon-container">
                        <div class="icon"></div>
                    </div>
                    <div class="text">
                        <div class="title">
                        <img class="business" src="business0.png" />
                        </div>
                        <div class="subtitle">
                        <img class="nearby" src="nearby0.png" />
                        <img class="coffee-shop" src="coffee-shop0.png" />
                        </div>
                    </div>
                    </div>
                    <div class="label">
                    <img class="_12-mi-away" src="_12-mi-away0.png" />
                    </div>
                </div>
      -->
            `;
  },
};

// LINES
export const lineH = {
  render: (spacer) => {
    return `
            <div class="lineH s${spacer}"></div>
            `;
  },
};

export const lineV = {
  render: (spacer) => {
    return `
            <div class="lineV s${spacer}"></div>
            `;
  },
};

// LINES
export const lineDarkH = {
    render: (spacer) => {
      return `
              <div class="lineH grey01 s${spacer}"></div>
              `;
    },
  };
  
  export const lineDarkV = {
    render: (spacer) => {
      return `
              <div class="lineV grey01 s${spacer}"></div>
              `;
    },
  };

// export default  {  heroModule, neustarContainer };

// export const imagePlatinumContainer = {
//     render: () => {
//         return `
//         <div class="media-img-container-hero">
//             <div class="media-img-plt-container">
//                 ${ heroModule(store) }
//             </div>
//         </div>
//         `;
//     },
// }

// export const heroModule = {
//   render: (store) => {
//     return `
//             <div class="media-img-1-x-1-x-hero">
//             </div>
//         `;
//     },
// };

// export const imagePlatinumContainer = {
//     render: () => {
//         return `
//         <div class="media-img-container-hero">
//             <div class="media-img-plt-container">
//                 <div class="media-img-1-x-1-x-hero"></div>
//             </div>
//         </div>
//         `;
//     },
// }

// export default { heroModule, imagePlatinumContainer };
