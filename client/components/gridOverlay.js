const GridOverlay = {
  render: async () => {
    return `
    <div class="grid gridVisualization">
      <div class="o1">o1</div>
      <div class="m">
        <div class="p1">p1</div>
        <div class="c1">
          <div class="col1">
            m c1 col1
          </div>
          <div class="col2">
            m c1 col2
          </div>
          <div class="col3">
            m c1 col3
          </div>
        </div>
        <div class="c2">
          <div class="col1">
            m c2 col1
          </div>
          <div class="col2">
            m c2 col2
          </div>
          <div class="col3">
            m c2 col3
          </div>
        </div>
        <div class="c3">
          <div class="col1">
            m c3 col1
          </div>
          <div class="col2">
            m c3 col2
          </div>
          <div class="col3">
            m c3 col3
          </div>    
        </div>
        <div class="c4">        
          <div class="col1">
            m c4 col1
          </div>
          <div class="col2">
            m c4 col2
          </div>
          <div class="col3">
            m c4 col3
          </div>    
        </div>
        <div class="c5">
          <div class="col1">
            m c5 col1
          </div>
          <div class="col2">
            m c5 col2
          </div>
          <div class="col3">
            m c5 col3
          </div>    
        </div>
        <div class="c6">        
          <div class="col1">
            m c6 col1
          </div>
          <div class="col2">
            m c6 col2
          </div>
          <div class="col3">
            m c6 col3
          </div>    
        </div>
        <div class="p2">p2</div>
      </div>
      <div class="s">
        <div class="p1">p3</div>
        <div class="c1">        
          <div class="col1">
            s c1 col1
          </div>
          <div class="col2">
            s c1 col2
          </div>
          <div class="col3">
            s c1 col3
          </div>    
        </div>
        <div class="c2">        
          <div class="col1">
            s c2 col1
          </div>
          <div class="col2">
            s c2 col2
          </div>
          <div class="col3">
            s c2 col3
          </div>    
        </div>
        <div class="p2">p4</div>
      </div>
      <div class="o2">o2</div>
    </div>
        `;
    },
  after_render: () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
export default GridOverlay;