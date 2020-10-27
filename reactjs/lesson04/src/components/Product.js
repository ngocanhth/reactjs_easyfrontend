import React, {Component} from 'react';

class Product extends Component {
  render () {
    return (
	    <div className="col-4">
			<div className="classNamethumbnail">
				<img src={this.props.image} alt={this.props.name} />
				<div className="caption">
					<h3>{this.props.name}</h3>
					<p className="price">{this.props.price}</p>
					<p><a className="btn btn-primary">Buy Now</a></p>
					<p><a className="description">{this.props.children}</a></p>
				</div>
			</div>
		</div>
    );
  }
}

export default Product;
