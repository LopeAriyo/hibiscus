import React from "react";

class PressListItem extends React.Component {
    render() {
        return (
            <li>
                <h3 className="publication">{this.props.publication}</h3>
                <p className="article-title">
                    <a href={this.props.url}>{this.props.title}</a>
                </p>
                <p className="article-date">{this.props.date}</p>
            </li>
        );
    }
}
export default PressListItem;
