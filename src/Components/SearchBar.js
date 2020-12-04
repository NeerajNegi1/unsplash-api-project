import React from 'react'

class SearchBar extends React.Component {

    state = { text: "Hi there!" };

    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({ text: event.target.value })
    }

    onformSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment" >
                <form onSubmit={this.onformSubmit} className="ui form">
                    <div className="field">
                        <label className="ui label">Image Search</label>
                        <input onChange={this.inputChange} type="text" className="ui search" />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar