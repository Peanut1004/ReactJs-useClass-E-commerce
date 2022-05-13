import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <aside>
        <div id="clear-all"><div data-reactroot="">
          <div className="ais-root ais-clear-all btn btn-block btn-default">
            <div class="ais-body ais-clear-all--body"><a class="ais-clear-all--link" href="#"><div><i class="fa fa-eraser"></i> Clear all filters</div></a>
          </div>
        </div>
      </div>
      </div>
    </aside>
    )
  }
}

export default Menu