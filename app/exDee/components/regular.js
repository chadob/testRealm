import React from 'react';

class Regular extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="this.props.className">
        {
          this.props.sides.map(side => {
            return (
              <div className={this.props.className + "Side" + side.key} style={[side.key]}>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Regular;
