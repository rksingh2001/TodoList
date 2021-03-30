import React from 'react';

export default class FetchRandomUser extends React.Component {

  state = {
    loading : true,
    people : [],
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({people : data.results, loading: false});
    console.log(data.results[0]);
  }

  render() {
    return ( 
      <div>
        {this.state.loading || !this.state.people ? (
          <div>loading...</div>
        ):(
          <div>
            {this.state.people.map((person, i)=> (
              <div key={person.name.first + person.name.last}>
                <div><img src={person.picture.large} /></div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>{person.location.city}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}