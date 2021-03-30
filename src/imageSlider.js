import React from 'react';

export default class ImageSlider extends React.Component {
    state = {
        images: [
            "https://tse1.mm.bing.net/th?id=OIP.5Ossx0jNR3OLLJTKRd8KqAHaHa&pid=ImgDet&rs=1",
            "https://fossilrim.org/wp-content/uploads/2016/12/Our-Animals-pic-BFC-1.jpg",
            "https://th.bing.com/th/id/R8a1c6c99beed91dfd0c4fc99e1fa273d?rik=XOTberFSxkcO4w&riu=http%3a%2f%2fwww.worldatlas.com%2fr%2fw1200-h630-c1200x630%2fupload%2f57%2f63%2fa2%2fblack-footed-cat.jpg&ehk=F%2fOR%2fwZe%2fHyyB2TFTo5wdqXFBFfGbbixiXSHKgM0T1s%3d&risl=&pid=ImgRaw",
            "https://howsouthafrica.com/wp-content/uploads/2017/09/Black-footed-Cat.jpg"
        ],

        index : 0
    }

    handleNext = () => {
      if (this.state.index === this.state.images.length-1) {
        this.setState({
          index : 0
        })
      } else {
        this.setState({
          index : this.state.index + 1
        })
      }
    }

    render() {
        return (
            <div>
                <img
                  style={{
                    width:400,
                    height:350,
                  }}
                  src={this.state.images[this.state.index]} />
                  <button onClick={this.handleNext}>next</button>
            </div>
        )
    }
}