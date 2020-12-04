import React from 'react';
import axios from 'axios'
import ImageList from './Components/ImageList'
import './App.css';
import SearchBar from './Components/SearchBar'


class App extends React.Component {
  state = { images: [] }

  onSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        page: "1",
        per_page: "10",
        orientation: "landscape"
      },
      headers: {
        Authorization: 'API'
      }
    })
    this.setState({ images: response.data.results })
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' , width:'80%' }}>
        <SearchBar
          onSubmit={this.onSubmit}
        />
          <ImageList
            images={this.state.images}
          />
        <p>Found {this.state.images.length} Images</p>
      </div>
    );
  }
}

export default App;
